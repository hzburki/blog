---
title: NestJS - Getting Started with SequilizeJS
published: true
slug: nestjs-sequelize
date: 2019-09-07
excerpt: A quick tutorial on how to integrate relational databases using SequelizeJS with NestJS.
tags: ["NestJS", "SequelizeJS", "NodeJS"]
featureImage: nestjs-sequelize.png
---

<!-- Imports -->

import { ImageWrapper } from "../../components"

# Preface

> Coming from _Laravel_, which has a myriad of built-in features I started to resent shifting to NodeJS. Setting up error handling, logging, dependency injection, etc. was not what I had in mind. Thankfully I found NestJS, with its out-of-the-box architecture and great documentation I started feeling at home again.

SequelizeJS is an ORM that offers connectivity to relational databases like MySQL, PostgreSQL, and MSSQL. For this article, I’m going to use MySQL hosted on [RemoteMySQL](https://remotemysql.com/), but you can use any relational database you like.

# Getting Started

Assuming you have a nest project ready to go. We’ll start by installing the following dependencies.

```
npm install --save sequelize sequelize-typescript mysql2
npm install --save-dev @types/sequelize
```

First, we’ll pass the connection details to SequelizeJS. We can do this by creating a database module and provider.

```
nest generate module database
nest generate provider database/database.providers
```

This is where we will add our entity models to SequelizeJS. I’m adding models right now (even though they are created yet), but you can do this later.

```ts
import { Module } from "@nestjs/common"
import { databaseProviders } from "./database.providers"

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
```

I have imported and added the _user_ model to the _addModels_ function. Now export your database provider so it can be consumed with any module that needs to access the database through SequelizeJS.

```ts
import { User } from "./user.entity"
import { USER_REPOSITORY } from "../utils/constants"

export const userProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
]
```

# **User Entity Model**

```ts
import { Injectable, Inject } from "@nestjs/common"
import { USER_REPOSITORY } from "../utils/constants"
import { User } from "./user.entity"
import { CreateUserDto } from "./dto/index"

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User
  ) {}

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.findAll<User>()
  }

  async createUser(createUser: CreateUserDto): Promise<User> {
    return await this.userRepository.create<User>(createUser)
  }
}
```

I’m not going to explain how the code above populates the database table and its attributes. If you’re interested in learning more about SequelizeJS, you can look [here](http://docs.sequelizejs.com/).

Next, we’ll create _user.provider.ts_ which will be used to export the User model so it can be used in different _services_.

```ts
import { User } from "./user.entity"
import { USER_REPOSITORY } from "../utils/constants"

export const userProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
]
```

The _USER_REPOSITORY_ is stored in a const variable, in a separate file, so it can be used anywhere without being subject to human error.

At this point, we’re done with our database and SequelizeJS configuration. From now on it’s just a matter of importing database and its models and using them 😀.

# Onwards with the Code

Let’s move on and create our user *module, controller and service *with the following command.

```
nest generate module user
nest generate controller user
nest generate service user
```

These are the files responsible for entertaining recurring database requests. But first we’ll create a Data Transfer Object (DTO), this is especially useful for validating _body_ of the incoming HTTP request or building API documentation with swagger, etc.

```ts
export class CreateUserDto {
  readonly name: string
  readonly age: number
  readonly email: string
}
```

## User Module

```ts
import { Module } from "@nestjs/common"
import { UserService } from "./user.service"
import { UserController } from "./user.controller"
import { DatabaseModule } from "../database/database.module"
import { userProviders } from "./user.providers"

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
})
export class UserModule {}
```

The above code is consolidating all the User code (controller, service, model) into one place, the _user module_ so it can be exported to the _app module_.

Note that the user _controller_ and _service_ have been generated but are empty right at this step. You can opt to populate this file later on.

## User Service

```ts
import { Injectable, Inject } from "@nestjs/common"
import { USER_REPOSITORY } from "../utils/constants"
import { User } from "./user.entity"
import { CreateUserDto } from "./dto/index"

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User
  ) {}

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.findAll<User>()
  }

  async createUser(createUser: CreateUserDto): Promise<User> {
    return await this.userRepository.create<User>(createUser)
  }
}
```

Unlike _user service_ which uses the _“Injectable”_ decorator, the _user provider_ we created to use the _User Model_ is not a part of NestJS, therefore has to be injected manually.

We do this inside the service’s _constructor_ method using the _“Inject”_ decorator.

## User Controller

```ts
import { Controller, Get, Post, Body } from "@nestjs/common"
import { UserService } from "./user.service"
import { User } from "./user.entity"

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public async getUsers(): Promise<User[]> {
    return this.userService.getAllUsers()
  }

  @Post()
  public async createUser(@Body() body): Promise<User> {
    return this.userService.createUser(body)
  }
}
```

The last step is to inject the _user service_ in our _user controller_. The controller exposes our code base to externally accessible API endpoints.

## Folder Structure

<ImageWrapper caption="Nest-Sequelize Folder Structure">

![Nest-Sequelize Folder Structure](https://cdn-images-1.medium.com/max/2000/1*vaJB14wJUGp4QGyoTDhc2A.png)

</ImageWrapper>

If you’re curious, this is how my folder structure looks like.

The database connection details are in the _database_ folder, easy to maintain and reuse anywhere in the app.

The bulk of the files are in the _user_ folder. You can ignore the _.spec_ files as they are used to host tests that are out of the scope of this article.

The _dto_ folder holds “data transfer objects” for each request. The _index_ file is used to export all **_dto-_**s.

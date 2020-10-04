---
title: Using multiple databases - NodeJS and SequelizeJS
published: false
type: blog
slug: multiple-databases-nodejs
date: 2020-10-04
excerpt: A guide for creating production ready APIs with serverless framework on any cloud provider, with any language
tags: ["NodeJS", "SequelizeJS", "Rest API", "Database"]
# featureImage: serverless.jpeg
---

Recently my team was tasked to create a job board for my startup [Numu](https://numuworld.com). We needed to replace the current system for collecting candidate applications which was costing us a recurrent monthly fee.

Since we were already working in NodeJS with SequelizeJS we decided to whip up a simple job board application, but we didn't want to pollute our product code base with something required but tagential to our service.

# What we accomplished

- [x] Connect to mulitple databases
- [x] Use models for both databases in the same code base
- [x] Setup and run migrations for both databases
- [x] Setup and run seeders for both databases
- [x] Have provision to add more databases in the future

In this blog I'll walk you through the steps we took to complete the above checklist. Let's get started!

# Configuration

If you haven't already install and test the `sequelize-cli` by running;

```
npm i -g sequelize-cli
sequelize --version
```

The sequelize-cli is not neccesary but helps alot by adding a lot of boilerplate code and commands needed to connect and run multiple databases and migrations etc.

> **NOTE:** To use the sequelize-cli we use the `init` command.
>
> This will generate a `.sequelizerc` file. It exports an object with paths to where the models, migrations, seeders and the config values for the database are present. It will also create folders at these paths to house the said models, migrations and seeders.

## Creating our own `.sequelize` file

Create two files in the root of your project. These will contain the paths to where the database configuration and models, etc. will be present.

I've named my files `.sequelize-main` & `.sequelize-applications` for our _main_ and _applications_ databases respectively.

```js
/**
 * .sequelize-main
 */
const path = require("path")

module.exports = {
  config: path.resolve("src/config", "main.config.js"),
  "migrations-path": path.resolve("src", "migrations"),
  "seeders-path": path.resolve("src", "seeders"),
  "models-path": path.resolve("src", "models"),
}
```

```js
/**
 * .sequelize-applications
 */
const path = require("path")

module.exports = {
  config: path.resolve("src/config", "applications.config.js"),
  "migrations-path": path.resolve("src", "migrations"),
  "seeders-path": path.resolve("src", "seeders"),
  "models-path": path.resolve("src", "models"),
}
```

> **NOTE:** You will need a separate `sequelize` file for every database you connect.

## Folder Structure

**FOLDER STRUCTURE GOES HERE**

As you can see we have our database config variables placed inside `src/config` folder. Each database has a separate config file but our _models, migrations and seeders_ are all placed in the same folders.

> You can easily keep models etc. separate for different databases.

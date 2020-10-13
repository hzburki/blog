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

In this blog I'll walk you through the steps we took to complete the above checklist. We'll break down the process into two steps, namely;

1. Configuration
2. Code

---

# 1. Configuration

If you haven't already install and test the `sequelize-cli` by running;

```
npm i -g sequelize-cli
sequelize --version
```

The sequelize-cli is not neccesary but helps alot by adding a lot of boilerplate code and commands needed to connect and run multiple databases and migrations etc.

> To use the sequelize-cli we use the `init` command.
>
> This will generate a `.sequelizerc` file. It exports an object with paths to where the models, migrations, seeders and the config values for the database are present. It will also create folders at these paths to house the said models, migrations and seeders.

---

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
  "migrations-path": path.resolve("src", "migrations/main"),
  "seeders-path": path.resolve("src", "seeders/main"),
  "models-path": path.resolve("src", "models/main"),
}
```

```js
/**
 * .sequelize-applications
 */
const path = require("path")

module.exports = {
  config: path.resolve("src/config", "applications.config.js"),
  "migrations-path": path.resolve("src", "migrations/applications"),
  "seeders-path": path.resolve("src", "seeders/applications"),
  "models-path": path.resolve("src", "models/applications"),
}
```

> 🚨 **NOTE:** You will need a separate `sequelize` file for every database you connect.

---

## Creating Resources

We don't want to write the boilerplate code for models and migrations, especially if there is a tool for it. Simply typing the `sequelize help` command will display the options avaiable.

To use the sequelize cli with our custom setup. We'll need to tell it which database to target. We do that by using the `--options-path` command and passing in config file we want to use.

### Initializing the project

The first step is to run the `sequelize init` command with the `--options-path` tag to create the folders which will house the migrations, seeders and models. Simply run;

```
sequelize init --options-path=.sequelize-main
sequelize init --options-path=.sequelize-applications
```

### Folder Structure

**FOLDER STRUCTURE GOES HERE**

As you can see we have our database config variables placed inside `src/config` folder. Each database has a separate config file where the environment varaibles are placed. Similarly we are going to keep the models, seeders, and migrations for database separate too. Just so we don't go insane 😅!

**Creating a migration in the main database**

```
sequelize migration:generate --options-path=.sequelize-applications --name=my_migration_name
```

To make our lives easier we added all these commands inside the `scripts` tag of our `package.json` file.

```js
"scripts": {
  "jobs:migrate": "sequelize --options-path ./.sequelize-applications db:migrate",
  "main:migrate": "sequelize --options-path ./.sequelize-main db:migrate",
  "jobs:undo-migrate": "sequelize --options-path ./.sequelize-applications db:migrate:undo",
  "main:undo-migrate": "sequelize --options-path ./.sequelize-main db:migrate:undo",
  "jobs:seed": "sequelize --options-path ./.sequelize-applications db:seed:all",
  "main:seed": "sequelize --options-path ./.sequelize-main db:seed:all",
  "jobs:migration": "sequelize migration:generate --options-path=.sequelize-applications",
  "main:migration": "sequelize migration:generate --options-path=.sequelize-main",
  "jobs:seeder": "sequelize seeder:generate --options-path=.sequelize-applications",
  "main:seeder": "sequelize seeder:generate --options-path=.sequelize-main"
},
```

To run the same command we did above, from the pacakge.json file. We use;

```
npm run main:migration -- --name=my_migration_name
```

> 🚨 **NOTE:** We are using the `--` tag. This allows us to pass in paramters to the `package.json` command. So we can specify the name of the migration.

---

## 2. Code

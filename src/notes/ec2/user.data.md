---
title: EC2 User Data
published: false
type: note
slug: ec2-user-data
date: 2020-12-13
tags: ["ec2", "user-data"]
---

# EC2 User Data **(with Use Case)**

You need to create some operations the first time you create an EC2 instance. The very first one is running `sudo yum update` to update all existing dependencies. Now considering you want to run a website, you'll need to install **apache** for serving your html. You'll also need to start it and make sure that it restarts whenever the server restarts.

Now of course you can ssh into the instance and run the commands manually or better yet pass the commands as a **bash script** to EC2 User Data to run them _only the first time_ the instance is bootstraped. The commands will not run again after that!

> 🚨 **Note** You can pass scripts to the **User Data** feature when creating a new instance. The option is available in the **Configure Instance** step under **Advanced Details** section.

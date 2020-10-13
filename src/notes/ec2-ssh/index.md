---
title: SSH into your EC2 Instance
published: false
type: note
slug: ec2-ssh
date: 2020-10-05
tags: ["ec2", "ssh"]
---

# SSH into your EC2 Instance

## What is SSH

SSH allows you to control remote machine or server. You can install software on them or add and remove files, etc.

You need two things to SSH into a remote machine.

1. IP address of a machine connected to the internet. You can get the IP address from the EC2 dashboard.

2. Port 22 open. Open means it allows incoming requests to the machine.

---

## SSH using Mac

1. Take you `.pem` key (file) and place it somewhere safe. For me I place it in my `.ssh` directory but you can place it on your `Desktop` directory too.

2. Next we need to make sure that the keep has the proper permissions. By default it has **0644** permission which means it is public and can be leaked.

   > 🚨 **This is an important exam question**

   Run the following command in the terminal and run the following command.

```
chmod 0400 path/to/your/key
```

3. Open up the terminal and type

```
ssh -i path/to/your/key ec2-user@machine-ip-address
```

- **ec2-user** is the username for the linux user in our Amazon linux 2 EC2 instance.

- **-i** specifies which key to use.

After this you should see **EC2 Amazon Linux 2 AMI** being displayed in your terminal.

> 🚨 **Note:** You can type _exit_ or press _control + D_ to logout of the instance anytime.

---

## SSH using Windows

---

## EC2 Instance Connect

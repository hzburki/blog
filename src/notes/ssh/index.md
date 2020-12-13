---
title: SSH into your EC2 Instance
published: false
type: note
slug: ec2-ssh
date: 2020-10-07
tags: ["ec2", "ssh"]
---

# SSH into your EC2 Instance

## What is SSH

SSH allows you to control remote machine or server. You can install software on them or add and remove files, etc.

You need two things to SSH into a remote machine.

1. IP address of a machine connected to the internet. You can get the IP address from the EC2 dashboard.

2. Port 22 open. Open means it allows incoming requests to the machine.

---

## **SSH using Mac**

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

- **-i** stands for _identity file_. It specifies which key to use.

After this you should see **EC2 Amazon Linux 2 AMI** being displayed in your terminal.

> 🚨 **Note:** You can type _exit_ or press _control + D_ to logout of the instance anytime.

---

## **SSH using Windows**

To _ssh_ into an EC2 instance from a Windows machine we are going to use a free tool called _Putty_. You can download it [here](https://www.putty.org/).

Go ahead and download and install it. After its installed, you should be able to see _Putty_ folder in the start menu, from inside it open _putty gen_.

Now using putty gen we are going to use the _key_ we created on the AWS dashboard and convert it into a format that putty likes, called **ppk**.

To add the private key go to _File_ > _Load Key_ > navigate to the folder where you've placed the key. Select the _All Files_ option to make the key visible and upload it. You should see prompt telling you that the "foreign key" has been imported.

Now, you need to save the private key with the **ppk** extension. You can optionally choose to enter a password for the private key or leave it empty. Now go ahead and save the key on your machine.

Now go to the "Start Menu" again and open _puTTy_. Here you'll need to enter the EC2 instance's username and IP address. The username is **ec2-user**. You can find the IP address from the AWS dashboard, it's labled **IPv4 Public IP**. The final hostname will look something like _ec2-user@xxx.xxx.xxx.xxx_. You can save these settings to use again without having to enter all the values everytime you want to SSH into the instance.

We are almost ready. The only thing left to do is attach the **.ppk** file we generated earlier. In order to do that choose the saved profile and press on **Load**. Then, look at the side menu on the left and open **Connection** > **SSH** > **Auth**. Here you can press _browse_ and simply add the .ppk file. Don't click **Save** just yet! Go back the **Session** menu at the top in the side menu and click **Save**.

Now you are ready and done. Just press **Open** and you should SSH into the EC2 instance.

## **Window 10**

For Window 10 Microsoft finally added SSH support. To check if you have SSH avaiable open the powershell, type `ssh` and press enter. If the terminal does not say `command ssh not found` then you are good to go. Just SSH into the EC2 instance just like on Mac or Linux (see Mac/Linux sections above).

### **Permission Issues ??**

This is a pretty common problem so don't worry :P what's happening is that you're private key is not so private. Other users on the machine may have access to it or the file permission may allow to update it, etc.

to resolve this issue, go the folder where the key is placed and right click and open _properties_. Go the the _Security_ tab and go to _Advanced_.

There are a couple of things you need to do.

1. Make sure that you are the owner of the private key. The name of the owner should be on the top. Press on change, enter your name in the text area, press on _Check Name_ it will give you the full path to your user and press _Ok_. Step 1 complete ✅.

2. The second step is to remove all other owners of the file. You won't be able to remove then right off the bat. Press _Disable Inheritance_ and choose _Convert inherited permission to explicit permissions_. Now go ahead select and remove all other users one by one. Step 2 complete ✅. Now press _Apply_.

Before before closing the properties pop up make sure you have full control of the file. If you don't just press _Edit_ and check all the boxes under _Allow_ heading. That should be it, you can now use the above command again and you'll see EC2 instance screen in the terminal.

---

## **EC2 Instance Connect**

This is a new feature from the AWS. It is only available for **Amazon Linux 2** AMIs. EC2 Instance Connect is a browser based SSH connection which renders puTTy, pem files, obselete.

To use EC2 Instance Connect just go to the AWS console > EC2 Dashboard > Select your instance > Press _Connect_. You'll see 3 radio buttons, choose the **EC2 Instance Connect** option. Enter your instance username, which is **ec2-user** and press Connect and that's it.

You don't have to worry about any keys. AWS downloads a temporary key and handles all the steps mentioned above for you.

--

## **Beginner Mistakes**

1. **Connection Timeout**

   This is probably a Security Group issue. Ensure that your Security Group has port 22 open for inbound traffic from anywhere and is correctly assigned to your EC2 instance.

   > 🚨 **Note:** Most of the times, timeouts (not just for SSH) are related either to Security Groups or a Firewall.

2. **Permission denied**

   This can usually mean one of 2 things;

   1. You are using the wrong security key or not using a security key. Please make sure that your EC2 instance configuration has the correct key assigned to it.

   2. Wrong user! Make sure you have started an EC2 instance, and make sure you're using the user **ec2-user**. The username cannot be different!

      This is something you specify when doing ec2-user@<public-ip> (for example: ec2-user@35.180.242.162) in your SSH command or Putty configuration.

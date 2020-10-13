---
title: Create your first EC2 Instance
published: false
type: note
slug: ec2-ssh
date: 2020-10-05
tags: ["ec2"]
---

# Create your first EC2 Instance

- Open AWS Console and search _EC2_ in the search bar and select it.

- Inside the EC2 dashboard look for the button called **New Instance** under the **Launch Instance** heading and press it.

- The next step prompts you to choose an AMI. AMI stands for **Amazon Machine Image**. This is the operating system (OS) that will be installed on the server we are about to create.

  For this walkthrough we are going to use **Amazon Linux 2 AMI**. This is Amazon's own flavor of linux because it comes with a lot Amazon related stuff.

- After you've selected an AMI, the walktrough will ask you to select the type of the machine. Each type of machine or "intances" is a different specification of the hardware attached to the machine, e.g. number of CPUs, RAM, storage type, etc.

  > 🚨 **NOTE:** You can read about different types of instances available [here](https://aws.amazon.com/ec2/instance-types/).

  We are going to choose _t2.micro_ because it is the only type in the AWS _free tier_.

- This next steps has a lot parameters to configure our instance. I am going to leave most of them as they are and just explain the most important ones.

  1. **Number of Instance:** This is pretty self explanatory. We are going to leave this at 1.

  2. **Network:** This lets you put your instance in a **VPC**. We talk about VPCs in detail [here]().

  3. **Subnet:** Subnets are AZs (availibility zones) in each regions. These are geographically isolated for safety in case of natural disasters. You can choose a particular AZ or select _no preference_ in which case AWS will assign an AZ itself.

  4. **IAM Role:** IAM roles control the permissions the instance has to interact with other AWS resources. We are going to leave it as _None_.

  5. **Shutdown Behavior:** This determines how the instance will react in case it is shotdown.

- Every instance has some storage associated with it where it installs the OS.

  You can see the first column showing **Volume Type: Root**. This is where the OS will be installed. This is an EBS storage volume which persists indenpent of the instance itself. This allows us to stop and restart our instances later on. The root volume is only deleted when we terminate the instance.

  AWS has set some default properties for this storage. We will keep on using these.

- The next step deals with tags. This might not seem important but it proves to be really helpful adding tags to your AWS resources. You can add as much information as you want. However, you must add a tag with the key **Name** so you can identify the instance in the dashboard later on.

- The last step deals with Security Groups (SGs). This is essentially a firewall around your instance. It determines how and who can access the instance.

  Create a new security group and give it a name and description if you want to. We will also add rules which define who and how the instance will be accessed.

  > 🚨 **Note:** It is always recommended to give AWS resource meaningful names and descriptions. This help to figure out the purpose of the resources when you come back to it later on.

  By default we will only have _PORT 22_ open so we can ssh into the instance. You can add specific IP addresses e.g. your machines IP address if you don't want to access the instance from anywhere else.

- Now, we review all the details we have specified to create the instance before launching the instance.

  > 🚨 **Note:** You will see a huge warning saying that are _security group is open to the world_. This is because we set the IP address to _0.0.0.0/0_ which means anyone can access it.

- Now click on Launch and the very (sorry :P) thing we have to do is attach a **key pair** to the instance. You can use an old one or create a new one. Basically a key pair is what allows us to access the instance.

  Select _create a new key pair_, enter a name and download it. Make sure not to lose the downloaded file.

- After pressing **Launch Instance** you will see a new instance on the EC2 dashboard. It will be in _pending_ state. Once the setup is done the state will automatically change to _running_ and you will start getting billed for it. However, since we used t2 micro which is in the free tier, we are safe 😉.

You can start, stop, reboot and terminate your instances by right clicking and going into the **Instace State** options.

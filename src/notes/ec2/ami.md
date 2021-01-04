---
title: EC2 AMIs
published: false
type: note
slug: ec2-ami
date: 2021-01-04
tags: ["ec2", "ami", "amis"]
---

EC2 instances come with an OS installed, which can be customized at runtime using EC2 User Data. AMIs take this customization one step further by allowing us to create custom images for different OS.  

## Advantages
- Pre-installed packages according to our needs.

- Faster boot times because we won't need EC2 User Data.

- Pre-configure machine with security updates.

- Share same configurations accross multiple instances.

- Optimize the machine for specific software or use cases.

- Installing apps and other softwares for faster deploys when auto-scaling.

- Use someone else's AMI
    - Free or paid
    - AMIs can be rented.
    - AMIs are published on the Amazon Marketplace.
    - **WARNING** Do not use AMIs that you don't trust.

## AMI Storage
- AMIs are stored in AWS S3 although they are not visible in the S3 console.

- By default, AMIs are private and locked per account and region.

- You can make them public to share with other accounts or sell them on the Amazon Marketplace. 

## AMI Pricing
- They are pretty cheap to store. Basically only cost the price to store them on S3.

- Unused AMIs that are stored on S3 will be charged for, so its best to delete the ones that are not being used.

> **Note:** AMIs are region specific!

## Use Case

If you are an expert on setting up a particular software, for instance installing Postgres with PostGIS and PgAdmin on windows machine. You can create an AMI for that. 

---

## Hands On

We are not going to go through a step by step tutorial. Rather I'll just list the basic steps we need to complete to create an AMI.

1. The first step is to create an instance from with a basic AMI for your OS of choice. 

2. After its created you will need to SSH into it so you can install whatever software or setup configurations as per your requirements. 

3. Once that's done. From the console right click on the newly customized instance and choose the _Create Image_ option. 

4. Add the name and description for the image and choose the volume (of the customized instance in step 3) which needs to be backed up as an AMI.

5. AMIs can be accessed from the side menu. 

6. Operations on AMIs
    1. We can right click to copy the AMI to other regions.
    
    2. You can control its permissions and make it public or private.
    
    3. You can launch a new instance by right clicking and clicking **Launch**. It gives you the option to add **Tags** and **security groups** before launching the instance.

# Cross Account AMI Copy

- While sharing the AMI from the EC2 console. You can either set it as **public** in which case everyone will be able to use it. Or you can set it to **private** and allow only selected AWS accounts to use it. 
    
    You specify other AWS accounts by adding their AWS account numbers. 

- The **create volume** checkbox allows the added AWS accounts to make a copy of the AMI. However, unselecting the checkbox does **NOT** mean they cannot make a copy of the AMI in other ways (shared later).

    The above is also true for Market place AMIs. If the create volume permissions are not enabled than users cannot copy the AMI directly. 

> **Note:** Even if the _"create volume"_ option is unchecked. A user can still copy the AMI by launching an instance with the said AMI and then creating a new AMI from the new instance affectively copying all the configurations of the original AMI.

## Summary
- Sharing an AMI with another AWS account does not transfer ownership of the AMI.

- However, if you make a copy of a shared AMI (of which you are not the owner) into a different region. Then, you become the owner of the new AMI. 

- In order to copy an AMI, you must have the "create volume" permissions enabled which grants the read permission on the associated **EBS snapshot (Amazon EBS backed AMI)** or the **S3 bucket (store backed AMI)**.

- You can't copy an **encrypted AMI** even if it was shared with you. However, if the **snapshot** and **encryption** key were shared with you, then you can copy the AMI by encrypting the snapshot with your own key and registering it as a new AMI, that you own.

- You cannot copy an AMI with an associated **billingProduct** code that was shared with you. This includes all kinds of AMIs. 

    Instead you can launch an instance with the AMI and create a new AMI from that instance. 

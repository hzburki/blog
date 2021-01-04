---
title: EC2 - Elastic Network Interfaces (ENI)
published: false
type: note
slug: ec2-eni
date: 2021-01-04
tags: ["ec2", "elastic-network-interfaces", "eni", "network-interfaces", "elastic", "elastic-compute-cloud"]
---

# Elastic Network Interfaces (ENI)

ENI is a logical component in a VPC (Virtual Private Cloud) and they represent a _virtual network card_ so they are whay give EC2 instance access to the network (the Internet). For example, an ENI connected to an instance within an AZ will provide connectivity between the instance and the nerwork via a **private IP**. 

An ENI can have the following attributes;
- Primary private IPV4
- Secondary (multiple) private IPV4
- One Elastic IP (IPV4) per private IPV4
- One Public IPV4
- Multiple Security Groups
- A MAC address
- Other things as well

You can create ENIs independently and attach them to instances on the fly. This becomes useful in case of instance failures, etc. Moving an ENI from one instance to another moves all the related IP addresses, security groups, etc.

> **Note:** ENIs are bound to Availability Zones (AZs)

# Hands On

1. The Elastic Network Interfaces tab is present in the EC2 console side menu, under the **Network Interfaces** tab. 

2. You can assign your on private IP while creating an ENI. 

3. You can attach secruity groups, if required.

4. Right click on an available ENI and click attach. Choose the instance you want to attach the ENI to. 

> Read more about ENIs in [this](https://aws.amazon.com/blogs/aws/new-elastic-network-interfaces-in-the-virtual-private-cloud/) blog.

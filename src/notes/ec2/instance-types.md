---
title: EC2 Instance Types
published: false
type: note
slug: ec2-instance-types
date: 2020-12-23
tags: ["ec2", "instance-types", "burstable-instance", "instance"]
---

EC2 provides a lot of instance types each with its own specific use case. These types are further divided into sub-types based on powerful the machines are. To name a few;

- **R Instance Type:** is for applications that need a lot of memory or RAM for in-memory cache, etc. 
- **C Instance Type:** is for applications that need a compute power or processing. For example databases or apps handling big data.
- **M Instance Type:** is for balanced applications. Apps that need a little bit, but not a lot of everything. This type is generally used for web applications etc.
- **I Instance Type:** is for applications with intesive I/O operations. Use this when you need instance storage or disk operations such as in databases. 
- **G Instance Type:** is for applications which require a GPU. Apps for video rendereing or machine learning would be a good use case for this type.
- **T Instance Type:** these are _burstable_ instances. They have two types;
    - burstable (up to capacity)
    - unlimited bursts

> **Note:** use [ec2 instance info](https://www.ec2instances.info/) website to find out all the different types of instances, their use cases and pricing, etc.

# Burstable Instance
These type of instance provide an extra feature which allow them to provide some extra power in case there of something unexpected, like a spike in user traffic, etc. 

During these short burst, the CPU performance becomes very good and allows the instance to handle heavier tasks than what it was originally created for. 

## Burst Credits

Wheneven your machine bursts it uses bursts credits. If, the credits run out then the machines performance drops too. During normal loads the burst credits are not used and are gradually replenished with time. 

These bursts can also be used as an indication that you need more powerful machines. If you're instances are bursting all the time. Their performance will be low, the credits will never be replenished, in such a case it will be better to provision a different type of instance based on your requirements. 

> **Note:** You can view the credit usage and balance from the **CloudWatch** dashboard. 

---
**ADD CPU CREDITS DIAGRAME HERE**

---

## T2/T3 Unlimited
Since Nov, 2017 AWS has released "unlimited credit bursts", whereby you can burst your instances for however long you like without having your instance drop their performance, but you have to pay for it. So it is still not a good idea to burst your instances for long, unless you really nned to.
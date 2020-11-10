---
title: Security Groups
published: false
type: note
slug: security-groups
date: 2020-11-06
tags: ["security-groups"]
---

## Intro

Security groups controll how traffic (information/data) is allowed into your EC2 Machinces. For instance in order for a you to SSH into an EC2 instance, you have to open _Port 22_. This "opening" action is handled by security groups.

<!-- Add Image Here -->

There are two type of rules for security groups.

1. Inbound
2. Outbound

As the names suggest, Inbound rules control how traffic flow **into** our instance. Similarly, Outbound rules determines how traffic flow **out of** our instance.

> 🚨 **Note:** By default, there are no Inbound rules on a new instance i.e. all inbound traffic is blocked. Whereas _all traffic_ is allowed on _all ports_ on the outbound rules.

## Security Groups (SGs) Features

1. SGs are basically "firewalls" around EC2 instances.
2. They regulate;
   1. Access to Ports
   2. Authorize IP ranges - IPv4 and IPv6
   3. They control flow of data inbound (to) and outbound (from) the instance/machine
3. SGs can be attached to multiple instances and one instance can have multiple SGs.
4. SGs are dependant on a combination of AWS regions and VPC.
5. SGs are not a part of the EC2 instances they are rather attached to instances.

> ⚠ **Note::** If your application and/or instance throw a _time out_ error. It is most likely a Security Group issue.

## Reference SGs from other SGs

Security Groups can authorise other SGs to access them. This works by attaching SGs to EC2 instances which allow access to other SGs rather than certain IP addresses.

For example if SG(A) has access to send data to SG(B). Then all instances attached to SG(B) can send data to the instance attached to SG(A). This way you don't have to deal with different IP addresses or address ranges.

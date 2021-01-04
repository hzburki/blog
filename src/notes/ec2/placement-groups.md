---
title: EC2 Placement Groups
published: false
type: note
slug: ec2-placement-groups
date: 2021-01-04
tags: ["ec2", "placement-groups"]
---

# Placement Groups

Placement groups let you control how your EC2 instances are placed over the AWS global infrastructure. They don't give access to the underlying hardware of the instances.

There are three choices or strategies while creating placement groups;
1. **Cluster**
    
    Clusters provide low-latency by placing all the instances in a single Availability Zone (AZ). This makes them vulnerable due to lack of redundancy. 

    All instances are placed in the same rack. This means extremely low latency and high performance network, e.g. 10 GBps bandwidth among instances. However, if the rack fails (hardware issue) all instances are affected. 
    
    Cluster placement groups are good for applications of jobs that need high performance (speed, etc.) and idealy are resilient.

2. **Spread**
    
    Spreads provides more security by spreading your instances accross multiple AZs. However this comes at the cost of high latency and a limit of **7** instances per group per AZ. You would use this for critical applications. 

    Spread allows to minimize the risk asscociated with hardware failure. This is good for applications which require high availibility. 

3. **Partition** (new kind)
    
    Partition is a mixture of the above. It spreads your instances accross multiple partitions but in the **same AZ**. This way you can scale to 100s of EC2 instances per group, with the safety that each partition will be isolated from failure in another partition.  

    Each partition will use a different rack, such that a partition failure will not affect other partitions. There is a limit of **7** partitions per AZ and **100s** instances per partition.

    Instances have access to partition information as metadata. Partitions can be used for distributed applications which use, Hadoop, Kafka, Cassandra, etc.

### What is a Rack?

A Rack server, is a computer dedicated to use as a server and designed to be installed in a framework called a rack. Each rack has its own network and power source. [Reference link](https://stackoverflow.com/questions/56447086/aws-ec2-placement-groups-partition-vs-spread).

# Create a Placement Group

1. Placement groups are present in the side menu of the EC2 console. 
2. After a placement group is created, they can be used by placing instances inside of them.
3. While creating an instance, choose "add existing placement group" in the **3rd (Configure Instance)** step.

    Choosing the partition type will provide the option to choose which partition to place your instance, or let AWS handle the distribution.

> **Note:** Cluster is only available for big instance types, like M5, etc.  
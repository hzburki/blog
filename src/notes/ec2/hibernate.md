---
title: EC2 Hibrenate
published: false
type: note
slug: ec2-hibernate
date: 2021-01-04
tags: ["ec2", "hibernate", "elastic", "elastic-compute-cloud"]
---

# We know that;

- when we **stop** an instance the data on the EBS disk is kept intact.

- when we **terminate** an instance the root EBS volume is removed and all the data is lost.

- when we **start** an instance the OS boots and, if present, EC2 User Data script runs. After that your applications start, cache gets warmed up, etc. This all take a bit of time. 

# EC2 Hibernate

When an instance is **hibernated** all the in-memory (RAM) start is preserved. This results in a faster boot time because the applications and/or cache, etc. is already present and warmed in the instance.

On hibernating an EC2 instance, the whole state of the RAM is stored in the root EBS volume. On restarting up the instance, the RAM is simply copied from the EBS volume to the RAM of the instance. One thing to note is that the root EBS volume must be encrypted. 

## Use Cases
- Long running processes
- Saving the RAM state
- Services that take a lot of time to initialize

## Notes
- Limited Instance type support e.g. C*, R* and M* instance types.
- Instance RAM size must be less than 150 GB
- Not supported for bare metal instances
- Supports only Amazon Linux 2, Linux AMI, Ubuntu and Windows
- The root volume must be 
    - EBS volume
    - Encrypted
    - Not an instance store
    - Large enough to store the RAM size
- Available for On Demand and Reserved Instances
- An instance cannot be hibernated for more than **60** days

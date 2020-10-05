---
title: Regions and Availability Zones (AZ)s
published: true
type: note
slug: regions-and-az
date: 2020-10-01
tags: ["availability-zones", "regions"]
---

# Regions

A region is a cluster of data centers. AWS resource/application availability is based on regions. Some resources/applications may be in one region but not another. Data is not replicated across regions!

# Availability Zones (AZ)

1. Each region has many availability zones
   1. Usually — 3
   2. Minimum — 2
   3. Maximum — 6

Each AZ is a separate data center where servers (hardware) is housed and data is stored. Each AZ is independent from one another in order to maintain redundancy in case of disasters.

Even though AZs are isolated from each others geographically they are still connected to each other with;

- High Bandwidth
- Ultra low latency networks

There are two kinds of services

- **Regional Service:** These services are linked to each region. For example EC2. A server created on EC2 will be located in its own region. It will not be present if you change the region in the console or go to the data center itself.

- **Global Service:** These services are independent of regions. For example IAM (Identity Access Management). A user created on IAM will be available on all AWS regions.

# Global Infrastructure

Link: https://aws.amazon.com/about-aws/global-infrastructure/

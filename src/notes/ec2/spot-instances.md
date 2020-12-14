---
title: EC2 Spot Instances
published: false
type: note
slug: ec2-spot-instances
date: 2020-12-14
tags: ["ec2", "spot", "spot-instance", "spot-fleet"]
---

# Deep Dive

Bascially you define the **max spot price**, which is the maximum amout you are willing to pay for an instance. AWS defines an hourly spot price for the instances. This spot price varies hourly based on **offer and capacity**.

You will retain the instance as long as your maximum spot price is below the AWS defined spot price. If the max spot price goes over the AWS spot price you will either have two choices;

1. Stop the instance
2. Terminate the instance

You will get a **2 min** grace period to perform whatever action you want. You can either **stop** the instance to retain the state of the machine, so you can continue your tasks from where thay were stopped, later on. Or you can **terminate** the instance if you don't care about the state of your operations.

There is another strategy called **Spot Block**. This way you can block a spot instance for a specified amout of time (between 1 to 6 hours). This way your instance will not be stopped or terminated for that amount of time.

> **Note:** According to the AWS documentation, in very rare situations your Spot Block instances might be reclaimed.

## Good For;

1. Batch Jobs
2. Data Analysis
3. Other workloads reilient to failure

## Not Good For;

1. Critical Jobs
2. Databases

## Pricing

- The spot pricing varies based on the AZ & region

## How to Create and Delete Spot Instances!

### Spot Request

Spot request is used to provision spot instances. It takes in the following parameters;

1. Maximum Price
2. Desired Number of Instances
3. Launch Specifications ["AMI", "etc."]
4. Request Type ["one-time", "persistent"]
5. Valid From
6. Valid Until [Can be Inifinte]

**Request Type:**

1.  One Time:

    As soon as the Spot Request is finished, your instances will be launched and the spot request will be removed.

2.  Persistent:

    Even after the Spot Request has finished, it is not removed. Infact, if your lose your instances the Spot Request will recreate them as soon as you fullfil the "Spot Price" criteria.

### Cancel a Spot Request

To cancel a Spot Request it needs to be in the **Open, Active, or Disabled** state. It cannot have the **Closed, Failed, or Cancelled** state.

When you cancel a Spot Request it does not terminate the existing instances it has already created. You need to terminate the instances separately.

The correct order to cancel a Spot Instances is as follows;

1. **Step 1:** cancel the Spot Request. That way it will not relaunch any new instances when you terminate them.
2. **Step 2:** terminate the instances.

<!-- Add Image Here -->

## Spot Fleets

This is a mixture of Spot and On Demand instances. Spot Fleets allows you to use different types of instances, from different pools. They also allow you to launch the lowest price instances to save even more money than you would with Spot Instances.

> Spot Fleets = Set of Spot Instances + (Optional) On Demand Instances.

Spot Fleet will try to meet the target capacity within the budget you have allocated. A fleet can have different types of instances, OS, AMIs, AZs, etc. Spot Fleet will stop launching new instances when;

> **Define Pools:** ENTER DEFINITION HERE

1. Budget runs out.
2. Maximum capacity is reached.

## Strategy to Allocate Spot Fleets

1. Lowest Price:

   Your instances will be launched from the pool with the lowest price. This is good for **Cost optimization** and **shorter workloads**.

2. Deversified:

   Your instances will be distributed among different pools. That way if you lose one pool you will have another pool to fallback on. This is good for **availability and long workloads**.

3. Capacity Optimized:

   To launch instances to meet the optimal capacity based on the number of instances from the available pools.

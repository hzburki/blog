---
title: Security Groups
published: false
type: note
slug: security-groups
date: 2020-11-06
tags: ["ipv4", "ipv6", "elastic-ip", "ip"]
---

# Public IPs, Private IPs, Elastic IPs

## IPv4

- Public IPs are also called IPv4.
- This is the most common format used online.
- Allows for **3.7 Billion** addresses in the public space. This is running out.
- Format: [0 - 255] . [0 - 255] . [0 - 255] . [0 - 255]

## IPv6

---

- IPv6 is less common.
- Majorly used for IoT devices.

## Public IP

- Can be identified on the internet (www)
- They are unique accross the internet. Two machines cannot have the same IP address
- Can be easily geo-located

## Private IP

- Can only be identified on a private network. Not accessible on the internet.
- They are unique within the **private network**.
- Two different **private networks** can have the same IP address.
- Connectivity to private IP addresses is possible through **internet gateways** (proxies).
- Only a specific range of IP addresses can be used as private IPs.

## Elastic IPs

- When you start and stop an EC2 instance the public IP will change.
- Elastic IPs are fixed Public IP addresses, which you own untill you delete it.
- You can attach it to only 1 instance at a time.
- You can only have 5 Elastic IPs. (You have to ask AWS to increase the number)
- Elastic IPs are charged only when they are not being used (associated with an instance).
- Elastic IPs can be connected to both Public and Private IP addresses.
- They reflect poor architecture designs and should be avoided.
  - Instead use a random Public IP address attached with a DNS name.
  - Use a Load Balancer instead of Public IPs (Best practice)

### Use Case:

- In case of failure of an instance you can quickly re-map it to another working instance.

---

## Notes

- By default a new EC2 Instance will come with a;
  - Private IP for the internal AWS Network
  - Public IP for the internet
- We cannot use a Private IP for SSH because we are not on the AWS internal network. We need to use the Public IP.
- If the machine is stopped and restarted, the Public IP can change.

---

## Console

- Create a new Elastic IP:
  1. Go to Elastic IP (EC2 Console > Side Menu)
  2. Create a new IP
  3. Select it and open the _Actions_ dropdown
  4. **Associate Elastic IP Address** > Select your Instance
- Delete an Elastic IP:
  1. Select the instance it is associated with Elastic IP.
  2. Open the _Actions_ dropdown > Networking > **Dissociate Elastic IP Address**
  3. Go to Elastic IP (EC2 Console > Side Menu)
  4. Select it and open the _Actions_ dropdown
  5. Press **Release Elastic IP Address**

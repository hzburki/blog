---
title: Identity Access Management (IAM)
published: false
type: note
slug: iam
date: 2020-10-05
tags: ["iam", "security"]
---

# Identity And Access Management (IAM)

This service is used to give access to different users to different applications. There are two types of permissions; 1) console 2) programmatic.

Console access allows users to access the AWS dashboard. Each user is given a username and password and access to applications within the dashboard can be controlled.

Programatic access allows users to access the AWS via CLI. Each user is give an “Access and Secret Key” which is configured with the aws-cli installed on the user’s machine. Permissions are set on both console and programmatic access types for different applications, e.g. a user with permissions to only upload files to S3 will not be able to create servers on EC2, if they are not given the EC2 permissions.

1. **Users:** Users are give the access (console or programmatic). These are actual people with access to the AWS account.

2. **Groups:** Users can be grouped together. Usually w.r.t functions or teams, such as, developer, devOps, etc. Each group is then given some permissions. All users in a group will have the same permissions. You can also assign a single user to multiple groups.

3. **Roles:** These are only for Internal AWS resources. For instance AWS Codepipeline needs permissions to store the code after each stage of the pipeline on S3 so it might require “update” permissions for S3.

## Policies

Policies are JSON documents which define what a user, role or group can do. This is how you can define different permissions for AWS resources.

> **NOTE:**

1. IAM has Global View

2. You can setup MFA (Multi Factor Authentication) for IAM users. This is recommended.

3. IAM has “managed policies”. These are predefined rules you can use to assign permissions to users, groups, and roles.

4. Always follow the “least privilege principle” i.e. give each user/application the minimum permissions required to do their job.

## IAM Federation

1. Used for large corporations which have their own repository of users, such as Active Directory, so their users can login using their company accounts.

2. It uses SAML Standard like Microsoft Active Directory.

## Summary:

1. One IAM user per person. Do not share accounts with others.

2. One IAM role per applicaiton.

---
title: Relation Database Service (RDS)
published: false
type: note
slug: rds
date: 2020-10-05
tags: ["rds", "relational-database-service", "read-replicas", "rds-security"]
---

# RDS
RDS stands for Relational Database Service. It is a managed database services which uses SQL as a query language.

## Databases managed by RDS are;
1. Postgres
2. MySQL
3. MariaDB
4. Oracle
5. MS SQL
6. Aurora (AWS proprietary)

## Why to use RDS?
1. AWS provides a lot of services on top basic installation
2. Monitoring Dashboards
3. Setup Multi AZs for disaster recovery
4. Continuous database backups and lets you restore the database to a specific timestamp.
5. Maintenance windows for installing upgrades
6. Scaling capability (horizontal and vertical)
7. Storage is backed by EBS (GP2 or IO1)
8. Provides Storage Autoscaling.Automatically adds more storage to the database in case the storage capacity is reached. 

> **NOTE:** You cannot SSH into Database servers

## Backups
1. Automatically enabled by RDS
2. Automated Backups
    1. Daily full backup (during maintenance window)
    2. Transaction logs are backed up by RDS every 5 minutes.
    3. Can restore to any point in time. (From oldest backup to last 5 minutes)
    4. 7 day retention of automated backups
    5. Snapshots:
        1. Backups which are manually triggered by the user
        2. Snapshots can be retained for as long as needed

# RDS Read Replicas
1. Are used for read scalability. 
2. Create up to 5 read replicas
3. Replicas can be within same AZ, cross AZ or Cross Region
4. Replication is ASYNC. Reads are eventually consistent. (Not instantaneously consistent).
5. Replicas can be converted to a new separate database.
6. To use “Read Replicas” in the Application. We need to update the connection string (Connection Details)
7. Read Replicas are used for Select (Read) operations only. NOT UPDATE, INSERT or DELETE.

## Read Replicas Network Cost
AWS has an additional cost when data is transferred b/w AZs. So if you Read Replica is in a different AZ then, data replication will cost you. However, if the read replica is in the same AZ then there is no additional cost. 

## RDS Multi AZ (Disaster Recovery)
You can create a stand by instance to store your data with redundancy in another AZ. This way if your main database server fails, the standby instance becomes your main database server and no database is lost.

1. The replication is SYNC. That means that the main database and the standby instance will be consistent instantaneously. 
2. All database instances will use the same, single DNS name. 
3. Provides increased availability.
4. Provides failover, in case of, loss of network, instance, storage failure.
5. No manual intervention from User or the App. 
6. This is NOT used for scaling. 

Note: Read replicas can be setup as Multi AZ for Disaster Recovery (DR).  

# RDS Security — Encryption

## At Rest Encryption
1. Encrypting data which is already stored in database. 
2. Possible to encrypt master & read replicas with AWS KMS (Key Management Service) — AES-256 Encryption
3. Encryption has to be defined at launch time
4. If master instance is not encrypted, then read replicas can’t be encrypted either.
5. You can enable Transparent Data Encryption (TDE). This is available for Oracle and SQL Server. 

## In-Flight Encryption
1. Encrypting data while it’s being sent from Client to Database. E.g. SSL certificates.
2. You need to provides SSL options with trust certificate when connection to database.
3. If you want to enforce SSL:
    1. PostgreSQL: you need to set a console parameter group int he AWS RDS Console. Its called rds.force_ssl=1
    2. MySQL: Run a statement to require SSL on usage.

## Notes:
1. Snapshots of un-encrypted RDS databases will be un-encrypted.
2. Snapshots of encrypted RDS databases will be encrypted.
3. You can copy a snapshot into an encrypted database instance.

## Encrypt an Un-Encrypted Database
1. Create a snapshot of the un-encrypted database.
2. Copy the snapshot and enable encryption for the snapshot.
3. Restore the database from the encrypted snapshot.

# RDS Security — Network and IAM

## Network Security
1. RDS databases are usually deployed within private subnets, not public subnets.
2. RDS Security works by leveraging security groups (just as for EC2 instances). SGs control which IPs and other SGs can access the instance.

## Access Management
1. RDS (API and console) access is managed by IAM policies
2. Traditional username and password combo used to login into database
    1. For MySQL and PostgreSQL — we can use IAM based authentication to login into the database

## RDS IAM Authentication
1. Only for MySQL and PostgreSQL
2. Don’t need password. You need authentication token which can be gotten from IAM & RDS API calls.
3. Auth token is short-lived and only has a lifetime of 15 minutes.

### How it works?
Let’s assume we have an EC2 instance and a separate RDS instance. Each instance has its own SG. The EC2 instance has an IAM role attached to it. It will use this IAM role to ask the RDS Service for an “Auth Token”. 

It will then use that token to communicate with the RDS instance. However, you will need to enable SSL encryption to pass the auth token. 

### Benefits
1. Network In/Out has to be encrypted using SSL.
2. IAM is used to centrally manage DB users. This is a better alternative to managing users from within the DB.
3. You can leverage IAM role and EC2 profiles for easy integrations. (??) 
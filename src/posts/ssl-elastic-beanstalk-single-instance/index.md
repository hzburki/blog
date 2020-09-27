---
title: Configure SSL Certificate — AWS Elastic Beanstalk (Single Instance)
published: true
slug: ssl-elastic-beanstalk-single-instance
date: October 5, 2019
excerpt: How to configure SSL Certificate on a single-instance Elastic Beanstalk environment using certbot.
tags: aws, elasticbeanstalk, ssl
featureImage: ssl-config.png
---

<!-- Imports -->

import { ImageWrapper } from "../../styled-components"

SSL secures data transfer between client and server-side. Not only that it also increases your website’s Google ranking, so it's safe to say that SSL certificates are a _MUST_ have.

AWS provides a very convenient solution called “AWS Certificate Manager” (ACM). It provides _free_ public SSL certificates that you can connect to your load balanced Elastic Beanstalk (EB) instances.

That’s great !! but we can lose the load balancer for instances hosting our development environments and side projects … _RIGHT ??_

After all, a single low-cost instance will suffice. We’ll just generate a certificate using ACM use it on our “_single instance_” … _wait what’s that !! we can’t ??_ 😧😧😧

> Apparently, ACM requires a load balancer (or CloudFront distribution). It’s not possible to use the certificate with an instance directly.

Well, that’s mildly annoying 😒 but don’t worry we can still provision a free SSL certificate without enduring unnecessary load balancer expenses, in three easy steps.

# 1) Elastic Beanstalk

The first step is to say goodbye to your load balancer. Convert your instance type to “single instance” from “load balanced.” You can do this from the _Capacity_ tab inside _Configurations_. Just choose single instance in the environment type and that’s it.

<ImageWrapper caption="Elastic Beanstalk Configuration Tab">

![Elastic Beanstalk Configuration Tab](https://cdn-images-1.medium.com/max/2518/1*ZpuT8WRGcq9mWVYY0gNByQ.png)

</ImageWrapper>

# 2) Certbot

The second step is creating and signing the certificate using “certbot”. You can find it [here](https://certbot.eff.org/). I should mention that you’ll need a domain to use the certificate on.

Open up the terminal on your local machine, I’m using mac so some of the commands might be a little different for you.

```
certbot certonly --manual -d domain.com --preferred-challenges dns
```

- **_“certonly”_**: use certbot authenticators

- **_“manual”_**: generate certificates on machines other than web servers.

- **_“d”_**: specify a domain

- **_“preferred-challenges”_**: a method for domain verification

The cli will ask you to allow to log your machine’s IP address. You have to agree to continue.

After that, it’ll ask you to deploy a DNS TXT record with the name _\_acme-challenge.domain.com_. Press “enter” when you want to verify the new record.

On successfully creating the certificate the cli will spit out two files “privkey.pem” & “fullchain.pem”.

```
certbot certificates
```

You can use the above command to list all the certificates along with paths to their files.

# 3) .ebextensions

Okay so we’re nearly there, the third and last step is enabling HTTPS for your “single instance” by allowing traffic on port 443.

Create a folder named **_.ebextensions_**, it is important that the name be exactly the same. Then create a configuration file with the extension **_“.config”_**.

```conf
Resources:
  sslSecurityGroupIngress:
    Type: AWS::EC2::SecurityGroupIngress
    Properties:
      GroupId: {"Fn::GetAtt" : ["AWSEBSecurityGroup", "GroupId"]}
      IpProtocol: tcp
      ToPort: 443
      FromPort: 443
      CidrIp: 0.0.0.0/0

packages:
  yum:
    mod24_ssl : []

files:
  /etc/httpd/conf.d/ssl.conf:
    mode: "000644"
    owner: root
    group: root
    content: |
      LoadModule ssl_module modules/mod_ssl.so
      Listen 443
      <VirtualHost *:443>
        <Proxy *>
          Order deny,allow
          Allow from all
        </Proxy>

        SSLEngine             on
        SSLCertificateFile    "/etc/pki/tls/certs/server.crt"
        SSLCertificateChainFile    "/etc/pki/tls/certs/chain.pem"
        SSLCertificateKeyFile "/etc/pki/tls/certs/server.key"
        SSLCipherSuite        EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH
        SSLProtocol           All -SSLv2 -SSLv3
        SSLHonorCipherOrder   On
        SSLSessionTickets     Off

        Header always set Strict-Transport-Security "max-age=63072000; includeSubdomains; preload"
        Header always set X-Frame-Options DENY
        Header always set X-Content-Type-Options nosniff

        ProxyPass / http://localhost:80/ retry=0
        ProxyPassReverse / http://localhost:80/
        ProxyPreserveHost on
        RequestHeader set X-Forwarded-Proto "https" early

      </VirtualHost>

  /etc/pki/tls/certs/server.crt:
    mode: "000400"
    owner: root
    group: root
    source: 'https://s3-eu-west-1.amazonaws.com/numu.elasticbean/ssl/`{"Ref": "AWSEBEnvironmentName" }`.crt'
    authentication: S3Access

  /etc/pki/tls/certs/server.key:
    mode: "000400"
    owner: root
    group: root
    source: 'https://s3-eu-west-1.amazonaws.com/numu.elasticbean/ssl/`{"Ref": "AWSEBEnvironmentName" }`.key'
    authentication: S3Access

  /etc/pki/tls/certs/chain.pem:
    mode: "000400"
    owner: root
    group: root
    source: 'https://s3-eu-west-1.amazonaws.com/numu.elasticbean/ssl/`{"Ref": "AWSEBEnvironmentName" }`.pem'
    authentication: S3Access
```

- **“packages”** key installs mod24_ssl on the instance.

- **“files”** key is used to create files which hold the certificate, certificate chain and private key that certbot created.

### **Note:**

1.  Copy the contents of _“privkey.pem”_ to server.key file

2.  Copy the contents in _“fullchain.pem”_ to chain.pem file

3.  There will be two keys in _“fullchain.pem”_ You only need to copy the first key to server.crt file

Now all you have to do is deploy your code to Elastic Beanstalk. Make sure that your instance is connected to the same URL in [Route53](https://aws.amazon.com/route53/) that you entered in certbot cli …

> Aaand Voilà!!! **A+** rating for your very own, free of cost SSL Certificate. You can test your SSL certificate at [ssllabs.com](https://www.ssllabs.com/ssltest/).

<ImageWrapper caption="nuff’ said 😎😎😎">

![nuff’ said 😎😎😎](https://cdn-images-1.medium.com/max/4392/1*lU5YNe-S1O7nN-XlYrptNg.png)

</ImageWrapper>

## _Happy Coding :)_

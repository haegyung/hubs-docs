---
id: hubs-cloud-aws-domain-recipes
title: Domain Recipes
sidebar_label: Domain Recipes
---
이 안내서에서는 허브 클라우드 스택을 만들기 전에 필요한 도메인을 등록하고 구입하는 몇 가지 방법을 제공합니다.

사이트 도메인: **Site Domain name**, **Internal Domain* 및 **Short Link Domain**

전자 메일 도메인: **Outgoing Email Domain** 및 **Outgoing Email Subdomain Prefix**

설치를 간소화하려면 DNS 공급자로 Route 53 Hosted Zones를 사용하도록 외부 도메인을 설정하는 것이 좋습니다. 그러면 Hubs Cloud에서 DNS 및 SSL 인증서 갱신을 관리할 수 있습니다.

## Route 53을 호스팅/DNS 공급자로 사용하도록 외부 도메인 설정

**도메인 사용을 안하고 있는 경우** NameChep/GoDaddy/HostGator/etc. 또는 다른 외부 도메인 등록 담당자에 등록되었습니까?
HC를 더 쉽게 설정하려면 AWS Route 53을 호스팅/DNS 공급자(AWS Route 53 Hosted Zones)로 가리키도록 도메인의 이름 서버를 설정하는 것이 좋습니다.
다음 섹션의 **Route 53** 에서 설정하는 방법을 따르십시오.

**이미 도메인을 사용하고 있나요?** 이미 호스팅하고 있는데 name server 를 변경할 수 없습니까? 그런 다음 **Recipe 3**을 사용하여 배포합니다.

### 53번 도로에서 설정하는 방법

[Route 53 Hosted Zones](https://console.aws.amazon.com/route53/home#hosted-zones:) 의 지침에 따라 "Create Hosted Zone"을 선택한 다음
도메인 등록 담당자의 도메인 이름 서버를 AWS 서버 쪽으로 업데이트해야 합니다.

도메인 등록자에 대한 특정 지침과 도메인 등록자의 도메인 이름 서버를 Route 53으로 변경하려면 웹 검색을 수행하십시오.

- Keywords: **<YOUR DOMAIN REGISTRAR\>, DNS hosting, setup Route 53 Hosted Zones, change YOUR DOMAIN REGISTRAR nameservers**
- `How to change my nameservers on <YOUR DOMAIN REGISTRAR> website`
- `Change <YOUR DOMAIN REGISTRAR> DNS for a domain`
- `Point my <YOUR DOMAIN REGISTRAR> domain to Route 53 Hosted Zones`

### 도메인이 다음 두 가지 조건 중 하나를 충족하는 경우, 루트 53에 설정됩니다.

- AWS에서 구입했습니다. 이름 서버가 AWS를 가리키고 53번 경로 호스트 영역 및 등록된 도메인에 표시됩니다.
- 도메인이 Hosted Zones를 통해 AWS Route 53 DNS Hosting을 사용하도록 설정되었으며 이름 서버가 AWS Route 53을 가리키도록 변경되었습니다. 이 도메인은 Namecheff 또는 GoDaddy와 같은 도메인 등록업체에서 구입했습니다.

### 레시피 3은 언제 사용해야 하나요?

웹 사이트가 이미 무언가를 호스팅 중이거나 다른 용도로 이미 사용되고 있고 이름 서버를 변경할 수 없는 경우 Recipe 3을 사용하십시오.

**또는 ".co.uk" 또는 ".com.fr"**인 Second LEVEL 도메인이 있을 수 있습니다. 이러한 도메인에 대해 Recipe 3을 따라야 하는 알려진 버그가 있습니다.

도메인을 사용하지 않는 경우에는 그럴 필요가 없지만(단, CAN) 위의 **Route 53**에서 설정하는 방법을 따르십시오.

예를 들어, mozilla.com을 사용하고 기존 사이트를 중단하지 않으려면 [Recipe3](hubs-cloud-aws-domain-recipes-ko.md#recipe-3-domain-can-not-be-on-route-53) 및 _NOT_ 네임 변경 서버를 따라 hubs.mozilla.com이 하위 도메인으로 작동하도록 AWS를 가리켜야 했습니다.

### 두 번째 도메인(.co.uk, .com.fr 등)을 사용하고 있나요?

Route 53 (알려진 버그가 있음)에서 도메인을 구입했는지 여부에 관계없이 도메인 Recipe 3을 사용하십시오.

## Recipe 1: Dedicated domain on Route 53

- `myhub.com` **OR subdomain** `hub.myhub.com` connects to your hub - _Warning! Do not create a new Hosted Zone for `hub.myhub.com` on Route 53! The Cloudformation template will manage the connections on your root domain, `myhub.com`, hosted zone._
- `myhub.com` is **_NOT_** used for any other purpose or sites
- `mysite.com` set up on on Route 53 [(?)](hubs-cloud-aws-domain-recipes-ko.md#setup-external-domains-to-use-route-53-as-the-hostingdns-provider)
- `anothersubdomain.myhub.com` **_could be_** used for any other purposes or sites

### Instructions:

**[Set up or purchase 2 domains on Route 53](hubs-cloud-aws-domain-recipes-ko.md#setup-external-domains-to-use-route-53-as-the-hostingdns-provider)**

1. `myhub.com` - Houses Hub site domain name + internal server domain
2. `myhub.link` - Short link domain name

[Known bug + fix: Using a second level domain (.co.uk, .com.fr, etc)?](,/hubs-cloud-aws-domain-recipes.md#using-a-second-level-domain-couk-comfr-etc) Use Recipe 3.

**Next, specify the following when creating the stack:**

| STACK OPTIONS                       | RECIPE 1                           |
| ----------------------------------- | ---------------------------------- |
| **Site Domain Name**                | `myhub.com` **OR** `hub.myhub.com` |
| **Site is Set Up On Route 53**      | `Yes`                              |
| **Internal Domain**                 | `myhub.com`                        |
| **Short Link Domain**               | `myhub.link`                       |
| **Outgoing Email Domain**           | `myhub.com`                        |
| **Outgoing Email Subdomain Prefix** | `mail`                             |

## Recipe 2: Domain is in-use, configure subdomain for hub on Route 53

- `hub.mysite.com` connects to your hub. - _Warning! Do not create a new Hosted Zone for `hub.mysite.com` on Route 53! The Cloudformation template will manage the connections on your root domain, `mysite.com`, hosted zone._
- `mysite.com` **_IS_** used for other sites or purposes
- `mysite.com` set up on on Route 53 [(?)](hubs-cloud-aws-domain-recipes-ko.md#setup-external-domains-to-use-route-53-as-the-hostingdns-provider)
- `anothersubdomain.myhub.com` **_could be_** used for any other purposes or sites

[Known bug + fix: Using a second level domain (.co.uk, .com.fr, etc)?](,/hubs-cloud-aws-domain-recipes.md#using-a-second-level-domain-couk-comfr-etc) Use Recipe 3.

### Instructions:

**[Set up or purchase 3 domains on Route 53](hubs-cloud-aws-domain-recipes-ko.md#setup-external-domains-to-use-route-53-as-the-hostingdns-provider)**

1. `mysite.com` - Houses subdomain as Hub site domain name + the other sites or purposes at the root
2. `myhub.link` - Short link domain name
3. `mysite-internal.com` - Internal server domain. This can be any name you want, and will not be seen by users.

**Warning!** Do not create a _new_ Hosted Zone for the subdomain `hub.mysite.com` on Route 53. The Cloudformation template will create CNAME records on the Hosted Zone for your root domain, `mysite.com`, to manage the subdomain connections for you.

**Next, specify the following when creating the stack:**

| STACK OPTIONS                       | RECIPE 2              |
| ----------------------------------- | --------------------- |
| **Site Domain Name**                | `hub.mysite.com`      |
| **Site is Set Up On Route 53**      | `Yes`                 |
| **Internal Domain**                 | `mysite-internal.com` |
| **Short Link Domain**               | `myhub.link`          |
| **Outgoing Email Domain**           | `mysite.com`          |
| **Outgoing Email Subdomain Prefix** | `mail`                |

## Recipe 3: Domain CAN NOT be on Route 53

- [When should I use Recipe 3?](hubs-cloud-aws-domain-recipes-ko.md#when-should-i-use-recipe-3)
- `mysite.com` **_CAN NOT_** be set up on Route 53 [(?)](hubs-cloud-aws-domain-recipes-ko.md#setup-external-domains-to-use-route-53-as-the-hostingdns-provider)
- `mysite.com` connects to your hub **OR** `hub.mysite.com` connects to your hub

### Instructions:

**[Set up or purchase 2 domains on Route 53 (optional 3 domains)](hubs-cloud-aws-domain-recipes-ko.md#setup-external-domains-to-use-route-53-as-the-hostingdns-provider)**

1. `myhub.link` - Short link domain name
2. `mysite-internal.com` - Internal server domain + email domain. 여러분이 원하는 어느 이름으로도 될 수 있지만 유저가 볼 수 없도록만 설정해주세요.
3. _(optional)_ `mysite-mail.com` - Email domain, 이메일에 `mysite-internal.com` 을 사용하는 것이 원하는 것이 아닌 경우.


존재하는 이메일 provider 를 사용하기 위해 [Using an Existing Email Provider Guide](./hubs-cloud-aws-existing-email-provider-ko.md) 를 읽어주세요.

**먼저, [Using an Existing Domain: SSL Certificates instructions](hubs-cloud-aws-existing-domain-ko.md)** 를 따라주세요.

**다음으로 스택을 생성할 때 아래 나오는 표를 참고해서 생성해주세요:**

| STACK OPTIONS                       | RECIPE 3                                                                                       |
| ----------------------------------- | ---------------------------------------------------------------------------------------------- |
| **Site Domain Name**                | `mysite.com` **OR** `hub.mysite.com` + [SSL certificates](hubs-cloud-aws-existing-domain-ko.md) |
| **Site is Set Up On Route 53**      | `No`                                                                                           |
| **Internal Domain**                 | `mysite-internal.com`                                                                          |
| **Short Link Domain**               | `myhub.link`                                                                                   |
| **Outgoing Email Domain**           | `mysite-internal.com` **OR** `mysite-mail.com`                                                 |
| **Outgoing Email Subdomain Prefix** | `mail`                                                                                         |

**마지막으로 스택을 성공적으로 배포한 후 [기존 도메인 사용: DNS 설정 지침](hubs-cloud-aws-existing-domain-ko.md)** 을(를) 따르십시오.

### 문제가 발생할 경우:

1. **사이트 도메인 이름**이(가) 오타 없이 올바르게 입력되었는지 확인합니다.
2. AWS Console > Route 53 > [Hosted Zones](https://console.aws.amazon.com/route53/home#hosted-zones:) 에서 위에 나열된 모든 도메인이 [등록](https://console.aws.amazon.com/route53/home#DomainListing:) 인지 확인하거나 도메인에서 AWS Route 53을 DNS 호스트로 가리키도록 이름 서버를 업데이트했습니다.
3. 해당 지역의 스택 출력에서 롤백 오류를 찾습니다 [AWS 문제 해결: 첫 번째 스택 오류 이벤트 참조](hubs-cloud-aws-troubleshooting-ko.md#my-aws-stack-says-rollback-complete-after-deploying-what-went-wrong)
4. [AWS 문제 해결 설명서](hubs-cloud-aws-troubleshooting-ko.md)를 통해 일반적인 오류 해결
5. 나머지 문서에서 필요한 내용을 찾을 수 없는 경우 [도움말 페이지](.help.html)에서 연락 방법을 참조하십시오.
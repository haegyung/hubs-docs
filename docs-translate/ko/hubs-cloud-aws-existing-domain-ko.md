---
id: hubs-cloud-aws-existing-domain
title: Using an Existing Domain
sidebar_label: Using an Existing Domain
---

**기존 도메인 또는 서브 도메인을 허브에 사용하시겠습니까?**

레시피 3을 따르는 경우 아래 지침을 따르십시오. [레시피 3는 언제 사용해야 합니까?](./hubs-cloud-aws-domain-recipes-ko.md#when-should-i-use-recipe-3)

도메인을 다른 용도로 사용하지 않는 경우 AWS Route 53 Hosted Zone 을 가리키도록 도메인을 설정하는 것이 좋습니다.
[지침](./hubs-cloud-aws-domain-recipes-ko.md#setup-external-domains-to-use-route-53-as-the-hostingdns-provider)


**기존 전자 메일을 사용하려면 [기존 전자 메일 공급자 가이드 사용](./hubs-cloud-aws-existing-email-provider-ko.md)** 을 참조하십시오.
그렇지 않으면 스택 생성을 통해 AWS SES 전자 메일을 구성하는 도메인 레시피 #3 안내서를 참조하십시오.

### 스택 만들기 전: SSL 인증서

전송하지 않기로 선택한 경우 AWS 인증서 관리자를 사용하여 기존 도메인에 대한 SSL 인증서 2개를 만들어야 합니다.
하나는 스택에 대한 동일한 영역에 있고 다른 하나는 us-east-1(스택이 속한 영역이 아닌 경우) 전체 지침은 **'Domain Configuration'** 섹션의 CloudFormation 스택 작성 양식을 참조하십시오.

또한 도메인을 Route 53으로 전송하지 않으면 매년 Amazon Certificate Manager에서 만든 SSL 인증서를 수동으로 갱신하고 새 인증서 ARN을 제공하는 스택 업데이트를 수행해야 합니다(스택 업데이트를 수행하는 방법은 아래 참조).

### 스택 생성 후: DNS 설정

마지막으로 스택이 작성된 후 GoDaddy 또는 Namechape와 같은 외부 DNS 공급자를 사용하는 경우 스택 "Outputs"에서 "AddressForRootDomain" 필드를 찾습니다.
도메인을 가리키려면 도메인 DNS에 새 CNAME을 만들어야 합니다.

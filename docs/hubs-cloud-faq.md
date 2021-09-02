---
id: hubs-cloud-faq
title: 허브 클라우드 FAQ
sidebar_label: 허브 클라우드 FAQ
---

## hubs.mozilla.com과 비교한 허브 클라우드를 사용하는 이유

**Hubs Cloud를 사용하면 hubs.mozilla.com의 모든 기능을 사용할 수 있으며 허브 클라이언트 내부의 브랜드, URL, 사용자 계정, 인터페이스 및 코드를 사용자 지정할 수 있는 추가 기능도 제공됩니다.** AWS 또는 Digital Ocean 인프라를 통해 허브 클라우드 인스턴스와 데이터를 제어할 수 있는 Mozilla는 템플릿과 자동 업데이트를 제공합니다. 따라서 완벽한 맞춤형 허브 환경을 만들 수 있습니다.

최대 객실 크기는 hubs.mozilla.com과 동일합니다. 객실당 25개 아바타 + 로비([여기에 객실 용량 추가](hubs-faq.md#what-is-the-capacity-of-a-hubs-room)).

hubs.mozilla.com을 통해 Hubs를 사용해 보십시오. 주요 이벤트, 독점적인 개인 미팅 또는 비즈니스 용도로 Hubs Cloud(hubs-cloud-intro-ko.md)를 사용해 보십시오.

허브 클라우드 인스턴스 사용자 정의 설명서:

- [Branding + look and feel](hubs-cloud-customizing-look-and-feel.md)
- [Customizing hub url](hubs-cloud-aws-domain-recipes.md)
- Managing accounts via the Admin Panel - _documentation coming soon_
- [Customizing the user interface and client code](hubs-cloud-custom-clients.md)

## 개인 vs. 엔터프라이즈?

- 개인 기본값은 더 낮은 비용입니다. 엔터프라이즈 기본값은 비용이 더 높지만 데이터베이스 일시 중지 없이 사이트 기능을 개선합니다.
- 주요 차이점: 엔터프라이즈는 여러 서버를 허용합니다. 한 명이 갑자기 망하면 다른 사람이 인수한다. 개인은 하나의 서버만 허용합니다.
- 그 외에도, 제공하는 옵션과 서버당 비용은 동일합니다. 개인은 고가의 확장성이 뛰어난 단일 서버로 구성할 수 있으며, 그 반대의 경우도 마찬가지입니다.

## 서버 크기를 t3.micro에서 c4.large로 변경하는 방법

[Update the Stack](hubs-cloud-aws-updating-the-stack.md) 설명서를 확인하십시오.

## 실행 중인 서버 수를 변경할 수 있습니까?

네, 엔터프라이즈 용도 입니다. [Stack 업데이트](hubs-cloud-aws-updating-the-stack.md).

아니요, 개인적인 용도 입니다.

## 도메인이나 메일 설정을 변경할 수 있습니까(예: hubs.myhubssite.com에서 hubs.myhubssite.com으로 변경)?

아니요, 현재 스택을 삭제하고 해당 설정으로 리메이크해야 합니다.

## 허브에서 "백업에서 복원" 또는 "고급" 설정을 업데이트할 수 있습니까?

아니요, 현재 스택을 삭제하고 해당 설정으로 리메이크해야 합니다.

## 허브 클라우드의 AWS 비용은 얼마입니까?

**rough** 견적 가이드(여기: [추정 비용 차트(alpha)](hubs-cloud-aws-estimated-cost-charts.md) 를 참조하십시오.

## 허브 클라우드가 지원할 수 있는 사용자는 몇 명입니까?

[AWS 예상 CCU 제한](hubs-cloud-aws-estimated-ccu-limits.md)을 참조하십시오.

## 내 허브 클라우드 사이트에서 Mozilla / Hubs 로고를 사용할 수 있습니까?

허브 로고를 사용하는 방법에 대한 자세한 내용은 [포털 가이드라인](hubs-cloud-branding.md) 을 참조하십시오.

## 내 허브 스택의 관리 이메일 주소는 무엇입니까?

["내 허브 스택의 관리 이메일 주소는 무엇입니까?"를 참조하십시오.](hubs-cloud-aws-troubleshooting.md#then-what-is-my-hub-stacks-admin-email-address)

내 방을 특정인에게 잠그려면 어떻게 해야 하나요?

[사용자 액세스 제한 문서 참조](hubs-cloud-limiting-user-access.md)

## 당신의 질문을 모르겠나요?

허브에 대한 질문은 [Hubs FAQ](hubs-faq.md)를 참조하십시오.

Hubs Cloud를 AWS에 배포하는 방법에 대한 질문은 [AWS 문제 해결 가이드](hubs-cloud-aws-troubleshooting.md) 를 참조하십시오.

나머지 문서에서 필요한 내용을 찾을 수 없는 경우 [도움말 페이지](.help.html)에서 연락 방법을 참조하십시오.

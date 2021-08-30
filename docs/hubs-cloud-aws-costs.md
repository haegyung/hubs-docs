---
id: hubs-cloud-aws-costs
title: AWS Cost Information
sidebar_label: Costs and Minimizing Costs Information
---

이 문서에서는 허브 클라우드 비용의 작동 방식을 설명합니다. 허브는 AWS 비용을 최대한 최소화하도록 설계되었지만, 스택을 위해 AWS 비용을 최소화하는 방법에 대해 자세히 알아봅니다.

이벤트 비용을 계산하려면 다음과 같이 하십시오.

- 최고의 정확도 비용 추정치 - AWS 비용 탐색기 사용
- 이벤트 비용을 계산하고 추정합니다.
- 권장 서버 유형을 사용해주세요.

[비용 및 차트(Alpha)](hubs-cloud-aws-estimated-cost-charts.md) 페이지를 참조해주세요.

**Minimizing Costs Primer**

- [Hubs Cloud의 비용은 어떻게 계산될까요?](hubs-cloud-aws-costs.md#how-do-costs-work-for-hubs-cloud)
- [비용 최소화 - 권장 사용자 사례](hubs-cloud-aws-costs.md)
- [비용 최소화 - 스택 템플릿의 설정](hubs-cloud-aws-costs.md)

## How do costs work for Hubs Cloud?

우리는 템플릿의 비용을 최대한 줄이기 위해 최선을 다했습니다. 시간별로 사용하는 EC2 AWS 서버 유형, 서버 없는 시간별 데이터베이스 비용, EFS 스토리지 및 Cloudflare로 전환하지 않는 경우 데이터 전송 비용이 주된 비용입니다.

EC2 인스턴스는 "온라인"(Online)인 반면 인스턴스 AWS 서버 유형(hubs-cloud-aws-estimated-cost-charts-ko.md#aws-server-type-recommendations)의 경우 서버당 시간당 비용이 발생합니다. 이 최소 비용은 한 번에 접속하는 사람의 수에 관계없이 시간당입니다. 아무도 서버에 연결할 수 없는 [**오프라인 모드**](hubs-cloud-aws-costs.md#offline-mode---manual)를 설정하여 EC2 인스턴스 + 데이터베이스를 수동으로 끌 수 있습니다.

데이터베이스 비용은 EC2 인스턴스 다음으로 가장 큰 요인입니다. [**pausepause**](hubs-cloud-aws-costs.md)를 켜서 아무도 연결되지 않았을 때 발생하는 비용을 중지할 수 있습니다.

[AWS 서버 유형 및 최소 EC2 비용에 대한 자세한 내용은 (Alpha) 비용 차트를 참조하십시오.](hubs-cloud-aws-estimated-cost-charts.md)

[비용을 최소화하려면 허브 클라우드 비용 최소화 - 사용자 사례를 참조하십시오.](hubs-cloud-aws-costs.md)

## AWS 비용 추정치를 생성하는 요인

허브는 AWS 비용을 최소화하도록 설계되었습니다. 주요 비용은 다음과 같습니다.

- AWS EC2 인스턴스의 AWS 서버 유형
- 서버 수
- 데이터베이스 사용
- 장면 및 아바타를 위한 3D 자산 보관
- 데이터 전송 비용
- 데이터베이스 암호에 대한 도메인 비용(도메인당 1달러) + $0.40/mo

## 상세 내역

허브를 사용하면 AWS 비용이 표시됩니다.

- EC2 인스턴스: 스택 구성을 통해 사용할 인스턴스 수를 선택할 수 있습니다. 기본적으로 단일 t3.micro가 필요합니다. 이 문서 작성 시 비용은 mo당 약 8달러입니다.
- [Aurora serverless](https://aws.amazon.com/rds/aurora/pricing/) 데이터베이스: 데이터베이스 사용에 대한 요금이 부과됩니다. 이 문서 작성 시 사용된 시간당 $0.12이며, 가장 가까운 10분으로 반올림됩니다. 스택 구성에서 데이터베이스 자동 일시 중지를 활성화한 경우(기본값) 방문자가 사이트에 액세스할 때만 데이터베이스 비용을 지불합니다. 과도한 데이터베이스 비용이 우려되는 경우 스택 설정에서 예산을 설정하여 예산을 초과할 경우 스택이 자동으로 오프라인 모드로 전환되도록 할 수 있습니다. (데이터베이스를 포함한 모든 서버를 종료합니다.)
- [EFS](https://aws.amazon.com/efs/pricing/) storage: 업로드된 장면과 아바타의 저장 비용이 청구됩니다. 이 문서 작성 당시 $0.30/gb 월 및 $0.10/gb 데이터는 30일 동안 액세스되지 않았습니다.
- [Cloudfront](https://aws.amazon.com/cloudfront/pricing/) 데이터 전송 비용.
- 이미지 크기 조정, 비디오 트랜스코딩 등에 사용되는 람다는 [AWS 람다 프라이싱](https://aws.amazon.com/lambda/pricing))에 따라 다양하지만, 자유 계층 수준을 초과할 가능성은 없습니다.
- 또한 Route 53 도메인 각각에 대해 $1/mo를 지불하고 데이터베이스 비밀에 대해서도 $0.40/mo를 지불합니다.

CDN을 Cloudflare로 전환하면 데이터 전송 비용을 크게 절감할 수 있습니다. 허브의 관리 콘솔에서 "데이터 전송" 페이지로 이동하여 방법을 확인하십시오.

비용 절감을 극대화하려면 스택 업데이트를 수행하여 스택을 사용하지 않을 때 "오프라인" 모드로 전환할 수 있습니다. 단, 기본값보다 더 큰 용량 설정으로 실행 중인 경우를 제외하고는 필요하지 않을 수 있습니다.

비용을 대략적으로 추정하려면 [추정 비용 차트(alpha)](hubs-cloud-aws-estimated-cost-charts.md)를 확인하십시오.

미래의 비용을 보다 정확하게 예측하려면 [AWS Cost Explorer for your Instance](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html)를 사용하십시오.

## 비용 최소화 - 사용자 사례

자동 설정에 대한 비용을 최소화하기 위한 권장사항은 [**일시 중지**](hubs-cloud-aws-costs.md#database-pausing---automatic)를 기본적으로 설정하는 것입니다. 허브를 사용하는 사람이 없으면 허브를 [**오프라인 모드**](hubs-cloud-aws-costs.md#offline-mode---manual) 또는 **t3.medium**과 같은 소형 인스턴스 유형으로 전환합니다. 또한 Cloudflare 작업자를 컨텐츠 CDN으로 사용하십시오.

## 이벤트 전: 개발

소수의 사용자만 연결하여 룸 + 씬(scene)을 설정하려면 **t3.medium** 인스턴스[(?)](hubs-cloud-aws-estimated-cost-charts.md#aws-server-type-recommendations) 이상을 사용하는 것이 좋습니다. 사용하지 않는 경우 인스턴스를 [**오프라인 모드**](hubs-cloud-aws-costs.md#offline-mode---manual)로 설정합니다. 그런 다음 개발을 다시 시작하면 다시 온라인으로 전환하십시오.

## 이벤트 전: 1.5시간

인스턴스가 [**오프라인 모드**]인 경우(hubs-cloud-aws-costs-ko.md#offline-mode---manual),에서 수동으로 스택을 **Online**으로 업데이트하고 10분간 기다립니다.

이벤트 최소 1시간 전에 스택을 수동으로 업데이트하여 AWS 서버 유형을 확장합니다. 예를 들어 이벤트 1시간 전에 [stack 업데이트](hubs-cloud-aws-updating-the-stack.md)를 a **t3.medium**에서 **c4.large*(?)(hubs-cloud-aws-estimated-cost-charts-ko.md#aws-server-type-recommendations)로 설정합니다.

## 이벤트 도중

성능 문제가 발견되면 **c4.large**에서 **c5.2xlarge**(?)(./hubs-cloud-aws-estimated-cost-charts-ko.md) 로 [스택 업데이트](hubs-cloud-aws-estimated-cost-charts.md#aws-server-type-recommendations)를 임시로 늘릴 수 있습니다. 룸에 있는 사용자는 새 서버로 롤링하는 동안 잠시 정지/음성이 울립니다.

## 이벤트가 끝난 후

AWS Server Type을 **c5.2xlarge**에서 **t3.medium*(?)(hubs-cloud-aws-estimated-cost-charts-ko.md#aws-server-type-recommendations)로 축소하거나 연결된 사용자 수를 줄이십시오.

### 오랫동안 아무도 인스턴스에 연결하지 않을 때

지정된 경우 허브를 [**오프라인 모드**](hubs-cloud-aws-costs.md#offline-mode---manual) 로 전환할 수 있습니다. 여기서 아무도 허브 또는 리디렉션 URL에 연결할 수 없습니다. **오프라인 모드**를 통해 백업, 장면 및 아바타와 같은 자산 스토리지를 제외한 모든 비용은 0달러입니다.

## 스택 비용 관리 옵션

이러한 옵션을 사용하려면 [Stack 지침 업데이트](.hubs-cloud-aws-updating-the-stack.html)에 따르십시오.

- **데이터베이스 자동 일시 중지**를 활성화합니다. 기본적으로 Personal(개인) 및 Enterprise(엔터프라이즈)에서 설정합니다.
- **오프라인 모드*를 수동으로 "온라인"에서 "오프라인"으로 전환합니다. 서버를 끄면 EC2 및 데이터베이스 비용이 시간당 0달러가 됩니다.
- **Account Monthly Database Budget** 를 지정해주세요.
- Enable Content CDN to Cloudflare workers

### Database Pausing - automatic

만약 **Auto-Pause Database** 또는 **database pausing** 이 "Yes - Pause database when not in use" 라면, 잠시동안 여러분의 데이터베이스에 연결된 사람이 없는 경우, 여러분의 데이터베이스와 그리고 그에 대한 비용은 유저가 다시 연결될 때까지 여러분의 정지 될 데이터베이스에 의한 비용이 발생될거에요.

It takes 1-3 minutes for the database to turn back on and allow the first user to connect. 차후의 연결들은 나중에는 빠르게 진행될 거에요.
첫 유저의 연결을 허용하고 데이터베이스를 다시 동작시키는데 걸리는 소요시간은 1-3분 정도입니다. 

데이터 일시정지를 가능하게 하려면, 다음의 문서인 [Update the Stack instructions](./hubs-cloud-aws-updating-the-stack.html) 를 읽어보세요. 

### Offline Mode - manual

**오프라인 모드**를 "오프라인"으로 설정하면 서버가 완전히 꺼지고 모든 EC2 비용 + 데이터베이스 비용이 중지됩니다. 여전히 백업 및 데이터를 위한 스토리지 비용을 지불하고 있습니다. 서버가 "오프라인"인 동안 아무도 허브에 연결할 수 없습니다. "오프라인"인 동안 허브 인스턴스는 지정된 오프라인 URL로 리디렉션합니다.


**오프라인 모드**를 "오프라인" 에서 "온라인" 으로 또는 그 반대로 전환하는 것은 수동 프로세스입니다. 연결하려면 10분 정도 기다려주세요.

Offline/Online 전환하기 위해서, 다음 [Update the Stack instructions](./hubs-cloud-aws-updating-the-stack.html) 을 따라주세요.

### Monthly Database Budget - automatic

**월간 데이터베이스 예산** 설정에 주의하여 $0(무제한) 또는 최소 $20 이상을 권장합니다. 비용이 설정된 데이터베이스 예산(\$0 이외의 설정)에 도달하면 데이터베이스가 해당 월 비용초과로 강제로 종료됩니다. 이것은 비용에 민감한 사람들에게 놀라운 비용(의도치 않게 산정된 높은 과금)을 허용하지 않습니다.

개인 및 기업의 기본값은 \$0(무제한)입니다.

budget을 설정하기 위해서, 다음 [Update the Stack instructions](./hubs-cloud-aws-updating-the-stack.html) 메뉴얼을 참고해주세요.

### Change content CDN to Cloudflare Workers - 1 time update

새로운 스택에서는 상대적으로 비싼 AWS의 Content CDN을 사용하고 있습니다. Content CDN에 Cloudflare worker 들을 사용하도록 변경할 수 있습니다.

Cloudflare worker를 활성화하려면 허브 관리자 패널 > "콘텐츠 CDN" 메뉴 > 지침에 따라 Cloudflare Worker 들을 활성화합니다.
(경고 - 허브의 네임서버를 변경하지 마시고 여러분의 사이트를 CLOUDFLARE에 추가하지 말아주세요)

## Estimating your costs

[Estimating Costs and Charts (Alpha)](./hubs-cloud-aws-estimated-cost-charts.md) 페이지를 참고해주세요.

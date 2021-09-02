---
id: hubs-cloud-aws-estimated-ccu-limits
title: AWS 추산된 CCU Limits
sidebar_label: AWS 추산된 CCU Limits
---

이 문서에서는 전체 서버와 개별 룸에 대해 사용된 인스턴스 유형에 따라 허브 클라우드 서버의 CCU(동시 사용자) 제한을 계산하는 방법에 대해 설명합니다.

## CCU 한계 추정에 대한 거부권

현재 허브 클라우드 서버의 서버 또는 룸에 있을 수 있는 사용자 수를 제한하는 몇 가지 요소가 있습니다.

* 일반적으로 **vCPU*의 인스턴스 유형이 많을수록([Amazon EC2 인스턴스 유형](https://aws.amazon.com/ec2/instance-types/)), 참조) 전체 CCU를 더 많이 지원할 수 있습니다.

* 사용자가 사용하는 장치가 룸에 성공적으로 연결하는 기능에 영향을 미칠 수 있습니다. 예를 들어, 웹킷 기반 브라우저(iOS의 모든 브라우저)는 룸의 24개 CCU를 초과하여 자체 제한에 도달합니다. 보급형 컴퓨터는 일반적으로 많은 수의 아바타 + 추가 미디어를 로드/렌더하는 데 어려움을 겪을 수 있습니다. 이 문서는 클라이언트측 요소를 고려하지 않으며 서버측 제한만 고려합니다.

* **사용자가 **적극적으로 이동할수록** 헤드/핸드 트래킹 장치*를 사용하는 사용자가 많아질수록 **룸에서 지원할 수 있는 총 사용자 수는 ** 줄어듭니다.
* 비활동 사용자(실내에서는 말하거나 움직이지 않는 사용자)는 ccu를 결정하기 위해 로비에 있는 사용자와 유사한 것으로 간주할 수 있습니다.

* 미디어 업로드, (카메라 도구를 통한) 사진/비디오 캡처, 링크 썸네일 생성과 같은 다양한 기능은 CCU 제한에 영향을 미칠 수 있는 다양한 수준의 서버 리소스를 사용합니다.


비용 추정은 [AWS 비용 및 비용 차트(Alpha)](hubs-cloud-aws-estimated-cost-charts.md)를 참조하십시오.

## 예상 CCU 테이블(앱 1개 / 스트림 서버 1개)

다음 표에는 여러 인스턴스 유형에 대해 측정 및 예상 CCU가 나열되어 있습니다.

* **Active**는 실내에서 추적된 머리와 손으로 말하고 이동하는 "최악의 시나리오"를 나타냅니다.

* **Inactivity**은(는) 로비에 있거나 룸에 있는 동안 전혀 말을 하거나 움직이지 않는 사용자를 나타냅니다.
* 비 활동적인 실내 사용자는 양방향 통신을 구축하는 데 필요한 WebRTC 핸드셰이크와 클라이언트가 자주 보내지 않는 "하트비트(heartbeat)" 메시지 때문에 로비 사용자보다 약간 더 비쌉니다.

| AWS Instance Type | vCPUs | Max **Active** CCU, single-room | Max **Inactive** CCU (w/ 25 active CCU), single-room | Max **Inactive** CCU (w/ 10 active CCU), single-room | Max **Rooms** w/25 active CCU |
|-------------------|------:|--------------------------------:|-----------------------------------------------------:|-----------------------------------------------------:|------------------------------:|
| t3.medium         |     2 |                              45 |                                                   45 |                                                  140 |                             5 |
| t3.large          |     2 |                             ~45 |                                                  ~45 |                                                 ~140 |                            ~5 |
| t3.xlarge         |     4 |                             ~65 |                                                  ~90 |                                                 ~290 |                            ~8 |
| t3.2xlarge        |     8 |                              80 |                                                  200 |                                                  600 |                            12 |
| c4.large          |     2 |                              40 |                                                   45 |                                                  125 |                             3 |
| c5.large          |     2 |                              50 |                                                   70 |                                                  180 |                             4 |
| c5.xlarge         |     4 |                              65 |                                                   90 |                                                  290 |                             8 |
| c5.2xlarge        |     8 |                             ~80 |                                                 ~200 |                                                 ~600 |                           ~12 |
| c5.24xlarge       |    96 |                            ~100 |                                                ~3200 |                                                ~9600 |                          ~184 |

* **~** indicates that the number is calculated and not measured from benchmarking.
* c5.24xlarge numbers are **very** theoretical, actual results may vary.

## Formulas to calculate CCU:

**Warning: Napkin Math Ahead**

### Max Active CCU, single room
where C = # of vCPU's

**Max Active CCU** = √(~1000 * C)

### Max Inactive CCU w/ X active CCU, single room:
**Max Inactive CCU** = (**Max Active CCU**² - X²) / X

### Max rooms w/ 25 active CCU: 
where C = # of vCPU's

**Max Rooms** = ~2 * C 

## FAQ

### t3.micro 또는 t3.small에서 사용할 수 있습니까?
t3.micro는 메모리가 1GB뿐이므로 권장되지 않습니다. t3.small은 메모리가 2GB이므로 소규모 모임이나 일상적인 테스트에 충분할 수 있습니다.

### 3.medium과 3.large의 차이는 무엇입니까?
t3.medium과 t3.large는 메모리만 다르므로 메모리 사용량이 많은 상황에서 서버에 도움이 됩니다.

### C4.Large와 C5.Large의 차이점은 무엇입니까?
c4.large와 c5.large는 vCPU 및 메모리가 유사하지만 c4.large는 c5.large의 네트워킹 성능/대역폭의 일부에 불과합니다.

### 두 개 이상의 앱/스트림 서버를 사용할 경우 어떻게 해야 합니까?
더 많은 서버를 사용하거나 "수평으로 확장"하면 전체 서버 CCU가 증가하지만 룸별 CCU는 증가하지 않습니다.

### 앱/스트림 서버에 대해 다른 인스턴스 유형을 사용할 수 있습니까?
이 문서를 작성할 때 앱 서버는 스트림 서버보다 리소스가 더 많이 필요합니다(비디오/화면 공유 사용량이 많은 경우는 제외). 스트림 서버에 대해 더 작은 인스턴스 유형을 사용하고 상대적으로 유사한 CCU 번호를 유지할 수 있습니다.

### 룸의 최대 사용자 한도를 높이려면 어떻게 해야 합니까?
서버 관리자는 관리자 패널에서 "설정-> 앱 설정-> 룸"에서 **기본 룸 크기** 및 **최대 룸 크기**를 조정할 수 있습니다. 룸 관리자는 "룸 설정"에서 **룸 크기**를 해당 범위 내로 조정할 수 있습니다. 이는 "룸 내"에서 허용되는 최대 사용자 수에만 영향을 미치며 현재 "로비 내" 사용자를 제한하지 않습니다.

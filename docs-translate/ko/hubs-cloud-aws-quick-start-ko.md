---
id: hubs-cloud-aws-quick-start
title: AWS Quick Start
sidebar_label: AWS Quick Start
---

## 허브 클라우드 스택을 만들기 전

**따라하기:** [비디오 튜토리얼: 허브 클라우드 배포 방법 Part1](https://www.youtube.com/watch?v=2K7P8jFyHNc)

1. AWS에 계정을 만들고 콘솔에 로그인합니다.
2. AWS Route 53에서 도메인을 등록하거나 설정합니다. 최소 2개의 도메인이 필요합니다. 예를 들어 'myhub.com' 및 'myhub.link'입니다. 자세한 내용은 [도메인 레시피](hubs-cloud-aws-domain-recipes-ko.md)를 참조하십시오.
3. 관련 문서를 검토합니다.
- [hubs.mozilla.com과 비교한 허브 클라우드를 사용하는 이유는 무엇입니까?](hubs-cloud-faq-ko.md#why-use-hubs-cloud-vs-hubsmozillacom)
- [개인 vs. 엔터프라이즈](hubs-cloud-faq-ko.md#personal-vs-enterprise)
- [비용 정보](hubs-cloud-aws-costs-ko.md)
4. SSH 키 쌍을 만들어 서버에 액세스합니다.
- [AWS 안내에 따라 배포 영역에서 SSH 키 쌍을 만듭니다.](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#having-ec2-create-your-key-pair)
- 배포 영역은 사용자 이름과 지원이 포함된 오른쪽 상단에 있습니다.
- 기본 포맷으로 개인 키 저장

## 허브 클라우드 스택 구축

**따라하기:** [비디오 튜토리얼: 허브 클라우드 2부 배포 방법(https://www.youtube.com/watch?v=W0erzlDpo0U)

1. https://hubs.mozilla.com/cloud에서 배포할 허브 클라우드 제품을 선택합니다.
2. 허브 클라우드 Personal AWS Marketplace 페이지에서 **"계속 구독"**을 클릭합니다.
3. **"구성 계속"을 클릭합니다**
4. 원하는 **"지역"**을(를) 선택합니다.
- 엔터프라이즈의 경우 원하는 **"배달 방법"*:
- **"다중 서버"**
- **"단일 서버"**
- 원하는 **"지역"**
5. **"계속 실행"**을 클릭합니다.
6. **"시작 작업 선택" ** 드롭다운을 **"클라우드 형성 시작"**으로 변경한 다음 **"시작"*을 클릭합니다.
7. ***"스택 만들기"** 또는 **"템플릿 지정"** 페이지의 오른쪽 하단 모서리에서 **"다음"*을 선택합니다.
8. 스택 세부 정보 지정:
- 스택 이름을 지정합니다. ***"your-hub-name-1"**
- 계정 구성 관리자 이메일 주소
- 대문자로 된 문자 없음
- 허브의 관리자
- '사이트 도메인 이름', '로 53에 사이트 설정', '내부 도메인', '단거리 링크 도메인', '발신 이메일 도메인', '발신 이메일 서브 도메인 접두사' 등의 지침에 [도메인 레시피](hubs-cloud-aws-domain-recipes-ko.md)를 사용합니다.
- 오타가 없는지 다시 확인합니다!
- 스택을 만들기 전에 '키 페어' 선택: 4단계
- AWS Route 53에 없는 기존 도메인을 사용하는 경우 몇 가지 단계를 추가로 수행해야 합니다. [기존 도메인 사용](hubs-cloud-aws-existing-domain-ko.md)을 참조하십시오.
- 'SSH 액세스 제한' 설정을 선택합니다.
- 다른 옵션을 검토하거나 기본값을 유지합니다. 이러한 업데이트의 대부분은 나중에 [Stack Update](hubs-cloud-aws-updating-the-stack-ko.md)를 통해 업데이트할 수 있습니다.
9. **"다음"**을 선택합니다.
10. 서비스 약관에 동의 확인란
11. 스택 배포가 완료될 때까지 20~30분 정도 기다립니다.
- 무슨 문제라도 있나요? 일반적인 문제에 대한 해결 방법은 [AWS 문제 해결](hubs-cloud-aws-troubleshooting-ko.md)을 참조하십시오.
12. 받은 편지함에서 '관리자 전자 메일 주소'를 확인합니다. **N에서 전자 메일이 확인됩니다. 버지니아**
13. 스택이 생성된 후 기본 도메인의 사이트를 누르고 20~30초 정도 기다립니다.
14. '관리자 이메일 주소'로 로그인합니다.

## 배포 관리 설정 후

**따라하기:** [비디오 튜토리얼: 허브 클라우드 3부 구축 방법(https://www.youtube.com/watch?v=nQ85L_Ee농담)

1. **N에서 AWS SES(Simple Email Service)를 설정합니다. Virginia(us-east-1)** for **_all_** 지역을 배포하여 SES Sandbox를 종료합니다. [#2 제한 증가를 위해 AWS로 요청 보내기](hubs-cloud-aws-troubleshooting-ko.md#youre-in-the-aws-sandbox-and-people-dont-receive-magic-link-emails)
- HC 인스턴스에 즉시 입력하려면 개별 전자 메일 주소를 확인합니다[#1 관리자의 개별 전자 메일 주소 확인](hubs-cloud-aws-troubleshooting-ko.md#youre-in-the-aws-sandbox-and-people-dont-receive-magic-link-emails)
2. **관리 패널** > **콘텐츠 CDN** 메뉴의 안내에 따라 비용 절감을 위한 Cloudflare 작업자를 설정합니다.
3. [허브 클라우드 시작하기](hubs-cloud-getting-started-ko.md) 가이드에서 장면과 아바타를 추가하는 프로세스를 진행합니다!

**축하합니다. 모든 것을 성공적으로 설정하셨습니다!**

### 배포에 문제가 있습니까?

일반적인 문제에 대한 해결 방법은 [AWS 문제 해결](hubs-cloud-aws-troubleshooting-ko.md)을 참조하십시오.
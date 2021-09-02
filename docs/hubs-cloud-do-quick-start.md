---
id: hubs-cloud-do-quick-start
title: 디지털 오션(DigitalOcean) 퀵 스타트
sidebar_label: DigitalOcean Quick Start
---

> **경고! 디지털 오션용 허브 클라우드는 알파(Alpha) 형태로 제공되고 있습니다.**
>
> AWS 버전처럼 지원 수준을 제공할 수 없습니다.

허브 클라우드 디지털 오션(Hubs Cloud Digital Ocean)은 [Digital Ocean Marketplace](https://marketplace.digitalocean.com/apps/hubs-cloud-personal) 에서 찾을 수 있습니다.

1. 허브용과 짧은 룸 링크용, 두 개의 등록된 도메인 이름이 필요합니다. 짧은 링크에는 .link 도메인을 사용하는 것이 좋습니다. 도메인에 대한 DNS를 [Digital Ocean의 이름 서버 지정](https://www.digitalocean.com/community/tutorials/how-to-point-to-digitalocean-nameservers-from-common-domain-registrars) 으로 업데이트해야 합니다.

2. [Digital Ocean Marketplace를 통해 droplet 만들기](https://marketplace.digitalocean.com/apps/hubs-cloud-personal). 테스트의 경우 5달러짜리 물방울이면 충분합니다. 더 많은 사용자를 지원하려면 더 큰 droplet이 필요합니다. 알파 단계에서는 특별히 추천할 사항이 없으므로 어떤 것이 적합한지 실험하여 알려주십시오.

- 업로드, 아바타, 씬(scene)을 위한 추가 스토리지를 원할 경우 블록 스토리지 볼륨을 첨부해야 합니다.
- 이미 Digital Ocean 프로젝트가 있는 경우 지금 프로젝트에 droplet을 할당합니다. 그렇지 않으면 4단계에서 프로젝트를 작성할 때 이 작업을 수행할 수 있습니다.

3. [네트워크에 추가](https://cloud.digitalocean.com/networking/domains) 를 통해 두 도메인을 Digital Ocean 프로젝트에 추가합니다.

- Digital Ocean 프로젝트를 이미 만든 경우 프로젝트 뷰의 "Move Resources" 버튼을 통해 프로젝트에 도메인을 추가합니다. 그렇지 않으면 새 프로젝트를 작성할 때 다음 단계에서 추가할 수 있습니다.

4. [새 프로젝트 만들기](https://cloud.digitalocean.com/projects/new) 에서 허브에 대한 도메인 및 드롭을 리소스로 할당합니다.

- 프로젝트와 도메인을 연결하면 필요한 DNS 레코드를 자동으로 추가할 수 있습니다.
- 그렇지 않으면 필요한 DNS 레코드를 직접 추가해야 합니다. 설치 스크립트(8단계)에 추가할 레코드가 나와 있습니다.

5. 허브 클라우드는 전자 메일 매직 링크를 사용하여 로그인합니다. 이러한 전자 메일을 보내려면 전자 메일 공급자의 SMTP 연결 정보가 필요합니다.

- 방화벽 차단을 방지하려면 [SendGrid](https://www.sendgrid.com) 및 포트 2525를 사용하는 것이 좋습니다. SMTP용 SendGrid를 사용하려면 계정을 만든 다음 [SMTP Integration](https://app.sendgrid.com/guide/integrate/langs/smtp) 으로 이동하여 SMTP 사용자 이름과 암호를 가져옵니다.
- SendGrid에는 이메일이 전송되기 전에 [도메인 통합](https://sendgrid.com/docs/ui/account-and-settings/how-to-set-up-domain-authentication) 을 위한 추가 단계가 있습니다.

6. [쓰기 가능한 Digital Ocean API 토큰 만들기](https://cloud.digitalocean.com/account/api/tokens/new). 이 토큰은 설치 스크립트가 필요에 따라 프로젝트/드롭렛을 업데이트할 수 있도록 DNS, 방화벽 등을 구성하는 동안 필요합니다.

- 토큰은 저장되지 않으며 허브가 서버에 올라가게 되면 계정에서 토큰을 제거할 수 있습니다.

7. 여러분의 droplet이 시작되면 SSH를 루트로 삽입하여 설치 프로세스를 완료합니다. Ex: 'ssh root@x.x.x' Digital Ocean 대시보드의 droplet 세부 정보 페이지 상단에서 droplet의 IP 주소를 찾을 수 있습니다. droplet을 만들 때 인증을 구성한 방법에 따라 사용자에게 제공된 일회용 암호를 제공하거나 사전 구성된 ssh 키를 사용하면 됩니다.

8. 로그인하면 허브 클라우드 설정 마법사가 자동으로 시작됩니다. 그러면 허브 클라우드 인스턴스를 시작하고 실행하는 데 필요한 나머지 단계를 모두 안내할 수 있습니다. 설치 중에 입력한 설정을 변경해야 하거나 다른 이유로 이 설정을 종료한 경우 '/opt/polycosm/setup을 실행하여 다시 실행할 수 있습니다.쉿!
- 설정하는 동안 데이터베이스를 제공하거나 Digital Ocean Managed Database를 만들어야 합니다. Digital Ocean Managed Databases는 mo당 15달러부터 제공됩니다 [여기에서 모든 Digital Ocean 서비스에 대한 가격 책정 참조](https://www.digitalocean.com/pricing/)

Digital Ocean은 현재 **alpha** 사전 릴리스입니다. 문제가 발생하면 [도움말 페이지](.help.html) 에서 연락할 수 있는 방법을 참조하십시오.

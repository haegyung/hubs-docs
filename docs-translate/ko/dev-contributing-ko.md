---
id: contributing
title: Contributing
---

이 페이지에는 허브 프로젝트에 기여하고자 하는 사람들을 위한 기회가 간략히 설명되어 있습니다. 공유 3D 공간을 통해 협업과 커뮤니케이션을 가능하게 하는 프로젝트의 사명에 부합하는 외부 기여를 환영합니다. 허브에 기여하는 방법과 플랫폼을 구성하는 지원 프로젝트에 대한 정보는 여기에서 확인할 수 있습니다.

기여자는 프로젝트의 [행동강령](https://github.com/mozilla/hubs/blob/master/CODE_OF_CONDUCT.md)을 준수하고 프로젝트와 관련 작업자를 존중해야 합니다.

다음 GitHub 프로젝트는 허브 플랫폼의 일부이며 이러한 기여 가이드라인의 적용을 받습니다.

* https://github.com/mozilla/hubs/ - 핵심 허브 프로젝트
* https://github.com/mozilla/spoke - 장면 작성을 위한 3D 편집기
* https://github.com/mozilla/janus-plugin-sfu - 네트워킹
* https://github.com/mozilla/reticulum - 허브용 서버 인프라
* https://github.com/mozilla/hubs-ops - 허브용 운영 인프라
* https://github.com/MozillaReality/hubs-discord-bot - 허브의 불일치 통합


## 빠른 시작

우리는 아래와 같이 다양한 방법으로 허브 플랫폼에 기여하게 되어 기쁩니다. 모든 기여는 프로젝트 유지관리자의 승인을 받아야 합니다. 허브에 기여하고자 하는 사용자는 공용 [Hubs Discord 채팅 서버](https://discord.gg/wHmY4nd)에 가입하여 개발 팀과 연결하고 질문을 하며 프로젝트에서 수행 중인 작업에 대한 토론을 볼 것을 요청(필수는 아님)합니다.

### 💻 코드 기여도
허브에는 여러 사용자가 서버의 공유 룸에 연결할 수 있는 클라이언트-서버 아키텍처가 있습니다. 허브 클라이언트에 기여하려면 [Readme](https://github.com/mozilla/hubs#readme))의 지침에 따라 시작하십시오. 네트워킹 또는 인프라에 기여하려면 [reticulum](https://github.com/mozilla/reticulum) 또는 [Janus](https://github.com/mozilla/janus-plugin-sfu) 리포지토리)를 확인하십시오. 허브 룸의 사용자 지정 환경을 만드는 데 사용되는 3D 편집기인 스포크의 코드를 작업하려면 [Spoke](https://github.com/mozilla/spoke) 리포지토리)를 살펴보십시오.

허브의 내부 작업과 프로젝트 이면에 있는 아키텍처 결정에 대한 자세한 내용은 [Mozilla Hubs Code Base에 대한 이 프레젠테이션](https://vimeo.com/365531296) by Engineering Lead Greg Fodor)을 참조하십시오.

열려 있는 문제에는 태그가 지정됩니다. 수정하고자 하는 버그 또는 기능 요청을 탐색하는 경우 사례를 검토 중임을 알 수 있도록 코멘트를 달아 주십시오. '[우선호](https://github.com/mozilla/hubs/issues?)를 사용하려고 합니다.=는 %3A 문제+는 %3입니다.open+label%3코드 베이스를 시작할 때 다른 사례보다 쉽게 시작할 수 있는 일부 사례를 식별하기 위한 %22good+first+issue%22)' 태그입니다.

허브 프로젝트에 코드를 제공하는 단계:

1. 작성하고자 하는 보고서를 복제하고 로컬에서 작업을 실행합니다.
2. 수정하고자 하는 문제 또는 개선 사항을 찾아 - 이 문제에 대한 의견을 제출하여 해결 중임을 알려줍니다.
3. 버그를 고칩니다! 로컬 설정에 대한 변경 사항을 테스트한 후, 수정 사항에 대한 질문이 있거나 다른 의견이 있으면 알려주십시오.
4. 코드에 대한 검토를 위해 PR을 제출하면 팀의 누군가가 살펴보고 피드백을 제공할 것입니다. 후속 조치 꼭 해! 저희가 리뷰에 남기는 질문이나 코멘트에 답변하지 않으셔서 포기하신 것 같으면 PR을 종료하겠습니다. PR이 새 기능을 추가하는 경우 '새로운 기능' 태그를 요청하는 것이 좋습니다. 'What's New' 태그를 사용하면 이미지를 포함하여 홍보 본문에 있는 모든 텍스트가 [Hubs 웹사이트](https://hubs.mozilla.com/whats-new)에 추가됩니다. 특히 GIF가 너무 고마워요. [이 풀 요청](https://github.com/mozilla/hubs/pull/1536)에서는 'What's New' 태그를 사용하는 방법에 대한 예를 보여 줍니다.
5. 축하하세요! 🎉 귀하는 웹을 개방적이고 접근하기 쉬운 소셜 환경으로 만들기 위한 Mozilla의 임무를 돕고 있습니다!



### 🐛 문제 해결 및 기능 요청
플랫폼에 대한 버그, 기능 요청 및 질문을 보고하면 팀이 작업 우선순위를 정하고 허브를 개선하는 데 도움이 됩니다. 사용자가 제출한 문제를 환영하며 버그 보고 프로세스에 GitHub의 기본 제공 문제 추적을 사용합니다.

* 버그를 신고할 경우 버그를 보았을 때 사용하던 운영 체제, 기기, 브라우저에 대한 정보를 포함시켜 주십시오. _예: Windows 10에서 볼 수 있는 Firefox 66.0.5 on Oculus Rift_

* 디테일이 많을수록 좋습니다! 여러 브라우저 또는 데스크톱과 모바일 모두에서 버그를 복제할 수 있다면, 그 정보는 우리가 알고 있는 데 도움이 됩니다.

* 적절한 시점에 캡처해 주시면 감사하겠습니다 📷

우리는 인바운드 문제가 적시에 제출될 수 있도록 최선을 다해 대응하고 태그를 지정하겠습니다. 버그는 다음 표에 따라 우선 순위가 지정됩니다.

| Priority  | Criteria | Example |
| ------------- | ------------- | -------------
| P0 | Needs immediate attention. Affects many users and their ability to use core product functionality of connecting to rooms with other users. | No one can enter any Hubs rooms with any VR headset |
| P1 | Address as quickly as possible. Affects many users and their ability to use a common product feature. Workaround is difficult or unavailable. | Teleporting doesn't work for users on Quest with the Oculus browser. |
| P2 | Address when able. Affects some users regularly but mildly, or is a hard-to-repro failure seen rarely that is fixed with an easy workaround. | Lobby camera in Camera mode does not show emojis shared from iOS. <br><br> One user reports getting disconnected after ten minutes in a particular room, but no one else experiences it and they are able to refresh to re-enter.
| P3 | Address when able after P2 bugs are fixed. Affects a small set of users inconsistently in a non-breaking way with an easy workaround. | Every so often, a standalone VR headset will show up as a mobile phone in the user list. Refreshing fixes it. |

### 🎨 3D 아트
3D 아티스트로서 Hubs를 사용하는 작업을 지원하려면 Creative Commons 라이센스로 컨텐츠를 만들고 릴리스하거나 [Spoke 웹 편집기](https://hubs.mozilla.com/spoke)를 사용하여 장면을 만들어 리믹스 가능한 환경으로 릴리스하는 것을 고려해 보십시오. 웹에서 잘 실행되도록 최적화된 폴리곤 수가 적은 콘텐츠는 매우 유용합니다! 특히 다양한 경험을 담아내는 장면들을 많이 보고 싶습니다.

### 📜 설명서
허브에 대한 설명서는 프로젝트의 [GitHub Hubs Wiki](https://github.com/mozilla/hubs/wiki) 섹션)에서 호스팅됩니다. 스포크 관련 설명서는 [GitHub Speak Wiki](https://github.com/mozilla/spoke/wiki)에서 호스팅됩니다. Wiki에 대한 수정 또는 추가 페이지에 대한 기여는 제안된 내용과 함께 해당 리포지토리의 제안으로 문제를 제출해 주십시오. 모든 내용이 좋아 보일 때 검토 후 Wiki에 추가해 드리겠습니다!

### 🌐 현지화
허브는 현재 en-US 전용이지만, 현지화 노력을 원하시면 GitHub 이슈를 통해 제안서를 제출하시면 거기서부터 함께 작업하도록 하겠습니다.

### 🦆 일반 도움말
우리는 공동체의 힘을 믿고 있습니다. 그리고 모든 형태의 지원이 여기에 설명된 것으로부터 오는 것은 아니라는 것을 알고 있습니다. 공개 [Discord chat server](https://discord.gg/wHmY4nd)에 방문하여 대화하고 참여 방법에 대해 물어보십시오! 당사에 문의하는 다른 방법은 [도움말 페이지](.help.html)를 참조하십시오.

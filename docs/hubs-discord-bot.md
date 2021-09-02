---
id: hubs-discord-bot
title: 디스코드 봇(Discord Bot)
---

## About
[Hubs Discord Bot](https://hubs.mozilla.com/discord) 을 사용하면 허브 룸을 Discord 대화 서버에 쉽게 연결할 수 있습니다. 허브 룸이 디스코드 채널과 연결된 경우 사용자에게 디스코드 역할에 따라 허브 룸에서 기능이 할당됩니다. 예를 들어, 불화 소유자 및 진행자는 허브 룸의 설정을 변경하고 룸의 사용자를 조정할 수 있습니다.

![Hubs Discord bot](img/discord-bot.jpeg)

## Features
* 허브 룸에 가입한 사용자를 인증할 수 있습니다.
* 허브 룸에서 작성한 텍스트 채팅 및 사진 레코드를 저장합니다.
* 누군가가 허브 룸에 가입하거나 나갈 때 Discord 채널에 게시합니다.

<iframe width="560" height="315" src="https://www.youtube.com/embed/5HtRJolThZ8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Set Up 

여러분의 룸이 hubs.mozilla.com에서 호스팅되는 경우:

1. [여기를 클릭](https://discordapp.com/oauth2/authorize?client_id=509129921826914304&permissions=536890368&scope=bot) 을 클릭하여 허브 디스코드 봇을 디스코드 서버로 초대합니다.
2. 허브를 실행할 채널을 선택하거나 새 채널을 만듭니다.
3. 이러한 채널에 대해 로봇에게 적절한 권한(아래 참조)을 부여합니다.
3. 실행할 채널에 "허브"라는 이름의 웹 후크를 만듭니다. (채널의 설정-->통합으로 이동) 이것을 사용할 것이다.
   채팅을 브리지하고 허브 상태 업데이트를 보내기 위해 연결합니다.
4. 봇을 사용해보세요! 봇이 있는 채널에 !hubs를 입력하면 몇 가지 작업을 볼 수 있습니다.

허브 클라우드를 사용하십니까? [Hubs Cloud 서버에 봇을 추가](hubs-cloud-discord-bot.md) 할 수 있습니다.

### User Permission

룸의 사용자 권한은 봇이 바인딩된 채널에서 자신의 디스코드 역할이 가진 권한을 상속합니다. 구체적으로

- 룸에 들어가려면 "채널 보기" 권한이 있어야 합니다.
- 진행자가 되려면 "Kick Members" 권한(및 "채널 보기")이 있어야 합니다.
   - 진행자는 허브 룸에서 구성원을 발로 차거나 ㅗ음소거할 수 있습니다.
   - 진행자는 객체의 생성 및 조작, 동영상 그리기 및 공유가 룸 설정에서 꺼져 있더라도 가능합니다.
   - 참고: 확인된 전자 메일이 있는 불화 사용자만 진행자가 될 수 있습니다.
- 객실 소유자가 되려면 "채널 관리"가 있어야 합니다(및 "멤버 킥 및 "채널 보기").
   - 룸 소유자는 룸의 이름과 장면을 변경하고, 다른 룸 설정을 수정하고 룸을 닫을 수 있습니다.
   - 참고: 확인된 전자 메일이 있는 불화 사용자만 룸 소유자가 될 수 있습니다.
- 불일치 권한은 전체적으로 불일치 역할 또는 해당 사용자/역할에 대한 특정 채널에 부여된 권한을 통해 설정할 수 있습니다.


### Bot Permission

봇이 작동하려면 몇 가지 권한이 필요합니다.
* 채널에 연결된 허브 룸과 채널 내에서 전송되는 메시지 간에 브리지를 하려면 "메시지 보내기", "메시지 읽기" 및 "임베드 링크"가 필요합니다.
* "웹훅 관리"는 봇이 브리징 채팅을 위해 웹훅을 찾아 사용하기 위해 필요합니다.
* 봇이 채널 주제 및 브리지 채팅을 설정하기 위해서는 "채널 관리"가 필요합니다. 참고: 서버에 봇을 추가할 때 전체적으로 이 권한을 요청하지 않습니다. 대신 특정 그룹이나 채널의 봇에 이 권한을 부여하는 것이 좋습니다.

### Commands

다음 기능은 현재 봇 명령과 Undiscond 서버에서 사용자가 액세스할 수 있는 방법에 대해 간략히 설명합니다.

🦆`!hubs` - 현재 연결된 룸에 대한 정보를 나열합니다.

🦆`!hubs create` - 기본 허브 룸을 만들고 채널 항목에 해당 URL을 입력합니다. '!hubs create'로 만든 룸은 이 Discord 채널의 중재 권한을 상속하고 이 채널의 Discord 사용자만 룸에 가입할 수 있습니다.

🦆`!hubs create [environment URL] [name]` - 지정한 환경과 이름으로 새 룸을 만들고 채널 항목에 URL을 입력합니다. 유효한 환경 URL에는 glTF, GLB 및 스포크 장면 페이지가 포함됩니다.

🦆`!hubs help` - 허브 봇 사용 방법에 대한 정보를 가져옵니다.

🦆`!hubs stats` - 룸 사용량에 대한 일부 요약 통계를 표시합니다.

🦆`!hubs remove` - 항목에서 회의실 URL을 제거하고 허브와의 디스코드 채널 브리징을 중지합니다.

🦆`!hubs notify set [datetime]` - Sets a one-time notification to notify @​here to join the room at some future time.

🦆`!hubs notify clear` - 보류 중인 알림을 모두 제거합니다.


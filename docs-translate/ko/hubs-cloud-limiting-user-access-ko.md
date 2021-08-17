---
id: hubs-cloud-limiting-user-access
title: Limiting User Access to your Hub
sidebar_label: Limiting Access
---

이 안내서에서는 **계정만 액세스**(관리자가 전자 메일 목록에서 만든 계정) 또는 **허브 불일치 봇**을 사용하여 허브와 룸을 잠그는 방법을 설명합니다.

## 계정이 없는 사용자를 거부하도록 허브 구성

인스턴스를 잠그려면 관리자가 아닌 사용자에 대한 계정 생성을 제거하고 계정 액세스에만 인스턴스를 잠급니다. 계정에 인스턴스를 잠그기 전이나 후에 허브 관리자로서 이메일 목록에 대한 계정을 생성하거나 기존 계정을 사용하지 않도록 설정할 수 있습니다.

1. **(계정 관리) 승인된 전자 메일에 대한 계정 만들기**
1. Admin Panel > Accounts 메뉴 - [_NetworkError?_](hubs-cloud-aws-troubleshooting-ko.md#in-my-hubs-admin-panel-i-see-networkerror-or-not-found-page-or-no-data-populates-in-any-of-the-admin-menus)
2. 일괄 계정 만들기(선택적인 ID 포함)
- 단일 예: 이메일1, 아이덴티티1
- 여러 가지 예: e-메일1, identity1, e-메일2, e-메일3, 공백이 있는 identity3, e-메일4
2. **(계정 관리) "비활성화" 계정을 통해 기존 계정에 대한 액세스 제거**
1. Admin Panel > Accounts 메뉴 - [_NetworkError?_](hubs-cloud-aws-troubleshooting-ko.md#in-my-hubs-admin-panel-i-see-networkerror-or-not-found-page-or-no-data-populates-in-any-of-the-admin-menus)
2. "이메일 주소로 계정 찾기" 텍스트 상자에 이메일 주소를 붙여넣습니다.
3. "FIND"를 선택합니다.
4. "상태" 드롭다운을 "비활성화"로 변경합니다.
5. "저장"을 클릭합니다.
3. **비관리자에 대한 계정 생성 제거*
1. 관리 패널 > 설정: 앱 설정 - [_찾을 수 없는 페이지?_](hubs-cloud-aws-troubleshooting-ko.md#in-my-hubs-admin-panel-i-see-networkerror-or-not-found-page-or-no-data-populates-in-any-of-the-admin-menus)
2. "기능" 탭을 선택합니다.
3. "계정 만들기 사용 안 함" 사용
4. **계정만 액세스할 수 있도록 허브 잠금*
1. 관리 패널 > 설정: 앱 설정 - [_찾을 수 없는 페이지?_](hubs-cloud-aws-troubleshooting-ko.md#in-my-hubs-admin-panel-i-see-networkerror-or-not-found-page-or-no-data-populates-in-any-of-the-admin-menus)
2. "룸" 탭을 선택합니다.
3. "룸 액세스에 계정 필요" 사용

**축하합니다. 인스턴스를 성공적으로 잠궜습니다!**

## 불일치 Bot OAuth 통합

- 허브 불협화음 봇을 통해 룸을 만들면 룸이 불협화음과 채널로 보안 컨텍스트에 바인딩됩니다.
- 객실별 접근 또는 채널별 접근: 사용자에게 해당 룸 바인딩 채널에 대한 액세스 권한이 없는 경우 액세스 권한이 없습니다.
- 사용자의 ID가 Discord에서 자신의 ID와 연결됩니다.

[디스코드 봇에 대해 더 알아보고 싶다면? 클릭!](hubs-discord-bot-ko.md)

[여러분의 허브 클라우드에 디스코브 봇을 사용할 수 있는지 알아보고 싶다면? 클릭!](hubs-cloud-discord-bot-ko.md)

## Room Access Settings

개별 룸은 [룸 액세스 설정](hubs-room-settings-ko.md#room-access)을 통해 액세스를 제한할 수도 있습니다.
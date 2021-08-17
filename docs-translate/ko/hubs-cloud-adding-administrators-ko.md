---
id: hubs-cloud-adding-administrators
title: Adding Administrators
sidebar_label: Adding Administrators
---

허브의 관리자에게는 모든 액세스 권한이 있습니다. 다음 작업을 수행할 수 있습니다.

- [Admin Console](hubs-cloud-getting-started-ko.md) 에 액세스하여 시스템 설정 및 앱 구성을 업데이트합니다.
- [콘텐츠 라이브러리 관리](hubs-cloud-managing-content-ko.md) 및 [콘텐츠 가져오기](hubs-cloud-importing-content-ko.md) 를 수행합니다.
- [Scene Editor](spoke-creating-projects-ko.md) 에 액세스하여 설정에 상관없이 새 장면을 만들고 게시할 수 있습니다.

다른 계정 관리 권한을 할당하려면 해당 계정 ID를 얻은 다음 관리 콘솔에서 관리자 권한을 할당해야 합니다.

### 계정 ID 조회

허브 클라우드는 개인 식별 정보를 데이터베이스에 저장하지 않습니다. 다른 사용자의 계정 ID를 가져와 관리자로 만들려면 다음 단계를 수행해야 합니다.

- 홈페이지의 "로그인" 링크를 통해 계정에 로그인합니다.
- 룸 페이지로 이동하거나 새 룸을 작성합니다.
- 브라우저에 사용할 개발자 도구를 엽니다. [Chrome](https://developers.google.com/web/tools/chrome-devtools) 또는 [Firefox](https://developer.mozilla.org/en-US/docs/Tools) 의 사용 방법.
- 콘솔 로그에서 거의 시작 단계에 이르면 'XXXXXXXXXXX 계정에 로그인'처럼 보이는 줄을 찾아야 합니다. 여기서 'XXXXXXXXXXXX'는 일련의 숫자입니다. 이 계정 ID입니다.
- 계정 ID를 공유하는 것이 안전합니다. 계정 ID를 가진 다른 사용자는 공유하면 활동에 대한 액세스 권한이나 가시성을 얻지 못합니다.

### 관리자 액세스 권한 부여

액세스 권한을 부여하려는 계정 ID가 있으면 관리 콘솔의 **계정** 섹션으로 이동하십시오.

![허브 클라우드 계정](img/hubs-cloud-accounts.jpeg)

여기서 **ID 검색**에 관리자로 변경할 계정 ID를 입력한 다음 편집을 클릭합니다.

![허브 클라우드 찾기 계정](img/hubs-cloud-find-account.jpeg)

그런 다음 계정을 **관리**로 설정하고 **저장**:

![Hubs Cloud Select Admin](img/hubs-cloud-select-admin.jpeg)
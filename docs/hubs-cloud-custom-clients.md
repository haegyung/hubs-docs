---
id: hubs-cloud-custom-clients
title: 커스텀 클라이언트 생성하고 배포하기
sidebar_label: 커스텀 클라이언트 생성하고 배포하기
---

이제 작동하는 Hubs Cloud 인스턴스가 있으므로 [Hubs Client](https://hubs.mozilla.com) 의 사용자 지정 버전을 직접 만들고 배포할 수 있습니다! [포크 저장소](https://github.com/mozilla/hubs) 에 코드를 변경한 다음 라이브 인스턴스에 배포합니다.

사용자 지정 클라이언트 코드는 허브 클라우드 서버와 호환되는 허브 클라이언트 변경 사항을 호스트하는 ['branch-cloud' branch](https://github.com/mozilla/hubs/tree/hubs-cloud) 에 기반합니다. 업그레이드로 인한 변경 내용은 분기의 병합된 PR에 표시됩니다.

## 포크 및 업스트림으로 사용자 지정 클라이언트 설정

### 허브 포크를 설정합니다. repo

포크는 github 계정에 있는 허브 리포지토리의 복사본입니다.

1. [github 계정](https://github.com) 을 만듭니다.
1. https://github.com/mozilla/hubs으로 이동합니다.
1. 오른쪽 상단 모서리에 있는 "포크" 버튼을 클릭합니다.
1. 새로 포크된 레포를 선택합니다(왼쪽 상단에 "mozilla/hubs"가 아니라 "[your github username]/hubs"로 표시되어야 함).
1. 녹색 "코드 버튼"을 클릭하여 Repo에 대한 **clone** 옵션을 엽니다.
1. **copy** URL. 다음 단계를 위해 복사된 URL이 필요합니다(처음 시작하는 모든 사용자는 HTTPS 사용).

그런 다음 로컬 컴퓨터에 이 복제본을 복제합니다.

이 단계에는 **git**이(가) 설치되어 있어야 합니다.

다음 명령을 실행합니다. 컴퓨터에 포크 리포(forked repo)를 설정합니다.

```bash
# Clone your forked hubs repository locally
git clone <The url copied in Step 6>
cd hubs
git checkout hubs-cloud # to move to the hubs-cloud branch
```

"hubs-cloud" 분기는 "마스터" 분기로 작동해야 합니다. Hubs Cloud 클라이언트는 hubs-cloud 분기와 호환되기 때문입니다. 코드 변경의 경우 이 분기를 분기합니다.

### Setup upstream remotes

업스트림 원격 리포지토리는 원래 허브 리포지토리를 가리키므로 허브 리포지토리가 업데이트되면 포크가 이러한 변경 사항을 가져와 최신 상태로 유지할 수 있습니다.

다음으로 원본 허브 리포지토리를 원격 업스트림 리포지토리로 설정하여 분기를 최신 상태로 유지합니다.

```bash
# Connect to the mozilla managed hubs repository
git remote -v # should only print out "origin" your forked hubs repository url
git remote add upstream https://github.com/mozilla/hubs.git
git remote -v # now should see both origin + upstreams
```

다음과 같이 인쇄된 것을 볼 수 있습니다.

```
origin <The url copied in Step 6>
origin <The url copied in Step 6>
upstream https://github.com/mozilla/hubs.git (fetch)
upstream https://github.com/mozilla/hubs.git (push)
```

성공했어요! 머신에 포크 및 업스트림 리포지토리를 설정했습니다.

## Run your custom client

이제 머신에 Hubs 리포지토리가 분기되고 복제되었으므로 일부 종속성을 설치해야 합니다. 먼저 [Node JS](https://nodejs.org/en/) 가 설치되어 있어야 합니다. 그런 다음 허브 종속성을 설치합니다. 항상 `package-lock.json` 파일에 있는 모듈 버전을 사용하려면 `npm install` 대신 `npm ci`를 사용하는 것이 좋습니다.

```bash
npm ci
```

Hubs Cloud 스택에 대해 클라이언트를 실행하고 여기에 코드를 배포하려면 인증을 받아야 합니다. `npm run login`을 실행하고 지침에 따라 인증하세요(경고: `npm login`이 아님).

```bash
npm run login
```

로그인하면 `npm start`로 로컬 개발 서버를 시작할 수 있습니다. 로컬 개발 서버는 자동으로 자바스크립트 프로젝트를 다시 빌드하고 변경 시 페이지를 새로 고칩니다. 또한 모든 API 요청, 게임/음성 네트워킹 및 관리자 패널에서 설정한 구성 가져오기를 위해 Hubs Cloud 서버에 연결합니다.

```bash
npm start
```

클라이언트 코드를 변경한 후 `npm run deploy` 명령을 사용하여 변경 사항을 Hubs Cloud 스택에 배포할 수 있습니다. 완료되면 사이트에서 변경 사항을 실시간으로 볼 수 있습니다! `npm run deploy` 명령을 실행하는 데 시간이 걸릴 것으로 예상하십시오.

```bash
npm run deploy
```

> 참고: 배포를 실행할 때 webpack-dev-server(`npm start`)가 실행되고 있지 **않습니다**. 이로 인해 빌드 프로세스에서 충돌이 발생할 수 있습니다.

`npm run deploy`가 "관리 콘솔 구축"에서 20분 이상 중단되는 경우:

1. 중지하고 `npm run deploy`를 다시 시작합니다(때로는 배포에 2번의 시도가 필요함). 
1. 여전히 "관리 콘솔 구축"에서 중단되는 경우 관리 콘솔 구축에 문제가 있을 수 있습니다.

To test that your admin panel build is working, in your hubs repo root, try:

1. `cd admin` - _be in the admin/ directory_
1. `npm ci`
1. `npm run build`
1. If these commands succeed, try the `npm run deploy` command again.
1. If these commands fail, try `npm ci` and the `build` commands one more time, then fix the error in your code, then try these commands again.

언제든지 Hubs 클라이언트를 Mozilla 업스트림 버전의 클라이언트를 사용하도록 되돌리려면 `npm run undeploy`를 실행하세요.

```bash
npm run undeploy
```

## 사용자 지정 클라이언트를 최신으로 업데이트

hubs-cloud 분기에 대한 최신 변경 사항을 포크 + 코드로 가져와야 합니다.

Hubs Cloud는 매월 업데이트되므로 Hubs Cloud 사용자 지정 클라이언트가 최신 상태인지 확인하려면 변경 사항이 있는 경우 정기적으로 업데이트해야 합니다.
자세한 내용은 [허브 클라우드 변경 로그](https://github.com/mozilla/hubs-cloud/blob/master/CHANGELOG.md) 를 참조하세요.
업스트림 mozilla 허브 저장소에 대한 원격을 확인하십시오. 그렇지 않은 경우 위의 "리모컨 설정" 단계를 따르십시오.

```bash
git remote -v # should see origin AND upstream fetch/push .git urls
```

업스트림 Mozilla 허브 클라우드 분기를 가져와 분기에 병합합니다. Hubs Cloud 업데이트 이후에 특히 중요합니다.

```bash
git fetch upstream # Gets all updates for your mozilla/hubs repo
git checkout <your current hubs-clod branch>
git merge upstream/hubs-cloud # Merges updates from the hubs-cloud branch into your current branch
```

충돌을 해결합니다. 그런 다음 업데이트를 배포합니다.

```bash
npm run deploy
```

축하 해요! 이제 클라이언트가 최신 상태로 업데이트되었습니다.
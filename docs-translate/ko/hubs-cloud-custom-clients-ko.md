---
id: hubs-cloud-custom-clients
title: Creating and Deploying Custom Clients
sidebar_label: Custom Clients
---

이제 작동하는 Hubs Cloud 인스턴스가 있으므로 [Hubs Client](https://hubs.mozilla.com) 의 사용자 지정 버전을 직접 만들고 배포할 수 있습니다! [포크 저장소](https://github.com/mozilla/hubs) 에 코드를 변경한 다음 라이브 인스턴스에 배포합니다.

사용자 지정 클라이언트 코드는 허브 클라우드 서버와 호환되는 허브 클라이언트 변경 사항을 호스트하는 ['branch-cloud' branch](https://github.com/mozilla/hubs/tree/hubs-cloud) 에 기반합니다. 업그레이드로 인한 변경 내용은 분기의 병합된 PR에 표시됩니다.

## 포크 및 업스트림으로 사용자 지정 클라이언트 설정

### 허브 포크를 설정합니다. repo

포크는 github 계정에 있는 허브 리포지토리의 복사본입니다.

1. [github 계정](https://github.com)을 만듭니다.
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

The "hubs-cloud" branch should function as the "master" branch. Since Hubs Cloud clients are compatible with the hubs-cloud branch. For code changes, branch off this branch.

### Setup upstream remotes

Upstream remote repository points to the original hubs repo, so when the hubs repo get updated, your fork can pull in those changes and stay up to date.

Next, setup the original hubs repo as a remote upstream repository to keep your branches up to date.

```bash
# Connect to the mozilla managed hubs repository
git remote -v # should only print out "origin" your forked hubs repository url
git remote add upstream https://github.com/mozilla/hubs.git
git remote -v # now should see both origin + upstreams
```

You should see this printed:

```
origin <The url copied in Step 6>
origin <The url copied in Step 6>
upstream https://github.com/mozilla/hubs.git (fetch)
upstream https://github.com/mozilla/hubs.git (push)
```

Success! You've set up your fork and upstream repositories on your machine.

## Run your custom client

Now that you have the Hubs repository forked and cloned on your machine, you'll need to install some dependencies. You'll need [Node JS](https://nodejs.org/en/) installed first. Then you'll install the hubs dependencies. We recommend using `npm ci` instead of `npm install` so that you always use the versions of modules in the `package-lock.json` file.

```bash
npm ci
```

To run the client against your Hubs Cloud stack and deploy code to it, you'll need to be authenticated. Run `npm run login` and follow the instructions to authenticate (Warning: NOT `npm login`).

```bash
npm run login
```

Once you are logged in you can start up the local development server with `npm start`. Your local development server will automatically rebuild your javascript project and refresh the page when you make changes. It will also connect to your Hubs Cloud server for all API requests, game/voice networking, and fetching configurations set in your admin panel.

```bash
npm start
```

After you've made changes to your client's code you can deploy the changes to your Hubs Cloud stack with the `npm run deploy` command. Once that has finished you should see the changes live on your site! Please expect the `npm run deploy` command to take a while.

```bash
npm run deploy
```

> Note: When running a deploy, ensure webpack-dev-server (`npm start`) is **not** running. This may cause conflicts in the build process.

If `npm run deploy` hangs on "Building Admin Console" for more than 20 minutes:

1. Stop then restart `npm run deploy` (sometimes it takes 2 tries to deploy)
1. If it still hangs on "Building Admin Console" you may have a problem building the Admin Console

To test that your admin panel build is working, in your hubs repo root, try:

1. `cd admin` - _be in the admin/ directory_
1. `npm ci`
1. `npm run build`
1. If these commands succeed, try the `npm run deploy` command again.
1. If these commands fail, try `npm ci` and the `build` commands one more time, then fix the error in your code, then try these commands again.

If at any point you want to revert your Hubs client back to using the Mozilla upstream version of the client, run `npm run undeploy`.

```bash
npm run undeploy
```

## Update your Custom Client to the latest

You need to pull in the latest changes to the hubs-cloud branch into your fork + code.

Hubs Cloud is updated every month, to ensure your Hubs Cloud custom client is up to date, you should do this regularly in case of changes. See [Hubs Cloud Changelog](https://github.com/mozilla/hubs-cloud/blob/master/CHANGELOG.md) for details.

Check your remotes for the upstream mozilla hubs repository. If not, follow "Setup remotes" steps above.

```bash
git remote -v # should see origin AND upstream fetch/push .git urls
```

Fetch and merge the upstream Mozilla hubs-cloud branch into your branch. Especially important after a Hubs Cloud update.

```bash
git fetch upstream # Gets all updates for your mozilla/hubs repo
git checkout <your current hubs-cloud branch>
git merge upstream/hubs-cloud # Merges updates from the hubs-cloud branch into your current branch
```

Resolve conflicts. Then, deploy the updates.

```bash
npm run deploy
```

Congrats! Your client is now updated to the latest and live!

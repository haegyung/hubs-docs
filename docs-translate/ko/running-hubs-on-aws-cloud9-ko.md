---
id: running-hubs-on-aws-cloud9
title: Running Hubs on AWS cloud
---

이슈: https://github.com/mozilla/hubs/issues/411

- 새로운 환경을 만듭니다. yarn은 많은 메모리를 소모할 수 있기 때문에 적어도 m3.medium 인스턴스가 필요할 것입니다.
- Upgrade nodejs: `$ nvm install 9`
- [Install yarn](https://yarnpkg.com/en/docs/install#centos-stable)
- `$ git clone https://github.com/mozilla/hubs` 을 실행하세요
- Setup Hubs:
  - `$ cd hubs`
  - `$ yarn install`
- `webpack.config.js` 를 수정해서 Cloud9 for Hubs 설정하기
  - `devServer` 아래에 `https` 를 `false` 로 설정
  - `devServer` 에서 `disableHostCheck: true` 추가
- `$ yarn start` 실행하기
- "미리보기(Preview)" 메뉴 항목을 클릭한 다음 "실행 중인 애플리케이션 미리보기" 를 클릭하여 실행 중인 앱을 미리 봅니다.

Hubs 랜딩 페이지의 룸 생성 대화 상자는 AWS 도메인에서 액세스할 수 없는 레티큘럼 서버와 통신을 시도하기 때문에 작동하지 않습니다. 대신 Hubs 룸에 직접 액세스해야 합니다.

`https://ENVIRONMENT_ID.vfs.cloud9.REGION_ID.amazonaws.com/hub.html?allow_multi&room=test-cloud9`

또한 직접 설정 및 구성하지 않는 한 Cloud9 인스턴스는 기본적으로 음성 및 데이터 전송을 위해 WebRTC 서버를 사용한다는 점에 유의하십시오.
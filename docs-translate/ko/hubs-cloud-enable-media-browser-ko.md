---
id: hubs-cloud-enable-media-browser
title: Recipe: 3rd Party Integrations
sidebar_label: Recipe: 3rd Party Integrations
---
허브에는 방문자가 Media Browser를 사용하여 룸에 생성할 수 있는 유용한 콘텐츠를 검색하는 통합 기능이 포함되어 있습니다. [Sketchfab](https://www.sketchfab.com), [Google Poly](https://poly.google.com) 등 다양한 사이트와 검색 엔진을 기본적으로 지원합니다. 또한 트윗을 통해 허브에서 직접 컨텐츠를 공유할 수도 있습니다.

![Hubs Cloud Media Browser](img/hubs-cloud-media-browser.jpeg)

그러나 허브에 대해 이러한 다양한 컨텐츠 탭을 활성화하기 전에 통합을 활성화하는 데 필요한 API 키를 추가해야 합니다.

[관리 콘솔](hubs-cloud-getting-started-ko.md)에서 **서버 설정**을 선택합니다.

![Hubs Cloud](img/hubs-cloud-server-settings.jpeg)

**API Keys** 아래에 이러한 기능을 활성화하도록 설정할 수 있는 키가 있습니다.

### Google 폴리

[Google Poly API Guide](https://developers.google.com/poly/develop/api)에 따라 키를 받으십시오.

### 스케치 팹

[Sketchfab](https://www.sketchfab.com) 계정을 만든 다음 [API 토큰 찾기](https://help.sketchfab.com/hc/en-us/articles/202600683-Finding-your-API-Token))를 만듭니다.

##GIF 수

[Tenor GIF API](https://tenor.com/gifapi)에 가입하여 무료 API 키를 받으십시오.

## 비디오 & 이미지

[Azure Cognitive Services](https://azure.microsoft.com/en-us/services/cognitive-services/)) 계정을 만들고 [Bing Video Search API](https://azure.microsoft.com/en-us/services/cognitive-services/bing-video-search-api/) 및 [Bing Image Search API](https://azure.microsoft.com/en-us/services/cognitive-services/bing-image-search-api/))를 활성화합니다.

1. [portal.azure.com](https://portal.azure.com)에서 Azure 계정에 가입합니다.

2. Azure에 로그인한 후 사용 가능한 서비스를 검색하고 새로운 인지 서비스 오퍼링을 만듭니다. 배포할 영역 및 응용 프로그램 그룹을 지정해야 합니다.

3. 서비스 회전 속도가 완료되면 API 키 탭으로 이동합니다.

4. Azure 포털에서 API 키 중 하나를 복사합니다.

5. 허브 클라우드 관리 패널에서 '서버 구성' 패널로 이동하여 'API 키' 탭을 엽니다.

6. Cognitive Services API 키를 'Bing Search' 텍스트 입력에 붙여넣습니다.

7. 변경 내용을 저장하여 비디오/이미지 검색을 허브 클라우드 미디어 브라우저에 배포합니다.

참고: 이러한 API는 월 1000건 이상의 트랜잭션에서 **무료**입니다. Azure 계정의 Hubs Cloud 인스턴스에 의해 사용료가 청구됩니다.

### Twitch

[Twitch Developer](https://dev.twitch.tv/) 에서 회원으로 등록하고 [Get a Client ID](https://dev.twitch.tv/docs/v5) 링크에서 클라이언트 아이디를 발급받으세요.

### Twitter

방문객이 촬영한 동영상과 사진을 트윗으로 보낼 수 있도록 하려면 [Twitter Developer](https://developer.twitter.com/) 에 등록하고 액세스 토큰과 암호를 얻을 수 있는 응용 프로그램을 만드십시오.

### Analytics and Error Logging

취합된 페이지를 추적 및 오류 보고를 할 수 있도록 [Google Analytics](https://analytics.google.com/analytics/web/) Tracking 아이디와 [Sentry](https://sentry.io/welcome/) DNS 들을 추가하여 설정할 수 있도록 합니다. 룸이나 아바타 및 Scene 식별자가 포함된 전체 URL은 분석 서비스로는 전송되지 않습니다.
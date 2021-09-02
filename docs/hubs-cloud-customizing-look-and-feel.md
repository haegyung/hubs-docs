---
id: hubs-cloud-customizing-look-and-feel
title: 룩앤필(Look and feel) 커스터마이징 하기
sidebar_label: 룩앤필(Look and feel) 커스터마이징 하기
---

# 허브 사용자 인터페이스에 대한 공지사항
2021년 1월 25일, 우리는 hubs.mozilla.com에서 허브의 사용자 인터페이스에 대한 중요한 업데이트를 발표했습니다. 이 변경 사항은 2021년 3월 25일 이후가 되어야 새로운 허브 클라우드 배포에서 적용됩니다. 허브 클라우드에 업데이트가 릴리스(releases)되기 전에 허브 클라우드 배포 관리자가 자체 릴리스를 고려하고 새 UI로 업데이트하기 위한 작업 계획을 결정할 것을 권장합니다.

* 허브 클라우드 클라이언트의 모양과 느낌을 변경하지 않은 경우 3월 25일 이후에 허브 클라우드 인스턴스가 업데이트되어 새로운 UI가 제공됩니다.

* Hubs Cloud 관리 콘솔 내에서 사용자 고유의 로고나 새로운 색상을 추가한 경우, 새로운 UI에 적용됩니다. 업데이트가 실행 중일 때 색상 선택 사항을 검토하고 확인해야 할 수도 있습니다.

* 스타일에 사용자 정의 CSS 시트를 사용하는 경우, 새로운 사용자 인터페이스 스타일을 고려하여 이 CSS 파일을 수정해야 할 수도 있습니다. 추가 정보는 다음 주에 이 페이지를 확인하십시오.

* 사용자 지정 허브 클라우드 클라이언트를 실행하는 경우 새 업데이트가 자동으로 수신되지 않습니다. 새 UI를 자동으로 가져오려면 클라이언트 변경 사항을 클라이언트 코드베이스의 고유한 포크로 가져오거나 허브 클라우드 사용자 지정 클라이언트의 배포를 취소해야 합니다.

* 새 UI로 업데이트하지 않으려면 허브 클라우드 인스턴스에 사용자 지정 클라이언트를 배포할 수 있습니다. 이렇게 하면 허브 클라우드 인스턴스가 자동 업데이트 경로에서 제거되고 새로운 허브 클라우드 업데이트를 릴리스할 때 클라이언트에 대한 업데이트 수신이 중지됩니다.

Hubs 클라이언트의 이전 버전에서 새 UI로 쉽게 전환할 수 있도록 도구 및 설명서를 제작 중입니다. 이 페이지에서 업데이트 및 추가 정보를 확인하거나 불일치 허브 클라우드 채널을 확인하십시오.

# Deprecated: Updating the look and feel for the original Hubs Client UI

사용자 지정 색상과 브랜드를 추가하여 허브의 모양과 느낌을 완전히 사용자 정의할 수 있습니다.

먼저 [관리 콘솔(Admin Console)](hubs-cloud-getting-started.md)을 열고 **앱 설정**:

![허브 클라우드 앱 설정](../website/static/img/hubs-cloud-app-settings.jpeg)

여기서 **Images**:를 선택하여 허브의 모든 다양한 이미지를 교체할 수 있습니다.

![허브 클라우드 이미지 설정](../website/static/img/hubs-cloud-image-settings.jpeg)

결과는? 랜딩 페이지 및 로딩 페이지의 브랜딩:

![Hubs Cloud Custom Branding](../website/static/img/hubs-cloud-custom-branding.png)

또한 완전히 사용자 정의된 색상표를 추가할 수 있습니다. **테마**로 이동하여 아래 예제와 같이 원하는 테마를 설명하는 JSON 배열을 붙여넣으십시오.

```json
[
  {
    "id": "hubs-default",
    "default": true,
    "name": "Hubs Default",
    "variables": {}
  },
  {
    "id": "hubs-dark-mode",
    "darkModeDefault": true,
    "name": "Hubs Dark Mode",
    "variables": {
      "text1-color": "#ffffff",
      "text1-color-hover": "#E7E7E7",
      "text1-color-pressed": "#DBDBDB",
      "text2-color": "#E7E7E7",
      "text2-color-hover": "#F5F5F5",
      "text2-color-pressed": "#DBDBDB",
      "text3-color": "#BBBBBB",
      "text3-color-hover": "#C7C7C7",
      "text3-color-pressed": "#ADADAD",
      "text4-color": "#E7E7E7",
      "basic-color": "#3A4048",
      "basic-color-hover": "#4B5562",
      "basic-color-pressed": "#636F80",
      "basic-border-color": "#5D646C",
      "secondary-color": "#3A4048",
      "secondary-color-hover": "#5D646C",
      "secondary-color-pressed": "#282C31",
      "background1-color": "#15171B",
      "background2-color": "#282C31",
      "background3-color": "#3A4048",
      "background4-color": "#5D646C",
      "loading-screen-background": "radial-gradient(50% 50% at 50% 50%, #15171B 0%, #282C31 100%)",
      "border1-color": "#3A4048",
      "border2-color": "#5D646C",
      "border3-color": "#5D646C",
      "outline-color": "#ffffff",
      "action-color": "#ff3464",
      "action-color-highlight": "#ff74a4",
      "background-hover-color": "#aaaaaa",
      "notice-background-color": "#2f80ed"
    }
  }
]
```

논리(Bool) 속성(attributes) `"default"` 및 `"darkModeDefault"`를 사용하여 커스터마이징 테마 배열(Array)에서 기본 테마를 설정합니다.
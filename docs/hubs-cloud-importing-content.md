---
id: hubs-cloud-importing-content
title: 콘텐트(Content) 임포트하기
sidebar_label: 콘텐트(Content) 임포트하기
---

허브 클라우드로 가져올 수 있는 콘텐츠의 두 가지 형태는 **avatars** 및 **scene**입니다. 아바타는 관람객이 직접 입을 수 있는 로봇, 인간, 오리 등 3D 형상이고, 장면은 실내와 조경 등 3D 환경으로 방의 시각적인 기반을 제공한다.

Mozilla는 일부 초기 콘텐츠를 허브에 추가하기 위해 가져올 수 있는 여러 [자산 팩](hubs-cloud-asset-packs.md)을 제공합니다. 또한 [hubs.mozilla.com](https://hubs.mozilla.com)에서 또는 허브에서 사용할 수 있는 [Scene Editor](hubs-cloud-enable-scene-editor.md)와 같은 도구를 사용하여 만든 사용자 정의 컨텐츠를 가져올 수 있습니다. Scene Editor에 대한 자세한 내용은 [Spoke Documentation](http://hubs.local:3000/docs/docs/spoke-creating-projects.html)[^1]을 참조하십시오.

### 관리 가져오기 도구

내용 가져오기를 시작하려면 관리 콘솔에서 "내용 가져오기" 도구로 이동하십시오. 관리 콘솔로 이동하는 방법을 모를 경우 [시작하기](hubs-cloud-getting-started.md) 안내서를 참조하십시오.

[^1]: 'Spoke'는 [hubs.mozilla.com](https://hubs.mozilla.com)의 장면 편집기에 사용되는 Mozilla 상표 이름입니다.

![허브 클라우드 가져오기 콘텐츠](img/hubs-cloud-import-content.jpeg)

URL이 있으면 가져올 URL을 지정해야 합니다.

![허브 클라우드 가져오기 콘텐츠 URL](img/hubs-cloud-import-content-url.jpeg)

다른 허브의 장면 또는 아바타에 쉼표로 구분된 URL을 입력할 수 있습니다(https://hubs.mozilla.com/scenes/rWgv5zN/winter-cheer), [advatar](https://hubs.mozilla.com/avatars/PcJ8Sxb))). 또는 [hubs-cloud-asset-packs-ko.md]에 대한 링크를 지정할 수 있습니다.

내용 URL을 지정하면 가져오려는 내용의 미리보기가 표시됩니다. 그런 다음 특정 항목을 제외하거나 포함하도록 선택하고 특수 태그를 설정할 수 있습니다.

![허브 클라우드 가져오기 컨텐츠 UI](img/hubs-cloud-import-ui.jpeg)

준비가 되었으면 가져오기 버튼을 클릭하여 내용 가져오기를 시작합니다.

### 특수 태그
또한 허브에서 사용할 수 있도록 가져온 항목에 대한 적절한 태그를 설정해야 합니다.

- 새 방문자가 기본적으로 가질 **Default** 아바타를 하나 이상 가져옵니다.
- 새 룸에서 기본적으로 사용할 **기본** 장면을 하나 이상 가져옵니다.
- 방문객이 쉽게 재피할 수 있는 **Base** 아바타를 1개 이상 수입합니다.
- **특징** 하나 이상의 아이템으로 방문자가 쉽게 찾을 수 있습니다.

특수 태그에 대한 자세한 내용은 [콘텐츠 관리](hubs-cloud-managing-content.md)를 참조하십시오.

### 가져온 콘텐츠 업데이트

가져온 콘텐츠를 새로 고치려면 다시 가져오기만 하면 됩니다. 이전에 동일한 컨텐츠를 가져온 경우 허브의 기존 아바타 또는 장면이 가져온 컨텐츠의 최신 버전으로 업데이트됩니다.
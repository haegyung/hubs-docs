---
id: spoke-publish-scenes
title: Publish Scenes
---

장면을 허브에 직접 게시하거나 .glb 파일 또는 레거시 스포크(Spoke) 장면(Scene)으로 내보낼 수 있습니다.

## Publishing to Hubs

허브에 게시하면 씬(scene)에 고유한 URL이 생성됩니다. 이 랜딩 페이지에는 씬(scene)을 기반으로 사용하는 허브 룸을 만드는 데 사용할 수 있는 'Create a Room with this Scene' 링크가 있고 다른 사용자가 스포크에서 리믹스하는 데 사용할 수 있는 링크가 있습니다.

![Hubs Image](../website/static/img/spoke-scene-remixing.jpeg)

장면을 허브로 내보내기 전에 항상 평면도를 생성해야 합니다! 자세한 내용은 [플랫플랜](..physics-and-navigation.html) 을 참조하십시오.

오른쪽 상단 모서리에 있는 '허브에 게시...' 버튼을 클릭합니다. 장면의 이름을 바꾸라는 메시지가 표시됩니다.

장면을 저장하고 게시하려면 로그인해야 합니다. 이메일로 매직 링크를 보내기만 하면 됩니다.

속성(Attribute)을 추가하고 '저장 및 게시(Save and publish)'를 클릭합니다.

Spoke의 검색 패널에서 모델을 추가한 경우 콘텐츠에 대한 속성이 장면 설명에 자동으로 추가되지만 외부 소스에서 가져온 콘텐츠에 대한 속성을 추가할 수 있습니다.

다음과 같은 옵션이 있습니다. : 

* Creative Commons CC-BY 3.0으로 리믹싱 허용 - 사용자가 자신의 장면을 기본 템플릿으로 사용할 수 있습니다.
* Allow Mozilla to promote my scene - this lets mozilla add the scene to the publicly accessible scene database if it meet


## Export as .glb file

.glb(glTF 바이너리) 파일로 내보내면 장면을 glb 파일 로드를 지원하는 다른 프로그램에서 사용할 수 있는 단일 .glb 파일로 내보냅니다. glb는 컴파일된 바이너리이며 glTF 파일이 읽을 수 있는 방식으로 읽을 수 있는 텍스트 형식으로 열 수 없습니다.

```text
In the dropdown menu, select File > Export as binary .glTF (.glb)
```    
  

## Export as .spoke file

레거시 Spoke 장면으로 내보내면 다른 Spoke 계정으로 가져올 수 있는 .spoke 파일이 생성됩니다. 또한 스포크에서 장면을 '리믹스 가능'으로 표시하고 장면에 대한 링크를 다른 사람과 공유하여 공유할 수 있습니다.

```text
In the dropdown menu, select File > Export legacy .spoke project
```

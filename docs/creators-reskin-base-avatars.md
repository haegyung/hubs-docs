---
id: creators-reskin-base-avatars
title: Reskin Avatars
---

아바타 제작 과정에 투자하고 싶은 정도에 따라 자신만의 텍스처 맵(Texture map)을 그려 기존의 로봇 아바타를 단순히 리모델링(re-skin) 하거나 또는 자신만의 완전한 커스텀 3D 모델을 만들 수 있습니다.

## 나만의 아바타 스킨 만들기

Hubs 에서 사용자 지정 아바타를 빠르고 쉽게 만드는 방법은 이미지 편집기 또는 텍스처 도구를 사용하여 사용자 지정 스킨을 만드는 것입니다. 첫 번째 아바타 스킨을 만드는 데 도움이 되는 [시작 튜토리얼](https://docs.google.com/document/d/1K1Eos1sjqN4N9lPlYQfvU53v8f1HxmdTZRjH4RLrGq8/edit) 이 있습니다.

다음 리소스를 사용할 수 있습니다.:

* [Quilt](https://tryquilt.io/) - 허브 팀이 기본 허브 로봇 아바타의 스킨을 빠르게 다시 만들기 위해 함께 만든 간단한 도구입니다. 

* [포토샵 PSD 템플릿](Photoshop) - 맞춤형 허브 기본 컬러 스킨용 포토샵 템플릿. 포토샵의 3D 페인팅 툴은 [로봇 OBJ/MAT 파일](https://github.com/j-conrad/hubs-avatar-pipelines/tree/master/Other%20model%20formats) 을 사용하여 사용할 수도 있습니다..

* [Substance Painter 프로젝트](Substance) - 전체 [Substance Painter](https://www.allegorithmic.com/products/substance-painter) 프로젝트를 통해 고급 맞춤형 스킨링을 할 수 있습니다. 또한 [예: 텍스처 세트](Exported%20Texture%20Sets) 를 다운로드 및 수정할 수 있습니다.

![UV 레이아웃 예제](docs/UVLayout.jpg)

The UV layout for the base robot avatar is purposefully symmetrical along the X (horizontal) axis. This makes it relatively easy to paint one half of the texture(s) and flip it to the other side. Some image editing applications such as Photoshop have built-in mirroring tools that allow you to paint both halves in real time.

![Panda Bot 예제](docs/PandaBot.jpg)

로봇 아바타의 스킨을 커스터마이징하는 가장 빠르고 간단한 방법은 단순히 '베이스 컬러(base color)' 맵을 그리는 것일 겁니다.
그러나 허브는 [물리 기반의 materials](https://www.allegorithmic.com/pbr-guide) 들과 관련된 많은 맵 타입을 지원하고 있는 glTF 표준을 사용하고 있기 때문에,
허브에서 기본 아바타는 현재 다음을 사용하고 있어요.
- Base Color(기본 색상)
- Emissive(방출)
- Normal(일반)
- Ambient Occlusion(주변 폐색)
- Roughness (black = glossy, white = rough) -- 거칠기(검은색 = 광택, 흰색 = 거친색)
- Metallic (black = non-metal, white = fully metallic) -- 금속성(검은색 = 비금속성, 흰색 = 완전 금속성)

**참고: Ambient Occlusion, Roughness 및 Metallic 은 각각 빨간색, 녹색 및 파란색 채널을 차지하는 단일 이미지로 결합되어야 합니다.**
이건 가끔 `ORM` 텍스처라고 불리우기도 해요.

** 텍스처 해상도를 1024x1024 이하로 유지하는 것이 좋습니다.** 이는 대부분 허브가 대용량 파일을 다운로드하는 시간이 길면 성능을 저하시킬 수 있는 웹 기반 애플리케이션(특히 모바일 기기)이기 때문입니다. _모든 텍스처는 2의 거듭제곱(64, 128, 256, 512 등)이어야 합니다._

## 자신만의 아바타 모델 만들기

만약 여러분이 지금 이 레포지토리를 clone 한다면, 여러분은 가장 먼저 [GitLFS](https://git-lfs.github.com/)_ 다운로드 받아야해요. 그렇지 않으면 많은 파일들이 동작하지 않을거에요.

만약 여러분이 저희가 만든 로봇 아바타를 수정하고 싶으시다면, 다음 리소스를 따라해주세요:

* [Blender Source Files](Blender/AvatarBot) 는 저희가 만든 로봇 아바타를 이용할 수 있도록 도와줍니다. .blend 파일들을 어떻게 사용하는지에 대한 특정 정보를 위해서, [Blender/AvatarBot](/Blender/AvatarBot) 폴더안에 있는 readme 를 확인해주세요!

* [Exported GLBs](Exported%20GLB%20models)/[Exported OBJ](Other%20model%20formats) 는 여러분의 입맛에 맞는 에디터로 아바타들을 가져오고 싶을 때 사용합니다. 

저희는 여러분들이 가이드로 사용할만 한 몇 가지 예제 파일들을 제공해 온 이후로, 커스텀 모델들을 위한 [Blender 2.8 beta](https://builder.blender.org/download/) 를 사용하길 권장하고 있어요.
(보통, skeleton setup 은 예상하지 못한 bone 회전으로 인해 발생되는 변화 때문에 importing/exporting skeleton 을 만들 수 있는 모델링 애플리케이션에 따라서 설정하는 방식이 다양해요. 하지만 그런 작업들은 대게 블렌더보다는 다른 툴들을 이용해서 작업하는 것이 더 바람직해요.
**주목해주세요:** `.blend` 파일들은 built-in glTF exporter 때문에 [Blender 2.8 beta](https://builder.blender.org/download/) 로 만들어집니다. Blender 를 위한 built-in glTF exporter 는 현재 개발 중 입니다. 버그들을 발견한다면 Expect some bugs and [please report them!](https://github.com/KhronosGroup/glTF-Blender-IO/issues) 로 제보해주세요!)

허브 아바타는 여러분을 대표한다는 의미를 가졌어요. 여기서 말하는 VR을 위한 허브 아바타는, 즉 여러분이 실제 세계안에서 일을 하거나 또는 수행해야 하는 유닛들이라는 것이죠. 그래서 전형적인 아바타의 크기는 대략 1.7 미터로 잡았어요. 
**주목해주세요** 이 전형적인 아바타의 키라는 것은 "서있을 때의 키" 입니다. 만약 다리가 없는 아바타의 경우에는 전체 키의 일부임을 알아주시길 바랍니다 :) 

![avatar height diagram](../../docs/avatarHeight.jpg)

*_base* 가 붙은 파일들은 대게 새로운 아바타 모델을 생성할 때 참조용으로 사용되는 기본 로봇 아바타 템플릿(basic robot avatar template) 인 barebone 을 참조하고 있어요. 

armature(skeleton) 은 크게 [High Fidelity](https://docs.highfidelity.com/en/rc80/create/avatars/avatar-standards.html#skeleton) 에서 제공하는 skeleton 의 네이밍 컨벤션과 계층 구조를 따르고 있어요. 
bone orientation 측면에서 VRChat 과 유사한 구조를 가지고 있다는 것 입니다.

그러나 현재 Hub의 구현에서는 현재 어떤 종류의 역운동학(IK)도 사용하지 않기 때문에 계층 구조 내의 일부 뼈(bone), 즉 하체(lower body) 및 팔 관절(arm joint)을 제거했어요.
이는 향 후 허브 구현에서 변경될 수 있습니다.

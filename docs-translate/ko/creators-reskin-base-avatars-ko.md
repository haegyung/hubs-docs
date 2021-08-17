---
id: creators-reskin-base-avatars
title: Reskin Avatars
---

아바타 제작 과정에 얼마나 관여하고 싶은지에 따라 자신만의 텍스처 맵을 그려 기존 로봇 아바타를 단순히 '재스킨'하거나 자신만의 완전한 맞춤형 3D 모델을 만들 수도 있습니다.

## 나만의 아바타 스킨 만들기

Hubs에서 사용자 지정 아바타를 빠르고 쉽게 만드는 방법은 이미지 편집기 또는 텍스처 도구를 사용하여 사용자 지정 스킨을 만드는 것입니다. 첫 번째 아바타 스킨을 만드는 데 도움이 되는 [시작 튜토리얼](https://docs.google.com/document/d/1K1Eos1sjqN4N9lPlYQfvU53v8f1HxmdTZRjH4RLrGq8/edit) 이 있습니다.

다음 리소스를 사용할 수 있습니다.:

* [Quilt](https://tryquilt.io/) - 허브 팀이 기본 허브 로봇 아바타의 스킨을 빠르게 다시 만들기 위해 함께 만든 간단한 도구입니다. 

* [포토샵 PSD 템플릿](Photoshop) - 맞춤형 허브 기본 컬러 스킨용 포토샵 템플릿. 포토샵의 3D 페인팅 툴은 [로봇 OBJ/MAT 파일](https://github.com/j-conrad/hubs-avatar-pipelines/tree/master/Other%20model%20formats))을 사용하여 사용할 수도 있습니다..

* [Substance Painter 프로젝트](Substance) - 전체 [Substance Painter](https://www.allegorithmic.com/products/substance-painter) 프로젝트를 통해 고급 맞춤형 스킨링을 할 수 있습니다. 또한 [예: 텍스처 세트](Exported%20Texture%20Sets) 를 다운로드 및 수정할 수 있습니다.

![UV 레이아웃 예제](docs/UVLayout.jpg)

The UV layout for the base robot avatar is purposefully symmetrical along the X (horizontal) axis. This makes it relatively easy to paint one half of the texture(s) and flip it to the other side. Some image editing applications such as Photoshop have built-in mirroring tools that allow you to paint both halves in real time.

![Panda Bot 예제](docs/PandaBot.jpg)

로봇 아바타의 가죽을 다시 벗기는 가장 간단한 방법은 단순히 '베이스 컬러' 지도를 그리는 것이다. 그러나 허브는 glTF 표준을 사용하기 때문에 [물리 기반 재료](https://www.allegorithmic.com/pbr-guide))와 관련된 많은 지도 유형을 지원합니다.
기본 아바타는 현재 다음을 사용하고 있습니다.
- 기본 색상
- 방출
- 일반
- 주변 폐색
- 거칠기(검은색 = 광택, 흰색 = 거친색)
- 금속성(검은색 = 비금속성, 흰색 = 완전 금속성)

**참고: Ambient Occlusion, Roughess 및 Metalic은 각각 빨간색, 녹색 및 파란색 채널을 차지하는 단일 이미지로 결합되어야 합니다.**

** 텍스처 해상도를 1024x1024 이하로 유지하는 것이 좋습니다.** 이는 대부분 허브가 대용량 파일을 다운로드하는 시간이 길면 성능을 저하시킬 수 있는 웹 기반 애플리케이션(특히 모바일 기기)이기 때문입니다. _모든 텍스처는 2의 거듭제곱(64, 128, 256, 512 등)이어야 합니다._














## Making your own custom avatar model

**IMPORTANT:  If you are cloning this repo, _you MUST first install [GitLFS](https://git-lfs.github.com/)_ or else many of the files will not work.**



We offer the following resources if you'd like to modify our Robot avatar:

* [Blender Source Files](Blender/AvatarBot) are available of our Robot avatar. **For specific information about how to use these .blend files, be sure to check out the readme within the [Blender/AvatarBot](/Blender/AvatarBot) folder.**

* [Exported GLBs](Exported%20GLB%20models)/[Exported OBJ](Other%20model%20formats)  are available if you'd like to bring them into your editor of choice.

We recommend using [Blender 2.8 beta](https://builder.blender.org/download/) for custom models since we have provided example files that you may use as a guide. (Typically, skeleton setup varies between modeling applications which can make importing/exporting skeletons a bit tricky due to unexpected changes in bone rotations, but it is still possible to use something other than Blender.) Note: the .blend files were created with [Blender 2.8 beta](https://builder.blender.org/download/) due to the built-in glTF exporter. The glTF importer/exporter for Blender is currently in development. Expect some bugs and [please report them!](https://github.com/KhronosGroup/glTF-Blender-IO/issues)

Hubs avatars are meant for VR, which means that you should work in real world units. A typical avatar height is roughly 1.7 meters. Note: This is typically a 'standing height'. The lack of legs shown here is a part of that overall height.

![avatar height diagram](docs/avatarHeight.jpg)

Files with the suffix *_base* refer to the most barebones, basic robot avatar template that can be used as a reference when creating new avatar models. Typically, the Blender workflow would be to either 'Link' or 'Append' the objects from [AvatarBot_base_for_export.blend](/Blender/AvatarBot) in order to use the existing armature (skeleton) and any animations that go along with it, using them as a basis for your own model that you would attach to it.

The armature is based largely upon the same hierarchy and naming conventions of the skeleton provided by [High Fidelity](https://docs.highfidelity.com/en/rc80/create/avatars/avatar-standards.html#skeleton). This also happens to have a similar structure to VRChat in terms of bone orientations.
However, in our current implementation in Hubs, we have eliminated some of the bones within the hierarchy, namely the lower body and arm joints since we are not using any sort of inverse kinematics (IK) at the moment. This may change in future iterations.

---
id: creators-advanced-avatar-customization
title: Advanced 아바타 커스터마이징
---

## Advanced Re-skinning 

[Custom avatars](intro-avatars.html) 페이지에서 설명한 것처럼 허브용 아바타를 커스터마이징하는 가장 직관적인 방법은 `custom avatar set` 을 업로드하는 것입니다.
로봇 아바타의 스킨을 다시 설정하는 가장 간단한 방법은 단순히 '베이스 컬러(Base Color)' 맵을 그리는 거에요.

조금 더 개선된 커스터마이징을 위해 다음과 같은 리소스를 사용할 수 있어요:

* [Photoshop PSD Templates](https://github.com/MozillaReality/hubs-avatar-pipelines/blob/master/Photoshop) - 사용자 지정 허브 기본 컬러 스킨을 위한 포토샵 템플릿입니다.
  [로봇 OBJ/MAT 파일](https://github.com/j-conrad/hubs-avatar-pipelines/tree/master/Other%20model%20formats) 을 사용한 3D Photoshop 툴을 사용할 수도 있습니다.
* [Substance Painter Project](https://github.com/MozillaReality/hubs-avatar-pipelines/blob/master/Substance) - 조금 더 세련된 맞춤형 스킨을 위한 Full Substance Painter 프로젝트입니다. 텍스처 set 예제를 다운로드하거나 수정할 수 있습니다.

![UV 레이아웃 예제](img/UVLayout.jpg)


기본 로봇 아바타의 UV 레이아웃은 X(수평) 축을 따라 의도적으로 대칭입니다. 이렇게 하면 텍스처의 절반을 칠하고 다른 쪽으로 뒤집기가 비교적 쉽습니다. Photoshop 과 같은 일부 이미지 편집 응용 프로그램에는 두 부분을 동시에 그릴 수 있는 미러링 도구가 내장되어 있습니다.

![Panda Bot 예제](img/PandaBot.jpg)


### Types of Texture Maps

허브는 glTF 표준을 사용하기 때문에 물리적 기반 재료와 관련된 많은 지도 유형을 지원합니다. 기본 아바타는 다음을 사용합니다.

* Base Color - The main design / color map for the texture
* Emissive - Which parts should glow (emit light)
* Normal - How light should reflect off the texture
* ORM - Metallic, roughness, and occlusion

__참고: 'ORM' Texture 는 Ambient Occlusion(검은색 = 광택, 흰색 = 러프) 및 Metallic(검은색 = 비금속, 흰색 = 완전 금속성)이 각각 빨간색, 녹색 및 파란색 채널을 차지하는 단일 이미지로 조합되어 있습니다.__

__텍스처 해상도를 1024x1024 이하로 유지하는 것이 좋아요.__ 이는 대부분 허브가 대용량 파일을 다운로드하는 시간이 길어지면 특히 모바일 장치의 성능이 저하될 수 있는 웹 기반 애플리케이션이기 때문입니다. 모든 텍스처는 2의 거듭제곱(64, 128, 256, 512 등)이어야 해요.

![Hubs Avatar 커스터마이징](img/avatar-customization.jpeg) 

When you upload textures into Hubs The preview will be updated.
You do not need to include all textures - any combination of maps are supported.
Each of the slots listed handle a different texture type.
You can learn more about different types of maps here.

허브에 텍스처를 업로드하면 미리보기가 업데이트 될 거예요. 맵에 대한 조합 없이 모든 텍스처를 업로드 할 필요는 없습니다.
나열된 각 슬롯은 서로 다른 텍스처 유형을 처리합니다.
[다양한 유형의 맵](https://www.khronos.org/blog/art-pipeline-for-gltf) 에 대해 링크를 통해 자세히 알아볼 수 있습니다.


## 자신만의 아바타 만들기

아바타의 모양을 사용자 정의하기 위해 기본 로봇 템플릿을 수정하거나 원하는 .glb 파일을 업로드할 수 있습니다. 로봇 템플릿을 사용하면 아바타가 손과 몸통, 그리고 말을 할 때 커지거나 움츠러드는 머리를 갖게 됩니다. 일반 .glb 파일을 사용할 경우 이 항목은 아바타의 헤드로 간주되며 사용자가 말할 때 전체 개체가 커지고 축소됩니다.


### 기본 로봇 템플릿 수정하기

기본 로봇 아바타를 수정하기 위해 다음 리소스를 제공합니다:

* [Blender Source Files](https://github.com/MozillaReality/hubs-avatar-pipelines/tree/master/Blender/AvatarBot) 는 당사의 로봇 아바타를 제공합니다. **이러한 .vmd 파일을 사용하는 방법에 대한 자세한 내용은 [Blender/AvatarBot](https://github.com/MozillaReality/hubs-avatar-pipelines/tree/master/Blender/AvatarBot) 폴더에서 readme를 확인하십시오.**

* [Exported GLBs](Exported%20GLB%20models)/[Exported OBJ](https://github.com/MozillaReality/hubs-avatar-pipelines/tree/master/Other%20model%20formats) 을 사용하여 원하는 편집기에 가져올 수 있습니다.


가이드로 사용할 수 있는 예제 파일을 제공했으므로 사용자 지정 모델에는 [Blender 2.83](https://builder.blender.org/download/) (또는 최신 release) 을 사용하는 것이 좋습니다. 
(일반적으로 bone 설정은 모델링 애플리케이션마다 다르므로 bone 의 예상치 못한 변화로 인해 골격의 가져오기/내보기가 다소 까다로울 수 있지만, 여전히 Blender 이외의 것을 사용할 수 있습니다.)
참고: .vmd 파일은 glTF 내보내기 기능이 내장되어 있기 때문에 [Blender 2.8](https://builder.blender.org/download/) 을 사용하여 생성되었습니다.
블렌더용 glTF importer/exporter 는 현재 개발 중입니다. 일부 버그를 예상하거나 발견한다면 [제보해주시면 감사하겠습니다.](https://github.com/KhronosGroup/glTF-Blender-IO/issues)

허브 아바타는 VR용이기 때문에 실제 단위에서 작업해야 합니다. 일반적인 아바타의 키는 대략 1.7m 이며, 참고로 이 높이는 일반적으로 '스탠딩 높이' 입니다.
여기에 표시된 다리가 없는 아바타의 경우 전체 키의 일부분만 나타냅니다.

![avatar height diagram](img/avatarHeight.jpg)

파일 중 접미사가 *_base* 인 파일들은 대게 새 아바타 모델을 만들때 참고용으로 사용할 수 있는 가장 기본적인 골격(barebone) 인 기본 로봇 아바타 템플릿(basic robot avatar template) 을 나타냅니다.
일반적으로 블렌더 워크플로우는 [AvatarBot_base_for_export.blend](https://github.com/MozillaReality/hubs-avatar-pipelines/tree/master/Blender/AvatarBot)
로부터 기존에 사용하던 armature(skeleton) 과 이에 어울리는 애니메이션을 사용하기 위해 -- 오브젝트들을 여러분이 붙이고 싶어하는 여러분 자신의 모델의 기초로서 -- '연결(link)' 하는 형식이거나 '붙임(Append)' 형식 일 것 입니다.

armature(skeleton) 은 크게 [High Fidelity](https://docs.highfidelity.com/en/rc80/create/avatars/avatar-standards.html#skeleton) 에서 제공하는 **계층(hierarchy)** 과 **골격(skeleton)** 네이밍 컨벤션의 근간을 두고 있습니다.
이건 또한 bone 의 근본적인 측면에서 VRChat 구조와 유사한 면을 가지고 있습니다만, 현재 우리가 구현한 허브에서는, 현재 어떤 종류의 역운동학(IK)도 사용하지 않기 때문에 계층(hierarchy) 구조 내의 일부 뼈(bone), 즉 하체(lower body)와 팔 관절(arm joint)을 제거했습니다.
이 부분은 허브의 새로운 버전에 변경될 소지가 있습니다.

### Use a Regular .glb File

.glb 오브젝트는 아바타로 사용할 수 있습니다. 이 오브젝트는 여러분이 직접 만든 것일 수도 있고, Sketchfab 또는 Google Poly의 크리에이티브 공통으로 만든 asset 일 수도 있습니다.
.glb 파일이 아바타로 올바르게 작동하려면 몇 가지 수정이 필요한 경우가 있습니다.
블렌더에서 객체를 열어 물체의 축척을 고정하고(약 1.7m), 물체가 앞쪽을 향하는지 확인하고, 물체를 약간 뒤로 이동시켜 시야를 방해하지 않도록 할 수 있습니다.
[Scene 최적화 페이지](spoke-optimization.html) 에서 제공하는 몇가지 팁들을 사용하여 객체를 최적화할 수도 있습니다.

## 나만의 모델 업로드하기

1. 허브 룸으로 들어갑니다.
2. 화면의 오른쪽 상단 모서리에 있는 '사람' 목록 아이콘을 선택합니다.
3. 이름만 대면 연필 아이콘이 나타납니다. 아바타 선택 화면을 열려면 이 연필 아이콘을 클릭합니다.
4. 'Avatars 찾아보기' 버튼을 클릭합니다.
5. 여기에서 자신의 아바타 목록을 볼 수 있으며, 첫 번째 자리는 "아바타 만들기"라고 표시됩니다.
6. 아바타 사용자 지정 화면에서 기본 체형 중 하나를 선택합니다.
7. `Custom GLB` 를 클릭하여 3D 모델을 업로드합니다.
8. 아바타를 저장합니다.

<!--
작업관리 -
1) 일부 이미지의 크기를 줄여 크기가 크지 않도록 합니다.
2) 말을 할 때 머리를 기르는 대신 입을 사용하는 것에 대한 정보를 피드백으로 추가합니다.
-->

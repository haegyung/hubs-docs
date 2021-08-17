---
id: creators-advanced-avatar-customization
title: Advanced Avatar Customization
---

## Advanced Re-skinning 

[custom avatars](intro-avatars.html) 페이지에서 설명한 것처럼 허브용 아바타를 사용자 지정하는 가장 간단한 방법은 사용자 지정 텍스처 세트를 업로드하는 것입니다. 로봇 아바타의 가죽을 다시 벗기는 가장 간단한 방법은 단순히 '베이스 컬러' 지도를 그리는 것이다.

조금 더 개선된 커스터마이징을 위해 다음 리소스를 사용할 수 있습니다:

* [Photoshop PSD Templates](https://github.com/MozillaReality/hubs-avatar-pipelines/blob/master/Photoshop) - 사용자 지정 허브 기본 컬러 스킨을 위한 포토샵 템플릿입니다. 포토샵의 3D 페인팅 툴은 [로봇 OBJ/MAT 파일](https://github.com/j-conrad/hubs-avatar-pipelines/tree/master/Other%20model%20formats)을 사용하여 사용할 수도 있습니다.
* [Substance Painter Project](https://github.com/MozillaReality/hubs-avatar-pipelines/blob/master/Substance) - 고급 맞춤형 스킨을 위한 Full Substance Painter 프로젝트입니다. 텍스처 세트 예제를 다운로드 및 수정할 수도 있습니다.

![UV 레이아웃 예제](img/UVLayout.jpg)


기본 로봇 아바타의 UV 레이아웃은 X(수평) 축을 따라 의도적으로 대칭입니다. 이렇게 하면 텍스처의 절반을 칠하고 다른 쪽으로 뒤집기가 비교적 쉽습니다. Photoshop과 같은 일부 이미지 편집 응용 프로그램에는 두 부분을 동시에 그릴 수 있는 미러링 도구가 내장되어 있습니다.

![Panda Bot 예제](img/PandaBot.jpg)


### Types of Texture Maps

허브는 glTF 표준을 사용하기 때문에 물리적 기반 재료와 관련된 많은 지도 유형을 지원합니다. 기본 아바타는 다음을 사용합니다.

* 기본 색상 - 텍스처에 대한 기본 디자인/색상 맵
* 배기가스 - 어느 부분에서 빛을 내야 합니까(배기가스 라이트)
* 정상 - 빛이 텍스처에서 반사되는 방식
* ORM - 금속성, 거칠기 및 폐색

__참고: 'ORM' 텍스쳐는 앰비언트 어클루전(검은색 = 광택, 흰색 = 러프) 및 메탈릭(검은색 = 비금속, 흰색 = 완전 금속성)이 각각 빨간색, 녹색 및 파란색 채널을 차지하는 단일 이미지로 조합되어 있습니다.__

__ 텍스처 해상도를 1024x1024 이하로 유지하는 것이 좋습니다.__ 이는 대부분 허브가 대용량 파일을 다운로드하는 시간이 길어지면 특히 모바일 장치의 성능이 저하될 수 있는 웹 기반 애플리케이션이기 때문입니다. 모든 텍스처는 2의 거듭제곱(64, 128, 256, 512 등)이어야 합니다.

![Hubs Avatar 커스터마이징](img/avatar-customization.jpeg) 

허브에 텍스처를 업로드하면 미리보기가 업데이트됩니다. 모든 텍스처를 포함할 필요는 없습니다. 어떤 맵 조합도 지원됩니다. 나열된 각 슬롯은 서로 다른 텍스처 유형을 처리합니다. [여기에서 다양한 유형의 맵](https://www.khronos.org/blog/art-pipeline-for-gltf)에 대해 자세히 알아볼 수 있습니다.


## 자신만의 아바타 만들기

아바타의 모양을 사용자 정의하기 위해 기본 로봇 템플릿을 수정하거나 원하는 .glb 파일을 업로드할 수 있습니다. 로봇 템플릿을 사용하면 아바타가 손과 몸통, 그리고 말을 할 때 커지거나 움츠러드는 머리를 갖게 됩니다. 일반 .glb 파일을 사용할 경우 이 항목은 아바타의 헤드로 간주되며 사용자가 말할 때 전체 개체가 커지고 축소됩니다.


### 기본 로봇 템플릿 수정하기

기본 로봇 아바타를 수정하기 위해 다음 리소스를 제공합니다:

* [Blender Source Files](https://github.com/MozillaReality/hubs-avatar-pipelines/tree/master/Blender/AvatarBot) 는 당사의 로봇 아바타를 제공합니다. **이러한 .vmd 파일을 사용하는 방법에 대한 자세한 내용은 [Blender/AvatarBot](https://github.com/MozillaReality/hubs-avatar-pipelines/tree/master/Blender/AvatarBot)) 폴더에서 readme를 확인하십시오.**

* [Exported GLBs](Exported%20GLB%20models)/[Exported OBJ](https://github.com/MozillaReality/hubs-avatar-pipelines/tree/master/Other%20model%20formats) 을 사용하여 원하는 편집기에 가져올 수 있습니다.


가이드로 사용할 수 있는 예제 파일을 제공했으므로 사용자 지정 모델에는 [Blender 2.83](https://builder.blender.org/download/)(또는 최신 릴리스)을 사용하는 것이 좋습니다. (일반적으로 골격 설정은 모델링 애플리케이션마다 다르므로 골격의 예상치 못한 변화로 인해 골격의 가져오기/내보기가 다소 까다로울 수 있지만, 여전히 Blender 이외의 것을 사용할 수 있습니다.) 참고: .vmd 파일은 glTF 내보내기 기능이 내장되어 있기 때문에 [Blender 2.8](https://builder.blender.org/download/))을 사용하여 생성되었습니다. 블렌더용 glTF 수입/수출업체는 현재 개발 중입니다. 일부 버그를 예상하고 [신고해 주세요!](https://github.com/KhronosGroup/glTF-Blender-IO/issues)

허브 아바타는 VR용이기 때문에 실제 단위에서 작업해야 합니다. 일반적인 아바타의 키는 대략 1.7m이다. 참고: 이 높이는 일반적으로 '스탠딩 높이'입니다. 여기에 표시된 다리 부족은 전체 키의 일부입니다.


![avatar height diagram](img/avatarHeight.jpg)

접미사가 *_base*인 파일은 새 아바타 모델을 만들 때 참조로 사용할 수 있는 가장 맨 뼈의 기본 로봇 아바타 템플릿을 나타냅니다. 일반적으로 블렌더 워크플로우는 [AvatarBot_base_for_export]에서 개체를 '링크' 또는 '추가'합니다.blend](https://github.com/MozillaReality/hubs-avatar-pipelines/tree/master/Blender/AvatarBot)에서 기존 전기자(전자) 및 이와 함께 제공되는 애니메이션을 직접 연결할 수 있는 모델의 기반으로 사용합니다.

전기자(armature)는 대체로 [High Fidelity](https://docs.highfidelity.com/en/rc80/create/avatars/avatar-standards.html#skeleton))에서 제공하는 골격의 동일한 계층 및 명명 규칙을 기반으로 합니다. 이는 뼈 방향 면에서 VRChat과 유사한 구조이기도 하다.
그러나 현재 허브에서 구현 중인 일부 골격(하체 및 팔 관절)은 현재 역운동학(IK)을 사용하지 않기 때문에 계층 내 골격(하체 및 팔 관절)을 제거했습니다. 이는 향후 반복 시 변경될 수 있습니다.

### Use a Regular .glb File

.glb 오브젝트는 아바타로 사용할 수 있습니다. 이것은 여러분이 직접 만든 것일 수도 있고, Sketchfab 또는 Google Poly의 크리에이티브 공통 자산일 수도 있습니다. .glb 파일이 아바타로 올바르게 작동하려면 몇 가지 수정이 필요한 경우가 있습니다. 블렌더에서 객체를 열어 물체의 축척을 고정하고(약 1.7m), 물체가 앞쪽을 향하는지 확인하고, 물체를 약간 뒤로 이동시켜 시야를 방해하지 않도록 할 수 있습니다. [Scene 최적화 페이지](spoke-optimization.html) 의 팁을 사용하여 객체를 최적화할 수도 있습니다.

## 자신의 모델 업로드

1. 허브 룸으로 들어갑니다.
2. 화면의 오른쪽 상단 모서리에 있는 '사람' 목록 아이콘을 선택합니다.
3. 이름만 대면 연필 아이콘이 나타납니다. 아바타 선택 화면을 열려면 이 아이콘을 클릭합니다.
4. 'Avatars 찾아보기' 버튼을 클릭합니다.
5. 여기에서 자신의 아바타 목록을 볼 수 있으며, 첫 번째 자리는 "아바타 만들기"라고 표시됩니다.
6. 아바타 사용자 지정 화면에서 기본 체형 중 하나를 선택합니다.
7. 'Custom GLB'를 클릭하여 3D 모델을 업로드합니다.
8. 아바타 저장

<!--
작업관리 -
1) 일부 이미지의 크기를 줄여 크기가 크지 않도록 합니다.
2) 말을 할 때 머리를 기르는 대신 입을 사용하는 것에 대한 정보를 피드백으로 추가합니다.
-->
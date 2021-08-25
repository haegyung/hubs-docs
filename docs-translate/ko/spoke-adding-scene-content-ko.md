---
id: spoke-adding-scene-content
title: Adding Content
---

씬(scene)을 만든 후에는 컨텐츠를 추가하여 씬(scene) 사용자 정의를 시작할 수 있습니다. 스포크 및 허브는 다양한 미디어를 지원합니다. 허브에 게시하려면 스포크 프로젝트의 크기 제한이 128MB입니다.

## 3D 모델
Skoke를 사용하면 Google Poly 및 Sketchfab에서 3D 컨텐츠를 검색할 수 있습니다. 자산 미디어 브라우저에서 컬렉션을 찾을 수 있습니다.

![Hubs Image](../../website/static/img/spoke-3d-model.jpeg)

기존 .glb 또는 .glTF 모델이 있는 경우 해당 모델도 자산 라이브러리에 업로드할 수 있습니다.

## 콘텐츠 업로드
스포크에서 사용할 기존 자산을 업로드할 수 있습니다. 콘텐츠를 업로드하려면:
1. 스포크 편집기의 자산 패널에서 '내 자산' 탭을 선택합니다.
2. '내 자산' 패널에서 '업로드' 버튼을 클릭하고 업로드할 파일을 선택합니다.

또한 내용을 편집기 창에 끌어다 놓아 스포크에 업로드할 수도 있습니다. 씬(scene)의 크기는 128MB이며 씬(scene)에서 사용되는 파일은 해당 크기보다 작아야 합니다.

## 3D 모델 생성기
사용자가 복사본을 만들 수 있는 특정 3D 오브젝트가 있는 룸을 작성하려면 '스파우너' 요소를 작성하면 됩니다. 이는 여러 사람이 동일한 객체의 복사본을 빠르게 얻을 수 있는 장면을 쉽게 만드는 데 도움이 될 수 있습니다. 이렇게 하려면 원하는 모델의 URL을 복사하고, [자산] 패널 > [요소] 탭에서 '스파우너' 요소를 작성한 다음, URL을 특성 상자에 붙여넣으십시오.

![object spawner](../../website/static/img/spoke-spawner.jpeg)

## 이미지
영상은 2D 투영 또는 360도 등각 투영(스카이박스 또는 다른 유형의 장면 배경으로 사용할 수 있는 형식)을 사용하여 스포크에 추가할 수 있습니다. 자신의 컴퓨터에서 이미지나 GIF를 업로드하거나 Speak의 내장 검색 도구를 사용하여 온라인으로 미디어를 찾을 수 있습니다.

![Hubs Image](../../website/static/img/spoke-images.jpeg)

## 비디오
Speak에서 온라인 비디오에 연결하여 비디오 콘텐츠용 영구 플레이어를 만들 수 있습니다. 스포크는 모든 유형의 스트리밍 비디오 콘텐츠 또는 라이브 스트림을 자동으로 재생하려고 시도합니다. YouTube와 Twitch URL은 씬(scene)에서 진행 중인 피드에 대한 영구 링크를 원할 경우 스트리밍에 적합합니다. 영상과 마찬가지로 비디오도 2D 또는 360 등각 투영이 가능합니다.

스포크의 비디오에 대한 현재 동작은 자동으로 재생 및 루프되도록 구성할 수 있지만, 현재 장면이 허브에 게시된 후에는 링크된 비디오를 변경할 수 없습니다. 제거할 수 있는 비디오를 일시적으로 추가하려면 허브에 추가하고 대신 룸에 고정하는 것이 좋습니다.

*데스크톱 또는 웹캠의 화면 또는 창 공유와 같은 추가 유형의 피드를 사용하려면 씬(scene)과 함께 허브 룸을 만든 후 이러한 피드를 추가할 수 있습니다. 현재 스포크 내부에서는 화면과 카메라 공유를 인스턴스화할 수 없다.*

## 오디오
.mp3 파일에 대한 링크를 추가하여 허브 씬(scene)에 오디오를 추가할 수 있습니다. 그러나 현재 스포크를 사용하여 추가된 오디오 클립에 대한 컨트롤은 없습니다.

오디오 파일을 Hubs에 직접 업로드하는 것이 좋습니다. 그래야 오디오 재생에 문제가 있을 경우 볼륨 컨트롤에 액세스할 수 있습니다.

## 입자 이미터

입자 이미터는 움직이는 입자를 생성하는 스포크 객체입니다.

![Hubs Image](../../website/static/img/spoke-particle-emitter.jpeg)

## 링크
다른 허브 룸 또는 웹의 다른 장소를 가리키는 링크를 장면에 포함할 수 있습니다. 스포크에서 링크 요소를 작성하려면 요소에서 '링크' 요소를 선택하십시오. 링크 요소를 선택하면 URL을 속성 패널에 붙여넣습니다. 장면이 게시되고 허브에 룸을 만드는 데 사용될 때 URL은 파일 형식으로 확인되고 내용 유형에 따라 표시됩니다. 일반 웹 사이트의 URL을 사용하는 경우 허브는 스크린샷을 찍고 링크 요소가 있는 위치에 해당 콘텐츠를 표시하려고 시도합니다. URL을 확인할 수 없는 경우 손상된 미디어 이미지가 대신 표시됩니다.

## 오디오 영역

오디오 존(Audio Zone)은 오디오 존에 대한 소스 및 수신자의 위치를 기준으로 오디오 소스(아바타, 비디오, 오디오 대상 등)의 오디오 속성을 수정하는 3D 볼륨입니다. 한 가지 분명한 적용 분야는 실제 동작을 모방하기 위해 방과 같은 3D 영역을 기반으로 오디오 소스의 볼륨을 어둡게 만드는 것입니다.
![Audio Zones Example Image 1](../../website/static/img/audio-zones-example-0.jpg)

오디오 존은 오디오 소스 및 오디오 수신기 위치를 기반으로 작동하며 Out** 및/또는 **outIn* 유형일 수 있습니다.
- **inOut:** 오디오 영역의 매개 변수는 수신기가 영역 외부에 있을 때 오디오 영역 볼륨 내부의 오디오 소스에 적용됩니다.
- **outIn:** 오디오 영역의 매개 변수는 수신기가 내부에 있을 때 오디오 영역 볼륨 외부의 오디오 소스에 적용됩니다.

<img src="../../website/static/img/audio-zones-example-2.jpg" alt="drawing" width="65%"/>

<center>_InOut zone that blocks all the audio sources coming from the inside._</center>

<img src="../../website/static/img/audio-zones-example-3.jpg" alt="drawing" width="65%"/>

<center>_OutIn zone that blocks all the audio sources coming from the outside._</center>

오디오 영역은 다른 오디오 영역 내부에 있을 수 있으며, 이 경우 적용된 매개변수는 가장 제한적인 매개변수의 감소가 됩니다.

<img src="../../website/static/img/audio-zones-example-1.jpg" alt="drawing" width="65%"/>

<center>_If there are two audio-zones in between the listener and the source and the first one has gain == 0.1 and the other has gain == 0.5, gain == 0.1 is applied to the source._</center>

---
id: spoke-user-interface
title: User Interface
---

![Hubs Image](../website/static/img/spoke-user-interface.jpeg)

## Toolbar

![Toolbar](../website/static/img/spoke-toolbar.jpeg)

### 1. Dropdown Menu

드롭다운 메뉴에서 파일을 저장, 저장 및 내보낼 수 있는 옵션과 스포크 사용 방법에 대한 도움말을 찾을 수 있습니다.

### 2. Transformation Tools

__Translate [T]:__ 변환 기모를 표시하고 화살표를 끌어 X, Y 또는 Z 축을 따라 객체를 이동합니다. 붙잡기 도구를 사용하여 객체를 이동할 수도 있습니다. 객체를 선택한 상태에서 G를 눌러 선택 영역을 잡고 마우스를 클릭한 다음 객체를 씬(scene)에 배치합니다. 현재 붙잡기 작업을 취소하려면 Esc 또는 G를 다시 누릅니다.

__Rotate [R]:__ 회전 기모를 표시하고 기모의 링을 끌어 X, Y 또는 Z 축을 따라 객체를 회전시킵니다.

__Scale [Y]:__ 축척 기모를 표시하고 기모의 중심 큐브를 끌어 개체를 위 또는 아래로 축척합니다.

### 3. Grid Tools

__Toggle Transform Space [Z]:__ - 변환 공간과 관련하여-- 변환 기모를 World XYZ 대 물체의 XYZ 방향으로 변경합니다. 객체를 회전할 때까지 차이를 볼 수 없습니다.
차를 45도 돌린다든가 그런 다음 '앞으로' 이동하려면 객체의 로컬 축으로 전환해야 합니다.

__Transform Pivot [X]:__ 모델의 피벗 점이 잘못 설정된 경우 객체를 배치하는 것이 어려울 수 있습니다. 이 드롭다운 메뉴를 사용하여 피벗 계산 방법을 변경할 수 있습니다. 중심, 하단 또는 선택으로 설정할 수 있습니다.

__Toggle Snap mode [C]:__ 때로는 미리보기 위치나 회전으로 이동하거나 객체를 만들 수 있습니다. 이렇게 하려면 자석 아이콘을 클릭하여 스냅 모드를 전환합니다. 드롭다운 메뉴를 사용하여 변환 및 회전 스냅 설정을 설정할 수 있습니다. 

__Snap Mode Controls:__ 변환 도구가 얼마나 정확하게 적용되는지 결정합니다.

__Toggle Grid Visibility:__ 3D 그리드에서 그리드를 표시하거나 숨깁니다. 배치 모드에서는 개체를 다른 개체 또는 그리드 위에 배치할 수 있습니다. 수직 건물인 경우 그리드 높이를 변경하는 것이 유용할 수 있습니다.

- 그리드 높이를 높이려면 '='를 누릅니다.
- 그리드 높이를 낮추려면 '-'를 누릅니다.

### 4. Publish To Hubs

장면 정보를 허브에 게시하기 전에 편집할 수 있는 게시 대화 상자를 열려면 이 단추를 클릭합니다.

## Viewport Panel
![Viewport Panel](../website/static/img/spoke-viewport-panel.jpeg)

뷰포트는 객체를 선택하고 이동할 수 있는 장면의 미리보기를 표시합니다.

  > 씬(scene)을 허브에 게시할 때 뷰포트가 보는 것은 씬(scene)의 축소 이미지입니다.

### Object Selection
객체를 클릭하여 객체를 선택할 수 있습니다(쉬프트를 누른 채로 여러 객체를 선택).

### Camera Movement
좌클릭하고 끌어서 장면 주변을 한 바퀴 돌 수 있습니다. 마우스 오른쪽 버튼을 눌러 이동 모드로 들어갑니다. 마우스를 사용하여 장면을 둘러보고 WASD 키를 사용하여 카메라를 이동할 수 있습니다. 선택한 객체의 포커스를 맞추려면 'F' 키를 누릅니다.

### Transform Gizmo
하나 이상의 객체를 선택하면 변환 기모가 나타납니다.

## Hierarchy Panel
![Hierarchy Panel](../website/static/img/spoke-hierarchy-panel.jpeg)

씬(scene)에 추가하는 개체가 계층 패널에 표시됩니다. 뷰포트에서 객체의 포커스를 두 번 클릭합니다. 계층 패널 내부에서 개체를 끌어 다시 정렬하거나 상위 항목을 변경할 수 있습니다. 또한 드롭 항목을 자산 패널에서 계층 패널로 끌어 씬(scene)에 추가할 수 있습니다.

## Properties Panel
![Properties Panel](../website/static/img/spoke-properties-panel.jpeg)

추가 객체 특성은 특성 패널에서 설정할 수 있습니다. 여기에는 그림자, 밝은 색 등의 것들이 포함됩니다.

개체는 스포크에 추가되며 속성을 변경하여 사용자 지정할 수 있습니다. 물체 유형에 따라 사용할 수 있는 특성이 다릅니다(예: 조명에는 "명암" 특성이 있지만 3D 모델에는 해당되지 않습니다). 대부분의 개체는 공간 내의 물리적 위치를 나타내는 변환 특성을 가집니다.

## Assets Panel
![Assets Panel](../website/static/img/spoke-assets-panel.jpeg)

asset 패널에서 씬(scene)에 추가할 컨텐츠를 찾을 수 있습니다. 자산을 클릭하여 씬(scene)에 추가할 수 있습니다. 자산 패널에서 자산을 끌어 뷰포트, 계층 패널 또는 속성 패널로 놓을 수도 있습니다.

### Asset Sources

자산 패널의 왼쪽에는 원본 목록이 있습니다.

#### Elements
요소는 스포크의 기본 구성 요소입니다. 조명, 매체, 점 생성 및 기타 모든 유형의 객체를 찾을 수 있습니다.

#### My Assets
사용자 고유의 3D 모델, 이미지, 비디오 및 오디오를 업로드하고 검색합니다.

#### Architecture Kit
건축 키트에는 다양한 구조물을 조립할 수 있는 조각들이 들어 있습니다. 이 키트에는 바닥, 벽, 계단 등이 포함되어 있습니다.

#### Rock Kit
바위 키트에는 지형, 구조 플랫폼 또는 바위가 필요할 수 있는 기타 사항에 세부 정보를 추가하는 데 사용할 수 있는 사실적인 바위 모델이 포함되어 있습니다.

#### Sketchfab
Sketchfab은 3D 모델을 위한 온라인 마켓플레이스입니다. 다양한 고품질 모델이 포함되어 있어 장면을 채울 수 있습니다.

#### Google Poly
구글 폴리는 또 다른 3D 모델 공급처다. 대부분의 모델은 플랫 로우 폴리 스타일입니다.

#### Bing Images
Bing에서 웹 주위의 이미지를 검색합니다.

#### Bing Videos
Bing에서 웹 주위의 동영상을 검색합니다.

#### Twitch
Twitch에서 실시간 게임 및 기타 정보를 찾을 수 있습니다.

#### Tenor Gifs
테너에서 자신의 장면에 추가할 애니메이션 GIF를 찾아보십시오.

## Experimental Features
우리는 스포크의 새로운 기능을 지속적으로 개발하고 있습니다. 실험 기능을 활성화하면 실험 기능을 사용할 수 있습니다. 이러한 기능은 아직 테스트 단계에 있으므로 계속 지원되지 않을 수 있습니다.

![Experimental Features](../website/static/img/spoke-experimental-features.jpeg)

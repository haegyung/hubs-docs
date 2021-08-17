---
id: lighting-and-shadows
title: Lighting and Shadows
---

## Lights

조명이 장면의 분위기를 바꿀 수 있습니다. [Skyboxes](.spoke-skyboxes.html) 외에도, 조명은 다음 소스에서 발생할 수 있습니다.


| Light         | Effect  |
| ----------- | ----------- |
| Ambient Light    | 씬(scene)의 모든 개체를 켭니다. |
| Hemisphere Light   | 직접 머리 위에서 장면을 조명합니다.   |
| Directional Light   |전체 씬(scene)을 비추지만 단일 방향을 따라 방출됩니다.| 
| Spot Light  |방향을 따라 방출되어 원뿔 안에 있는 물체를 비춥니다.| 
| Point Light     | 단일 지점에서 모든 방향으로 방출 | 

### Shadow Settings

다양한 조명의 속성 패널에서 그림자 설정을 찾을 수 있습니다. 사용 가능한 설정은 조명의 종류에 따라 다릅니다.


| Setting      | Effect  |
| -----------   | ----------- |
| Cast shadows  |조명이 그림자를 드리울지 여부를 전환합니다. 그림자를 수신하도록 객체를 설정할 수도 있습니다.|
| Shadowmap resolution   |섀도 맵 해상도를 낮추면 해상도가 더 막힘(또는 때로는 부드럽게 보이기도 함)이 되고, 높이면 해상도가 높아지지만 씬(scene) 실행 비용이 더 많이 듭니다.|
| Shadow Bias  |그림자의 픽셀당 오프셋입니다. 그림자의 위치를 미세하게 조정하는 데 사용합니다. 이것은 그림자 여드름의 외관을 줄이는 데 사용될 수 있습니다.| 
| Shadow Radius  | 그림자 크기. | 

## Lighting performance on mobile   

씬(scene)의 조명은 데스크톱과 모바일 장치의 조명이 다르다는 것을 알 수 있습니다. 일부 조명 기능은 성능상의 이유로 모바일에서 사용할 수 없습니다.







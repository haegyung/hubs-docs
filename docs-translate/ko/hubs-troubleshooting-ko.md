---
id: hubs-troubleshooting
title: Troubleshooting
---

## Getting stuck on loading screen 

룸에는 복잡한 3D 모델이나 객체가 있어 로드 시간을 늘릴 수 있으며, 특히 휴대 전화와 독립형 VR 헤드셋의 경우 더욱 그렇습니다. 로드 화면에 고착된 경우 페이지를 새로 고치거나 다른 브라우저 또는 장치에 장면을 로드해 보십시오.

## Audio sounds choppy

오디오가 고르지 않으면 장치/네트워크가 룸의 복잡성으로 인해 문제가 있을 수 있습니다. 이는 씬(scene)에 있는 객체의 복잡성 또는 존재하는 다른 룸 구성원의 수 때문일 수 있습니다. 휴대 전화를 사용하는 경우 컴퓨터와 같은 보다 강력한 장치에서 방에 들어가면 오디오 품질과 성능이 향상될 수 있습니다.

## I can't hear someone / someone can't hear me

연결 문제로 인해 룸에 있는 한 사람이 한 공간에 있는 한 명 이상의 다른 참가자의 목소리를 듣지 못할 수 있습니다. 먼저 룸에서 다른 소리(예: 객체가 룸에 추가할 때 내는 소리, 룸의 비디오 또는 채팅 소리)를 들을 수 있는지 확인하고 허브 오디오 환경설정을 0 볼륨으로 설정하지 않는 것이 좋습니다. 또한 음소거되지 않았는지, 허브에 대한 마이크 권한을 허용했는지 확인하십시오. 오디오가 전혀 수신되지 않는 경우 다른 오디오 출력 장치로 룸에 다시 연결해 보십시오. 또한, [이 양식](https://forms.gle/o6tV9R2ujgDY7gpc8)에 오디오 및 연결과 관련된 시스템 문제를 진단하는 데 도움이 되는 네트워크 연결 로그를 작성해 주시기 바랍니다.

## Wired-in headset is not working

유선 헤드셋이 연결되어 있지 않으면 다음을 확인하는 것이 좋습니다.

* 사용 중인 브라우저가 WebVR을 지원합니까? 유선 연결 WebVR 환경을 위해 Firefox를 사용하는 것이 좋습니다. 설치 프로그램이 https://webvr.info/samples/XX-vr-controllers.html에서 작동하는지 확인하십시오.
* 브라우저가 최신 상태입니까?
* SteamVR(Vive / Windows 혼합 리얼리티) 또는 Oculus App(Rift)이 설치되어 있으며 최신 상태입니까?
* VR 헤드셋에 다른 지원 소프트웨어(예: Windows 혼합 리얼리티 포털)가 필요합니까? 이것은 설치되고 최신 상태입니까?
* Windows 혼합 현실을 사용하는 경우 WMR 헤드셋용 [Steam VR Tooling](https://store.steampowered.com/app/719950/Windows_Mixed_Reality_for_SteamVR/)도 설치했습니까?
* 브라우저가 VR 헤드셋과 동일한 그래픽 카드를 사용하고 있습니까?

## There is echo in the room

참가자가 헤드폰을 착용하지 않을 경우 에코가 발생할 수 있습니다. 참가자가 말을 하지 않을 때 마이크를 음소거하도록 요청하거나 룸 진행자로서는 아바타 메뉴에서 직접 음소거할 수 있습니다. 아바타 메뉴에서 사용자의 볼륨을 줄일 수도 있습니다. 자세한 내용은 [Hubs Features](.hubs-features.html)를 참조하십시오.

## I have generally bad performance in a room on an otherwise powerful computer

브라우저에 하드웨어 가속이 설정되어 있는지 확인합니다. 이렇게 하면 브라우저에서 그래픽 카드를 사용할 수 있습니다. 그래픽 카드는 더 나은 성능으로 허브를 렌더링하는 데 중요합니다. 별도의 GPU가 있는 랩톱에 있는 경우 브라우저가 컴퓨터 설정에서 전용 카드를 사용하고 있는지 확인해야 합니다.

## "Unable to connect" error

"연결할 수 없습니다"라는 오류는 종종 방화벽으로 인해 발생합니다. 최소한 허브는 TLS를 통해 시스템이 외부 포트 80 및 443에 연결되어야 합니다(*둘 다*). 또한 UDP에서 포트 51610-65535를 열고 라우터 방화벽에서 허브용 TCP를 여는 것이 좋습니다.

허브의 자체 호스트 버전의 경우 UDP 및 TCP에서 포트 49152-60999를 열어야 합니다. 또한 UDP 및 TCP에서 포트 19302를 열어야 합니다.

## Hubs landing page is blank

Internet Explorer를 사용하는 경우 다른 브라우저에서 웹 사이트를 열어 보십시오. 다른 페이지에 표시되지 않는 경우 해당 페이지의 캐시 및 쿠키를 지우십시오.

## Mic not working 

음성에서 소리가 들리지 않는 경우, 먼저 마이크가 제대로 연결되어 있는지, 브라우저 권한(일반적으로 주소 표시줄 왼쪽)에서 올바른 마이크를 선택했는지 확인합니다. 그래도 작동하지 않으면 컴퓨터의 개인 정보 보호 및 보안 설정을 확인하여 마이크 권한이 차단되지 않는지 확인해야 할 수 있습니다. 그래도 작동하지 않으면 다른 브라우저에서 시도해 보십시오. 허브는 Firefox 및 Chrome에서 가장 잘 작동하지만 Edge 및 데스크톱 Safari에서도 실행됩니다.

마이크가 목소리를 잡는데 삐뚤어지면. Bluetooth 헤드셋 마이크는 브라우저 기반 도구에서 항상 잘 작동하지 않으므로 사용하지 않는지 확인하십시오.

## Screen sharing / webcam not working

마이크 문제와 마찬가지로 화면 공유 또는 웹캠이 작동하지 않는 경우 먼저 필요한 주변 장치(웹캠)가 연결되어 있는지 확인합니다. 브라우저에서 실행할 수 있는 올바른 사용 권한이 있는지 확인합니다(일반적으로 주소 표시줄 왼쪽). 계속 작동하지 않는 경우 컴퓨터의 개인 정보 및 보안 설정을 확인하여 사용 권한이 차단되지 않는지 확인해야 할 수 있습니다. 그래도 작동하지 않으면 다른 브라우저에서 시도해 보십시오. 허브는 Firefox 및 Chrome에서 가장 잘 작동하지만 Edge 및 데스크톱 Safari에서도 실행됩니다.

## Objects disappear after leaving room

설계상 룸에서 작성한 모든 객체는 나갈 때 사라집니다. 이것은 일이 뒤로 밀릴 때 방이 어수선해지고 느려지는 것을 방지합니다. 객체가 룸에 머물도록 하려면 객체의 컨트롤을 열고(커서 위에 놓고 바탕 화면의 스페이스바를 누름) "고정"을 선택합니다. 고정된 객체는 고정 해제 또는 삭제될 때까지 룸에 남아 있습니다.

## Objects appear as broken media link

개체를 가져오려고 할 때 개체가 끊어진 링크로 로드되는 경우 지원되지 않는 파일 형식이거나 파일이 너무 클 수 있습니다. 허브는 최대 150MB의 파일 업로드를 지원합니다.

## Images aren't displaying 

Some older systems have trouble rendering 2D objects in the scene. If you suspect this is happening, try reloading the page with the following flag at the end of the URL: __?disablebatching__. For example:

    https://hubs.mozilla.com/sgKNM3h/smart-magnificent-gala?disablebatching

## YouTube is not working

유튜브 동영상은 허브에서 안정적으로 작동하지 않습니다. Vimeo를 시도하거나 동영상을 Dropbox에 저장한 후 스트리밍하는 것이 좋습니다.

## Need help with something else?

나머지 문서에서 필요한 내용을 찾을 수 없는 경우 [도움말 페이지](.help.html) 에서 연락 방법을 참조하십시오.

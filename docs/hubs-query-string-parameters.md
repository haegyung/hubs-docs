---
id: hubs-query-string-parameters
title: Hubs 쿼리스트링 파라미터(Query String Parameters)
sidebar_label: Hubs Query String Parameters
---

허브의 기본 설정 패널에서 사용할 수 없는 일부 개발자 지향 옵션은 쿼리 문자열 매개 변수로 사용할 수 있습니다. 이러한 기능은 주로 개발 또는 디버깅을 목적으로 하며 대부분의 사용자는 별도로 사용할 필요가 없습니다.

Examples:

```
https://hubs.mozilla.com/12345/my-room-name?allow_multi
https://localhost:8080/?hub_id=12345&allow_multi
```

- 'allow_multi' - 동일한 브라우저 세션에서 여러 인스턴스 실행 허용
- 'allow_idle' - 유휴 디텍터 시간 초과 사용 안 함
- 'idle_timeout' - 유휴 시간 제한(초)
- 'avatar_scale' - 스스로 확장하라!
- 'no_stats' - 성능 통계 사용 안 함
- 'vr_entry_type' - "2d", "vr" 또는 "daydream" 중 하나입니다. 내부적으로 VR 항목 유형을 강제 적용하는 데 사용됩니다. 오디오 검사를 건너뛰려면 값 끝에 "_now"를 추가합니다.
- 'disable_telemetry' - 'true'가 Sentry 원격측정을 사용하지 않는 경우.
- 'log_filter' - 로깅 수준을 설정하기 위한 'debug' 스타일 필터입니다.
- 'debug' - 'true'가 Janus 및 NAF 트래픽의 상세 로깅을 수행하는 경우 또한 물리학 시스템에서 디버그 모드를 활성화합니다.
- 'vrstats' - 'true'가 VR에서 통계를 표시하는 경우
- 'debug_log' - 'true'인 경우 화면상의 디버그 로그 및 콘솔을 활성화합니다. 모바일 장치의 디버깅에 유용합니다.
- 'userinput_debug' - 'true'인 경우 화면의 사용자 입력 디버그 상태 패널을 활성화합니다. 패널을 표시하려면 키보드에서 "L"를 누릅니다.
- '3인칭' - 실험적인 3인칭 모드를 활성화합니다.
- 'fov' - 카메라의 사용자 지정 시야를 도 단위(1~179)로 설정합니다(2D 전용).
- 'force_enable_touchscreen' - 가상 게임패드 컨트롤을 강제로 화면에 표시합니다.
- 'default_material_quality' - "high", "medium" 또는 "low" 중 하나입니다. 사용자가 특정 환경설정을 지정하지 않은 경우 적용되는 비모바일 장치를 사용하는 사용자의 기본 재료 품질을 설정합니다.
- 'default_mobile_material_quality' - "high", "medium" 또는 "low" 중 하나입니다. 사용자가 특정 환경설정을 지정하지 않았을 때 적용되는 모바일 장치를 사용하는 사용자의 기본 재료 품질을 설정합니다.
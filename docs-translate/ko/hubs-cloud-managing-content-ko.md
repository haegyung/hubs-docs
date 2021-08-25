---
id: hubs-cloud-managing-content
title: Managing Content
sidebar_label: Managing Content
---

허브와 스포크에서는 방문객이 직접 아바타와 장면을 만들 수 있습니다. 그런 다음 해당 컨텐츠를 다른 사용자와 공유하도록 제안할 수 있으며, 이를 통해 방문자는 미디어 브라우저와 같은 도구를 통해 컨텐츠를 검색할 수 있습니다.

그러나 허브의 관리자로서 방문자가 제공하는 콘텐츠가 항상 노출되는 것은 원하지 않습니다. 예를 들어 부적절하거나 잘못된 내용을 포함할 수 있습니다. 허브 클라우드에는 일련의 콘텐츠 조정 도구가 함께 제공되므로 방문자가 제출한 콘텐츠를 완전히 제어하고 필터링할 수 있습니다.

## 콘텐츠 파이프라인

방문자가 사용자 정의 아바타 또는 장면을 만들 때 *remixable* 및/또는 *promotionable*로 표시하는 옵션이 제공됩니다. *Remixable* 콘텐츠는 크리에이티브 커먼즈 3 라이센스를 제공하여 다른 사용자가 자유롭게 사용하거나 수정할 수 있도록 하며, *promotionable* 콘텐츠는 검토 대기열에 추가되어 허브의 콘텐츠 라이브러리에 추가됩니다. 승인되면 사용자는 미디어 브라우저와 같은 도구를 통해 라이브러리의 컨텐츠를 검색할 수 있습니다.

*Promotable*로 표시된 모든 콘텐츠는 생성되거나 업데이트될 때 **보류 중인 장면/아바타 큐*에 추가됩니다. [관리 콘솔(Admin Console)](./hubs-cloud-getting-started-ko.md)에서 다음 대기열을 찾을 수 있습니다.

![허브 클라우드 대기열 메뉴](../../website/static/img/hubs-cloud-pending-queue-menu.jpeg)

### 콘텐츠 승인

큐를 볼 때 검토되지 않은 모든 씬(scene) 또는 생성 또는 업데이트된 아바타의 목록이 표시됩니다. 여기서 오른쪽 끝에 있는 버튼 중 하나를 클릭하여 **승인** 또는 **거부** 항목을 선택할지 결정해야 합니다.

![Hubs Cloud Pending Scene](../../website/static/img/hubs-cloud-pending-scene.jpeg)

- **승인** 항목이 대기열에서 제거되어 컨텐츠 라이브러리에 추가됩니다. 업데이트인 경우 변경 내용이 컨텐츠 라이브러리에 적용됩니다. 방문자는 미디어 브라우저를 통해 항목을 검색할 수 있습니다.

- **거부** 항목이 대기열에서 제거되고 *아닙니다* 컨텐츠 라이브러리에 추가됩니다. 항목은 제거되지 않으며 URL을 가진 사용자는 누구나 액세스할 수 있습니다. 그러나 방문자는 미디어 브라우저를 통해 항목을 검색할 수 없습니다.

관리 콘솔의 **승인된 장면* 및 **승인된 아바타** 패널을 통해 컨텐츠 라이브러리의 모든 승인된 콘텐츠를 찾아볼 수 있습니다.

### 콘텐츠 피쳐링

컨텐츠 승인 외에도 **feature** 컨텐츠도 사용할 수 있습니다. 피쳐링 콘텐츠는 미디어 브라우저의 **Featured** 탭에 배치되어 방문자의 가시성을 높여줍니다.

![Hubs Cloud Feature Content](../../website/static/img/hubs-cloud-feature.jpeg)

To feature content, first you'll need to navigate to the content in the **Approved Scenes** or **Approved Avatars**. Once you've found content you'd like to feature, just click the **Feature** button. You can un-feature content that has been featured by using the **Unfeature** button.

![Hubs Cloud Pending Scene](../../website/static/img/hubs-cloud-approved-scene.jpeg)

콘텐츠를 피쳐링하려면 먼저 **승인 장면* 또는 **승인 아바타**의 콘텐츠로 이동해야 합니다. 원하는 콘텐츠를 찾았으면 **Feature** 버튼을 클릭하십시오. **기능 해제** 버튼을 사용하여 피쳐링된 콘텐츠를 해제할 수 있습니다.

![Hubs Cloud Pending Scene](../../website/static/img/hubs-cloud-approved-scene.jpeg)

### 내용 편집

내용을 업데이트하려면 편집할 항목의 목록 오른쪽 끝에 있는 **편집* 버튼을 클릭합니다. 여기서 항목의 이름, 상태 및 태그를 편집할 수 있습니다.

![허브 클라우드 편집 장면](../../website/static/img/hubs-cloud-edit-scene.jpeg)

항목의 **status**는 **active** 또는 **delisted**로 설정할 수 있습니다. 항목이 목록 삭제되면 내용 라이브러리에서 효과적으로 제거됩니다.

또한 **태그**를 항목에 추가할 수 있습니다. 태그는 항목에 특수 동작을 부여하고 검색을 지원하는 데 사용됩니다.

#### 특수 태그

**특수 태그** 중 하나를 항목에 지정하여 특수 동작을 추가할 수 있습니다.

- **`기본값`**
    - 아바타에게 '기본' 태그를 부여하면 새로운 방문자에게 할당됩니다. 기본 아바타가 여러 개 있는 경우 하나를 임의로 선택합니다.
    - 씬(scene)에 '기본' 태그를 지정하면 새 룸에 할당됩니다. 기본 씬(scene)이 여러 개 있는 경우 하나를 임의로 선택합니다.
- **`base`*
    - 아바타에 '베이스' 태그를 부여하면 아바타 편집기에서 해당 태그가 표면화되므로 스킨 재조정을 위한 기본 모델로 사용할 수 있습니다.
    - 이 태그는 씬(scene)에 영향을 미치지 않습니다.
- **`featured`**
    - 장면 또는 아바타에게 '특징' 태그를 지정하면 미디어 브라우저의 **특징** 목록에 추가됩니다.
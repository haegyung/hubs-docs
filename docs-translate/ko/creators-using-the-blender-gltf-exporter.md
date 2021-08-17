---
id: creators-using-the-blender-gltf-exporter
title: Using the Blender glTF Exporter
---
참고: 다음 설명서에서는 최신 안정적인 Blender 릴리스를 사용하고 있다고 가정합니다. 이전 버전의 블렌더 또는 실험용 빌드를 사용하는 것은 효과적일 수 있지만 보장되지는 않습니다.

최신 버전의 블렌더를 사용하려면 시작 시 블렌더 시작 화면의 오른쪽 상단을 보고 블렌더 기본 다운로드 페이지(https://www.blender.org/download/와 일치하는지 확인하십시오.

![Blender Splash Screen Image](img/BlenderSplash.jpg)


### glTF로 내보낼 내용은 무엇입니까?
블렌더에서 만든 모든 제품을 glTF(glb) 형식으로 내보낼 수 있는 것은 아닙니다. 이는 Blender glTF 가져오기/내보내기 추가 기능에 대한 지속적인 개선과 glTF 파일 형식 자체에 대한 변경으로 인해 지속적으로 변경됩니다. 일반적으로 텍스처 및/또는 정점 색상이 있거나 없는 모델, 골격 전기자가 있는 모델, 모양 키(모핑)가 있는 모델 및 애니메이션을 포함한 모델을 내보낼 수 있습니다. (어느 시점에 상황이 바뀌지 않는 한) 올바르게 내보내지 못할 것: 블렌더의 입자 시스템, 캐시된 정점 애니메이션(유체 또는 천 시뮬레이션 등) 및 특정 유형의 셰이더를 예로 들 수 있습니다.

블렌더 파일의 특정 부분을 내보내는데 질문이나 문제가 있는 경우, 자세한 내용은 다음을 참조하십시오.

[glTF file format overview](https://www.khronos.org/gltf/)

[Blender glTF Importer/Exporter Github repository](https://github.com/KhronosGroup/glTF-Blender-IO)

### 블렌더 모델을 올바르게 내보내는 방법
블렌더에 표시되는 정보가 스포크 및 허브에 표시되는지 확인하기 위해 몇 가지 사항을 점검해야 합니다. 체 목록은 아니지만 예상치 못한 결과를 초래할 수 있는 몇 가지 일반적인 내용을 포함하고 있습니다.

**+ 척도는 1, 1, 1이어야 합니다.**

블렌더에서 스케일을 조정하고 **스케일을 적용하는 것을 잊기 쉽습니다(ctrl+a)**. 개체의 척도가 1, 1, 1이 아닌 다른 값을 읽는 경우 내보낸 모델이 표시되지 않을 수 있습니다.

**+ 개체는 월드 오리진(0, 0, 0) 또는 그 근처에 있어야 합니다**

Sketchfab이나 Google Poly와 같은 제3자 사이트에서 제공되는 모델(특히 애니메이션인 경우)에서는 개체가 없는 것이 매우 일반적인 문제입니다. 모델을 허브에 떨어뜨리고 로딩 큐브가 있는 곳과 거리가 멀면 이러한 문제가 발생하는 것을 알 수 있습니다.

**+ 보고 싶은 수식어 적용**

블렌더 수정자가 내보낸 모델에 나타나려면 블렌더 수정자를 적용해야 합니다. 예를 들어, 한쪽을 모델링한 후 다른 한쪽을 복제하기 위해 'Mirror' 한정자를 추가하는 문자는 해당 'Mirror' 한정자를 먼저 *적용*하지 않는 한 모델링된 절반만 내보냅니다. 설계를 계속 반복하고 있기 때문에 해당 수정자를 적용하지 않으려면 모델을 먼저 복제하고 미러를 적용한 다음 해당 복제만 내보내면 됩니다. ***참고**: glTF 내보내기 도구에는 내보낼 때 '수정자 적용'으로 설정되어 있습니다. 그러나 이는 바람직하지 않을 수 있는 전기자 수정자를 포함한 모든 수정자를 적용합니다(골격에 대한 스킨 작업).*

**+ 애니메이션 트랙이 있는 개체에는 해당 트랙이 '은장'되어야 합니다**

여러 애니메이션이 포함된 개체를 지원하려면 먼저 모든 애니메이션 트랙을 'Stashed' 또는 'Push Down'으로 만들어야 glTF로 내보낼 수 있습니다. 액션 편집기 또는 NLA(비선형 애니메이션) 편집기에서 수행할 수 있습니다.

![Blender Animation Windows](img/BlenderAnimationStash.jpg)

**+ glTF와 glb는 같지만 정확히는 아닙니다.**

**TL;DR: 내보낼 때 .glb로 내보내는 것이 좋습니다.**
스포크 및 허브에서는 .glb 파일을 사용할 수 있습니다. 단일 .glb 파일에는 모든 메쉬 데이터, 이미지 텍스처 및 단일 이진 파일에 패킹된 관련 정보가 포함됩니다. Glb 파일은 별도의 .bin 및 텍스처 파일을 이동할 필요가 없기 때문에 일반적으로 처리하기가 더 쉽습니다. 고급 사용자의 경우 텍스트 편집기를 사용하여 파일을 수동으로 편집하려는 경우 glTF로 내보내도록 선택할 수 있습니다. glTF를 glb로 변환하거나 그 반대로 변환하는 데 사용할 수 있는 여러 변환기가 있습니다. 자세한 내용은 [glTF 파일 형식 개요](https://www.khronos.org/gltf/)를 참조하십시오.


**+ 내보내기 도구 설정 이해**

There are quite a few settings to understand in the glTF exporter, but fortunately, they are divided into sections to make it a little easier. In many cases, the defaults work just fine. However, there are a few worth noting when troubleshooting:
<ul>
  <li>(Include) 'Selected Objects' - Checking this allows you to only export the selected items you want. It's easy to forget this is turned on--(and even easier to forget to select things first!)
  <li>(Include) 'Custom Properties' - This one is necessary if you're using things like the custom Hubs comoponents add-on (more on this later) but in most cases is not necessary.
  <li>(Geometry) 'Apply Modifiers' - See info above. In most cases you'll want to leave this OFF.
  <li>(Geometry) 'UVs, Normals, Tangents' - Best left ON. There may be unusual cases where you don't want these but it would be rare.
  <li>(Geometry) 'Vertex Colors' - If you choose to paint vertex colors on your model, which can be a cheap, fast way of applying basic color instead of a texture, you'll need this ON. Otherwise, you can turn it OFF with no apparent effect.
  <li>(Geometry) 'Materials' - Pretty much all models require materials to display properly so you will need this ON.
  <li>(Geometry) 'Compression' - This might seem like a good idea, but as of this writing, Hubs does not support objects with Google Draco mesh compression. Leave this OFF.
  <li>(Animation) 'Limit to Playback Range' - Make sure your playback range is set properly to see the full animation get exported.
  <li>(Animation) 'Always Sample Animations' - This one has been found to significantly increase the file size in some cases. Try turning this OFF. If your animation(s) still work without it, leave it OFF.
  <li>(Animation) 'NLA Strips' - You must have this ON if you've stashed a bunch of animation tracks on your object(s).
  <li>Shape Keys - You must have this turned ON if you have an object that requires shape keys (also known as morph targets or blend shapes in other software).
  <li>(Shape Keys) 'Shape Key Normals' - This one can be turned OFF as long as your morphs don't do anything special with the object's normals. If you see odd shading occur when the morphs happen, try toggling this.
  <li>Skinning - You must have this turned ON if your object is bound to a skeletal armature.
</ul>
언급되지 않은 매개 변수는 기본값으로 두는 것이 가장 좋습니다.
이 내보내기 도구(및 glTF 형식)는 여전히 자체 버그 수정 및 재설계가 적용되므로 일부 설정 및/또는 기본값은 향후 변경될 수 있습니다.


### 스포크 및 허브가 올바르게 표시될 재료 설정

Blender의 문서에는 glTF를 위해 재료를 구성하는 방법에 대한 최신 정보가 모두 포함되어 있습니다. 이 정보는 'gl'을 검색하면 쉽게 찾을 수 있습니다.의사록에 'TF'가 있어요 [Blender's glTF 문서 링크](https://docs.blender.org/manual/en/dev/addons/import_export/scene_gltf2.html?highlight=gltf#gltf-2-0)

이러한 정보를 반복하는 대신 다음과 같은 몇 가지 유용한 팁이 제공됩니다.

**+ 가능하면 'unlit' 재료를 사용하십시오**

'unlit'은 다소 혼동되는 명칭이지만, 장면 내의 빛이 물체에 영향을 미치지 않는 재료를 말합니다. 다시 말해, 그들은 스스로 완전히 빛을 발하는 것처럼 보입니다. Unlight 재료는 모든 장치에서 렌더링하고 동일하게 보이는 '가장 저렴한' 재료입니다. 이런 이유로 사람들은 조명과 그림자 정보를 먼저 베이스 컬러 텍스처에 '구이'한 다음, 불이 붙지 않은 소재에 바릅니다. 블렌더 매뉴얼에는 불이 들어오지 않는 셰이더 그래프를 만드는 방법이 나와 있지만, 특별히 명확한 것은 아닙니다.

셰이더 그래프에서 'Background' 노드를 사용해야 하지만 기본적으로 'Background' 노드가 다른 일부 노드와 함께 나열되지 않기 때문입니다. 대신 Shader 편집기를 'World' 모드로 전환하여 해당 노드를 찾은 다음 개체의 Shader 그래프에 복사/붙여넣어야 합니다. Quick Favorites 메뉴에 추가하여 나중에 쉽게 찾을 수 있습니다.

<video autoplay loop muted controls >
  <source src="img/BlenderShaderBackground.mp4" type="video/mp4">
  <img src="img/intro-custom-avatar.jpeg" alt="Blender - Finding Background Node">
  Your browser does not support HTML5 video.
</video>

백그라운드 노드가 있으면 이 노드에 텍스처를 연결하고 재료 출력으로 전송할 수 있습니다. glb로 내보내고 개체를 스포크 또는 허브로 가져오면 'unlit'(또는 생각하는 방식에 따라 완전히 켜짐)이 됩니다.

<video autoplay loop muted controls >
  <source src="img/BlenderShaderBackground2.mp4" type="video/mp4">
  <img src="img/intro-custom-avatar.jpeg" alt="Blender - Using Background Node">
  Your browser does not support HTML5 video.
</video>

Unlit 재료는 어떠한 장면 조명에도 영향을 받지 않기 때문에 '스카이 돔'에 사용하기에 가장 좋은 재료입니다. 일반적으로, 물체가 조명에 따라 외관을 바꾸는 반사광이나 표면이 필요하지 않은 경우, 조명되지 않은 재료를 사용하십시오.

![A Hubs scene with baked lighting](img/HelloWebXRscene.jpg)

위의 장면에서는 모든 조명을 블렌더에 구운 다음, 불이 붙지 않은 재료와 함께 수출했습니다. 이 장면에서 조명을 설치하는 것은 방 자체에 영향을 미치지 않지만 모든 장치에서 훌륭해 보입니다(그리고 같습니다).
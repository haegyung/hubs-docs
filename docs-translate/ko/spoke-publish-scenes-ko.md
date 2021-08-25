---
id: spoke-publish-scenes
title: Publish Scenes
---

장면을 허브에 직접 게시하거나 .glb 파일 또는 레거시 스포크 장면으로 내보낼 수 있습니다.

## Publishing to Hubs

허브에 게시하면 씬(scene)에 고유한 URL이 생성됩니다. 이 랜딩 페이지에는 씬(scene)을 기반으로 사용하는 허브 룸을 만드는 데 사용할 수 있는 'Create a Room with this Scene' 링크가 있고 다른 사용자가 스포크에서 리믹스하는 데 사용할 수 있는 링크가 있습니다.

![Hubs Image](../../website/static/img/spoke-scene-remixing.jpeg)

장면을 허브로 내보내기 전에 항상 평면도를 생성해야 합니다! 자세한 내용은 [플랫플랜](..physics-and-navigation.html) 을 참조하십시오.

Click the 'Publish to Hubs...' button in the upper right corner. You will receive a prompt to rename your scene. 

You will need to login in save and publish your scene. All you need to do is send a magic link to your email. 

Add attributions, and click  'Save and publish'

If you’ve added models from the search panel in Spoke, attributions for the content will be added to the scene description automatically, but you can add additional attributions for content that you’ve brought in from external sources.

You will have the options to : 

* Allow Remixing with Creative Commons CC-BY 3.0 - allows users to use your scene as a base template for their own 
* Allow Mozilla to promote my scene - this lets mozilla add the scene to the publicly accessible scene database if it meet


## Export as .glb file

Exporting as a .glb (glTF binary) file will export the scene into a single .glb file that could be used in other programs that support loading glb files. Please note that the glb is a compiled binary, and cannot be opened in a readable-text format the way that glTF files can.

```text
In the dropdown menu, select File > Export as binary .glTF (.glb)
```    
  

## Export as .spoke file

Exporting as a legacy Spoke scene will create a .spoke file that can be imported into another Spoke account. You can also share scenes in spoke by labelling them as 'remixable' and sharing the link to the scene with others.

```text
In the dropdown menu, select File > Export legacy .spoke project
```

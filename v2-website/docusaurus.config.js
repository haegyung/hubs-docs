module.exports={
  "title": "",
  "tagline": "Hold tight as we get our docs in a row 🦆🦆🦆",
  "url": "https://hubs.mozilla.com/",
  "baseUrl": "/docs/",
  "organizationName": "MozillaReality",
  "projectName": "hubs-docs",
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "favicon": "img/MOZILLA_LOGO_TMP.webp",
  "customFields": {
    "users": [
      {
        "caption": "User1",
        "image": "/img/undraw_open_source.svg",
        "infoLink": "https://developers.belivvr.com/",
        "pinned": true
      }
    ],
    "docsUrl": ""
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "welcome",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "editUrl": "https://github.com/belivvr/hubs-docs/blob/master/docs/",
          "path": "..\\docs",
          "sidebarPath": "..\\website\\sidebars.json"
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": "..\\src\\css\\customTheme.css"
        }
      }
    ]
  ],
  "plugins": [
    [
      "@docusaurus/plugin-client-redirects",
      {
        "fromExtensions": [
          "html"
        ]
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "logo": {
        "src": "img/MOZILLA_LOGO_TMP.webp"
      },
      "items": [
        {
          "to": "docs/",
          "label": "Docs",
          "position": "left"
        },
        {
          "href": "https://github.com/belivvr/hubs-docs",
          "label": "Github",
          "position": "left"
        },
        {
          "to": "/help",
          "label": "Help",
          "position": "left"
        },
        {
          "href": "https://hubs.mozilla.com/",
          "label": "Hubs by Mozilla",
          "position": "left"
        }
      ]
    },
    "image": "img/undraw_online.svg",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2021 Mozilla",
      "logo": {
        "src": "img/favicon.ico"
      }
    },
    "algolia": {
      "apiKey": "227afb429135813e4d9d2339ea8a18c7",
      "indexName": "mozilla_hub",
      "algoliaOptions": {}
    }
  }
}
export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Home",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "title": "Home",
    "heroImage": "/images/hero.png",
    "footer": "MIT Licensed | Copyright © 2021-present flyween"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Get started",
      "slug": "get-started",
      "children": []
    },
    {
      "level": 2,
      "title": "Default Quill options",
      "slug": "default-quill-options",
      "children": []
    }
  ],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": null,
    "contributors": []
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

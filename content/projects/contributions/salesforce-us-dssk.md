---
title: "Salesforce UX Design System Starter Kit"
link: "https://github.com/salesforce-ux/design-system-starter-kit/pull/51"
image: "https://camo.githubusercontent.com/8b72943b9cd5e0b5988f53a1d3c22486e43dc41b761b2ad7c7f793beaf69fedc/68747470733a2f2f7261776769742e636f6d2f73616c6573666f7263652d75782f64657369676e2d73797374656d2d737461727465722d6b69742f6d61737465722f737461727465722d6b69742e737667"
description: "Added watch mode for shared data folder."
featured: false
tags: [ "Testing", "Typescript" ]
weight: 100
sitemap: 
    priority : 0.8
---

I had a [case](https://github.com/salesforce-ux/design-system-starter-kit/issues/50), where I needed to prototype several different views of the same data. But shared data folder in the lib wasn't watched, so I had to re-start the app each time I changed the data. Eventually I added the watch mode to the lib.

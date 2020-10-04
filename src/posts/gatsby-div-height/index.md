---
title: 100% height to all divs - Gatsby
published: true
type: blog
slug: gatsby-dev-height
date: 2019-05-15
excerpt: Make a sticky footer which occupies bottom of the view if body does not fill the view and gets pushed down if body exceeds the view
tags: ["GatsbyJS", "CSS", "ReactJS"]
featureImage: gatsby-div-height.png
---

<!-- Imports -->

import { ImageWrapper } from "../../components"

# Use Case

A simple UI containing a header, main and footer.

The footer should stick to the bottom if content above it (main) does not fill the whole view and get pushed down if the content (main) exceeds the view height.

<ImageWrapper caption="What we Have!">

![What we Have!](https://thepracticaldev.s3.amazonaws.com/i/9nmvdxs1nvu995y6zh0d.png)

</ImageWrapper>

<ImageWrapper caption="What we Want!">

![What we Want!](https://thepracticaldev.s3.amazonaws.com/i/cw5bmw5znid8bpqpmlao.png)

</ImageWrapper>

# The Simple Solution

My first thought was assigning all html tags above the div which holds the `<main></main>` tags `height: '100%'`.

## But!!! 😮😮😮

<ImageWrapper caption="Additional div Highlighted">

![gatsby html structure](https://thepracticaldev.s3.amazonaws.com/i/iho2sk8cs1n1x1ax2wel.png)

</ImageWrapper>

Gatsby uses [@reach/router](https://github.com/reach/router) which wraps the `Layout` component in an additional div. This is done so,

> @reach/router can automatically manage the focus as part of making sure sites are usable by screen readers.

So you can see how adding style to a javascript injected div without any `class` or `id` might be an issue.

# The Real Solution

Well the **real solution** is actually still the same, we need to assign a `height: '100%'` to all parent divs.

- Create a new css file and name it `global.css`. I've put it in a separate styles folder in my repo.

```js
/*
 * Purpose:
 * Assign height: "100%" to
 * html, body, #___gatsby &
 * div with role="group"
*/

html, body, #___gatsby {
    height: 100%;
}

body {
    margin: 0px;
}

div[role="group"][tabindex] {
    height: 100%;
}
```

- In the root of your directory, look for `gatsby-browser.js` and import `global.css`.

```js
import "./src/styles/global.css"
```

- I like to start my projects from scratch. This is my take on `Layout` Component.

```js
<div
  style={{
    height: "100%",
    display: "flex",
    flexDirection: "column",
  }}
>
  <header>
    <Header siteTitle={data.site.siteMetadata.title} />
  </header>

  <main
    style={{
      backgroundColor: "pink",
      flexGrow: 1,
    }}
  >
    {children}
  </main>

  <footer
    style={{
      backgroundColor: "aquamarine",
    }}
  >
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
</div>
```

# The Result as Promised !!

<ImageWrapper caption="Footer pushed down by content">

![Gatsby CSS - 100% Height](https://thepracticaldev.s3.amazonaws.com/i/z1cdwannqfd42xs7vqrx.gif)

</ImageWrapper>

> This solution is based on a [github thread](https://github.com/gatsbyjs/gatsby/issues/7310).

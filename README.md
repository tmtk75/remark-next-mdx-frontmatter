# README
This module allows you to use `Frontmatter` with [`@next/mdx`](https://nextjs.org/docs/advanced-features/using-mdx#nextmdx) which doesn't officially support frontmatter.

This plugin only supports MDX v2.

To install
```
$ yarn add remark-next-mdx-frontmatter
```

Configure your `next.config.mjs`. This module doesn't support `next.config.js`.
```mjs
// next.config.mjs
import withMDXFm from "@next/mdx";
import remarkFm from "./lib/frontmatter.mjs";

const withMDX = withMDXFm({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [remarkFm, { layoutPath: "../components/Post" /* default path to layout component */ }]
    ]
  },
});

const config = withMDX({ ...nextConfig });
export default config;
```

Make a component at the path.
The attribute name is `frontmatter`.
```jsx
// ../components/Post
type PostProps = {
  children: JSX.Element;
  frontmatter: {
    [key: string]: number | string;
  };
};

export default function Post({ children, frontmatter }: PostProps) {
  return (
    <article>
      {frontmatter.title} written by {frontmatter.author}.
      <section>{children}</section>
    </article>
  );
}
```

Put a .mdx file with frontmatter.
```mdx
// pages/hello.mdx
---
title: hello world
author: tmtk75
---
# Hello World
something...
```

You can give a `layoutPath` to each page in its frontmatter.
```mdx
---
title: a page
layoutPath: ../../components/Page
```

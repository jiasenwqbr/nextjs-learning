# Nextjs

 ## Introduction介绍

### [What is Next.js?什么是 Next.js？](https://nextjs.org/docs#what-is-nextjs)

Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.

Next.js 是一个用于构建全栈 Web 应用程序的 React 框架。您可以使用 React 组件来构建用户界面，并使用 Next.js 来构建其他功能和优化。

Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.

在后台，Next.js 还抽象并自动配置 React 所需的工具，例如捆绑、编译等。这使您可以专注于构建应用程序，而不是花时间进行配置。

Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.

无论您是个人开发人员还是大型团队的一员，Next.js 都可以帮助您构建交互式、动态和快速的 React 应用程序。

### Main Features 主要特点

Some of the main Next.js features include:

Next.js 的一些主要功能包括：

| Feature特征                                                  | Description描述                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Routing路由](https://nextjs.org/docs/app/building-your-application/routing) | A file-system based router built on top of Server Components that supports layouts, nested routing, loading states, error handling, and more.基于文件系统的路由器，构建在服务器组件之上，支持布局、嵌套路由、加载状态、错误处理等。 |
| [Rendering渲染](https://nextjs.org/docs/app/building-your-application/rendering) | Client-side and Server-side Rendering with Client and Server Components. Further optimized with Static and Dynamic Rendering on the server with Next.js. Streaming on Edge and Node.js runtimes.使用客户端和服务器组件进行客户端和服务器端渲染。使用 Next.js 在服务器上使用静态和动态渲染进一步优化。在 Edge 和 Node.js 运行时上进行流式处理。 |
| [Data Fetching数据获取](https://nextjs.org/docs/app/building-your-application/data-fetching) | Simplified data fetching with async/await in Server Components, and an extended 在服务器组件中使用 async/await 简化了数据获取，以及 `fetch` API for request memoization, data caching and revalidation. 用于请求记忆、数据缓存和重新验证的扩展 API。 |
| [Styling造型](https://nextjs.org/docs/app/building-your-application/styling) | Support for your preferred styling methods, including CSS Modules, Tailwind CSS, and CSS-in-JS支持您喜欢的样式方法，包括 CSS 模块、Tailwind CSS 和 CSS-in-JS |
| [Optimizations优化](https://nextjs.org/docs/app/building-your-application/optimizing) | Image, Fonts, and Script Optimizations to improve your application's Core Web Vitals and User Experience.图像、字体和脚本优化，以改善应用程序的核心 Web 指标和用户体验。 |
| [TypeScript](https://nextjs.org/docs/app/building-your-application/configuring/typescript) | Improved support for TypeScript, with better type checking and more efficient compilation, as well as custom TypeScript Plugin and type checker.改进了对 TypeScript 的支持，具有更好的类型检查和更高效的编译，以及自定义 TypeScript 插件和类型检查器。 |

### [App Router vs Pages Router应用程序路由器与页面路由器](https://nextjs.org/docs#app-router-vs-pages-router)

Next.js has two different routers: the App Router and the Pages Router. The App Router is a newer router that allows you to use React's latest features, such as Server Components and Streaming. The Pages Router is the original Next.js router, which allowed you to build server-rendered React applications and continues to be supported for older Next.js applications.

Next.js 有两个不同的路由器：应用程序路由器和页面路由器。App Router 是一个较新的路由器，它允许您使用 React 的最新功能，例如服务器组件和流式处理。页面路由器是原始的 Next.js 路由器，它允许您构建服务器渲染的 React 应用程序，并继续支持较旧的 Next.js 应用程序。

At the top of the sidebar, you'll notice a dropdown menu that allows you to switch between the **App Router** and the **Pages Router** features. Since there are features that are unique to each directory, it's important to keep track of which tab is selected.

在侧边栏的顶部，您会注意到一个下拉菜单，可让您在 App Router 和 Pages Router 功能之间切换。由于每个目录都有独特的功能，因此跟踪选择了哪个选项卡非常重要。

The breadcrumbs at the top of the page will also indicate whether you're viewing App Router docs or Pages Router docs.

页面顶部的痕迹导航还会指示您查看的是 App Router 文档还是 Pages Router 文档。

## Building Your Application构建应用程序

Next.js provides the building blocks to create flexible, full-stack web applications. The guides in **Building Your Application** explain how to use these features and how to customize your application's behavior.

Next.js 提供了用于创建灵活的全栈 Web 应用程序的构建块。生成应用程序中的指南介绍了如何使用这些功能以及如何自定义应用程序的行为。

The sections and pages are organized sequentially, from basic to advanced, so you can follow them step-by-step when building your Next.js application. However, you can read them in any order or skip to the pages that apply to your use case.

这些部分和页面按顺序组织，从基本到高级，因此在构建 Next.js 应用程序时可以逐步遵循它们。但是，您可以按任何顺序阅读它们，也可以跳到适用于您的用例的页面。

## Routing Fundamentals路由基础知识

The skeleton of every application is routing. This page will introduce you to the **fundamental concepts** of routing for the web and how to handle routing in Next.js.

每个应用程序的框架都是路由。本页将向您介绍 Web 路由的基本概念以及如何在 Next.js 中处理路由。

### [Terminology术语](https://nextjs.org/docs/app/building-your-application/routing#terminology)

First, you will see these terms being used throughout the documentation. Here's a quick reference:

首先，您将看到这些术语在整个文档中使用。下面是一个快速参考：

![Terminology for Component Tree](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fterminology-component-tree.png&w=3840&q=75&dpl=dpl_BbSpPdzv9Yrsi74LnqWRCSDNSUNs)

- **Tree:树：** A convention for visualizing a hierarchical structure. For example, a component tree with parent and children components, a folder structure, etc.用于可视化分层结构的约定。例如，包含父组件和子组件的组件树、文件夹结构等。
- **Subtree:子树：树** Part of a tree, starting at a new root (first) and ending at the leaves (last).的一部分，从新根（第一个）开始，到叶子（最后一个）结束。
- **Root**: The first node in a tree or subtree, such as a root layout.或子树中的第一个节点，例如根布局。
- **Leaf:叶：** Nodes in a subtree that have no children, such as the last segment in a URL path.树中没有子级的节点，例如 URL 路径中的最后一个段。

![Terminology for URL Anatomy](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fterminology-url-anatomy.png&w=3840&q=75&dpl=dpl_BbSpPdzv9Yrsi74LnqWRCSDNSUNs)

- **URL Segment:段：** Part of the URL path delimited by slashes.用斜杠分隔的 URL 路径的一部分。
- **URL Path:路径：** Part of the URL that comes after the domain (composed of segments).域后面的 URL 部分（由段组成）。

### [The `app` Router 路由器](https://nextjs.org/docs/app/building-your-application/routing#the-app-router)

In version 13, Next.js introduced a new **App Router** built on [React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components), which supports shared layouts, nested routing, loading states, error handling, and more.

在版本 13 中，Next.js 引入了基于 React 服务器组件构建的新应用程序路由器，它支持共享布局、嵌套路由、加载状态、错误处理等。

The App Router works in a new directory named `app`. The `app` directory works alongside the `pages` directory to allow for incremental adoption. This allows you to opt some routes of your application into the new behavior while keeping other routes in the `pages` directory for previous behavior. If your application uses the `pages` directory, please also see the [Pages Router](https://nextjs.org/docs/pages/building-your-application/routing) documentation.

App Router 在名为 的新目录中工作"app"。该"app"目录与目录一起工作 "pages" ，以允许增量采用。这允许您将应用程序的某些路由选择到新行为中，同时将其他路由保留 "pages" 在目录中以用于以前的行为。如果您的应用程序使用该 "pages" 目录，另请参阅 Pages Router 文档。

> **Good to know**: The App Router takes priority over the Pages Router. Routes across directories should not resolve to the same URL path and will cause a build-time error to prevent a conflict.
>
> 您需要知道：应用程序路由器优先于页面路由器。跨目录的路由不应解析为相同的 URL 路径，并且会导致生成时错误以防止冲突。



![Next.js App Directory](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fnext-router-directories.png&w=3840&q=75&dpl=dpl_BbSpPdzv9Yrsi74LnqWRCSDNSUNs)

By default, components inside `app` are [React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components). This is a performance optimization and allows you to easily adopt them, and you can also use [Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components).

默认情况下，里面的组件 "app" 是 React Server 组件。这是一项性能优化，允许您轻松采用它们，并且您还可以使用客户端组件。

> **Recommendation:** Check out the [Server](https://nextjs.org/docs/app/building-your-application/rendering/server-components) page if you're new to Server Components.
>
> 建议：如果您不熟悉服务器组件，请查看服务器页面。
>
> ### [Roles of Folders and Files](https://nextjs.org/docs/app/building-your-application/routing#roles-of-folders-and-files)

Next.js uses a file-system based router where:

Next.js 使用基于文件系统的路由器，其中：

- **Folders** are used to define routes. A route is a single path of nested folders, following the file-system hierarchy from the **root folder** down to a final **leaf folder** that includes a `page.js` file. See [Defining Routes](https://nextjs.org/docs/app/building-your-application/routing/defining-routes).

  **文件夹**用于定义路线。 路由是嵌套文件夹的单个路径，遵循从 **根文件夹** 到包含“page.js” 文件的最终 **叶文件夹** 的文件系统层次结构。 请参阅[定义路由](https://nextjs.org/docs/app/building-your-application/routing/defining-routes)。

- **Files** are used to create UI that is shown for a route segment. See [special files](https://nextjs.org/docs/app/building-your-application/routing#file-conventions).

  文件** 用于创建为路线段显示的 UI。 请参阅[特殊文件](https://nextjs.org/docs/app/building-your-application/routing#file-conventions)。

### [Route Segments](https://nextjs.org/docs/app/building-your-application/routing#route-segments)

Each folder in a route represents a **route segment**. Each route segment is mapped to a corresponding **segment** in a **URL path**.

路由中的每个文件夹都代表一个路由段。每个路由段都映射到 URL 路径中的相应段。

![How Route Segments Map to URL Segments](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-segments-to-path-segments.png&w=3840&q=75&dpl=dpl_BbSpPdzv9Yrsi74LnqWRCSDNSUNs)

### [Nested Routes](https://nextjs.org/docs/app/building-your-application/routing#nested-routes) 嵌套路由

To create a nested route, you can nest folders inside each other. For example, you can add a new `/dashboard/settings` route by nesting two new folders in the `app` directory.

若要创建嵌套路由，可以将文件夹嵌套在彼此内部。例如，您可以通过 "/dashboard/settings" 在目录中嵌套两个新文件夹来添加新路由 "app" 。

The `/dashboard/settings` route is composed of three segments:

- `/` (Root segment)
- `dashboard` (Segment)
- `settings` (Leaf segment)

### [File Conventions文件约定](https://nextjs.org/docs/app/building-your-application/routing#file-conventions)

Next.js provides a set of special files to create UI with specific behavior in nested routes:

Next.js 提供了一组特殊文件，用于在嵌套路由中创建具有特定行为的 UI：

|                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [`layout`](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts) | Shared UI for a segment and its children区段及其子级的共享 UI |
| [`page`](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages) | Unique UI of a route and make routes publicly accessible路由的唯一 UI，并使路由可公开访问 |
| [`loading`](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming) | Loading UI for a segment and its children加载区段及其子项的 UI |
| [`not-found`](https://nextjs.org/docs/app/api-reference/file-conventions/not-found) | Not found UI for a segment and its children未找到区段及其子项的 UI |
| [`error`](https://nextjs.org/docs/app/building-your-application/routing/error-handling) | Error UI for a segment and its children区段及其子项的错误 UI |
| [`global-error`](https://nextjs.org/docs/app/building-your-application/routing/error-handling) | Global Error UI全局错误 UI                                   |
| [`route`](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) | Server-side API endpoint服务器端 API 端点                    |
| [`template`](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#templates) | Specialized re-rendered Layout UI专门的重新渲染的布局 UI     |
| [`default`](https://nextjs.org/docs/app/api-reference/file-conventions/default) | Fallback UI for 的回退 UI [Parallel Routes并行路由](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes) |

> **Good to know**: `.js`, `.jsx`, or `.tsx` file extensions can be used for special files.
>
> 您需要知道： ".js"、 ".jsx"或 ".tsx" 文件扩展名可用于特殊文件。

### [Component Hierarchy组件层次结构](https://nextjs.org/docs/app/building-your-application/routing#component-hierarchy)

The React components defined in special files of a route segment are rendered in a specific hierarchy:

路由段的特殊文件中定义的 React 组件在特定的层次结构中呈现：

- `layout.js`
- `template.js`
- `error.js` (React error boundary)（React 错误边界）
- `loading.js` (React suspense boundary)（反应悬念边界）
- `not-found.js` (React error boundary)（React 错误边界）
- `page.js` or nested 或嵌套`layout.js`

![Component Hierarchy for File Conventions](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Ffile-conventions-component-hierarchy.png&w=3840&q=75&dpl=dpl_BbSpPdzv9Yrsi74LnqWRCSDNSUNs)

In a nested route, the components of a segment will be nested **inside** the components of its parent segment.

在嵌套路由中，区段的组件将嵌套 在其父区段的组件内。

![Nested File Conventions Component Hierarchy](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fnested-file-conventions-component-hierarchy.png&w=3840&q=75&dpl=dpl_BbSpPdzv9Yrsi74LnqWRCSDNSUNs)

## [Colocation公寓合租](https://nextjs.org/docs/app/building-your-application/routing#colocation)

In addition to special files, you have the option to colocate your own files (e.g. components, styles, tests, etc) inside folders in the `app` directory.

除了特殊文件之外，您还可以选择将自己的文件（例如组件、样式、测试等）放在目录中的文件夹中 "app" 。

This is because while folders define routes, only the contents returned by `page.js` or `route.js` are publicly addressable.

这是因为，虽然文件夹定义了路由，但只有 返回"page.js"的内容或 "route.js" 可公开寻址的内容。

![An example folder structure with colocated files](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fproject-organization-colocation.png&w=3840&q=75&dpl=dpl_BbSpPdzv9Yrsi74LnqWRCSDNSUNs)

Learn more about [Project Organization and Colocation](https://nextjs.org/docs/app/building-your-application/routing/colocation).

详细了解项目组织和主机托管。

## [Advanced Routing Patterns高级路由模式](https://nextjs.org/docs/app/building-your-application/routing#advanced-routing-patterns)

The App Router also provides a set of conventions to help you implement more advanced routing patterns. These include:

应用程序路由器还提供了一组约定来帮助您实现更高级的路由模式。这些包括：

- [Parallel Routes并行路由](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes): Allow you to simultaneously show two or more pages in the same view that can be navigated independently. You can use them for split views that have their own sub-navigation. E.g. Dashboards.：允许您在同一视图中同时显示两个或多个可以独立导航的页面。您可以将它们用于具有自己的子导航的拆分视图。例如仪表板。
- [Intercepting Routes](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes): Allow you to intercept a route and show it in the context of another route. You can use these when keeping the context for the current page is important. E.g. Seeing all tasks while editing one task or expanding a photo in a feed.：允许您拦截路由并将其显示在另一个路由的上下文中。当保留当前页面的上下文很重要时，可以使用它们。例如，在编辑一个任务或在提要中展开照片时查看所有任务。

These patterns allow you to build richer and more complex UIs, democratizing features that were historically complex for small teams and individual developers to implement.

这些模式允许你构建更丰富、更复杂的 UI，使历史上对小型团队和个人开发人员来说很复杂的功能民主化。

## Defining Routes定义路由

> We recommend reading the [Routing Fundamentals](https://nextjs.org/docs/app/building-your-application/routing) page before continuing.

This page will guide you through how to define and organize routes in your Next.js application.

### [Creating Routes](https://nextjs.org/docs/app/building-your-application/routing/defining-routes#creating-routes)

Next.js uses a file-system based router where **folders** are used to define routes.

Each folder represents a [**route** segment](https://nextjs.org/docs/app/building-your-application/routing#route-segments) that maps to a **URL** segment. To create a [nested route](https://nextjs.org/docs/app/building-your-application/routing#nested-routes), you can nest folders inside each other.

![Route segments to path segments](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-segments-to-path-segments.png&w=3840&q=75&dpl=dpl_BbSpPdzv9Yrsi74LnqWRCSDNSUNs)

A special [`page.js` file](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages) is used to make route segments publicly accessible.

![Defining Routes](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fdefining-routes.png&w=3840&q=75&dpl=dpl_BbSpPdzv9Yrsi74LnqWRCSDNSUNs)

In this example, the `/dashboard/analytics` URL path is *not* publicly accessible because it does not have a corresponding `page.js` file. This folder could be used to store components, stylesheets, images, or other colocated files.

> **Good to know**: `.js`, `.jsx`, or `.tsx` file extensions can be used for special files.

### [Creating UI](https://nextjs.org/docs/app/building-your-application/routing/defining-routes#creating-ui)

[Special file conventions](https://nextjs.org/docs/app/building-your-application/routing#file-conventions) are used to create UI for each route segment. The most common are [pages](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages) to show UI unique to a route, and [layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts) to show UI that is shared across multiple routes.

For example, to create your first page, add a `page.js` file inside the `app` directory and export a React component:

```typescript
export default function Page() {  return <h1>Hello, Next.js!</h1>}
```














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

## Pages and Layouts

> We recommend reading the [Routing Fundamentals](https://nextjs.org/docs/app/building-your-application/routing) and [Defining Routes](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) pages before continuing.

The App Router inside Next.js 13 introduced new file conventions to easily create [pages](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages), [shared layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts), and [templates](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#templates). This page will guide you through how to use these special files in your Next.js application.

Next.js 13 中的 App Router 引入了新的文件约定，可以轻松创建[页面](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages)、[共享 布局](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts)和模板。 本页面将指导您如何在 Next.js 应用程序中使用这些特殊文件。

### [Pages](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages)

A page is UI that is **unique** to a route. You can define pages by exporting a component from a `page.js` file. Use nested folders to [define a route](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) and a `page.js` file to make the route publicly accessible.

页面是路由独有的 UI。您可以通过从文件中导出组件来定义页面 "page.js" 。使用嵌套文件夹定义路由和 "page.js" 文件以使路由可公开访问。

Create your first page by adding a `page.js` file inside the `app` directory:

通过在目录中添加一个文件"page.js"来创建您的第一页 "app" ：

![page.js special file](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fpage-special-file.png&w=3840&q=75&dpl=dpl_BbSpPdzv9Yrsi74LnqWRCSDNSUNs)

app/page.tsxapp/page.tsx



```typescript
// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return <h1>Hello, Home page!</h1>
}
```



app/dashboard/page.tsx

```typescript
// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return <h1>Hello, Dashboard Page!</h1>
}
```



**Good to know**:

您需要知道：

- A page is always the 页面始终是[leaf叶子](https://nextjs.org/docs/app/building-your-application/routing#terminology) of the 的[route subtree路由子树](https://nextjs.org/docs/app/building-your-application/routing#terminology).。
- `.js`, 、 `.jsx`, or 或 `.tsx` file extensions can be used for Pages. 文件扩展名可用于 Pages 文稿。
- A `page.js` file is required to make a route segment publicly accessible. 需要文件才能使路由段可公开访问。
- Pages are 默认情况下，页面是[Server Components服务器](https://nextjs.org/docs/app/building-your-application/rendering/server-components) by default but can be set to a 但可以设置为[Client Component客户端组件](https://nextjs.org/docs/app/building-your-application/rendering/client-components).。
- Pages can fetch data. View the 页面可以提取数据。有关详细信息，请查看[Data Fetching“数据获取](https://nextjs.org/docs/app/building-your-application/data-fetching) section for more information.”部分。

### [Layouts布局](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts)

A layout is UI that is **shared** between multiple pages. On navigation, layouts preserve state, remain interactive, and do not re-render. Layouts can also be [nested](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#nesting-layouts).

布局是在 多个页面之间共享的 UI。在导航时，布局将保留状态，保持交互，并且不会重新呈现。布局也可以嵌套。

You can define a layout by `default` exporting a React component from a `layout.js` file. The component should accept a `children` prop that will be populated with a child layout (if it exists) or a child page during rendering.

您可以通过从文件中导出 React 组件"default"来定义布局 "layout.js" 。组件应接受一个"children"道具，该道具将在渲染期间填充子布局（如果存在）或子页面。

![layout.js special file](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Flayout-special-file.png&w=3840&q=75&dpl=dpl_BbSpPdzv9Yrsi74LnqWRCSDNSUNs)



app/dashboard/layout.tsx



```typescript
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>
 
      {children}
    </section>
  )
}
```

> **Good to know**:
>
> 您需要知道：
>
> - The top-most layout is called the 最上面的布局称为[Root Layout根布局](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required). This 。此**required必需** layout is shared across all pages in an application. Root layouts must contain 的布局在应用程序的所有页面之间共享。根布局必须包含 `html` and 和 `body` tags. 标记。
> - Any route segment can optionally define its own 任何路由段都可以选择定义自己的[Layout布局](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#nesting-layouts). These layouts will be shared across all pages in that segment.。这些布局将在该细分中的所有页面之间共享。
> - Layouts in a route are 默认情况下，路由中的布局是**nested嵌套的** by default. Each parent layout wraps child layouts below it using the React 。每个父布局都使用 React 属性将子布局包装在其下方 `children` prop. 。
> - You can use 您可以使用[Route Groups组](https://nextjs.org/docs/app/building-your-application/routing/route-groups) to opt specific route segments in and out of shared layouts.选择加入和退出共享布局的特定路由段。
> - Layouts are 默认情况下，布局是[Server Components服务器](https://nextjs.org/docs/app/building-your-application/rendering/server-components) by default but can be set to a 但可以设置为[Client Component客户端组件](https://nextjs.org/docs/app/building-your-application/rendering/client-components).。
> - Layouts can fetch data. View the 布局可以获取数据。有关详细信息，请查看[Data Fetching“数据获取](https://nextjs.org/docs/app/building-your-application/data-fetching) section for more information.”部分。
> - Passing data between a parent layout and its children is not possible. However, you can fetch the same data in a route more than once, and React will 无法在父布局及其子布局之间传递数据。但是，您可以在路由中多次获取相同的数据，React 会自动[automatically dedupe the requests删除重复数据，](https://nextjs.org/docs/app/building-your-application/caching#request-memoization) without affecting performance.而不会影响性能。
> - Layouts do not have access to the route segments below itself. To access all route segments, you can use 布局无权访问其下方的路径段。要访问所有路由段，您可以使用 [`useSelectedLayoutSegment`](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment) or 或 [`useSelectedLayoutSegments`](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segments) in a Client Component. 在客户端组件中。
> - `.js`, 、 `.jsx`, or 或 `.tsx` file extensions can be used for Layouts. 文件扩展名可用于布局。
> - A A `layout.js` and 和 `page.js` file can be defined in the same folder. The layout will wrap the page. file 可以在同一文件夹中定义。布局将包裹页面。

### [Root Layout (Required)根布局（必需）](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required)

The root layout is defined at the top level of the `app` directory and applies to all routes. This layout enables you to modify the initial HTML returned from the server.

根布局在目录的顶层定义"app"，并应用于所有路由。通过此布局，可以修改从服务器返回的初始 HTML。



app/layout.tsx



```typescript
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

> **Good to know**:
>
> 您需要知道：
>
> - The 该 `app` directory 目录**must必须** include a root layout.包含根布局。
> - The root layout must define 根布局必须定义 `<html>` and 和 `<body>` tags since Next.js does not automatically create them. 标记，因为 Next.js 不会自动创建它们。
> - You can use the 您可以使用[built-in SEO support内置的 SEO 支持](https://nextjs.org/docs/app/building-your-application/optimizing/metadata) to manage 来管理 `<head>` HTML elements, for example, the HTML 元素，例如元素 `<title>` element. 。
> - You can use 您可以使用[route groups路由组](https://nextjs.org/docs/app/building-your-application/routing/route-groups) to create multiple root layouts. See an 创建多个根布局。请参阅[example here此处的示例](https://nextjs.org/docs/app/building-your-application/routing/route-groups#creating-multiple-root-layouts).。
> - The root layout is a 默认情况下，根布局是[Server Component服务器](https://nextjs.org/docs/app/building-your-application/rendering/server-components) by default and ，**can not不能** be set to a 设置为[Client Component客户端组件](https://nextjs.org/docs/app/building-your-application/rendering/client-components).。

> **Migrating from the `pages` directory:** The root layout replaces the [`_app.js`](https://nextjs.org/docs/pages/building-your-application/routing/custom-app) and [`_document.js`](https://nextjs.org/docs/pages/building-your-application/routing/custom-document) files. [View the migration guide](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#migrating-_documentjs-and-_appjs).
>
> 从 "pages" 目录迁移：根布局将替换 "_app.js" 和 "_document.js" 文件。 查看迁移指南。

### [Nesting Layouts嵌套布局](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#nesting-layouts)

Layouts defined inside a folder (e.g. `app/dashboard/layout.js`) apply to specific route segments (e.g. `acme.com/dashboard`) and render when those segments are active. By default, layouts in the file hierarchy are **nested**, which means they wrap child layouts via their `children` prop.

在文件夹（例如）中定义的布局"app/dashboard/layout.js"适用于特定的路由段（例如"acme.com/dashboard"），并在这些段处于活动状态时进行渲染。默认情况下，文件层次结构中的布局是嵌套的，这意味着它们通过其 prop 包装子布局 "children" 。

![Nested Layout](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fnested-layout.png&w=3840&q=75&dpl=dpl_BbSpPdzv9Yrsi74LnqWRCSDNSUNs)



app/dashboard/layout.tsx

```typescript
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
```

> **Good to know**:
>
> 您需要知道：
>
> - Only the root layout can contain 只有根布局可以包含 `<html>` and 和 `<body>` tags. 标记。

If you were to combine the two layouts above, the root layout (`app/layout.js`) would wrap the dashboard layout (`app/dashboard/layout.js`), which would wrap route segments inside `app/dashboard/*`.

如果要组合上述两个布局，则根布局 （"app/layout.js"） 将包装仪表板布局 （"app/dashboard/layout.js"），后者会将路由段包装在 "app/dashboard/*".

The two layouts would be nested as such:

这两个布局将嵌套如下：

![Nested Layouts](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fnested-layouts-ui.png&w=3840&q=75&dpl=dpl_BbSpPdzv9Yrsi74LnqWRCSDNSUNs)

You can use [Route Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups) to opt specific route segments in and out of shared layouts.

您可以使用路由组选择加入和退出共享布局的特定路由段。

### [Templates模板](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#templates)

Templates are similar to layouts in that they wrap each child layout or page. Unlike layouts that persist across routes and maintain state, templates create a new instance for each of their children on navigation. This means that when a user navigates between routes that share a template, a new instance of the component is mounted, DOM elements are recreated, state is **not** preserved, and effects are re-synchronized.

模板与布局类似，因为它们包装每个子布局或页面。与跨路由保留并保持状态的布局不同，模板在导航上为每个子级创建一个新实例。这意味着，当用户在共享模板的路由之间导航时，将装载组件的新实例，重新创建 DOM 元素，不保留状态，并重新同步效果。

There may be cases where you need those specific behaviors, and templates would be a more suitable option than layouts. For example:

在某些情况下，您可能需要这些特定行为，而模板将是比布局更合适的选项。例如：

- Features that rely on 依赖于（ `useEffect` (e.g logging page views) and 例如记录页面浏览量）和 `useState` (e.g a per-page feedback form). （例如每页反馈表
- To change the default framework behavior. For example, Suspense Boundaries inside layouts only show the fallback the first time the Layout is loaded and not when switching pages. For templates, the fallback is shown on each navigation.更改默认框架行为。例如，布局内的 Suspense Boundaries 仅在首次加载布局时显示回退，而不是在切换页面时显示回退。对于模板，回退显示在每个导航上。

A template can be defined by exporting a default React component from a `template.js` file. The component should accept a `children` prop.

可以通过从文件中导出默认的 React 组件来定义模板 "template.js" 。组件应该接受一个 "children" 道具。

![template.js special file](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Ftemplate-special-file.png&w=3840&q=75&dpl=dpl_BbSpPdzv9Yrsi74LnqWRCSDNSUNs)



app/template.tsx



```typescript
export default function Template({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
```

In terms of nesting, `template.js` is rendered between a layout and its children. Here's a simplified output:

在嵌套方面， "template.js" 在布局及其子项之间呈现。下面是一个简化的输出：



Output输出



```typescript
<Layout>
  {/* Note that the template is given a unique key. */}
  <Template key={routeParam}>{children}</Template>
</Layout>
```

### [Modifying 修改``](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#modifying-head)

In the `app` directory, you can modify the `<head>` HTML elements such as `title` and `meta` using the [built-in SEO support](https://nextjs.org/docs/app/building-your-application/optimizing/metadata).

在 "app" 目录中，您可以修改 "<head>" HTML 元素，例如 "title" 并使用 "meta" 内置的 SEO 支持。

Metadata can be defined by exporting a [`metadata` object](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#the-metadata-object) or [`generateMetadata` function](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function) in a [`layout.js`](https://nextjs.org/docs/app/api-reference/file-conventions/layout) or [`page.js`](https://nextjs.org/docs/app/api-reference/file-conventions/page) file.

元数据可以通过导出 "metadata" or "generateMetadata" 文件中的对象"layout.js"或 "page.js" 函数来定义。



app/page.tsx



```typescript
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Next.js',
}
 
export default function Page() {
  return '...'
}
```

> **Good to know**: You should **not** manually add `<head>` tags such as `<title>` and `<meta>` to root layouts. Instead, you should use the [Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) which automatically handles advanced requirements such as streaming and de-duplicating `<head>` elements.
>
> 您需要知道：您不应手动向"<head>"根布局添加标签，例如 "<title>" 和 "<meta>" 。相反，您应该使用元数据 API，它会自动处理高级要求，例如流式处理和重复数据删除 "<head>" 元素。

## Linking and Navigating

There are two ways to navigate between routes in Next.js:

有两种方法可以在 Next.js 中的路由之间导航：

- Using the [`` Component](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#link-component)
- Using the [`useRouter` Hook](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#userouter-hook)

This page will go through how to use `<Link>`, `useRouter()`, and dive deeper into how navigation works.

本页将介绍如何使用 "<Link>"、 "useRouter()"和 ，并深入探讨导航的工作原理。

### [ Component元件](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#link-component)

`<Link>` is a built-in component that extends the HTML `<a>` tag to provide [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#1-prefetching) and client-side navigation between routes. It is the primary way to navigate between routes in Next.js.

"<Link>" 是一个内置组件，它扩展了 HTML "<a>" 标记，以在路由之间提供预取和客户端导航。这是在 Next.js 中的路由之间导航的主要方式。

You can use it by importing it from `next/link`, and passing a `href` prop to the component:

您可以通过从 导入它"next/link"并将 "href" prop 传递给组件来使用它：

app/page.tsxapp/page.tsx

```typescript
import Link from 'next/link'
 
export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}
```

There are other optional props you can pass to `<Link>`. See the [API reference](https://nextjs.org/docs/app/api-reference/components/link) for more.

还有其他可选的道具可以传递给 "<Link>"。有关详细信息，请参阅 API 参考。

#### [Examples例子](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#examples)

##### [Linking to Dynamic Segments链接到动态区段](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#linking-to-dynamic-segments)

When linking to [dynamic segments](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes), you can use [template literals and interpolation](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Template_literals) to generate a list of links. For example, to generate a list of blog posts:

链接到动态区段时，您可以使用模板文字和插值来生成链接列表。例如，要生成博客文章列表：

app/blog/PostList.js

```typescript
import Link from 'next/link'
 
export default function PostList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}
```



#### [Checking Active Links检查活动链接](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#checking-active-links)

You can use [`usePathname()`](https://nextjs.org/docs/app/api-reference/functions/use-pathname) to determine if a link is active. For example, to add a class to the active link, you can check if the current `pathname` matches the `href` of the link:

您可以使用 "usePathname()" 它来确定链接是否处于活动状态。例如，要向活动链接添加类，可以检查当前链接是否 "pathname" 与 "href" 链接匹配：

app/components/links.tsx

```typescript
'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Links() {
  const pathname = usePathname()
 
  return (
    <nav>
      <ul>
        <li>
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/about' ? 'active' : ''}`}
            href="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}
```

#### [Scrolling to an 滚动到`id`](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#scrolling-to-an-id)

The default behavior of the Next.js App Router is to scroll to the top of a new route or to maintain the scroll position for backwards and forwards navigation.

Next.js 应用路由器的默认行为是滚动到新路由的顶部或保持滚动位置以进行前后导航。

If you'd like to scroll to a specific `id` on navigation, you can append your URL with a `#` hash link or just pass a hash link to the `href` prop. This is possible since `<Link>` renders to an `<a>` element.

如果您想滚动到特定的 "id" 导航，您可以在 URL 后附加一个"#"哈希链接，或者只是将哈希链接传递给 "href" 道具。这是可能的，因为 "<Link>" 渲染到 "<a>" 元素。

```typescript
<Link href="/dashboard#settings">Settings</Link>
 
// Output
<a href="/dashboard#settings">Settings</a>
```

#### [Disabling scroll restoration禁用卷轴恢复](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#disabling-scroll-restoration)

The default behavior of the Next.js App Router is to scroll to the top of a new route or to maintain the scroll position for backwards and forwards navigation. If you'd like to disable this behavior, you can pass `scroll={false}` to the `<Link>` component, or `scroll: false` to `router.push()` or `router.replace()`.

Next.js 应用路由器的默认行为是滚动到新路由的顶部或保持滚动位置以进行前后导航。如果要禁用此行为，可以 "scroll={false}" "<Link>"传递给组件，或者 "scroll: false" 传递给 "router.push()" 或 "router.replace()"。

```typescript
// next/link
<Link href="/dashboard" scroll={false}>
  Dashboard
</Link>
```

```typescript
// useRouter
import { useRouter } from 'next/navigation'
 
const router = useRouter()
 
router.push('/dashboard', { scroll: false })
```



## [`useRouter()` Hook钩](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#userouter-hook)

The `useRouter` hook allows you to programmatically change routes.

钩 "useRouter" 子允许您以编程方式更改路由。

This hook can only be used inside Client Components and is imported from `next/navigation`.

此挂钩只能在客户端组件内部使用，并且是从 "next/navigation" .

app/page.js

```typescript
'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
  )
}
```

For a full list of `useRouter` methods, see the [API reference](https://nextjs.org/docs/app/api-reference/functions/use-router).

有关方法的完整列表 "useRouter" ，请参阅 API 参考。

> **Recommendation:** Use the `<Link>` component to navigate between routes unless you have a specific requirement for using `useRouter`.
>
> 建议：使用该 "<Link>" 组件在路由之间导航，除非您有使用 "useRouter".
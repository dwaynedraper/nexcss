# NexCSS
---
## The next paradigm for CSS

## The nexus of your design and development systems

## Designed for the Next.js framework

---

### What is NexCSS?

NexCSS (pronounced Nexus) aims to bring an approach to file structure, component composition, and CSS implementation in a way that melds naturally with the Next.js framework. BEM just doesn't align with Next.js, or even React in general. If you are following proper composition techniques, it makes more sense to keep the CSS within the component. NexCSS follows a component-driven design using Tailwind and Storybook. OOCSS comes a little closer, and I have adopted some of its principles into the design of NexCSS.

NexCSS is not a framework, and barely qualifies as a library. It is moreso a thought process, a structured approach to designing and developing your Next.js application. I provide a template repo as a starting place to help you ease into the new way of thinking. It has Storybook, Sass, and several npm packages installed and configured, and has some base components to give you a headstart. I will be adding in unit tests in the near future as well. NexCSS at its core, however, is simply a design/development philosophy.

### Why NexCSS? What problems does it solve? What benefits does it offer?
**DX** - Onboard faster, and keep employees happier by providing a consistent, easy-to-use framework.

**Consistency** - Consistency improves user experiences, and heightens brand recognition.

**Speed** - Semantically named, pre-built components make development lightning fast.

**Accessible** - Semantic tags coupled with structured composition creates accessible pages.

**CMS-friendly** - A component-based model with variants and consistent props is CMS-ready.

### The Approach
The main layout, the overall structure of the page will be defined in the root [layout.tsx](/src/app/layout.tsx) file. Each major section of the site structure (Header, Sidebar, Main, Footer) will have its own component in the [structure](/src/components/structure/) folder.

We will start with a [look-and-feel](/src/app/(public)/look-and-feel/page.tsx) page filled with various HTML elements, and a [global](/src/app/globals.scss) CSS/Sass file. The core aspects of your design (section padding, rounding, fonts, etc) that are most useful for creating a consistent design and layout will be in the [global](/src/app/globals.scss) file.

A [base](/src/components/base/) folder will store the basest of components (`<Button>`, `<Input>`, `<Textarea>`). Include any necessary variations (outline, primary, large) as conditional and/or optional props passed to the component. A library such as `classnames`, `clsx`, or `class-variance-authority` will handle the variations. This should keep the button's main aspects (font, padding, size) consistent, while allowing for special situations (danger color, close (X) button). While this adds overhead in a traditional application, Next.js' SSR (server-side rendering) throws out any unused code, allowing even a massive, multi-purpose component to be delivered as the tiniest possible solution in the end, with only the applied styles making it to the rendered HTML.

The main content section will have smaller layout sections (side-by-side, photo, photo grid, CTA). These layouts will be stored in the [page-layout](/src/components/page-layout/) folder. In most cases, only the layout, containers, and structure are in these components. Some of my examples in here will showcase the use of `React.Children.toArray(children)`, which really allows you to more fully separate the structure from the design. In select cases, you may see two layouts nested.

As an example, let's consider a CTA section. You want the view split horizontally on large devices, a photo on one side, and the CTA itself on the other.
```tsx
// page.tsx
<SideBySide>
  <CTA
    title={props.cta.title}
    heading={props.cta.heading}
    buttonText={props.cta.btnText}
    onSubmit={props.cta.onSubmit}
    alignment="center"
  />
  <Photo src={props.photoSrc} />
</SideBySide>
```

The content to fill these (CTA, photo square, article) will be stored in the [content](/src/components/content/) folder. These components will hold more of the design decisions, and less about the overall structure.
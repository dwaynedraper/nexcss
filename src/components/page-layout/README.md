The thought process behind this [layout](../layout/) folder is to create reusable layout components
that will be used in the application's pages (the `page.tsx` files). This will allow for a consistent layout across the application. A universal Container.tsx will have options through class variance. The main structural layout components such as the header, footer, and sidebar will be located in the [structure](../structure/) folder.

Containers will be imported from [containers](../containers/). The primary [Container.tsx](../containers/Container.tsx) will be the go-to for almost all situations. If you have special needs, such as going full-screen and covering even the sidebar, a different one may be used.

`page.tsx`
```tsx
export default function CTAPage({ctaProps, photoSrc}: CTAPageProps) {
  return (
    <Container fluid={false}>
      {/* FiftyFifty is a layout component */}
      <FiftyFifty> 
        {/* CTA and Photo are content components that fit within the layout */}
        <CTA ctaProps={ctaProps}/>
        <Photo src={photoSrc}/>
      </FiftyFifty>
    </Container>
  )
}
```
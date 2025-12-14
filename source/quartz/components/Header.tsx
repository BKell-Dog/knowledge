import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return children.length > 0 ? <header>{children}</header> : null
}

Header.css = `
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
  gap: 1.5rem;
}

header h1 {
  margin: 0;
  flex: auto;
}
`

export default (() => {
  return (
    <header class="header">
      <div class="header-left">
        <a href="/home/" class="header-home">Home</a>
      </div>
    </header>
  )
}) satisfies QuartzComponentConstructor

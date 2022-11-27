interface conditionals {
  [key: string]: boolean
}

interface RenderProps {
  children: JSX.Element | JSX.Element[]
  when: conditionals | boolean
}
const Render = ({ children, when }: RenderProps) => {
  return (
    <>
      {Array.isArray(children) && typeof when !== "boolean"
        ? children.map((children) => when[children.type.name] && children)
        : !Array.isArray(children) &&
          typeof when === "boolean" &&
          when &&
          children}
    </>
  )
}
export default Render

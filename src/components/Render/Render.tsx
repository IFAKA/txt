import { AnimatePresence } from "framer-motion"
import { isValidElement } from "react"

interface RenderProps {
  children: JSX.Element | JSX.Element[]
  when: boolean | boolean[]
}

/**
 * @author FAKA
 * @description It renders JSX conditionally in a clean way instead of ternaries or early returns.
 * @param when Array of rendering conditions
 * @param children JSX to conditionally render
 * @returns JSX conditionally rendered
 * @example
 * const conditions = [
 *  navCondition,
 *  bodyCondition,
 *  footyCondition
 * ]
 * <Render when={conditions}>
 *   <Nav />
 *   <Body />
 *   <Footy />
 * </Render>
 * @example
 * const condition = boolean
 * <Render when={condition}>
 *   <Nav />
 * </Render>
 */

const Render = ({ children, when }: RenderProps) => {
  const MultipleElements =
    Array.isArray(children) &&
    children.every((children) => isValidElement(children)) &&
    Array.isArray(when) &&
    when.every((condition) => typeof condition === "boolean")
  const SingleElement = isValidElement(children) && typeof when === "boolean"

  function error() {
    throw new Error("Wrong parameters")
  }

  return (
    <>
      {MultipleElements ? (
        <AnimatePresence>
          {children.map((child, i) => when[i] && child)}
        </AnimatePresence>
      ) : SingleElement ? (
        <AnimatePresence>{when && children}</AnimatePresence>
      ) : (
        error()
      )}
    </>
  )
}
export default Render

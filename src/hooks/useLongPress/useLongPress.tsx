import { useRef } from "react"

interface longProps {
  onClick: any
  onLongPress: any
}

export default function useLongPress({ onClick, onLongPress }: longProps) {
  const timerRef = useRef<NodeJS.Timeout>()
  const isLongPress = useRef(false)

  function startPressTimer<T>(value: T) {
    isLongPress.current = false
    timerRef.current = setTimeout(() => {
      isLongPress.current = true
      onLongPress(value)
    }, 500)
  }

  function handleOnMouseDown<T>(value: T) {
    startPressTimer(value)
  }
  function handleOnTouchStart<T>(value: T) {
    startPressTimer(value)
  }

  const handleOnMouseUp = () => clearTimeout(timerRef.current)
  const handleOnTouchEnd = () => clearTimeout(timerRef.current)

  function handleOnClick<T extends string>(value: T) {
    if (isLongPress.current) {
      return
    }
    onClick(value)
  }

  return {
    onClick: handleOnClick,
    onMouseDown: handleOnMouseDown,
    onTouchStart: handleOnTouchStart,
    onMouseUp: handleOnMouseUp,
    onTouchEnd: handleOnTouchEnd,
  }
}

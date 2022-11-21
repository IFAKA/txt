import { Note } from "@/models"
import { useRef } from "react"

interface longProps {
  onClick: <T extends string>(...args: T[]) => void
  onLongPress: <T extends Note>(...args: T[]) => void
}

export default function useLongPress({ onClick, onLongPress }: longProps) {
  const timerRef = useRef<NodeJS.Timeout>()
  const isLongPress = useRef(false)

  function startPressTimer<T extends Note>(value: T) {
    isLongPress.current = false
    timerRef.current = setTimeout(() => {
      isLongPress.current = true
      onLongPress(value)
    }, 500)
  }

  function handleOnMouseDown<T extends Note>(value: T) {
    startPressTimer(value)
  }
  function handleOnTouchStart<T extends Note>(value: T) {
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

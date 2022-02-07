import { useCallback, useState } from 'react'

type DragDropEventsProps = {
  onDrop?: ((event: React.DragEvent<HTMLElement>) => void) | undefined
  onDragEnter?: ((event: React.DragEvent<HTMLElement>) => void) | undefined
  onDragLeave?: ((event: React.DragEvent<HTMLElement>) => void) | undefined
  onDragOver?: ((event: React.DragEvent<HTMLElement>) => void) | undefined
}

export const useDragDrop = ({
  onDrop,
  onDragEnter,
  onDragLeave,
  onDragOver
}: DragDropEventsProps) => {
  const [isDragging, setIsDragging] = useState(false)

  const onDragLeaveCC = useCallback(
    (e: React.DragEvent<HTMLElement>) => {
      e.preventDefault()
      e.stopPropagation()

      setIsDragging(false)
      if (onDragLeave) onDragLeave(e)
    },
    [onDragLeave]
  )

  const onDragEnterCC = useCallback(
    (e: React.DragEvent<HTMLElement>) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(true)
      if (onDragEnter) onDragEnter(e)
    },
    [onDragEnter]
  )

  const onDragOverCC = useCallback(
    (e: React.DragEvent<HTMLElement>) => {
      e.preventDefault()
      setIsDragging(true)
      if (onDragOver) onDragOver(e)
    },
    [onDragOver]
  )

  const onDropCC = useCallback(
    (e: React.DragEvent<HTMLElement>) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(false)
      if (onDrop) onDrop(e)
    },
    [onDrop]
  )

  return {
    onDragLeave: onDragLeaveCC,
    onDragEnter: onDragEnterCC,
    onDragOver: onDragOverCC,
    onDrop: onDropCC,
    isDragging
  }
}

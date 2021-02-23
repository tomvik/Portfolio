import React from "react"
import { Slide, useScrollTrigger } from "@material-ui/core"

type HideOnScrollProps = {
  children: JSX.Element
}

const HideOnScroll = ({ children }: HideOnScrollProps) => {
  const trigger = useScrollTrigger()
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}
export default HideOnScroll
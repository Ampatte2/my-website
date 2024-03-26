import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

const Row = (props: PropsWithChildren<{ classes?: string }>) =>
  <div className={`flex flex-row ${cn(props.classes)}`}>
    {props.children}
  </div>

const Column = (props: PropsWithChildren<{ classes?: string }>) =>
  <div className={`flex flex-col ${cn(props.classes)}`}>
    {props.children}
  </div>

export {
  Row,
  Column
}
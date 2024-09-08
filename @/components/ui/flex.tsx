import { cn } from "@/lib/utils"
import { type ClassValue } from "clsx"
import { PropsWithChildren } from "react"

const Row = (props: PropsWithChildren<{ classes?: ClassValue }>) =>
  <div className={`flex flex-row ${cn(props.classes)}`}>
    {props.children}
  </div>

const Column = (props: PropsWithChildren<{ classes?: ClassValue }>) =>
  <div className={`flex flex-col ${cn(props.classes)}`}>
    {props.children}
  </div>

export {
  Row,
  Column
}
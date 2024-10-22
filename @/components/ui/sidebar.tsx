"use client"
import { PropsWithChildren, ReactElement, useState } from "react";
import { cn } from "@/lib/utils";
import { type ClassValue } from "clsx"
import {isInViewportListener} from "../../../util/isInViewPort";

type SideBarBaseProps = { icon: ReactElement, bottomOffset?: number };
type SideBarProps = { cap?: ReactElement } & SideBarBaseProps;
export const SidebarBase = (props: SideBarProps) =>  {
  const [isInView, setIsInView] = useState(false);
  return <div 
      className={cn("sidebar", isInView ? "is-in-view" : "")}
      ref={(node) => isInViewportListener(node, () => setIsInView(true), () => setIsInView(false), props.bottomOffset ?? 0)}
    >
    {props.cap}
    {props.icon} 
    <div className="sidebar-rect"  />
    <div className="sidebar-circle" />
  </div>
}

export const SidebarTop = (props: SideBarBaseProps) => <SidebarBase {...props} cap={<div className="sidebar-top" />}/>
export const SidebarBottom = (props: SideBarBaseProps) => <SidebarBase {...props} cap={<div className="sidebar-bottom" />}/>
export const SidebarMain =(props: PropsWithChildren<{classes?: ClassValue, collapse?: "xl"}>) => <div className={cn("sidebar-main", props.classes, props.collapse)}>{props.children}</div>


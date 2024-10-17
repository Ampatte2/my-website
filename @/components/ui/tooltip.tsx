import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { H3, H4 } from "@/components/ui/elements";
import Image, { StaticImageData } from "next/image";
import { JSXElementConstructor, PropsWithChildren, ReactNode, useState, forwardRef } from "react";
import { cn } from "@/lib/utils"

const TooltipContent = forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-lg border bg-popover px-4 py-4 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export type TooltipProps = PropsWithChildren<{content?: ReactNode, contentClass?: string, title: string }>

const Tooltip = (props: PropsWithChildren<TooltipProps>) => 
  <TooltipPrimitive.TooltipProvider>
    <TooltipPrimitive.Tooltip delayDuration={0}>
      <TooltipPrimitive.TooltipTrigger>
        {props.children}
      </TooltipPrimitive.TooltipTrigger>
      <TooltipContent side="top" sideOffset={8}>
        <div className={"flex flex-col text-center gap-2 text-slate-700"}>
          <H4>{props.title}</H4>
          {props.content}
        </div>
      </TooltipContent>
    </TooltipPrimitive.Tooltip>
  </TooltipPrimitive.TooltipProvider>;

const SvgWithTooltip = (props: {svg: JSXElementConstructor<{className?: string}>} & TooltipProps) => 
  <Tooltip
    title={props.title}
    content={props.content}
  >
    <props.svg className="tooltip-media" />
  </Tooltip>


const ImgWithTooltip = (props: {src: StaticImageData} & TooltipProps) => 
  <Tooltip
    title={props.title}
    content={props.content}
  >
    <Image src={props.src} alt={props.title} className="tooltip-media"/>
  </Tooltip>

export { 
  Tooltip,
  SvgWithTooltip,
  ImgWithTooltip
}

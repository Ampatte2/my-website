import { forwardRef, PropsWithChildren, type ReactNode } from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipContent = forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export type TooltipProps = PropsWithChildren<{ content: ReactNode }>

const Tooltip = (props: TooltipProps) => {
  return (
    <TooltipPrimitive.TooltipProvider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.TooltipTrigger asChild>
          {props.children}
        </TooltipPrimitive.TooltipTrigger>
        <TooltipPrimitive.TooltipContent>
          {props.content}
        </TooltipPrimitive.TooltipContent>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.TooltipProvider>
  )
}

export { Tooltip }

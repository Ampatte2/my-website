import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import {type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { H4 } from "@/components/ui/elements"
import Link from "next/link"
import { Url } from "next/dist/shared/lib/router/router"
import { buttonVariants } from "./button"

type AnchorIconProps = React.ComponentPropsWithoutRef<"a"> & {
  icon?: React.ReactElement, 
  title?: string,
}

const AnchorIcon = React.forwardRef<
  HTMLAnchorElement,
  AnchorIconProps
  >(({ className, icon, title, ...props }, ref) => 
  <a 
    className={cn("fill-slate-700 rounded-md inline-flex items-center justify-center whitespace-nowrap font-medium transition-fill [&>svg]:h-12 [&>svg]:w-12", className)} 
    ref={ref}
    {...props}
  >
    {icon}
    {title ? <H4>{title}</H4> : null}
  </a>
)
type AnchorButtonProps = React.ComponentPropsWithoutRef<"a"> & {
  icon?: React.ReactElement, 
  title?: string,
} & VariantProps<typeof buttonVariants>

const AnchorButton = React.forwardRef<
  HTMLAnchorElement,
  AnchorButtonProps
  >(({  variant, size, className, icon, title, ...props }, ref) => 
  <a 
    className={cn(buttonVariants({ variant, size }), "cursor-pointer", className)} 
    ref={ref}
    {...props}
  >
    {icon}
    {title}
  </a>
)

const mailToSpaceSeperator = "%0D%0A";
const MailToAnchor = React.forwardRef<
  HTMLAnchorElement,
  AnchorButtonProps & {
  subject: string, 
  body: string[], 
}>((props, ref) => 
  <AnchorIcon 
    aria-label="Contact Email Mailto Link" 
    href={`mailto:andrew@andrewmpatterson.com?subject=${props.subject}&body=${props.body.join(mailToSpaceSeperator + mailToSpaceSeperator)}`} 
    ref={ref}
    {...props}
  />
)

MailToAnchor.displayName = "MailToAnchor"

const TelAnchor = React.forwardRef<
  HTMLAnchorElement,
  AnchorButtonProps 
& VariantProps<typeof buttonVariants>>((props, ref) => 
  <AnchorIcon 
    aria-label="Call Me at 623-692-6992"
    href={"tel:623-692-6992"} 
    ref={ref}
    {...props}
  />
)

TelAnchor.displayName = "TelAnchor"

const Anchor = React.forwardRef<
HTMLAnchorElement,
React.ComponentPropsWithoutRef<"nav"> & { href: Url, icon?: React.ReactElement, title: string }
>(({ ...props }, ref) => 
  <Link 
    target="_blank" 
    href={props.href} 
    className={cn(props.className, "underline text-slate-700 hover:text-slate-300")} 
    ref={ref}
  >
    {props.icon}
    {props.title}
  </Link>
)

export {
  AnchorIcon,
  AnchorButton,
  MailToAnchor,
  TelAnchor,
  Anchor
}

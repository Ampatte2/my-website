import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { Url } from "next/dist/shared/lib/router/router"

const mailToSpaceSeperator = "%0D%0A"

const MailToAnchor = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"nav"> & { subject: string, body: string[] }
>(({ ...props }, ref) => <a className={cn(props.className)} aria-label="Contact Email Mailto Link" href={`mailto:dog@dog.com?subject=${props.subject}&body=${props.body.join(mailToSpaceSeperator + mailToSpaceSeperator)}`} ref={ref}>{props.children}</a>)
MailToAnchor.displayName = "MailToAnchor"

const AnchorIcon = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"nav"> & { href: Url, icon: React.ReactElement, title: string }
>(({ ...props }, ref) => <Link href={props.href}><a className={cn(props.className, 'flex flex-row')} ref={ref}>{props.icon}<h4>{props.title}</h4></a></Link>)

export {
  MailToAnchor,
  AnchorIcon
}
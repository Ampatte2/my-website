import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

const mailToSpaceSeperator = "%0D%0A"

const MailToAnchor = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"nav"> & { subject: string, body: string[] }
>(({ ...props }, ref) => <a aria-label="Contact Email Mailto Link" href={`mailto:dog@dog.com?subject=${props.subject}&body=${props.body.join(mailToSpaceSeperator + mailToSpaceSeperator)}`} ref={ref}>{props.children}</a>)
MailToAnchor.displayName = "MailToAnchor"

const AnchorIcon = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"nav"> & {}
>(({ ...props }, ref) => <a {...props} className='flex flex-row'>{ }<h4>855-278-5080</h4></a>)

export {
  MailToAnchor
}
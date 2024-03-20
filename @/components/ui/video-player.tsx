import { cn } from "@/lib/utils"

async function VideoPlayer({
  className,
  ...props
}: React.IframeHTMLAttributes<HTMLIFrameElement>) {

  return <iframe
    {...props}
    className={cn("animate-pulse rounded-md bg-muted", className)}
  />
}

export { VideoPlayer }

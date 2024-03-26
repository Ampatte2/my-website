import { cn } from "@/lib/utils"

function VideoPlayer({
  className,
  ...props
}: React.IframeHTMLAttributes<HTMLIFrameElement>) {

  return <iframe
    {...props}
    className={cn("animate-pulse rounded-md bg-muted", className)}
  />
}

type YoutubePlayerProps = {
  src: string,
  title: string,
  height: number,
  width: number
}
function YoutubePlayer({
  className,
  ...props
}: React.IframeHTMLAttributes<HTMLIFrameElement> & YoutubePlayerProps) {
  return <iframe
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    frameBorder={0}
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
    {...props}
    className={cn("rounded-md bg-muted", className)}
  />
}

export { VideoPlayer, YoutubePlayer }

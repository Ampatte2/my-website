"use client"
import { Button } from "./button"

export const DownloadResumeButton = (props: { onClick?: () => void }) => {
  const printPage = () => {
    props.onClick && props.onClick();
    globalThis.print();
  }
  return <Button onClick={printPage} variant="secondary" size="lg" className="bg-slate-700">Download Resume</Button>
}

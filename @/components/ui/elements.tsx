import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils"
type ClassProp = { className?: string }

export const H1 = (props: PropsWithChildren<ClassProp>) => <h1 className={cn("text-4xl font-extrabold tracking-tight lg:text-5xl", props.className)}>{props.children}</h1>;
export const H2 = (props: PropsWithChildren<ClassProp>) => <h2 className={cn("text-3xl font-semibold tracking-tight", props.className)}>{props.children}</h2>
export const H3 = (props: PropsWithChildren<ClassProp>) => <h3 className={cn("text-2xl font-semibold tracking-tight", props.className)}>{props.children}</h3>
export const H4 = (props: PropsWithChildren<ClassProp>) => <h4 className={cn("text-1xl font-semibold tracking-tight", props.className)}>{props.children}</h4>
export const P = (props: PropsWithChildren<ClassProp>) => <p className={cn("leading-7", props.className)}>{props.children}</p>
export const OL = (props: PropsWithChildren<ClassProp>) => <ol className={cn("list-disc [&>li]:mt-2", props.className)}>{props.children}</ol>
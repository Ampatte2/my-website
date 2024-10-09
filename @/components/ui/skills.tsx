"use client"
import {useState} from "react";
import { cn } from "@/lib/utils";
import { ImgWithTooltip, SvgWithTooltip } from "@/components/ui/tooltip";
import { isInViewportListener } from "../../../util/isInViewPort";
import Fpts from "images/fp-ts-logo.png";
import Shadcn from "images/shadcn.png";
import Angular from "svgs/angularjs.svg";
import Bash from "svgs/bash.svg";
import BetaFlight from "images/betaflight-logo.jpg";
import Css from "svgs/css-3.svg";
import Express from "svgs/express.svg";
import Gulp from "svgs/gulp.svg";
import Html from "svgs/html-5.svg";
import Koa from "svgs/koa.svg";
import Lua from "svgs/lua.svg";
import Mac from "svgs/mac.svg";
import Mongodb from "svgs/mongodb.svg";
import Neovim from "svgs/neovim.svg";
import Nextjs from "svgs/nextjs.svg";
import Nginx from "svgs/nginx.svg";
import Nodejs from "svgs/nodejs-icon.svg";
import ReactSvg from "svgs/react.svg";
import Sass from "svgs/sass.svg";
import Scala from "svgs/scala.svg";
import Sql from "svgs/sql-file-format-symbol.svg";
import Tailwind from "svgs/tailwind.svg";
import Tmux from "svgs/tmux.svg";
import Typescript from "svgs/typescript-official.svg";
import Webpack from "svgs/webpack.svg";

export const Skills = () => {
  const [isInView, setIsInView] = useState(false);

  return <div className={cn("skills-container", isInView ? "is-in-view" : "")}>
    <div className="skill-row">
      <ImgWithTooltip title="Shadcn/ui" content="Customizable component library" src={Shadcn} />
      <SvgWithTooltip title="React" svg={ReactSvg} />
      <SvgWithTooltip title="Koa" content="Express-like Typescript server with plugins" svg={Koa} />
      <SvgWithTooltip title="Scala" content="Functional Programming in Java" svg={Scala} />
      <SvgWithTooltip title="Tailwind CSS" content="Utility-first CSS framework" svg={Tailwind} />
    </div>
    <div className="skill-row">
      <SvgWithTooltip title="ExpressJs" content="Bread and butter, ole reliable" svg={Express} />
      <SvgWithTooltip title="Lua" content="Dead simple programming language" svg={Lua} />
      <SvgWithTooltip title="NodeJs" svg={Nodejs} />
      <ImgWithTooltip title="FP TS" content="Functional Programming in TSC" src={Fpts} />
      <SvgWithTooltip title="Tmux/Sway" content="Terminal Multiplexer/Window Manager" svg={Tmux} />
    </div>
    <div className="skill-row">
      <SvgWithTooltip title="Typescript bundler" content="Gulp" svg={Gulp} />
      <SvgWithTooltip title="Sass" svg={Sass} />
      <ImgWithTooltip title="BetaFlight" content="Configuration via command line args and lua" src={BetaFlight} />
      <SvgWithTooltip title="Mongodb" content="NoSql Database" svg={Mongodb} />
      <SvgWithTooltip title="MacOS" svg={Mac} />
    </div>
    <div className="skill-row">
      <SvgWithTooltip title="NextJs" svg={Nextjs} />
      <SvgWithTooltip title="HTML 5" svg={Html} />
      <SvgWithTooltip title="CSS 3" svg={Css} />
      <SvgWithTooltip title="Neovim" content="Successor to Vim with plugins written in Vimscript and Lua" svg={Neovim} />
      <SvgWithTooltip title="NGINX" content="HTTP Web Server and Proxy" svg={Nginx} />
    </div>
    {/* TODO: Revert this to only set true */}
    <div className="skill-row" ref={node => isInViewportListener(node, () => setIsInView(true),  () => setIsInView(false), 0)}>
      <SvgWithTooltip title="MySql" svg={Sql} />
      <SvgWithTooltip title="Typescript" svg={Typescript} />
      <SvgWithTooltip title="Bash" content="Preferred cmdline flavor" svg={Bash} />
      <SvgWithTooltip title="Webpack" content="Javascript Typescript bundler" svg={Webpack} />
      <SvgWithTooltip title="Angular" svg={Angular} />
    </div>
  </div>
}


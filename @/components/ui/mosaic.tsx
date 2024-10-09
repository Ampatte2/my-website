"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import {isInViewportListener} from "../../../util/isInViewPort";

import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

export const Tile = (props: { image: StaticImageData, classes?: ClassValue }) =>  {
  const [isInViewPort, setIsInViewPort] = useState(false);
    return <div 
      className={cn("mosaic-tile", props.classes, isInViewPort ? "is-in-view" : "")}
      ref={(node) => isInViewportListener(node, () => setIsInViewPort(true), () => setIsInViewPort(false), 200)}
    >
      <Image src={props.image} alt={props.image.src} style={{objectFit: "cover"}} />
    </div>
}

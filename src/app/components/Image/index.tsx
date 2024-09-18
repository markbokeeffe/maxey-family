"use client"
import ImageElem from "next/image";
import clsx from 'clsx';

type ImageProps = {
    src: string;
    alt?: string;
    className?: string;
    width: number;
    height: number;
    caption?: string;
    float?: string;
    clear?: boolean;
  };

export const Image= ({ clear = true, src, alt='', className, float = 'left', width, height, caption }: ImageProps) => 
<div style={{ width }} className={clsx( float === 'right' ? `lg:float-right lg:ml-4 ${clear && 'clear-right'}` : `lg:float-left lg:mr-4 ${clear && 'clear-left'}`, 'flex flex-col')}>
<ImageElem
src={src}
alt={alt}
className={clsx('dark:invert border-4 border-black opacity-100', className)}
width={width}
height={height}
priority
/>
<span className={clsx("block italic text-xs mt-2" )}>{caption}</span>
</div>

export default Image;
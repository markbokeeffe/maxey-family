"use client"
import clsx from 'clsx';

type LogoProps = {
      isHome?: boolean;
  };
  

export const Logo = ({ isHome = false }: LogoProps ) => 
      <a href="/" style={{ color: 'darkred', fontFamily: 'fantasy' }} className={clsx(isHome && "lg:hidden", "no-underline font-extrabold text-3xl leading-3 ml-4")}>
            Maxey
      </a>;

export default Logo;
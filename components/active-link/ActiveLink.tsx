'use client';

import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  title: string;
}

export const ActiveLink = ({ path, title }: Props) => {

  const pathName = usePathname()

  return (
    <Link
      className={ `${ style.link } ${ (pathName === path) && style['active-link'] }` }
      href={path}
    >
      {title}
    </Link>
  );
}
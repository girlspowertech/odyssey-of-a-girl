import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Girl } from "@/components/svg";

const Triangle: FC<{ className?: string }> = ({ className }) => {
  return <div className={ `w-0 h-0
  border-t-[12px] border-t-transparent
  border-l-[15px]
  border-b-[12px] border-b-transparent ${ className }` } >
  </div>
}

export type NavLinkProps = {
  url: string;
  text: string;
  triangleClass: string;
  className?: string;
}

const NavLink: FC<NavLinkProps> = ({ url, text, triangleClass, className = '' }) => (
  <Link to={ url } target={ url.startsWith("http") ? `_blank` : "_self" } className={ `flex gap-3 mb-3 items-center ${ className }` }>
    <Triangle className={ triangleClass } />
    { text }
  </Link>
);

const Home = () => {
  return <div className="m-auto flex w-[80%] max-w-[1440px] justify-between sm:h-[80%] sm:mt-20 text-green50 flex-col sm:flex-row">
    <div className="mt-16 max-[480px]:mt-10 flex flex-col font-jeju sm:justify-between flex-[60%] flex-shrink-0 flex-grow-0">
      <div className="bg-title bg-no-repeat w-full h-40 max-[480px]:mb-4 mb-10 xs:h-52 sm:h-full bg-contain" />
      <div className="text-3xl flex flex-col ml-6 mb-10 gap-3">
        <NavLink url="/game" text="start" triangleClass="border-l-yellow-400" />
        <NavLink url="/about" text="about" triangleClass="border-l-red-500" />
        <NavLink url="https://github.com/girlspowertech/odyssey-of-a-girl" text="contribute" triangleClass="border-l-blue-500" />
      </div>
    </div>
    <div className="h-full flex items-end w-full">
      <Girl className="w-full max-h-[80%] max-[480px]:h-[350px]" />
    </div>
  </div>;
}

export default Home;

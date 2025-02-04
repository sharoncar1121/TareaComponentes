import Link from "next/link";
import React from "react";
import ActiveLink from "./ActiveLink";

export default function Navbar() {
    const navItem =[
        {path:'about',text:"about us"},
        {path:'FAQ',text:"FAQ"},
        {path:'/',text:"calendar"}
    ]

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <Link
              href="/"
              className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
              aria-current="page"
            >
              home
            </Link>
            {
                navItem.map(navItem=>(
                    <ActiveLink key={navItem.path} {...navItem} ></ActiveLink>
                ))
            }
            
          </div>
        </div>
      </nav>
    </div>
  );
}

"use client";

import { get } from "@/functions/get";

const menu = [
  {
    label: "menu.home",
    href: "#hero",
  },
  {
    label: "menu.services",
    href: "#services",
  },
  {
    label: "menu.portfolio",
    href: "#portfolio",
  },
  {
    label: "menu.team",
    href: "#team",
  },
  {
    label: "menu.contact",
    href: "#contact",
  },
];
interface MenuProps {
  dict: any;
}
export default function Menu({ dict }: MenuProps) {
  const i18nItems = menu.map((item, index) => {
    return {
      label: get(dict, item.label) as string,
      href: item.href,
    };
  });

  return (
    <ul className="navbar bg-white lg:bg-transparent w-full hidden text-center lg:text-left lg:flex lg:flex-row text-gray-900 text-sm items-center font-bold">
      {i18nItems.map(({ href, label }) => (
        <li className="relative hover:text-black" key={href}>
          <a
            className="active block py-3 lg:py-7 px-6 border-b-2 border-transparent"
            href={href}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

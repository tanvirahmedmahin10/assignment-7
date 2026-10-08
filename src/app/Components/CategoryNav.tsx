"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface ICat {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

export default function CategoryNav({ data }: { data: ICat[] }) {
  const pathname = usePathname();

  return (
    <div className="border border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto lg:flex-wrap py-2 scrollbar">
        {data.map((cat: ICat) => {
          const href = `/category/${cat.slug}`;
          const isActive = pathname === href;

          return (
            <Link
              href={href}
              key={cat.id}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap shrink-0 transition-colors ${
                isActive
                  ? "bg-green-600 text-white hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700"
                  : "hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.nameBn}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
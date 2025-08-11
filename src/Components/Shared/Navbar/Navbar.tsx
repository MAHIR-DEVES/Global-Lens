'use client';
import React, { useEffect, useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/Components/ui/navigation-menu';
import Link from 'next/link';
import { Globe } from 'lucide-react';
import { Switch } from '@/Components/ui/switch';
import { Button } from '@/Components/ui/button';
import { usePathname } from 'next/navigation';
import MobileMenu from '@/Components/MonileMenu/MobileMenu';

const Navbar = () => {
  const pathname = usePathname();

  // hydration mismatch এড়ানোর জন্য state এবং useEffect ব্যবহার করছি
  const [currentPath, setCurrentPath] = useState<string | null>(null);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <header className="py-3 sm:py-4 shadow">
      <nav className="w-11/12 mx-auto px-2 flex justify-between items-center">
        {/* logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1 sm:gap-2 group active:scale-95 transition-all"
          >
            <Globe
              className="
                h-6 w-6
                sm:h-7 sm:w-7
                md:h-8 md:w-8
                text-blue-600 dark:text-blue-400
                group-hover:rotate-12 transition-transform
              "
            />
            <span
              className="
                text-lg font-semibold
                sm:text-xl
                md:text-2xl
                lg:text-3xl
                text-gray-900 dark:text-white
                tracking-tight
              "
            >
              Global Lens
            </span>
          </Link>
        </div>

        {/* desktop menu */}
        <NavigationMenu className="hidden sm:flex ">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/news"
                className={`font-semibold  text-xl hover:text-red-500 ${
                  currentPath === '/news' ? 'text-red-500' : ''
                }`}
              >
                News
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xl">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col gap-2 p-2">
                <ul>
                  <li>
                    <NavigationMenuLink href="/services/advisement">
                      Advisement
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/services/ecommerce">
                      Blog
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className={`font-semibold text-xl hover:text-red-500 ${
                  currentPath === '/about' ? 'text-red-500' : ''
                }`}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className={`font-semibold text-xl hover:text-red-500 ${
                  currentPath === '/contact' ? 'text-red-500' : ''
                }`}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* color switcher and login btn */}
        <div className="flex items-center gap-3 justify-between hidden sm:flex">
          <div className="flex items-center ">
            <span className="mr-3 font-semibold">Dark Mode</span>
            <Switch />
          </div>
          <div className="">
            <Button asChild>
              <Link href="/#">Login</Link>
            </Button>
          </div>
        </div>

        {/* mobile menu */}
        <div className="sm:hidden">
          <MobileMenu></MobileMenu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

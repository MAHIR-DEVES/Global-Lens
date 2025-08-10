import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/Components/ui/navigation-menu';
import Link from 'next/link';
import React from 'react';
import { Camera, Globe } from 'lucide-react';
import { Switch } from '@/Components/ui/switch';
import { Button } from '@/Components/ui/button';
import { IoMenu } from 'react-icons/io5';

const Navbar = () => {
  return (
    <header className=" py-3 sm:py-4 shadow">
      <nav className="w-11/12 mx-auto px-2 flex justify-between items-center">
        {/* logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1 sm:gap-2 group active:scale-95 transition-all"
          >
            {/* Responsive Globe Icon - scales with viewport */}
            <Globe
              className="
      h-6 w-6 
      sm:h-7 sm:w-7 
      md:h-8 md:w-8 
      text-blue-600 dark:text-blue-400 
      group-hover:rotate-12 transition-transform
    "
            />

            {/* Text that scales beautifully across breakpoints */}
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

        <NavigationMenu className="hidden sm:flex">
          <NavigationMenuList>
            {/* News link */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/news"
                className="font-semibold hover:text-red-500"
              >
                News
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Services dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col gap-2 p-2">
                <ul>
                  <li>
                    {' '}
                    <NavigationMenuLink href="/services/advisement">
                      Advisement
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/services/ecommerce">
                      E-commerce
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* about  link */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className="font-semibold hover:text-red-500"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* Contact  link */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className="font-semibold hover:text-red-500"
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

        {/* mobile menu  */}
        <div className="sm:hidden">
          <Button variant={'ghost'} size={'icon'}>
            <IoMenu />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

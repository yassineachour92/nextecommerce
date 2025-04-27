import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ModeToggle from "./modeToggle";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="flex justify-between wrapper flex-between">
        <div className=" flex-start">
          <Link href="/" className="flex-start ml-4">
            <Image
              priority={true}
              width={48}
              height={48}
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-2">
          <ModeToggle />
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart />
              Cart
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/sign-in">
              <UserIcon /> Sign IN
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";
import { Link as LinkScroll } from "react-scroll";
import { Button } from "../../ui/button";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { useLenis } from "@/lib/useLenis";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "../../ui/sheet";
import Link from "next/link";
import { navigationLinks } from "@/components/shared/navbar/data/navigation";
import { WhatsAppIcon, InstagramIcon } from "./icons";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();
  
  useEffect(() => {
    if (lenis) {
      if (isOpen) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
  }, [isOpen, lenis]);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-background-secondary">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <LinkScroll
              to="inicio"
              smooth
              className="text-neutral-b0 font-medium text-2xl cursor-pointer flex items-center gap-2"
            >
              DislexiaConducta{" "}
              <Image
                src="/logo.svg"
                alt="logo DislexiaConducta"
                width={24}
                height={24}
                loading="eager"
                priority
              />
            </LinkScroll>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationLinks
                .filter((link) => link.showInDesktop)
                .map((link) => (
                  <LinkScroll key={link.to} to={link.to} smooth>
                    <Button variant="optionHeader" size="option" >
                      {link.label}
                    </Button>
                  </LinkScroll>
                ))}
            </div>
          </div>

          {/* Mobile menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-background-secondary text-neutral-b0 inset-0 w-full h-full max-w-full border-0 px-6"
              >
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                </SheetHeader>
                <div className="h-full w-full flex flex-col items-center justify-center gap-12">
                  <div className="flex flex-col items-center gap-6">
                    {navigationLinks.map((link) => (
                      <div key={link.to} className="flex items-center gap-3">
                        {link.isHighlighted && (
                          <span className="inline-block h-2 w-2 rounded-full bg-neutral-b0" />
                        )}
                        <SheetClose asChild>
                          <LinkScroll to={link.to} smooth className="cursor-pointer">
                            <span
                              className={`text-4xl font-semibold tracking-tight capitalize ${
                                link.isHighlighted ? "" : "text-neutral-b70"
                              }`}
                            >
                              {link.label}
                            </span>
                          </LinkScroll>
                        </SheetClose>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <Link
                      href="https://wa.me/5491133333333"
                      aria-label="WhatsApp"
                      className="size-8 flex items-center justify-center"
                      target="_blank"
                    >
                      <WhatsAppIcon />
                    </Link>
                    <Link
                      href="https://www.instagram.com/dislexiayconducta/"
                      aria-label="Instagram"
                      className="size-8 flex items-center justify-center"
                      target="_blank"
                    >
                      <InstagramIcon />
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

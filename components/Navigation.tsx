import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Container from "./Container";
import NavigationDropdown from "./NavigationDropdown";
import NavigationLink from "./NavigationLink";
import data from "../content/setting/navigation.json";
import Logo from "./Logo";
import Button from "./Button";
import { PhoneIcon } from "@heroicons/react/solid";
import { classes } from "../lib/classes";
import { throttle } from "lodash";

function Component() {
  const navigation = data;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = null;

    const handleScroll = throttle(() => {
      const t = lastScrollY > window.scrollY ? 0 : 33;
      const v = window.scrollY > t;
      setScrolled(v);
      lastScrollY = window.scrollY;
    }, 50);

    window.addEventListener("scroll", handleScroll);

    return () => {
      handleScroll.cancel();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-40 w-full shadow">
      <div
        className={classes(
          { "h-16": scrolled, "h-24": !scrolled },
          "sticky top-0 z-40 shadow flex items-center w-full transition-all duration-500 bg-white"
        )}
      >
        <div className="w-full">
          <Container layout="full">
            <Container layout="sm">
              <div className="">
                <Popover className="relative ">
                  {({ open }) => (
                    <>
                      <div className="flex items-center justify-between md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                          <Link href="/">
                            <a>
                              <div className="">
                                <Logo
                                  classes={classes(
                                    {
                                      "w-32 h-auto": !scrolled,
                                      "w-24 h-auto": scrolled,
                                    },
                                    "transition-all duration-500"
                                  )}
                                />
                              </div>
                            </a>
                          </Link>
                        </div>
                        <div className="md:hidden">
                          <Popover.Button className="bg-white border-2 border-gray-100 rounded-md px-2 py-1.5 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                            <span className="sr-only">Menü öffnen</span>
                            <MenuIcon className="w-6 h-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                        <Popover.Group
                          as="nav"
                          className="hidden space-x-4 md:flex md:items-center"
                        >
                          {navigation.links &&
                            navigation.links.map((link) => {
                              if (link.type === "link")
                                return (
                                  <NavigationLink key={link.text} link={link} />
                                );
                              if (link.type === "links")
                                return (
                                  <NavigationDropdown
                                    key={link.text}
                                    link={link}
                                  />
                                );
                              return "?";
                            })}
                          <Button
                            size="px-4 py-1 text-sm"
                            element="a"
                            ringOffset="ring-offset-white"
                            href="tel:01719528649"
                          >
                            <div className="flex items-center space-x-2">
                              <PhoneIcon className="w-5 h-5 text-green-900" />
                              <span>0171 95 28 649</span>
                            </div>
                          </Button>
                        </Popover.Group>
                      </div>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Popover.Panel
                          focus
                          static
                          className="absolute inset-x-0 top-0 z-40 pt-2 transition origin-top-right transform md:hidden"
                        >
                          <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                            <div className="px-5 pt-4 pb-6">
                              <div className="flex items-center justify-between pb-2 border-b">
                                <Link href="/">
                                  <a href="">
                                    <Logo />
                                  </a>
                                </Link>
                                <div className="">
                                  <Popover.Button className="bg-white rounded-md border-2 border-gray-100 px-2 py-1.5 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                                    <span className="sr-only">
                                      Menü schließen
                                    </span>
                                    <XIcon
                                      className="w-6 h-6"
                                      aria-hidden="true"
                                    />
                                  </Popover.Button>
                                </div>
                              </div>
                              <div className="mt-6 space-y-4">
                                {navigation.links &&
                                  navigation.links.map((link) => {
                                    if (link.type === "link")
                                      return (
                                        <NavigationLink
                                          key={link.text}
                                          link={link}
                                        />
                                      );
                                    if (link.type === "links")
                                      return (
                                        <NavigationDropdown
                                          key={link.text}
                                          link={link}
                                        />
                                      );
                                    return "?";
                                  })}
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </div>
            </Container>
          </Container>
        </div>
      </div>
      <div className="z-50 w-full h-1 bg-x-lime/90"></div>
    </nav>
  );
}

export default Component;

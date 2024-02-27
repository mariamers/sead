import {Bars3Icon, BellIcon, ChevronDownIcon, XMarkIcon} from "@heroicons/react/24/outline";
import {Fragment, useState} from "react";
import {Disclosure, Menu, Transition} from "@headlessui/react";


const userNavigation = [
    {name: "Your Profile", href: "#"},
    {name: "Settings", href: "#"},
    {name: "Sign out", href: "#"},
];

const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const NavbarUser = () => {
  return (
<div className="ml-4 flex items-center md:ml-6">
    <button
        type="button"
        className="relative rounded-full bg-secundaria p-1 text-gray-50 hover:text-gray-50 focus:outline-none focus:ring-2 focus:ring-secundaria focus:ring-offset-2 focus:ring-offset-gray-100"
    >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
    </button>

    {/* Profile dropdown */}
    <Menu as="div" className="relative ml-3">
        <div>
            <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-secundaria text-sm focus:outline-none focus:ring-2 focus:ring-secundaria focus:ring-offset-2 focus:ring-offset-gray-100">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                    className="h-8 w-8 rounded-full"
                    src={user.imageUrl}
                    alt=""
                />
            </Menu.Button>
        </div>
        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-50 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                        {({active}) => (
                            <a
                                href={item.href}
                                className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-500"
                                )}
                            >
                                {item.name}
                            </a>
                        )}
                    </Menu.Item>
                ))}
            </Menu.Items>
        </Transition>
    </Menu>
</div>
  )
}

export default NavbarUser


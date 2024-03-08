import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import NavbarUser from "./NavbarUser";

const navigation = [
    {
        name: "Página Inicial",
        href: "/sead",
        current: false,
    },

    {
        name: "Consultas",
        href: "/sead/consultas",
        current: false,
        dropdownOptions: [
            { name: "Opção A", href: "#" },
            { name: "Opção B", href: "#" },
            { name: "Opção C", href: "#" },
        ],
    },
    {
        name: "Relatórios e Estatísticas",
        href: "/sead/relatorios",
        current: false,
    },
    {
        name: "Databases e Vínculos",
        href: "/sead/databases",
        current: false,
        dropdownOptions: [
            { name: "Opção 1", href: "#" },
            { name: "Opção 2", href: "#" },
            { name: "Opção 3", href: "#" },
        ],
    },
    {
        name: "Pagamentos",
        href: "/pagamentos",
        current: false,
        dropdownOptions: [
            { name: "Opção 1", href: "#" },
            { name: "Opção 2", href: "#" },
            { name: "Opção 3", href: "#" },
        ],
    },
    {
        name: "Funções Internas",
        href: "/interno",
        current: false,
        dropdownOptions: [
            { name: "Opção 1", href: "#" },
            { name: "Opção 2", href: "#" },
            { name: "Opção 3", href: "#" },
        ],
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
    const [openDropdown, setOpenDropdown] = useState(null); 
    const [openDropdownMobile, setOpenDropdownMobile] = useState(null); 

    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-principal">
                    {({ open }) => (
                        <>
                            <div className="mx-auto w-11/12 px-4 sm:px-6 lg:px-8 min-h-16 py-2 justify-center flex flex-wrap">
                                <div className="flex items-center ">
                                    <div className="flex items-center flex-col lg:flex-row flex-nowrap justify:center ">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-8 w-8"
                                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                                alt="Your Company"
                                            />
                                        </div>

                                        <div className="hidden lg:block">
                                            <div className="ml-10 flex items-center space-x-4">
                                                {navigation.map((item) => (
                                                    <Fragment key={item.name}>
                                                        {item.dropdownOptions ? (
                                                            <Menu as="div" className="relative">
                                                                <Menu.Button
                                                                    onClick={() => {
                                                                        setOpenDropdown(
                                                                            openDropdown === item.name ? null : item.name );
                                                                    }}
                                                                    className={classNames(
                                                                        openDropdown === item.name ? "bg-cor2 text-gray-100"
                                                                            : "text-gray-100 hover:bg-cor2 hover:text-gray-100",
                                                                        "rounded-lg px-3 flex gap-2 py-2 text-sm font-medium items-center"
                                                                    )}
                                                                >
                                                                    {item.name}
                                                                    <ChevronDownIcon
                                                                        className="h-4"
                                                                        aria-hidden="true"
                                                                    />
                                                                </Menu.Button>

                                                                <Transition
                                                                    show={openDropdown === item.name}
                                                                    as={Fragment}
                                                                    enter="transition ease-out duration-100"
                                                                    enterFrom="transform opacity-0 scale-95"
                                                                    enterTo="transform opacity-100 scale-100"
                                                                    leave="transition ease-in duration-75"
                                                                    leaveFrom="transform opacity-100 scale-100"
                                                                    leaveTo="transform opacity-0 scale-95"
                                                                >
                                                                    <Menu.Items className="absolute left-0 z-10 mt-2 w-48 origin-top-left bg-gray-100 py-1 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                        {item.dropdownOptions.map((option) => (
                                                                            <Menu.Item key={option.name}>
                                                                                {({ active }) => (
                                                                                    <a
                                                                                        href={option.href}
                                                                                        className={classNames(
                                                                                            active ? "bg-gray-100" : "",
                                                                                            "block px-4 py-2 text-sm text-gray-500 hover:bg-gray-200"
                                                                                        )}
                                                                                    >
                                                                                        {option.name}
                                                                                    </a>
                                                                                )}
                                                                            </Menu.Item>
                                                                        ))}
                                                                    </Menu.Items>
                                                                </Transition>
                                                            </Menu>
                                                        ) : (
                                                            //Botão simples para os itens que não possuem dropdownOptions
                                                            <a
                                                                href={item.href}
                                                                className={classNames(
                                                                    item.current
                                                                        ? "bg-cor2 text-gray-100"
                                                                        : "text-gray-100 hover:bg-cor2  selection:bg-secundaria hover:text-gray-100",
                                                                    "rounded-lg px-3 py-2 text-sm font-medium"
                                                                )}
                                                                aria-current={item.current ? "page" : undefined}
                                                            >
                                                                {item.name}
                                                            </a>
                                                        )}
                                                    </Fragment>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden lg:block">
                                        <NavbarUser />
                                    </div>
                                </div>
                                <div className="-mr-2 flex lg:hidden flex-row w-full justify-between flex-wrap">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="relative m-1 inline-flex items-center justify-center rounded-lg bg-secundaria p-2 text-gray-50 hover:bg-gray-700 hover:bg-opacity-40 hover:text-gray-50 focus:outline-none focus:ring-2 focus:ring-secundaria focus:ring-offset-2 focus:ring-offset-gray-100">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                    <div className="lg:hidden flex items-center">
                                        <NavbarUser />
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="lg:hidden">
                                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                    {navigation.map((item) => (
                                        <Fragment key={item.name}>
                                            {item.dropdownOptions ? (
                                                // Dropdown para itens que possuem dropdownOptions
                                                <Disclosure as="div" className="space-y-1">
                                                    <Disclosure.Button
                                                        onClick={() => {
                                                            setOpenDropdownMobile(
                                                                openDropdownMobile === item.name ? null : item.name
                                                            ); // Abrir ou fechar o dropdown
                                                        }}
                                                        className={classNames(
                                                            openDropdownMobile === item.name
                                                                ? "bg-secundaria text-gray-100"
                                                                : "text-gray-100 hover:bg-secundaria hover:text-gray-100",
                                                            "flex flex-row items-center justify-center gap-1 rounded-lg px-3 py-2 text-base font-medium"
                                                        )}
                                                    >
                                                        {item.name}
                                                        <ChevronDownIcon className="h-4" aria-hidden="true" />
                                                    </Disclosure.Button>

                                                    <Transition
                                                        show={openDropdownMobile === item.name} // Mostrar o dropdown se estiver aberto
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Disclosure.Panel className="space-y-1">
                                                            {item.dropdownOptions.map((option) => (
                                                                <a
                                                                    key={option.name}
                                                                    href={option.href}
                                                                    className="block px-4 py-2 text-sm text-gray-100"
                                                                >
                                                                    {option.name}
                                                                </a>
                                                            ))}
                                                        </Disclosure.Panel>
                                                    </Transition>
                                                </Disclosure>
                                            ) : (
                                                // Item simples para itens que não possuem dropdownOptions
                                                <a
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? "bg-gray-900 text-gray-100"
                                                            : "text-gray-100 hover:bg-secundaria hover:text-gray-100",
                                                        "block rounded-lg px-3 py-2 text-base font-medium"
                                                    )}
                                                    aria-current={item.current ? "page" : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            )}
                                        </Fragment>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    );
}

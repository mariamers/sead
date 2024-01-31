
/* { name: 'Página Inicial', href: '/sead', current: false },
 { name: 'Consultas', href: '#', current: false },
 { name: 'Relatórios e Estatísticas', href: '/sead/relatorios', current: false },
 { name: 'Databases e Vínculos', href: '#', current: false },
 { name: 'Pagamentos', href: '#', current: false },
 { name: 'Funções Internas', href: '#', current: false },
*/

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ArrowDownIcon, Bars3Icon, BellIcon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  {
    name: 'Página Inicial',
    href: '/sead',
    current: false,
  },

  {
    name: 'Consultas', 
    href: '/sead/consultas', 
    current: false,
    dropdownOptions: [
      { name: 'Opção A', href: '#' },
      { name: 'Opção B', href: '#' },
      { name: 'Opção C', href: '#' },
    ]
  },
  {
    name: 'Relatórios e Estatísticas', 
    href: '/sead/relatorios', 
    current: false,
  },
  {
    name: 'Databases e Vínculos', 
    href: '/sead/databases', 
    current: false,
    dropdownOptions: [
      { name: 'Opção 1', href: '#' },
      { name: 'Opção 2', href: '#' },
      { name: 'Opção 3', href: '#' },
    ]
  },
  {
    name: 'Pagamentos',
    href: '/sead/pagamentos',
    current: false,
    dropdownOptions: [
      { name: 'Opção 1', href: '#' },
      { name: 'Opção 2', href: '#' },
      { name: 'Opção 3', href: '#' },
    ]
  },
  {
    name: 'Funções Internas',
    href: '/sead/interno',
    current: false,
    dropdownOptions: [
      { name: 'Opção 1', href: '#' },
      { name: 'Opção 2', href: '#' },
      { name: 'Opção 3', href: '#' },
    ]
  },

];

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Example() {
  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-principal">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <Fragment key={item.name}>
                          {item.dropdownOptions ? (
                            // Botão com dropdown para os itens que possuem dropdownOptions
                            <Menu as="div" className="relative">
                              <Menu.Button className={classNames(item.current ? 'bg-cor2 text-white' : 'text-white hover:bg-cor2 hover:text-white', 'rounded-md px-3 flex gap-2 py-2 text-sm font-medium')} aria-current={item.current ? 'page' : undefined}>
                                {item.name}
                                <ChevronDownIcon className="h-4" aria-hidden="true" />
                              </Menu.Button>

                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right bg-white py-1 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                  {item.dropdownOptions.map((option) => (
                                    <Menu.Item key={option.name}>
                                      {({ active }) => (
                                        <a href={option.href} className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-500')}>
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
                            <a href={item.href} className={classNames(item.current ? 'bg-cor2 text-white' : 'text-white hover:bg-cor2 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium')} aria-current={item.current ? 'page' : undefined}>
                              {item.name}
                            </a>
                          )}
                        </Fragment>
                      ))}


                    </div>
                  </div>
                </div>
                <div className="hidden md:block">

                  <div className="ml-4 flex items-center md:ml-6">
                    <button type="button" className="relative rounded-full bg-cor2 p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cor2">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-cor2 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cor2">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                        </Menu.Button>
                      </div>
                      <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a href={item.href} className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-500')}>
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-cor2 p-2 text-gray-400 hover:bg-cor2 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cor2">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  )
}

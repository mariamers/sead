import { Fragment, useState} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
  const [openDropdown, setOpenDropdown] = useState(null); // Estado para controlar qual dropdown está aberto
  const [openDropdownMobile, setOpenDropdownMobile] = useState(null); // Estado para controlar qual dropdown está aberto no menu móvel

  return (
    <>
  <div className="min-h-full">
        <Disclosure as="nav" className="bg-principal">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex min-h-14 p-2 items-center lg:justify-between justify-between flex-wrap md:justify-center">
                  <div className="flex items-center flex-wrap justify-center p-2">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4 flex-wrap justify-center">
                  {navigation.map((item) => (
                    <Fragment key={item.name}>
                      {item.dropdownOptions ? (
                        // Botão com dropdown para os itens que possuem dropdownOptions
                        <Menu as="div" className="relative">
                          <Menu.Button
  onClick={() => {
    setOpenDropdown(openDropdown === item.name ? null : item.name); // Abrir ou fechar o dropdown
  }}
  className={classNames(
    openDropdown === item.name ? 'bg-cor2 text-white' : 'text-white hover:bg-cor2 hover:text-white',
    'rounded-md px-3 flex items-center justify-center gap-2 py-2 text-sm font-medium'
  )}
>
  {item.name}
  <ChevronDownIcon className="h-4" aria-hidden="true" />
</Menu.Button>


                          <Transition
                            show={openDropdown === item.name} // Mostrar o dropdown se estiver aberto
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
                                    <a
                                      href={option.href}
                                      className={classNames(active ? 'bg-gray-100' : '', 'flex flex-row items-center justify-center px-4 py-2 text-sm text-gray-500')}
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
                          className={classNames(item.current ? 'bg-cor2 text-white' : 'text-white hover:bg-cor2 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium')}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex flex-row items-center justify-center md:ml-6">
                      <button
                        type="button"
                        className="relative rounded-full bg-secundaria p-1 text-gray-200 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
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
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-200 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
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
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-secundaria p-2 text-gray-400 hover:bg-secundaria hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 focus:ring-offset-gray-800">
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

              <Disclosure.Panel className="md:hidden">
  <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
    {navigation.map((item) => (
      <Fragment key={item.name}>
        {item.dropdownOptions ? (
          // Dropdown para itens que possuem dropdownOptions
          <Disclosure as="div" className="space-y-1">
            <Disclosure.Button
  onClick={() => {
    setOpenDropdownMobile(openDropdownMobile === item.name ? null : item.name); // Abrir ou fechar o dropdown
  }}
  className={classNames(
    openDropdownMobile === item.name ? 'bg-gray-200 text-gray-900' : 'text-gray-300 hover:secundaria hover:text-white',
    'rounded-md px-3 py-2 text-base font-medium flex gap-1 justify-center items-center'
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
                    className="block px-4 py-2 text-sm text-gray-200"
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
            className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-secundaria  hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium')}
            aria-current={item.current ? 'page' : undefined}
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
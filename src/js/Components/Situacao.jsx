import React, { useState } from 'react';
import Button from './Button';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export const dropdownMenuItems = [
  {
    name: "Ativo",
    current: false,
  },
  {
    name: "Concluinte",
    current: false,
  },
  {
    name: "Formando",
    current: false,
  },
  {
    name: "Concluído",
    current: false,
  },
  {
    name: "Cancelado",
    current: false,
  },
  {
    name: "Não cadastrado",
    current: false,
  },
  {
    name: "Cadastrado",
    current: false,
  },
  {
    name: "Trancado",
    current: false,
  },
];

export const Situacao = () => {
  return (
    <div className="flex flex-row gap-3 w-10/12  flex-wrap">
      {dropdownMenuItems.map((item, index) => (
        <Button key={index} extratags="!rounded-full px-6 focus:bg-secundaria">
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export const SituacaoDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="relative inline-block text-left">
      <div onClick={() => setIsOpen((prev) => !prev)}>
        <Button>
          Selecionar colunas
          {!isOpen ? (
            <ChevronDownIcon className="h-4" />
          ) : (
            <ChevronUpIcon className="h-4" />
          )}
        </Button>
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-40 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg text-sm">
          {dropdownMenuItems.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
              onClick={() => handleItemClick(item)}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

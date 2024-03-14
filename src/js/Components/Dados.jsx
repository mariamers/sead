import React, { useState } from 'react';
import Button from './Button';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import CheckboxButton from './CheckboxButton';


export const Dados = (props) => {
  const {menuItems} = props;
  return (
    <div className="flex flex-row gap-3 w-10/12  flex-wrap">
    {menuItems.map((item, index) => (
        <CheckboxButton key={index} extratags="!rounded-full px-6 focus:bg-secundaria">
          {item.name}
        </CheckboxButton>
      ))}
    </div>
  );
};

export const DadosDropdown = (props) => {
  const {menuItems} = props;

  const [isOpen, setIsOpen] = useState(false);

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
          {menuItems.map((item, index) => (
            <label
              key={index}
              className="flex flex-row gap-2 px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
            >
              <input type="checkbox" id={`checkbox-${index}`} />
              <span className="ml-2">{item.name}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};


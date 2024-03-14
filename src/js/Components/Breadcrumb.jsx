import React from 'react';

function Breadcrumb({ Link1, Link2, Link3, Text1, Text2, Text3 }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex w-full flex-wrap items-center justify-end rounded-md bg-blue-gray-50 bg-opacity-60 py-2 px-4">
        <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-pink-500">
          <a className="opacity-60" href={Link1}>
            <span>{Text1 ? Text1: 'Indefinido'}</span>
          </a>
          <span className="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased">
            /
          </span>
        </li>

        <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-pink-500">
          <a className="font-medium text-blue-gray-900 transition-colors hover:text-pink-500" href={Link2}>
            <span>{Text2 ? Text2 : 'Indefinido'}</span>
          </a>
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
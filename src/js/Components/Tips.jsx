import React, { useState } from "react";

import { LightBulbIcon } from '@heroicons/react/24/outline'


function Tips() {
    const [isActive, SetIsActive] = useState(false)

    return (
            <div className='flex flex-col lg:flex-row items-center relative w-full'>
                <button onClick={e => SetIsActive(!isActive)} className="active:scale-105">
                    <LightBulbIcon className='h-8 text-terciaria transition ease-in-out delay-150 hover:-translate-y-0.5 duration-300 bg-gray-100 rounded-full p-1 text-opacity-75 shadow-md hover:bg-gray-200 active:text-opacity-100' />
                </button>

                {isActive && (
                <div className='flex sm:flex-col relative justify-center w-full transition ease-in-out delay-150'>
                <p className='text-gray-500 text-xs shadow-md p-4 bg-gray-50 border text-sm absolute top-1 lg:top-auto transition ease-in-out delay-150 m-1 min-w-40'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                )}
            </div>
    )
}


export default Tips

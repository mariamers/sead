import React, { useState } from "react";

import { LightBulbIcon } from '@heroicons/react/24/outline'


function Tips() {
    const [isActive, SetIsActive] = useState(false)

    return (
            <div className='flex flex-row relative gap-2'>
                <button onClick={e => SetIsActive(!isActive)} className="active:scale-105">
                    <LightBulbIcon className='h-8 text-terciaria transition ease-in-out delay-150 hover:-translate-y-0.5 duration-300 bg-gray-100 rounded-full p-1 text-opacity-75 shadow-md hover:bg-gray-200 active:text-opacity-100' />
                </button>

                {isActive && (
                <div className='flex sm:flex-col relative justify-center w-full transition ease-in-out delay-150'>
                <p className='text-gray-500 shadow-md p-4 bg-cor4 opacity-90 text-sm relative w-=92 sm:w-72 sm:absolute transition ease-in-out delay-150'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda consequuntur iure nulla ducimus libero minus ex, nostrum incidunt earum omnis qui veniam officia nisi nobis facilis obcaecati maiores quisquam recusandae.</p>
                </div>
                )}
            </div>
    )
}


export default Tips

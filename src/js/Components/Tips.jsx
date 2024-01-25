import React, { useState } from "react";

import { LightBulbIcon } from '@heroicons/react/24/outline'


function Tips() {
    const [isActive, SetIsActive] = useState(false)

    return (
            <div className='flex flex-row w-4/12 relative gap-2'>
                <button onClick={e => SetIsActive(!isActive)}>
                    <LightBulbIcon className='h-8 text-terciaria  bg-white rounded-full p-1 shadow text-opacity-50 hover:bg-gray-100 hover:text-opacity-100' />
                </button>

                {isActive && (
                <div className='flex flex-col relative justify-center w-full'>
                <p className='text-gray-500 shadow-md p-4 bg-terciaria bg-cor4 opacity-90 text-sm absolute'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda consequuntur iure nulla ducimus libero minus ex, nostrum incidunt earum omnis qui veniam officia nisi nobis facilis obcaecati maiores quisquam recusandae.</p>
                </div>
                )}
            </div>
    )
}


export default Tips

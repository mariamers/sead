import React, { useState } from "react";

function CheckboxButton(props) {
    const { children, extratags } = props;
    const darkGrayColor = "bg-secundaria hover:bg-seccundaria border-gray-300 text-gray-950"; 
    const [isChecked, setIsChecked] = useState(false);

    const labelStyle = `flex items-center py-2 px-6  border-2 rounded-full cursor-pointer text-sm transition 
        ease-in-out delay-50 active:scale-95 duration-100 shadow-md select-none ${isChecked ? darkGrayColor : 'bg-gray-100 border-gray-300 hover:bg-gray-200 text-gray-950 hover:bg-gray-200'} ${extratags}`;

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>
            <label className={labelStyle}>
                <input  type="checkbox"  className="checked:text-gray-950 checked:bg-gray-950 hidden rounded-full cursor-pointer select-none focus:outline-none focus:ring-offset-0 focus:ring-0" onChange={handleCheckboxChange} checked={isChecked}
                />
                {children}
            </label>
        </div>
    );
}

export default CheckboxButton;

import React from "react";

function Button(props) {
    const { children, extratags, color } = props;
    const defaultColor = "active:bg-gray-100 bg-gray-100 border-gray-300 hover:bg-gray-200 text-gray-950"; // Cor padrão do background, da borda, do hover e do texto quando 'color' não está definido.

    return (
    <div>
        <button className={`flex items-center p-2 border-2 rounded-md cursor-pointer text-sm transition 
        ease-in-out delay-50 active:scale-95 duration-100 shadow-md ${color ? color : defaultColor} ${extratags}`}>
            {children}
        </button>
    </div>
    );
}

export default Button;
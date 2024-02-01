import React from "react";

function Button(props) {
    const { children, color } = props;
    const defaultColor = "bg-gray-100 border-gray-300 hover:bg-gray-200 text-gray-950"; // Cor padrão do background, da borda, do hover e do texto quando 'color' não está definido.

    return (
        <button className={`flex items-center p-2 border-2 rounded-lg cursor-pointer text-sm transition ease-in-out delay-150 active:scale-105 duration-100 text-opacity-75 shadow-md active:text-opacity-100 ${color ? color : defaultColor}`}>
            {children}
        </button>
    );
}

export default Button;

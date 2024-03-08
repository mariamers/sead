import React from "react";
import Logo from "./logo.png";

const Login = () => {
    return (
        <div className="flex h-screen">
            <div className="hidden lg:flex items-center justify-center flex-1 bg-principal text-gray-700">
                <div className="max-w-md text-center">
                    <img src={Logo} alt="Logo" />
                </div>
            </div>
            <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
                <div className="max-w-md w-full p-6">
                    <h1 className="text-3xl font-semibold mb-6 text-gray-700 text-center">
                        Sejam bem-vindos!
                    </h1>

                    <form action="/sead" className="space-y-4">
                        <div>
                            <label
                                for="username"
                                className="block text-sm font-medium text-gray-500"
                            >
                                Nome do usuário
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                            />
                        </div>
                        <div>
                            <label
                                for="password"
                                className="block text-sm font-medium text-gray-500"
                            >
                                Senha
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-principal text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-principal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                            >
                                Entrar
                            </button>
                        </div>
                        <div className="flex justify-center bg-gray-200 rounded-full">
                            <button className="br-sign-in" type="button">
                                Entrar com&nbsp;
                                <img
                                    src="https://www.gov.br/++theme++padrao_govbr/img/govbr-colorido-b.png"
                                    alt="gov.br"
                                />
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-sm text-gray-600 text-center">
                        <p>
                            Esqueceu sua senha?{" "}
                            <a
                                href="#"
                                className="text-gray-700 hover:underline"
                            >
                                Recupere aqui
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

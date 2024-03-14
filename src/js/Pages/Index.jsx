import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";

import MainTitle from "../Components/MainTitle";
import {
    ArrowDownOnSquareIcon,
    CubeIcon,
    ListBulletIcon,
} from "@heroicons/react/24/outline";
import Breadcrumb from "../Components/Breadcrumb";
function Index() {
    const i01 = <ArrowDownOnSquareIcon className="h-12 flex" />;
    const i02 = <ListBulletIcon className="h-12 flex" />;
    const i03 = <CubeIcon className="h-12 flex" />;

    return (
        <>
            <header>

                <MainTitle H1="Página Inicial">
                    <div className="w-full float-left">
                        <Breadcrumb
                            Link1="/sead"
                            Text1="..."
                            Link2="/sead"
                            Text2="Início"
                        />
                    </div>
                </MainTitle>
            </header>

            <main className="min-h-dvh">
                <div className="text-xl mx-auto w-10/12 pt-12 px-6">
                    Links Úteis
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 w-10/12 m-auto p-6 min-w-[250px]">
                    <Card titulo="Exportar notas" icon={i01} />
                    <Card titulo="Listagem de alunos" icon={i02} />
                    <Card titulo="Tutores a distância" icon={i03} />
                    <Card titulo="Tutores presenciais" icon={i03} />
                    <Card titulo="Estimativas" icon={i03} />
                    <Card titulo="Gerar turmas" icon={i03} />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Index;

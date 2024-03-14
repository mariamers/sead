import React, { lazy, useState, startTransition } from "react";
import Navbar from "../Components/Navbar";
import MainTitle from "../Components/MainTitle";
import Breadcrumb from "../Components/Breadcrumb";
import Button from "../Components/Button";
const FilterMenu = lazy(() => import("../Components/FilterMenu"));
const Footer = lazy(() => import("../Components/Footer"));
const ReactXLSX = lazy(() => import("../Components/Table/ReactXLSX"));
const CombinedTable = lazy(() => import("../Components/Table/CombinedTable"));
const PDFFileWithTable = lazy(() =>
    import("../Components/Table/PDFFileWithTable")
);

function Relatorios() {
    const [showPDF, setShowPDF] = useState(false);

    const handleClick = () => {
        startTransition(() => {
            setShowPDF(true);
        });
    };

    return (
        <>
            <header>

                <MainTitle H1="Relatórios e Estatísticas">
                    <div className="w-full float-left">
                        <Breadcrumb
                            Link1="/sead"
                            Text1="Início"
                            Link2="relatorios"
                            Text2="Relatórios"
                        />
                    </div>
                </MainTitle>
            </header>
            <div className="text-xl mx-auto w-10/12 px-6 pt-12">
                Filtrar Itens
            </div>

            <div className="p-6 w-10/12 m-auto">
                <FilterMenu />
            </div>
            <div className="m-auto flex flex-col">
                <div className="flex gap-4 justify-center cbg flex-col m-auto items-center w-10/12">
                    <CombinedTable />

                    <div className="flex flex-row gap-4 m-auto">
                        <div onClick={handleClick}>
                            <Button>Gerar PDF</Button>
                            {showPDF && <PDFFileWithTable />}
                        </div>
                        <ReactXLSX />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Relatorios;

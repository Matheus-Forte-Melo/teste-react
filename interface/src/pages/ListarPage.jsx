import Aside from "../components/Aside"
import Lista from "../components/Lista"
import Header from "../components/Header"
import {buscarEmpresas} from "../services/api";
import { useEffect, useState } from "react";

function ListarPage () {
    const [empresas, setEmpresas] = useState([])

    useEffect(() => {
        const carregarEmpresas = async () => {
            try {
                const dados = await buscarEmpresas();
                setEmpresas(dados || []); // Tem que botar para garantir que vai ser uma array
            } catch (error) {
                console.error("Erro:", error);
            }
        };

        carregarEmpresas();
    }, []);

    return (
        <div className="h-screen flex flex-col">
            <Header />
            <main className="h-full w-full relative flex bg-white">
                <Aside />
                <Lista empresas={empresas}/>
            </main>
        </div>
    )
}

export default ListarPage
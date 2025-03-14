import Aside from "../components/Aside"
import ListaPlanilhas from "../components/Planilhas"
import Header from "../components/Header"

function PlanilhasPage () {
    return (
        <div className=" h-screen flex flex-col">
            <Header />
            <main className="relative h-full w-full  flex bg-white">
                <Aside />
                <ListaPlanilhas 
                planilhas={[
                    { nome: "Cálculo Simples Nacional.xlsx", link: "#" },
                    { nome: "Tese Exclusão do ICMS BC PIS Cofins - Bloco C170.xlsb", link: "#" },
                    { nome: "Tese Exclusão do PIS Cofins da própria BC - Bloco C170.xlsb", link: "#" },
                    { nome: "Tese Gross Up - Bloco C170.xlsb", link: "#" },
                    { nome: "Tese LC 192 - Bloco C170.xlsb", link: "#" }
                ]}
                />
            </main>
        </div>
    )
}

export default PlanilhasPage
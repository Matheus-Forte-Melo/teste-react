import Aside from "../components/Aside"
import Cadastro from "../components/Cadastro"
import Header from "../components/Header"

function CadastroPage () {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <main className="relative h-full w-full  flex bg-white">
                <Aside />
                <Cadastro />
            </main>
        </div>
    )
}

export default CadastroPage
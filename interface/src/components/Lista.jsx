import { Trash2, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { deletarEmpresa } from "../services/api"; 

const EmpresaItem = ({ empresa, onDelete }) => (
  <div className="flex text-b-text justify-between p-5 bg-bg-header rounded-lg shadow-md">
    <div className="w-[32%]">
      <p>
        Nome: <strong>{empresa.nome}</strong>
      </p>
      <p>
        E-mail: <strong>{empresa.email}</strong>
      </p>
    </div>
    <div className="w-[32%]">
      <p>
        CNPJ: <strong>{empresa.cnpj}</strong>
      </p>
      <p>
        Estado: <strong>{empresa.estado}</strong>
      </p>
    </div>
    <div className="w-[32%]">
      <p>
        Contato: <strong>{empresa.contato}</strong>
      </p>
      <p>
        Cidade: <strong>{empresa.cidade}</strong>
      </p>
    </div>
    <div className="icons flex items-center gap-1.5">
        <Trash2 
          className="stroke-red-500 cursor-pointer"
          onClick={() => onDelete(empresa.id)} 
        />
    </div>
  </div>
);

function Lista({ empresas }) {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      const response = await deletarEmpresa(id);
      
      console.log("Resposta da API:", response);
      console.log(response.status)

      if (response && response.status === undefined) {
        console.log("Deletado com sucesso, navegando...");
        window.location.reload()
      } else {
        console.error("Erro na resposta:", response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="ml-20 w-full p-6 border-emerald-400 border-t-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl text-blue-950">Empresas</h1>
        <div className="flex gap-2 items-center">
          <div className="w-10 h-8 -mr-2 bg-emerald-400 flex items-center justify-center inset-shadow-sm">
            <Search className="stroke-white" size={18}/>
          </div>
          <input
            className="p-1 px-6 h-8 rounded-r-md bg-white text-gray-600 inset-shadow-sm"
            type="text"
            name="pesquisa"
            id="pesquisa"
            placeholder="Pesquisar"
          />
          <button 
            className="font-thin p-1 px-6 rounded-md bg-emerald-400 text-white hover:bg-emerald-500 cursor-pointer"
            onClick={() => navigate("/cadastro")}>
            Cadastrar
          </button>
        </div>
      </div>

      <div className="p-1.5 w-full space-y-6 container-empresas max-h-[750px] overflow-auto">
        {empresas.map((empresa) => (
          <EmpresaItem 
            key={empresa.id} 
            empresa={empresa} 
            onDelete={handleDelete} 
          />
        ))}
      </div>
    </section>
  );
};

export default Lista;

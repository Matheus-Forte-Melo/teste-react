import { useState } from "react";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { adicionarEmpresa } from "../services/api";

const Cadastro = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // Remova se não quiser campos pré-preenchidos.
    cnpj: "",
    nome: "",
    nome_fantasia: "",
    contato: "",
    email: "",
    cep: "",
    pais: "",
    estado: "",
    cidade: "",
    bairro: "",
    rua: "",
    numero: "",
    complemento: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await adicionarEmpresa(formData);
  
      if (!response) {
        alert("Erro ao cadastrar a empresa. Resposta vazia.");
        return;
      }
   
      if (response["Erro ao validar CNPJ"]) {
        alert(`Erro ao validar CNPJ: ${response["Erro ao validar CNPJ"]}`);
        return;
      }
  
      
      if (response.errors) {
        let errorMessage = "Erro ao cadastrar a empresa:\n";
        Object.entries(response.errors).forEach(([field, messages]) => {
          errorMessage += `\n${field}: ${messages.join(", ")}`;
        });
  
        alert(errorMessage);
        return;
      }
  
      alert("Empresa cadastrada com sucesso!");
      navigate("/listar");
  
    } catch (error) {
      console.error("Erro inesperado:", error);
      alert("Erro inesperado ao cadastrar a empresa. Tente novamente mais tarde.");
    }
  };  

  return (
    <section className="ml-20 w-full p-6 border-emerald-400 border-t-6">
      <div className="flex mb-5 gap-2">
        <div className="flex items-center">
          <MoveLeft
            onClick={() => navigate("/listar")}
            strokeWidth={3}
            className="stroke-blue-900 cursor-pointer"
            size={24}
          />
        </div>
        <h1 className="text-3xl text-blue-950">Cadastro de Empresas</h1>
      </div>
      <div className="bg-bg1 shadow rounded-lg py-2 px-6">
        <div className="flex gap-6 text-blue-950">
          <div className="border-b-4 border-emerald-400 font-bold">Dados Gerais</div>
          <div>Filiais</div>
        </div>
        <form className="p-3 space-y-6" onSubmit={handleSubmit}>
          <FieldGroup fields={[ 
            { label: "CNPJ", id: "cnpj", width: "w-[20rem]", required: true}, 
            { label: "Nome", id: "nome", width: "w-[30rem]", required: true }, 
            { label: "Nome Fantasia", id: "nome_fantasia", width: "w-[30rem]" }, 
          ]} formData={formData} handleChange={handleChange} />

          <FieldGroup fields={[ 
            { label: "Contato", id: "contato", width: "w-[26rem]", required: true }, 
            { label: "E-mail", id: "email", width: "w-[26rem]", required: true, type: "email" }, 
            { label: "CEP", id: "cep", width: "w-[26rem]", required: true}, 
          ]} formData={formData} handleChange={handleChange} />

          <FieldGroup fields={[ 
            { label: "País", id: "pais", width: "w-[18rem]", required: true }, 
            { label: "Estado", id: "estado", width: "w-[18rem]", required: true }, 
            { label: "Cidade", id: "cidade", width: "w-[24rem]", required: true }, 
            { label: "Bairro", id: "bairro", width: "w-[24rem]", required: true }, 
          ]} formData={formData} handleChange={handleChange} />

          <FieldGroup fields={[ 
            { label: "Rua", id: "rua", width: "w-[32rem]", required: true }, 
            { label: "Número", id: "numero", width: "w-[20rem]", required: true }, 
            { label: "Complemento", id: "complemento", width: "w-[22rem]" },
          ]} formData={formData} handleChange={handleChange} />

          <div className="flex justify-end">
            <input
              type="submit"
              value="Salvar"
              className="font-thin p-3 px-10 rounded-md shadow-md shadow-emerald-400 bg-emerald-500 text-white hover:bg-emerald-400 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

const FieldGroup = ({ fields, formData, handleChange }) => {
  return (
    <div className="flex gap-5">
      {fields.map((field) => (
        <div key={field.id}>
          <label className="text-sm text-blue-950 font-semibold" htmlFor={field.id}>
            {field.label}
          </label>
          <input
            className={`text-sm p-2 h-8 bg-white rounded-sm block inset-shadow-2xs ${field.width}`}
            type={field.type || "text"}
            id={field.id}
            name={field.id}
            value={formData[field.id]}
            onChange={handleChange}
            required={field.required}
            pattern={field.pattern}
          />
        </div>
      ))}
    </div>
  );
};


export default Cadastro;

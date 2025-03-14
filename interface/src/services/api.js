import axios from "axios"

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/gerenciador/"
})

const buscarEmpresas = async () => {
    try {
        const response = await api.get('pegar-empresas')
        return response.data
    } catch (error) {
        console.error("Error:", error)
        return null
    }
}

const adicionarEmpresa = async (empresa) => {
    try {
        const response = await api.post('cadastrar-empresa', empresa);
        return response.data;
    } catch (error) {
        console.error("Erro ao adicionar empresa:", error.response?.data || error.message);
        return null;
    }
};

const deletarEmpresa = async (id) => {
    try {
        const response = await api.delete(`remover-empresa/${id}/`);
        return response.data;
    } catch (error) {
        console.error("Erro ao deletar empresa:", error.response?.data || error.message);
        return null;
    }
};

export { buscarEmpresas, adicionarEmpresa, deletarEmpresa };

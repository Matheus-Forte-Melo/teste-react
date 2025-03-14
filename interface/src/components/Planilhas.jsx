const ListaPlanilhas = ({ planilhas }) => (
    <section className="ml-20 w-full p-6 border-emerald-400 border-t-6">
      <div className="text-blue-950 space-y-2 mb-6">
        <h1 className="text-3xl">Planilhas</h1>
        <p>Acesse uma coleção de planilhas úteis para facilitar suas tarefas diárias e otimizar seu trabalho.</p>
      </div>
      <div>
        <table className="w-full border-collapse" border="1">
          <thead>
            <tr className="bg-aside1 text-white text-left">
              <th className="px-3 py-1">Nome</th>
              <th className="px-3 py-1">Ação</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {planilhas.map((planilha, index) => (
              <tr key={index} className="odd:bg-gray-200">
                <td className="px-3 py-1">{planilha.nome}</td>
                <td className="px-3 py-1 text-blue-700 underline"><a href={planilha.link}>Download</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
);

export default ListaPlanilhas
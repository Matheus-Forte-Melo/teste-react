import { useState } from "react";
import { Home, Search, Edit, BotIcon, Text, Currency, Group } from "lucide-react";
import { useNavigate } from "react-router-dom"

function Aside() {
  const [expandido, setExpandido] = useState(false);
  const [hoveredOption, setHoveredOption] = useState(null);
  const navigate = useNavigate()

  const opcoes = [
    { id: 1, nome: "Início", icon: Home, navigate: '/' },
    { id: 2, nome: "Cadastros", icon: Edit, navigate: '/listar' },
    { id: 3, nome: "Planilhas", icon: Currency, navigate: '/planilhas' },
    { id: 4, nome: "Relatório", icon: Text, navigate: '#' },
    { id: 5, nome: "Diagnóstico Express", icon: Search, navigate: '#' },
    { id: 6, nome: "Consultor IA", icon: BotIcon, navigate: '#' },
    { id: 7, nome: "Área de Membros", icon: Group, navigate: '#' },
  ];

  return (
    <div
      onMouseEnter={() => setExpandido(true)}
      onMouseLeave={() => {
        setExpandido(false);
        setHoveredOption(null);
      }}
      className="flex absolute h-full"
    >
      {/* Barra lateral com ícones */}
      <aside className="w-[84px] bg-aside1 pt-2">
        <ul>
          {opcoes.map((opcao) => {
            const Icon = opcao.icon;
            const isHovered = hoveredOption === opcao.id;
            return (
              <li
                key={opcao.id}
                onMouseEnter={() => setHoveredOption(opcao.id)}
                onMouseLeave={() => setHoveredOption(null)}
                onClick={() => navigate(opcao.navigate)}
                className={`flex items-center justify-center p-2 ${isHovered ? "bg-aside2" : ""} cursor-pointer`}
              >
                <Icon className={`${isHovered ? "stroke-esmeralda" : "stroke-white"}`} strokeWidth={1} size={28} />
              </li>
            );
          })}
        </ul>
      </aside>

      {expandido && (
        <aside className="w-[200px] bg-aside2 pt-2">
          <ul>
            {opcoes.map((opcao) => {
              const isHovered = hoveredOption === opcao.id;
              return (
                <li
                  key={opcao.id}
                  onMouseEnter={() => setHoveredOption(opcao.id)}
                  onMouseLeave={() => setHoveredOption(null)}
                  onClick={() => navigate(opcao.navigate)}
                  className={`px-4 py-2.5 ${isHovered ? "text-esmeralda" : "text-white"} cursor-pointer`}
                >
                  {opcao.nome}
                </li>
              );
            })}
          </ul>
        </aside>
      )}
    </div>
  );
}

export default Aside;

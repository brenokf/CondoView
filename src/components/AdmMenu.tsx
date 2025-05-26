import { useState } from "react";
import Dashboard from "@/components/Dashboard";
import { Home, UserPlus, Users, FileText, Database, LogOut, Menu } from "lucide-react";
import UploadExcel from "./UploadExcel";
import Table from "./Table";

const menuItems = [
  { icon: <Home className="w-5 h-5" />, label: "Início" },
  { icon: <UserPlus className="w-5 h-5" />, label: "Cadastrar Usuário" },
  { icon: <Users className="w-5 h-5" />, label: "Usuários" },
  { icon: <FileText className="w-5 h-5" />, label: "Inserir Planilha" },
  { icon: <Database className="w-5 h-5" />, label: "Dados Condôminos" },
  { icon: <LogOut className="w-5 h-5 text-red-600" />, label: "Sair" },
];

export default function Adm() {
  const [active, setActive] = useState("Início");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside
        className={`shadow-md bg-indigo-100 fixed h-full z-20
          ${sidebarOpen
            ? "w-64 p-4 opacity-100 translate-x-0"
            : "w-64 p-4 opacity-0 -translate-x-full"
          }
          transition-[transform,opacity] duration-300 ease-in-out
        `}
      >

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-indigo-800">Condomínio</h2>
          <button
            className="text-indigo-800 focus:outline-none"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-2">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActive(item.label)}
              className={`flex items-center space-x-3 p-2 rounded hover:bg-indigo-200 transition ${active === item.label ? "bg-indigo-300 font-semibold" : ""
                }`}
            >
              {item.icon}
              <span className="whitespace-nowrap">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className={`flex-1 p-4 transition-margin duration-300 ${sidebarOpen ? "ml-64" : "ml-0"
        }`}>
        {!sidebarOpen && (
          <button
            className="mb-4 text-indigo-800 focus:outline-none"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        )}

        {/* Conteúdo dinâmico baseado no menu selecionado */}
        {active === "Início" && <Dashboard />}
        {active === "Cadastrar Usuário" && <p>Formulário de cadastro de usuário aqui</p>}
        {active === "Usuários" && <p>Lista de usuários aqui</p>}
        {active === "Inserir Planilha" && <UploadExcel />}
        {active === "Dados Condôminos" && <Table />}
        {active === "Sair" && <p>Você saiu.</p>}
      </main>
    </div>
  );
}

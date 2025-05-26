import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#4F46E5", "#818CF8", "#C7D2FE"];

const dataMoradores = [
  { name: "Proprietários", value: 40 },
  { name: "Locatários", value: 60 },
];

const dataPets = [
  { name: "Sem Pet", value: 70 },
  { name: "Com Pet", value: 30 },
];

const dataVeiculos = [
  { name: "Sem Veículo", value: 50 },
  { name: "1 Veículo", value: 35 },
  { name: "2+ Veículos", value: 15 },
];

const dataAnimais = [
  { name: "Cachorros", quantidade: 25 },
  { name: "Gatos", quantidade: 10 },
  { name: "Outros", quantidade: 5 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-indigo-900">Resumo Geral</h1>

      {/* Cards de contagem */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg text-gray-700">Total de Usuários</h2>
          <p className="text-2xl font-bold text-indigo-700">120</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg text-gray-700">Condôminos</h2>
          <p className="text-2xl font-bold text-indigo-700">80</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg text-gray-700">Inquilinos</h2>
          <p className="text-2xl font-bold text-indigo-700">40</p>
        </div>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Proporção de Moradores
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={dataMoradores}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {dataMoradores.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Moradores com e sem Pets
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={dataPets}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label
              >
                {dataPets.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Quantidade de Veículos
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={dataVeiculos}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label
              >
                {dataVeiculos.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Tipos de Animais no Condomínio
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dataAnimais}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="quantidade" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

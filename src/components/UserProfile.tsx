"use client";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserProfile() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <Card className="w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="bg-blue-600 text-white p-6 flex flex-col items-center md:w-1/3">
            <Avatar className="w-24 h-24 mb-4 border-4 border-white">
              <AvatarImage src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" alt="Avatar" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold">Ana Beatriz</h2>
            <p className="text-sm opacity-80">moradora</p>
            <div className="mt-4 text-center text-xs">
              <p>Bloco B - Apto 204</p>
              <p>ana@email.com</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 md:w-2/3 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Informações do Condomínio</h3>
              <Separator className="my-2" />
              <ul className="text-sm text-gray-600 space-y-1">
                <li><strong>Status:</strong> Proprietário</li>
                <li><strong>Residentes:</strong> 3 pessoas</li>
                <li><strong>Moradores:</strong> Ana, João, Lucas</li>
                <li><strong>Crianças:</strong> 2 anos, 5 anos</li>
                <li><strong>Pessoas idosas:</strong> Não</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700">Veículos</h3>
              <Separator className="my-2" />
              <ul className="text-sm text-gray-600 space-y-1">
                <li><strong>Possui veículo:</strong> Sim</li>
                <li><strong>Quantidade:</strong> 1</li>
                <li><strong>Detalhes:</strong> BRA-49CC | Moto | Honda | CG 160 FAN | Vermelho</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700">Animais de Estimação</h3>
              <Separator className="my-2" />
              <ul className="text-sm text-gray-600 space-y-1">
                <li><strong>Possui animais:</strong> Sim</li>
                <li><strong>Espécies:</strong> Cão</li>
                <li><strong>Detalhes:</strong> Bilu, Shih Tzu, Castanho, Pequeno - Cão</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700">Outras Informações</h3>
              <Separator className="my-2" />
              <ul className="text-sm text-gray-600 space-y-1">
                <li><strong>Pessoa com deficiência:</strong> Não</li>
                <li><strong>Diagnóstico de saúde mental:</strong> Sim</li>
                <li><strong>Contatos:</strong> 99678-5698 João, 99234-1234 Maria</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

// Sidebar.tsx
import React from 'react';
import { X } from 'lucide-react';

export function Sidebar({ onClose }: { onClose: () => void }) {
  return (
    <div className="w-64 bg-white shadow h-screen fixed left-0 top-0 z-50 p-4 flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold">Menu</h2>
        <button onClick={onClose}>
          <X className="w-5 h-5" />
        </button>
      </div>
      <nav className="space-y-4">
        <a href="#" className="text-blue-600 hover:underline">Dashboard</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Usuários</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Configurações</a>
      </nav>
    </div>
  );
}

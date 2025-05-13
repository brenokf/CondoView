'use client'
import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setError("Preencha todos os campos");
      return;
    }

    // Aqui você pode adicionar sua lógica de autenticação
    console.log("Logando com:", username, password);
    setError("");
  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-white p-8 rounded shadow-md w-full max-w-sm"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">Entrar</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Usuário
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Senha
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm mb-4">{error}</p>
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Entrar
      </button>
    </form>
  );
}

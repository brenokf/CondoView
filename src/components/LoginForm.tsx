import React from "react";
import Image from "next/image";
import condominio from '../assets/undraw_building_burz.svg'
export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Lado com imagem */}
      <Image
        src={condominio}
        alt="Condomínio"
        className="w-3/4 h-auto"
        style={{ width: "50%", height: "auto" }}
      />

      <div className="flex w-full lg:w-1/2 items-center justify-center p-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">Portal do Condomínio</h2>
            <p className="mt-2 text-sm text-gray-500">Bem-vindo de volta. Faça login para continuar.</p>
          </div>

          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-t-md relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                  placeholder="Seu e-mail"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Senha</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-b-md relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                  placeholder="Sua senha"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <a href="#" className="hover:underline">Esqueci minha senha</a>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
              >
                Entrar
              </button>
            </div>
          </form>

          <div className="text-center text-sm text-gray-500">
            <p>Não tem uma conta? <a href="#" className="text-blue-500 hover:underline">Solicitar acesso</a></p>
          </div>
        </div>
      </div>
    </div >
  );
}

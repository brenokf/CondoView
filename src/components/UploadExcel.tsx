import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, File } from "lucide-react";

export default function UploadExcel() {
  const [fileName, setFileName] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) setFileName(file.name);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-2xl shadow-xl p-6 sm:p-8 space-y-5">
      <div className="text-center space-y-1">
        <h2 className="text-xl font-semibold text-gray-900">Upload de arquivo</h2>
        <p className="text-sm text-gray-500">
          Arraste e solte o arquivo ou clique abaixo para selecionar. Tamanho máximo: 5MB.
        </p>
      </div>

      <div
        {...getRootProps()}
        className={`flex flex-col items-center justify-center border-2 border-dashed ${isDragActive ? "border-blue-400 bg-blue-50" : "border-gray-300 bg-gray-50"
          } transition-all rounded-xl px-6 py-10 text-center cursor-pointer hover:bg-gray-100`}
      >
        <input {...getInputProps()} />
        <UploadCloud className="w-8 h-8 text-blue-500 mb-2" />
        <p className="text-sm font-medium text-gray-700">
          {isDragActive ? "Solte aqui…" : "Arraste um arquivo ou clique para enviar"}
        </p>
        <span className="text-xs text-gray-400 mt-1">PNG, JPG, PDF - até 5MB</span>
      </div>

      {fileName && (
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700">
          <File className="w-4 h-4 text-gray-500" />
          {fileName}
        </div>
      )}

      <button
        type="button"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-lg transition-all"
      >
        Enviar arquivo
      </button>
    </div>
  );
}

import { useState } from "react";
import * as XLSX from "xlsx";

export default function UploadExcel() {
  const [data, setData] = useState<Record<string, string | number | boolean>[]>([]);
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json<Record<string, string | number | boolean>>(worksheet);
      setData(json);
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md max-w-2xl w-full mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">Importar Planilha de Moradores</h2>

      <input
        type="file"
        accept=".xlsx"
        onChange={handleFileUpload}
        className="mb-4"
      />

      {fileName && (
        <p className="text-sm text-gray-500 mb-2">
          Arquivo carregado: <strong>{fileName}</strong>
        </p>
      )}

      {data.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Prévia dos dados:</h3>
          <table className="table-auto w-full text-left text-sm border">
            <thead>
              <tr>
                {Object.keys(data[0]).map((key) => (
                  <th key={key} className="border px-2 py-1 bg-gray-100">{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.slice(0, 5).map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, i) => (
                    <td key={i} className="border px-2 py-1">{String(value)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

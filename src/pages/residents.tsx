import dynamic from "next/dynamic";

const UserTablePage = dynamic(() => import("@/components/Table"), { ssr: false });

export default function Residents() {
  return (
    <div className="min-h-screen bg-gray-100  items-center justify-center p-4">
      < UserTablePage />
    </div>
  );
}
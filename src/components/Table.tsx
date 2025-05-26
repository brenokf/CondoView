import { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowUpDown } from "lucide-react";
import { motion } from "framer-motion";

const users = [
  { name: "John Doe", email: "john@example.com", role: "Admin" },
  { name: "Jane Smith", email: "jane@example.com", role: "User" },
  { name: "Tom Brown", email: "tom@example.com", role: "Editor" },
  { name: "Alice Johnson", email: "alice@example.com", role: "Viewer" },
  { name: "Robert Lee", email: "robert@example.com", role: "Admin" },
  { name: "Maria Garcia", email: "maria@example.com", role: "Editor" },
  { name: "James Miller", email: "james@example.com", role: "User" },
];

export default function UserTablePage() {
  const [search, setSearch] = useState("");
  interface User {
    name: string;
    email: string;
    role: string;
  }

  type SortField = keyof User;
  type SortOrder = "asc" | "desc";

  const [sortBy, setSortBy] = useState<SortField>("name");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const filteredUsers = users
    .filter((u) => u.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];
      return sortOrder === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    });

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedUsers = filteredUsers.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const toggleSort = (field: SortField) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-slate-100 to-white dark:from-slate-950 dark:to-slate-900 p-10"
    >
      <div className="max-w-6xl mx-auto rounded-3xl bg-white dark:bg-slate-950 shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Users</h2>
          <Input
            placeholder="Search user..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-xs rounded-xl bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700"
          />
        </div>
        <div className="overflow-x-auto">
          <Table className="min-w-full text-sm">
            <TableHead className="bg-slate-50 dark:bg-slate-900">
              <TableRow>
                <TableHeader onClick={() => toggleSort("name")} className="w-1/3 px-6 py-4 text-left font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">
                  <div className="flex items-center">Name <ArrowUpDown className="ml-2 w-4 h-4" /></div>
                </TableHeader>
                <TableHeader onClick={() => toggleSort("email")} className="w-1/3 px-6 py-4 text-left font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">
                  <div className="flex items-center">Email <ArrowUpDown className="ml-2 w-4 h-4" /></div>
                </TableHeader>
                <TableHeader onClick={() => toggleSort("role")} className="w-1/3 px-6 py-4 text-left font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">
                  <div className="flex items-center">Role <ArrowUpDown className="ml-2 w-4 h-4" /></div>
                </TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedUsers.map((user, idx) => (
                <TableRow key={idx} className="even:bg-slate-50 dark:even:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                  <TableCell className="w-1/3 px-6 py-4 font-medium text-slate-700 dark:text-slate-200">{user.name}</TableCell>
                  <TableCell className="w-1/3 px-6 py-4 text-slate-600 dark:text-slate-400">{user.email}</TableCell>
                  <TableCell className="w-1/3 px-6 py-4 text-slate-600 dark:text-slate-400">{user.role}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <span className="text-sm text-slate-600 dark:text-slate-400">
            Showing {((page - 1) * itemsPerPage) + 1} to {Math.min(page * itemsPerPage, filteredUsers.length)} of {filteredUsers.length} results
          </span>
          <div className="space-x-2">
            <Button
              size="icon"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              variant="outline"
              className="rounded-xl text-slate-700 dark:text-slate-200"
            >
              <ChevronLeft className="w-4 h-4  stroke-current" />
            </Button>
            <Button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              variant="outline"
              size="icon"
              className="rounded-xl text-slate-700 dark:text-slate-200"
            >
              <ChevronRight className="w-4 h-4  stroke-current" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

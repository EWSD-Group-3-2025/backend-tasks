"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const initialTasks = [
  { id: 1, memberName: "Alex Johnson", mainTask: "API Development", subTask: "User Authentication Endpoints" },
  { id: 2, memberName: "Alex Johnson", mainTask: "API Development", subTask: "Data Validation Middleware" },
  { id: 3, memberName: "Sarah Chen", mainTask: "Database Optimization", subTask: "Index Performance Tuning" },
  { id: 4, memberName: "Sarah Chen", mainTask: "Database Optimization", subTask: "Query Optimization" },
  {
    id: 5,
    memberName: "Michael Rodriguez",
    mainTask: "Microservice Architecture",
    subTask: "Service Discovery Implementation",
  },
  {
    id: 6,
    memberName: "Michael Rodriguez",
    mainTask: "Microservice Architecture",
    subTask: "Message Queue Integration",
  },
  { id: 7, memberName: "Emily Kim", mainTask: "Security Implementation", subTask: "OAuth2 Integration" },
  { id: 8, memberName: "Emily Kim", mainTask: "Security Implementation", subTask: "Rate Limiting" },
]

export function BackendTaskList() {
  const [tasks] = useState(initialTasks)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTasks = tasks.filter(
    (task) =>
      task.memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.mainTask.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.subTask.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex justify-end mb-4">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search tasks..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Member Name</TableHead>
              <TableHead className="w-[250px]">Main Task</TableHead>
              <TableHead>Sub Task</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell className="font-medium">{task.memberName}</TableCell>
                  <TableCell>{task.mainTask}</TableCell>
                  <TableCell>{task.subTask}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="h-24 text-center">
                  No tasks found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

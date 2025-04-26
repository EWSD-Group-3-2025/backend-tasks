"use client"

import { useState, useMemo } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { apiData } from "@/app/data/api-endpoints"

export function ApiEndpointsList() {
  const flattenedData = useMemo(() => {
    return apiData.flatMap((module) =>
      module.apis.map((api) => ({
        module: module.module,
        endpoint: api.endpoint,
        path: api.path,
        method: api.method,
        developer: api.developer,
      })),
    )
  }, [])

  const [searchTerm, setSearchTerm] = useState("")
  const [moduleFilter, setModuleFilter] = useState("")
  const [methodFilter, setMethodFilter] = useState("")
  const [developerFilter, setDeveloperFilter] = useState("")

  const uniqueModules = useMemo(
    () => Array.from(new Set(flattenedData.map((item) => item.module))).sort(),
    [flattenedData],
  )

  const uniqueMethods = useMemo(
    () =>
      Array.from(new Set(flattenedData.map((item) => item.method)))
        .filter((method) => method !== "-")
        .sort(),
    [flattenedData],
  )

  const uniqueDevelopers = useMemo(() => {
    const allDevelopers = flattenedData.flatMap((item) => item.developer.split(", ").map((dev) => dev.trim()))
    return Array.from(new Set(allDevelopers)).sort()
  }, [flattenedData])

  const filteredData = useMemo(() => {
    return flattenedData.filter((item) => {
      const matchesSearch =
        item.module.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.endpoint.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.method.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.developer.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesModule = moduleFilter === "" || item.module === moduleFilter
      const matchesMethod = methodFilter === "" || item.method === methodFilter
      const matchesDeveloper = developerFilter === "" || item.developer.includes(developerFilter)

      return matchesSearch && matchesModule && matchesMethod && matchesDeveloper
    })
  }, [flattenedData, searchTerm, moduleFilter, methodFilter, developerFilter])

  const resetFilters = () => {
    setSearchTerm("")
    setModuleFilter("")
    setMethodFilter("")
    setDeveloperFilter("")
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search endpoints, paths, developers..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Select value={moduleFilter} onValueChange={setModuleFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Module" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Modules</SelectItem>
                {uniqueModules.map((module) => (
                  <SelectItem key={module} value={module}>
                    {module}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select value={methodFilter} onValueChange={setMethodFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Methods</SelectItem>
                {uniqueMethods.map((method) => (
                  <SelectItem key={method} value={method}>
                    {method}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select value={developerFilter} onValueChange={setDeveloperFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Developer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Developers</SelectItem>
                {uniqueDevelopers.map((developer) => (
                  <SelectItem key={developer} value={developer}>
                    {developer}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {(searchTerm || moduleFilter || methodFilter || developerFilter) && (
          <div className="flex justify-end">
            <button onClick={resetFilters} className="text-sm text-muted-foreground hover:text-foreground">
              Reset filters
            </button>
          </div>
        )}
      </div>

      <div className="rounded-md border overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Module</TableHead>
                <TableHead className="w-[250px]">Endpoint</TableHead>
                <TableHead className="w-[250px]">Path</TableHead>
                <TableHead className="w-[100px]">Method</TableHead>
                <TableHead className="w-[200px]">Developer</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.module}</TableCell>
                    <TableCell>{item.endpoint}</TableCell>
                    <TableCell className="font-mono text-sm">{item.path}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                          item.method === "GET"
                            ? "bg-green-100 text-green-800"
                            : item.method === "POST"
                              ? "bg-blue-100 text-blue-800"
                              : item.method === "PUT"
                                ? "bg-yellow-100 text-yellow-800"
                                : item.method === "PATCH"
                                  ? "bg-purple-100 text-purple-800"
                                  : item.method === "DELETE"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {item.method}
                      </span>
                    </TableCell>
                    <TableCell>{item.developer}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center">
                    No endpoints found matching your filters.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="text-sm text-muted-foreground">
        Showing {filteredData.length} of {flattenedData.length} endpoints
      </div>
    </div>
  )
}

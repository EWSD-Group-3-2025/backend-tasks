import { ApiEndpointsList } from "@/components/ui/api-endpoints-list";


export default function Home() {
  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">API Endpoints Dashboard</h1>
      <ApiEndpointsList />
    </main>
  )
}

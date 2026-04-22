import { LucideIcon } from "lucide-react"
import Link from "next/link"

interface AgentCardProps {
  agent: {
    id: string
    name: string
    description: string
    icon: LucideIcon
    color: string
    status: string
  }
}

export function AgentCard({ agent }: AgentCardProps) {
  const Icon = agent.icon
  
  return (
    <Link href={`/agent/${agent.id}`}>
      <div className="h-full p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300 cursor-pointer">
        <div className={`w-12 h-12 rounded-full ${agent.color} flex items-center justify-center mb-4`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{agent.name}</h3>
        <p className="text-gray-400">{agent.description}</p>
        <div className="mt-4">
          <span className={`text-sm px-2 py-1 rounded-full ${
            agent.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
          }`}>
            {agent.status}
          </span>
        </div>
      </div>
    </Link>
  )
}

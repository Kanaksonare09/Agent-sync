import Link from "next/link"
import { AgentCard } from "@/components/agent-card"
import { Sidebar } from "@/components/sidebar"
import { Search } from "@/components/search"
import { Brain, Mail, Calendar, Youtube, MessageSquare, Twitter, Instagram, FileText, PlusCircle } from "lucide-react"

export default function Home() {
  // Agent data - this would typically come from your MongoDB database
  const agents = [
    {
      id: "email-agent",
      name: "Email Assistant",
      description: "Summarize, plan and respond to your emails automatically",
      icon: Mail,
      color: "bg-blue-500",
      status: "active",
    },
    {
      id: "calendar-agent",
      name: "Calendar Planner",
      description: "Organize your schedule and get smart meeting suggestions",
      icon: Calendar,
      color: "bg-green-500",
      status: "active",
    },
    {
      id: "youtube-agent",
      name: "YouTube Summarizer",
      description: "Get quick summaries of YouTube videos and recommendations",
      icon: Youtube,
      color: "bg-red-500",
      status: "active",
    },
    {
      id: "chat-agent",
      name: "Chat Assistant",
      description: "Your personal AI assistant for any questions",
      icon: MessageSquare,
      color: "bg-purple-500",
      status: "active",
    },
    {
      id: "twitter-agent",
      name: "Twitter Analyzer",
      description: "Track trends and summarize your Twitter feed",
      icon: Twitter,
      color: "bg-sky-500",
      status: "development",
    },
    {
      id: "instagram-agent",
      name: "Instagram Helper",
      description: "Content suggestions and engagement analytics",
      icon: Instagram,
      color: "bg-pink-500",
      status: "development",
    },
    {
      id: "document-agent",
      name: "Document Analyzer",
      description: "Extract insights and summaries from your documents",
      icon: FileText,
      color: "bg-amber-500",
      status: "development",
    },
  ]

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">AI Multi-Agent Dashboard</h1>
              <p className="text-gray-400 mt-1">Access your intelligent agents for various tasks</p>
            </div>
            <Search />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}

            <Link href="/create-agent" className="group">
              <div className="h-full flex flex-col items-center justify-center p-6 rounded-xl border-2 border-dashed border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <PlusCircle className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                  Create New Agent
                </h3>
                <p className="text-gray-500 text-center mt-2 group-hover:text-gray-300 transition-colors duration-300">
                  Add a custom agent for your specific needs
                </p>
              </div>
            </Link>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 mb-8">
            <div className="flex items-center mb-4">
              <Brain className="w-6 h-6 text-purple-400 mr-2" />
              <h2 className="text-xl font-semibold text-white">AI Hub Overview</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Your multi-agent AI system provides intelligent assistance across multiple platforms and services. Each
              agent specializes in different tasks and can be customized to your needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="font-medium text-white mb-2">Active Agents</h3>
                <p className="text-gray-400">4 agents currently active and ready to assist you</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="font-medium text-white mb-2">In Development</h3>
                <p className="text-gray-400">3 agents being developed with new capabilities</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="font-medium text-white mb-2">Custom Agents</h3>
                <p className="text-gray-400">Create your own specialized agents for specific tasks</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors duration-200"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${i === 1 ? "bg-blue-500/20" : i === 2 ? "bg-green-500/20" : "bg-red-500/20"}`}
                  >
                    {i === 1 ? (
                      <Mail className="w-5 h-5 text-blue-400" />
                    ) : i === 2 ? (
                      <Calendar className="w-5 h-5 text-green-400" />
                    ) : (
                      <Youtube className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-white font-medium">
                      {i === 1
                        ? "Email Assistant summarized 5 new emails"
                        : i === 2
                          ? "Calendar Planner suggested meeting times"
                          : "YouTube Summarizer processed a video"}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {i === 1 ? "10 minutes ago" : i === 2 ? "1 hour ago" : "3 hours ago"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

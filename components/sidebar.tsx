"use client"

import { Home, Settings, HelpCircle } from "lucide-react"
import Link from "next/link"

export function Sidebar() {
  return (
    <div className="w-16 md:w-64 h-screen bg-gray-900 border-r border-gray-800">
      <div className="flex flex-col h-full p-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white hidden md:block">AgentSync</h2>
        </div>
        <nav className="space-y-2">
          <Link href="/" className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg">
            <Home className="w-5 h-5" />
            <span className="hidden md:block">Home</span>
          </Link>
          <Link href="/settings" className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg">
            <Settings className="w-5 h-5" />
            <span className="hidden md:block">Settings</span>
          </Link>
          <Link href="/help" className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg">
            <HelpCircle className="w-5 h-5" />
            <span className="hidden md:block">Help</span>
          </Link>
        </nav>
      </div>
    </div>
  )
}

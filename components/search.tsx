"use client"

import { Search as SearchIcon } from "lucide-react"

export function Search() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search agents..."
        className="w-full md:w-[300px] px-4 py-2 pl-10 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      />
      <SearchIcon className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
    </div>
  )
}

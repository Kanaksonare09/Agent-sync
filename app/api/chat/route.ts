import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"

export async function POST(request: Request) {
  try {
    const { db } = await connectToDatabase()
    const { message, agentId } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    // In a real implementation, you would call your AI model here
    // For now, we'll simulate a response
    const response = simulateAIResponse(message, agentId)

    // Store the conversation in MongoDB
    await db.collection("conversations").insertOne({
      agentId,
      message,
      response,
      timestamp: new Date(),
    })

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Error processing chat:", error)
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 })
  }
}

// Simulate AI response based on agent type and message
function simulateAIResponse(message: string, agentId?: string) {
  // Simple response simulation based on agent type
  if (agentId?.includes("email")) {
    return `I've analyzed your emails. You have 3 important messages that need attention. Would you like me to summarize them?`
  } else if (agentId?.includes("calendar")) {
    return `Based on your schedule, you have 2 meetings tomorrow. The best time for a new meeting would be between 2-4 PM.`
  } else if (agentId?.includes("youtube")) {
    return `I've summarized the video content. The main points are: 1) AI technology trends, 2) Implementation strategies, 3) Future predictions.`
  } else {
    return `I understand your message about "${message.substring(0, 30)}...". How can I assist you further with this?`
  }
}

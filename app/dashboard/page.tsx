"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ThumbsUp, ThumbsDown, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

// Types for our video items
interface VideoItem {
  id: string
  url: string
  title: string
  thumbnail: string
  votes: number
}

export default function SongVotingPage() {
  const [videoUrl, setVideoUrl] = useState("")
  const [currentVideo, setCurrentVideo] = useState<VideoItem | null>(null)
  const [queue, setQueue] = useState<VideoItem[]>([])
  const [previewVideo, setPreviewVideo] = useState<string | null>(null)

  // Extract YouTube video ID from URL
  const extractVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  // Handle input change and show preview
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value
    setVideoUrl(url)

    const videoId = extractVideoId(url)
    if (videoId) {
      setPreviewVideo(videoId)
    } else {
      setPreviewVideo(null)
    }
  }

  // Handle video submission
  const handleSubmit = () => {
    const videoId = extractVideoId(videoUrl)

    if (!videoId) {
      alert("Please enter a valid YouTube URL")
      return
    }

    // In a real app, you would fetch video details from YouTube API
    const newVideo: VideoItem = {
      id: videoId,
      url: videoUrl,
      title: `Video ${videoId}`, // In real app, get from YouTube API
      thumbnail: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
      votes: 0,
    }

    setQueue([...queue, newVideo])
    setVideoUrl("")
    setPreviewVideo(null)
  }

  // Handle voting
  const handleVote = (id: string, increment: number) => {
    setQueue(
      queue
        .map((video) => (video.id === id ? { ...video, votes: video.votes + increment } : video))
        .sort((a, b) => b.votes - a.votes),
    )
  }

  // Play next video
  const playNext = () => {
    if (queue.length > 0) {
      const nextVideo = queue[0]
      setCurrentVideo(nextVideo)
      setQueue(queue.slice(1))
    }
  }

  // Initialize with a default video if none is playing
  useEffect(() => {
    if (!currentVideo && queue.length > 0) {
      playNext()
    }
  }, [queue])

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Stream Song Voting Queue</h1>

      {/* Current playing video */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Now Playing</h2>
        <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
          {currentVideo ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white">No video currently playing</div>
          )}
        </div>
        {currentVideo && (
          <div className="mt-2">
            <h3 className="font-medium">{currentVideo.title}</h3>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Submit new video */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Submit a Song</h2>
          <div className="flex gap-2 mb-4">
            <Input
              placeholder="Paste YouTube URL here"
              value={videoUrl}
              onChange={handleInputChange}
              className="flex-1"
            />
            <Button onClick={handleSubmit}>Submit</Button>
          </div>

          {/* Video preview */}
          {previewVideo && (
            <div className="mt-4">
              <h3 className="text-sm font-medium mb-2">Preview:</h3>
              <div className="aspect-video max-w-full bg-black rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${previewVideo}`}
                  title="YouTube video preview"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
          )}
        </div>

        {/* Queue */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Up Next</h2>
            {queue.length > 0 && !currentVideo && (
              <Button onClick={playNext} size="sm">
                <Play className="mr-2 h-4 w-4" /> Play Next
              </Button>
            )}
          </div>

          {queue.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">Queue is empty. Submit a song!</div>
          ) : (
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
              {queue.map((video) => (
                <Card key={video.id} className="overflow-hidden">
                  <CardContent className="p-3">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <img
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          className="w-24 h-16 object-cover rounded"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm truncate">{video.title}</h3>
                        <div className="flex items-center mt-2">
                          <span className="text-lg font-bold mr-3">{video.votes}</span>
                          <div className="flex gap-1">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleVote(video.id, 1)}
                            >
                              <ThumbsUp className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleVote(video.id, -1)}
                            >
                              <ThumbsDown className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

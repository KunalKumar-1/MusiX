import Link from "next/link"
import Image from "next/image"
import { Play, Music, Users, ChevronRight, Headphones, BarChart3, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Appbar } from "./components/Appbar"
import { Redirect } from "./components/Redirect"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="container z-40 flex h-20 items-center justify-between py-6">
         <Appbar />
         <Redirect />
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Let Your Fans Choose What Plays Next
              </h1>
              <p className="mt-6 text-xl text-gray-300 md:text-2xl">
                The first music streaming platform where listeners vote on the playlist. Democracy for music lovers,
                real-time feedback for artists.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 sm:w-auto" size="lg">
                  <Play className="mr-2 h-4 w-4" /> Start Listening Free
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-purple-700 text-purple-400 hover:bg-purple-700/50 hover:text-shadow-white sm:w-auto"
                  size="lg"
                >
                  For Artists <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </section>

        <section id="features" className="py-20 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Democracy in Music Streaming
              </h2>
              <p className="mt-4 text-xl text-gray-300">A new way to discover and enjoy music together</p>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 rounded-full bg-purple-900/30 p-4">
                  <Users className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold">Fan-Powered Playlists</h3>
                <p className="mt-2 text-gray-400">
                  Listeners vote on what plays next, creating a truly democratic music experience.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 rounded-full bg-purple-900/30 p-4">
                  <Headphones className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold">Live Listening Rooms</h3>
                <p className="mt-2 text-gray-400">
                  Join themed rooms or create your own where everyone influences the soundtrack.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 rounded-full bg-purple-900/30 p-4">
                  <BarChart3 className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold">Artist Insights</h3>
                <p className="mt-2 text-gray-400">
                  Musicians get real-time feedback on how fans respond to their music.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 bg-gradient-to-b from-black to-purple-950/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                How It Works
              </h2>
              <p className="mt-4 text-xl text-gray-300">Simple, intuitive, and engaging for everyone</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
              <div className="relative rounded-xl border border-purple-800/30 bg-black/50 p-1">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="App interface showing voting mechanism"
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Join a Listening Room</h3>
                    <p className="mt-2 text-gray-300">
                      Browse public rooms by genre, mood, or artist, or create your own private room for friends.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Vote on Upcoming Tracks</h3>
                    <p className="mt-2 text-gray-300">
                      See what's in the queue and cast your vote. The most popular tracks rise to the top.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Discover New Music</h3>
                    <p className="mt-2 text-gray-300">
                      Add tracks to the queue and introduce others to your favorite artists.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="artists" className="py-20 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold hover:text-gray-300 tracking-tight sm:text-4xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                For Artists
              </h2>
              <p className="mt-4 text-xl text-gray-300">Connect with your audience like never before</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-purple-900/30 p-2">
                    <Heart className="h-6 w-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Real-time Feedback</h3>
                    <p className="mt-2 text-gray-300">
                      See how fans respond to your music in the moment, not just through play counts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-purple-900/30 p-2">
                    <Users className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Host Listening Parties</h3>
                    <p className="mt-2 text-gray-300">
                      Launch new releases with interactive listening events where fans can react and vote.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-purple-900/30 p-2">
                    <BarChart3 className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Detailed Analytics</h3>
                    <p className="mt-2 text-gray-300">
                      Understand your audience with comprehensive data on voting patterns and preferences.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-xl border border-purple-800/30 bg-black/50 p-1 order-1 md:order-2">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Artist dashboard showing analytics"
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-black to-purple-950/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Ready to Let Your Fans Choose?
              </h2>
              <p className="mt-4 text-xl text-gray-300">
                Join thousands of artists and music lovers on the platform that's changing how we experience music.
              </p>
              <div className="mt-10">
                <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-black/50 border-purple-800/50 text-white placeholder:text-gray-500"
                  />
                  <Button className="bg-purple-600 hover:bg-purple-700">Get Started Free</Button>
                </form>
                <p className="mt-4 text-sm text-gray-400">
                  No credit card required. Start with our free plan and upgrade anytime.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-purple-900/30 bg-black py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-white">Product</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    For Artists
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    For Listeners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Support</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Copyright
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Licensing
                  </Link>
                </li>
               </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between border-t border-purple-900/30 pt-8 md:flex-row">
            <div className="flex items-center gap-2">
              <Music className="h-6 w-6 text-purple-500" />
              <span className="text-lg font-bold">MusicX</span>
            </div>
            <p className="mt-4 text-sm text-gray-400 md:mt-0">
              &copy; {new Date().getFullYear()} MusicX. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

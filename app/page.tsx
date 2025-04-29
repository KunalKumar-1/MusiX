import Link from "next/link";
import Image from "next/image";
import { Play,Music,Users,ChevronRight,Headphones,BarChart3,Heart,Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Appbar } from "./components/Appbar";
import { Redirect } from "./components/Redirect";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white antialiased">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-black/80 border-b border-purple-900/20">
        <div className="container flex h-16 items-center justify-between py-4">
          <Appbar />
          <Redirect />
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden py-28 md:py-30">
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-purple-950/50 px-4 py-1 text-sm font-medium text-purple-300 ring-1 ring-inset ring-purple-700/30 shadow-[0_0_12px_#a855f7] hover:shadow-[0_0_16px_#d946ef] transition-shadow  duration-300">
              <Star className="mr-1 h-3.5 w-3.5 text-purple-400 drop-shadow-[0_0_4px_#c084fc]" />
              <span className="drop-shadow-[0_0_6px_#e879f9]">New Release: Track Requests & DJ Rooms</span>
            </span>
          </div>
              <h2 className="animated-gradient text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent glow-text">Let Your Fans Choose What Plays Next</h2>
              <p className="mt-5 text-xl text-gray-300 md:text-2xl max-w-3xl mx-auto">
                The music streaming platform where listeners vote on the
                playlist.
                <span className="block mt-2 font-light text-lg text-gray-400">
                  FreeWill for music lovers, real-time feedback for artists.
                </span>
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  className="w-fit max-w-xs sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 shadow-lg shadow-purple-900/30 transition-transform duration-300 hover:scale-105"
                  size="lg"
                >
                  <Play className="mr-2 h-4 w-4" /> Start Listening Free
                </Button>
                <Button
                  variant="outline"
                  className="w-fit max-w-xs border-purple-700 text-purple-300 hover:bg-purple-900 hover:text-purple-100 hover:border-purple-600 sm:w-auto transition-transform duration-300 hover:scale-105"
                  size="lg"
                >
                  For Artists <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

        <div className="absolute top-1/4 left-10 h-80 morphing-background rounded-full bg-blue-500/40 blur-3xl group transition-all duration-300 hover:scale-110 hover:opacity-80 animate-morphColors"></div>
        <div className="absolute bottom-1/3 right-10 w-120 h-120 morphing-background rounded-full bg-pink-500/40 blur-3xl group transition-all duration-300 hover:scale-110 hover:opacity-80 animate-morphColors"></div>
        </section>

        <section
          id="features"
          className="py-24 bg-gradient-to-b from-black to-black/95"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-xs font-medium text-purple-300 bg-purple-950/50 rounded-full mb-3">
                Features
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Democracy in Music Streaming
              </h2>
              <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                A new way to discover and enjoy music together
              </p>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <div className="flex flex-col items-center text-center group">
                <div className="mb-6 rounded-2xl bg-gradient-to-br from-purple-900/40 to-purple-700/20 p-5 ring-1 ring-purple-700/20 shadow-lg shadow-purple-900/10 transition-all duration-300 group-hover:shadow-purple-900/30">
                  <Users className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold">Fan-Powered Playlists</h3>
                <p className="mt-2 text-gray-400 max-w-xs">
                  Listeners vote on what plays next, creating a truly democratic music experience.
                </p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="mb-6 rounded-2xl bg-gradient-to-br from-purple-900/40 to-purple-700/20 p-5 ring-1 ring-purple-700/20 shadow-lg shadow-purple-900/10 transition-all duration-300 group-hover:shadow-purple-900/30">
                  <Headphones className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold">Live Listening Rooms</h3>
                <p className="mt-2 text-gray-400 max-w-xs">
                  Join themed rooms or create your own where everyone influences
                  the soundtrack.
                </p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="mb-6 rounded-2xl bg-gradient-to-br from-purple-900/40 to-purple-700/20 p-5 ring-1 ring-purple-700/20 shadow-lg shadow-purple-900/10 transition-all duration-300 group-hover:shadow-purple-900/30">
                  <BarChart3 className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold">Artist Insights</h3>
                <p className="mt-2 text-gray-400 max-w-xs">
                  Musicians get real-time feedback on how fans respond to their
                  music.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="py-24 bg-gradient-to-b from-black to-purple-950/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-xs font-medium text-purple-300 bg-purple-950/50 rounded-full mb-3">
                Guide
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                How It Works
              </h2>
              <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                Simple, intuitive, and engaging for everyone
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
              <div className="relative rounded-2xl border border-purple-800/30 bg-black/50 p-2 shadow-lg shadow-purple-900/20 overflow-hidden group transition-all duration-300 hover:shadow-purple-900/40">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl"></div>
                <Image
                  src="https://c4.wallpaperflare.com/wallpaper/669/150/555/anime-music-headphones-guitar-anime-girls-wallpaper-preview.jpg"
                  width={600}
                  height={400}
                  alt="App interface showing voting mechanism"
                  className="rounded-xl w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col justify-center space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-900/30">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Join a Listening Room</h3>
                    <p className="mt-2 text-gray-300">
                      Browse public rooms by genre, mood, or artist, or create
                      your own private room for friends.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-900/30">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Vote on Upcoming Tracks
                    </h3>
                    <p className="mt-2 text-gray-300">
                      See what's in the queue and cast your vote. The most
                      popular tracks rise to the top.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-900/30">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Discover New Music</h3>
                    <p className="mt-2 text-gray-300">
                      Add tracks to the queue and introduce others to your
                      favorite artists.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="artists" className="py-24 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-xs font-medium text-purple-300 bg-purple-950/50 rounded-full mb-3">
                For Musicians
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                For Artists
              </h2>
              <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                Connect with your audience like never before
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-8 order-2 md:order-1">
                <div className="flex items-start gap-4 group">
                  <div className="rounded-xl bg-gradient-to-br from-purple-900/40 to-purple-700/20 p-3 ring-1 ring-purple-700/20 shadow-md shadow-purple-900/10 transition-all duration-300 group-hover:shadow-purple-900/30">
                    <Heart className="h-6 w-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Real-time Feedback</h3>
                    <p className="mt-2 text-gray-300">
                      See how fans respond to your music in the moment, not just
                      through play counts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="rounded-xl bg-gradient-to-br from-purple-900/40 to-purple-700/20 p-3 ring-1 ring-purple-700/20 shadow-md shadow-purple-900/10 transition-all duration-300 group-hover:shadow-purple-900/30">
                    <Users className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Host Listening Parties
                    </h3>
                    <p className="mt-2 text-gray-300">
                      Launch new releases with interactive listening events
                      where fans can react and vote.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="rounded-xl bg-gradient-to-br from-purple-900/40 to-purple-700/20 p-3 ring-1 ring-purple-700/20 shadow-md shadow-purple-900/10 transition-all duration-300 group-hover:shadow-purple-900/30">
                    <BarChart3 className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Detailed Analytics</h3>
                    <p className="mt-2 text-gray-300">
                      Understand your audience with comprehensive data on voting
                      patterns and preferences.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl border border-purple-800/30 bg-black/50 p-2 shadow-lg shadow-purple-900/20 overflow-hidden group transition-all duration-300 hover:shadow-purple-900/40 order-1 md:order-2">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-2xl"></div>
                <Image
                  src="https://c4.wallpaperflare.com/wallpaper/773/36/983/music-anime-headphones-art-wallpaper-preview.jpg"
                  width={600}
                  height={400}
                  alt="Artist dashboard showing analytics"
                  className="rounded-xl w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-black to-purple-950/10 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block px-3 py-1 text-xs font-medium text-purple-300 bg-purple-950/50 rounded-full mb-3">
                Join Today
              </span>
              <h1 className="animated-gradient text-4xl sm:text-5xl md:text-6xl font-bold text-center drop-shadow-lg bg-clip-text text-transparent glow-text">
                Let Your Fans Choose What Plays Next
              </h1>
              <p className="mt-4 text-xl text-gray-300">
                Join thousands of artists and music lovers on the platform
                that's changing how we experience music.
              </p>
              <div className="mt-10">
                <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-black/60 border-purple-800/40 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring focus:ring-purple-500/20"
                  />
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-900/20">
                    Get Started Free
                  </Button>
                </form>
                <p className="mt-4 text-sm text-gray-300">
                  <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Try It, It's Totally Free!
                  </span>
                  <span className="text-gray-500 ml-2">
                    Nothing Extra required!
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-purple-900/55 bg-black py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-white">Product</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    For Artists
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    For Listeners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Support</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Status
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Copyright
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between border-t border-purple-900/30 pt-8 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg shadow-lg shadow-purple-900/20">
                <Music className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                MusicX
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-400 md:mt-0">
              &copy; {new Date().getFullYear()} MusicX. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

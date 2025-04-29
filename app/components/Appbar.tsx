"use client"
import { useState, useEffect } from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import { Music } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Appbar() {
  const session = useSession();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 2000);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className={`fixed z-50 top-0 left-0 w-full transition-all duration-300 px-4 py-2 backdrop-blur-md border-b border-white/10 ${isScrolled ? "py-1 bg-black/60 shadow-md" : "py-3 bg-black/30"}`}>
      <div className="flex items-center justify-between w-full max-w-screen-2xl mx-auto">
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onMouseEnter={() => setIsAnimating(true)}
          onMouseLeave={() => setIsAnimating(false)}
        >
          <div className="relative">
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur-lg opacity-60 transition-opacity duration-700 ${isAnimating ? 'scale-125' : 'scale-100'}`}></div>
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-black/80 border border-purple-500/30 shadow-lg shadow-purple-500/20">
              <div className={`transition-all duration-1000 ${isAnimating ? 'rotate-12 scale-110' : ''}`}>
                <Music className="h-9 w-9 text-purple-400" />
                <span className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transform transition-all duration-700 ${isAnimating ? 'scale-x-100' : 'scale-x-0'}`}></span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              MusiX
            </span>
            <span className="text-xs text-purple-300/70 -mt-1">Feel the beat  </span>
          </div>
        </div>

        <div className="ml-auto">
          {session.data?.user ? (
            <Button
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
              size="lg"
              onClick={() => signOut()}
            >
              Logout
            </Button>
          ) : (
            <Button
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
              size="lg"
              onClick={() => signIn()}
            >
              Sign in
            </Button>
          )}
        </div>
      </div>
    </nav>
  )
}

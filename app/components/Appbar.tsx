"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link"
import Image from "next/image"
import { Play, Music, Users, ChevronRight, Headphones, BarChart3, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Appbar() {
   const session = useSession();

    return (
        <nav className="flex  justify-between gap-290 m-2">
        <div className="flex items-center gap-3 px-1 ">
          <Music className="h-14 w-14 text-purple-500" />
          <span className="text-3xl font-bold">Musix</span>
        </div>
        <div>
          {session.data?.user ? (
            <Button className="bg-purple-600 hover:bg-purple-800" size="lg" onClick={() => signOut()}>
              Logout
            </Button>
          ) : (
            <Button className="bg-purple-600 hover:bg-purple-800" size="lg" onClick={() => signIn()}>
              Sign in
            </Button>   
          )}
        </div>
      </nav>

    )
}
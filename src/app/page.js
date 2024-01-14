import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Video from "@/components/Video"

import './globals.css'

export default function Home() {
  return (
    <>
      <div className="relative z-[-1] bg-black">
        <div className="fixed inset-0 z-[-1] overflow-hidden ">
          <div className="absolute top-1/4 left-1/4 inset-0 bg-gradient-to-r from-[#392D38] via-transparent to-[#171A2F] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-expand w-1/3 h-1/2" />
        </div>
        <Navbar />
        <Hero />
        <Video />
      </div>

    </>
  )
}

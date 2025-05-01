"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { useEffect, useRef } from "react"

const HeroSection = () => {

    const imageRef =useRef()

    useEffect(() => {
        const imageElement = imageRef.current

        const handleScroll=()=>{
            const scrollPosition =window.scrollY;
            const scrollThreshold =100;

            if(scrollPosition>scrollThreshold){
                imageElement.classList.add("scrolled")
            } else{
                imageElement.classList.remove("scrolled")
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    },[])
  return (
    <div className="pt-40 pb-20 px-4">
        <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-8xl lg:[105px] pb-6 gradient-title">
                Manage Your Finances <br/>With Intelligence
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                An AI-powered financial management platform that helps you track, analyze and optimize your spending with real-time insights.
            </p>
            <div className="flex justify-center ">
            <Link href="/dashboard">
            <Button size="lg" className="px-8 ">
                Get Started With FinSave
            </Button>
            </Link>
            </div> 
            <div className="hero-image-wrapper mt-5 md:mt-0">
               <div ref={imageRef} className="hero-image">
                 <Image
                 src="/banner.jpg"
                 width={1000}
                 height={300}
                 alt="Dashboard Preview"
                 className="rounded-md shadow-2xl border mx-auto"
                 priority
                 />
                 </div>
            </div>
       </div>
    </div>
  )
}

export default HeroSection
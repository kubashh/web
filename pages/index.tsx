"use client"

import { useSearchParams } from "next/navigation"

if (typeof window !== `undefined` && !window.location.search)
  window.location.search = `?=https://kubashh.github.io/snake`

export default function Home() {
  const searchParams = useSearchParams()
  const url = new URLSearchParams(searchParams).get(``)

  return <iframe className="w-screen h-screen" src={url || undefined} />
}

'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main className="container">
      <div 
        className="mouse-light"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
        }}
      />
      
      <h1 className="title">Shiner Systems</h1>
      <p className="subtitle">Independent Software Consulting</p>
      
      <div className="construction-logo">
        <div className="construction-icon">🚧</div>
      </div>
      
      <div className="under-construction">Under Construction!</div>

      <p className="description">
        Welcome to Shiner Systems, an independent software consulting company 
        founded and operated by Raymond Shiner. I deliver innovative software 
         
      </p>
    </main>
  )
}

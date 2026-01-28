import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bio from "./Bio";
import Contact from "./Contact";
import Header from "./Header";
import Skills from "./Skills";


function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <main className="max-w-3xl mx-auto py-12 px-6">
        <Header />
        <Bio />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App

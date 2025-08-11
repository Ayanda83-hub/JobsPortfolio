import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'

export default function Navbar() {
  return (
    <nav className="bg-gray-200 dark:bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Ayanda Ntombela</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <DarkModeToggle />
      </div>
    </nav>
  )
}

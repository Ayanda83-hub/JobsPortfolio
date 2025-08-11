export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-center p-4">
      <p>© {new Date().getFullYear()} Ayanda Ntombela</p>
      <div className="mt-2 space-x-4">
        <a href="mailto:ayanda.ntombela@posteo.net">Email</a>
        <a href="tel:+4915738948062">Phone</a>
        <a href="https://www.linkedin.com/in/ayanda-ntombela-2210108/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  )
}
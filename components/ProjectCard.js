import Link from 'next/link'

export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="mt-2">{project.description}</p>
      <div className="mt-4 flex justify-between">
        <Link href={`/projects/${project.slug}`} className="text-blue-600">Details</Link>
        <a href={project.link} target="_blank" rel="noreferrer" className="text-green-600">Visit</a>
      </div>
    </div>
  )
}

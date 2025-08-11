import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import projects from '../../projects-data'

export default function ProjectDetail() {
  const router = useRouter()
  const { slug } = router.query
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Layout><p>Loading...</p></Layout>

  const shareText = `Check out this project: ${project.title}`
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <Layout title={project.title}>
      <section className="py-8">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="mt-2 text-lg">{project.description}</p>

        <div className="mt-4 space-y-2">
          <p><strong>Company:</strong> {project.company}</p>
          <p><strong>Timeframe:</strong> {project.timeframe}</p>
          <p><strong>Objectives:</strong> {project.objectives}</p>
          <p><strong>My Contributions:</strong> {project.contributions}</p>
          <p><strong>Outcomes:</strong> {project.outcomes}</p>
        </div>

        <div className="mt-6 space-x-4">
          <a href={project.link} target="_blank" rel="noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded">Visit Project</a>
          {project.extraLink && (
            <a href={project.extraLink} target="_blank" rel="noreferrer" className="bg-green-600 text-white px-4 py-2 rounded">View Dashboard</a>
          )}
        </div>

        {/* Social Sharing */}
        <div className="mt-6 flex space-x-4">
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noreferrer"
            className="text-blue-700 underline"
          >
            Share on LinkedIn
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noreferrer"
            className="text-sky-500 underline"
          >
            Share on Twitter
          </a>
        </div>
      </section>
    </Layout>
  )
}

import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import projects from '../projects-data'

export default function Projects() {
  return (
    <Layout title="Projects">
      <section className="py-8">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>
    </Layout>
  )
}

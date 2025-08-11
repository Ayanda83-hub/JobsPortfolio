import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import projects from '../projects-data'

export default function Home() {
  return (
    <Layout title="Ayanda Ntombela | Portfolio">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold">Ayanda Ntombela</h1>
        <p className="mt-4 text-lg">
          Business Analyst & Innovation Strategist | Data-driven problem solver | Global project leader
        </p>
        <a 
          href="/cv-ayanda.pdf" 
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          download
        >
          Download CV
        </a>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Highlighted Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

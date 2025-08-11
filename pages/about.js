import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout title="About Ayanda">
      <section className="py-8">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="mb-6">
          I’m Ayanda Ntombela, a Business Analyst and Innovation Strategist with over a decade of experience leading projects in sustainability, technology, and global development.
          I combine data-driven analysis with strategic foresight to deliver measurable impact.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Volunteering</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Mentor for aspiring entrepreneurs in sustainability sectors</li>
          <li>Community tech workshops for digital literacy</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Hobbies</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Photography – street, travel, and documentary styles</li>
          <li>Collecting rare and first-edition books</li>
          <li>Exploring world cuisines through cooking</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Photography</h2>
        <p className="mb-6">A curated selection of my photography will be showcased here. (Placeholder for gallery.)</p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Library</h2>
        <p>Highlights from my personal book collection. (Placeholder for images and descriptions.)</p>
      </section>
    </Layout>
  )
}

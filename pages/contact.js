import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout title="Contact Ayanda">
      <section className="py-8">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="mb-6">I’d love to connect with you! Use the form below or reach out directly via email or LinkedIn.</p>

        <form className="space-y-4 max-w-lg">
          <div>
            <label className="block mb-1">Name</label>
            <input type="text" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input type="email" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block mb-1">Message</label>
            <textarea className="w-full border rounded px-3 py-2" rows="5" required></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Send</button>
        </form>

        <div className="mt-8 space-y-2">
          <p><strong>Email:</strong> <a href="mailto:ayanda.ntombela@posteo.net" className="text-blue-600">ayanda.ntombela@posteo.net</a></p>
          <p><strong>Phone:</strong> <a href="tel:+4915738948062" className="text-blue-600">+49 157 389 48062</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ayanda-ntombela-2210108/" target="_blank" rel="noreferrer" className="text-blue-600">View Profile</a></p>
        </div>
      </section>
    </Layout>
  )
}

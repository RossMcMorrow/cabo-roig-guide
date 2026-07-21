import { Link } from 'react-router-dom'

function GuidePage({ title, icon, children }) {
  return (
    <section className="pageCard">
      <Link to="/" className="backLink">← Home</Link>
      <h1>{icon} {title}</h1>
      <div className="pageContent">{children}</div>
    </section>
  )
}

export default GuidePage

import { Link } from 'react-router-dom'
import CardGrid from './CardGrid'

function SectionPage({ title, icon, subtitle, cards }) {
  return (
    <section className="pageCard">
      <Link to="/" className="backLink">← Home</Link>
      <h1>{icon} {title}</h1>
      {subtitle && <p className="subtitle small">{subtitle}</p>}
      <CardGrid cards={cards} />
    </section>
  )
}

export default SectionPage
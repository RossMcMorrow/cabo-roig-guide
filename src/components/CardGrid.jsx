import { Link } from 'react-router-dom'

function CardGrid({ cards }) {
  return (
    <section className="quickGrid">
      {cards.map((card) => (
        <Link to={card.path} className="card" key={card.path}>
          <span className="cardIcon">{card.icon}</span>
          <strong>{card.title}</strong>
        </Link>
      ))}
    </section>
  )
}

export default CardGrid
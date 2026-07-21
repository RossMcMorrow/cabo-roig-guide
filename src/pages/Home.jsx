import CardGrid from '../components/CardGrid'


function Home() {
  return (
    <>
      <section className="hero heroFull heroPhoto">
        <div>
          <p className="eyebrow">Cabo Roig, Spain</p>
          <h1>🏠 Vista Mar Guest Guide</h1>
          <p className="subtitle">
            Welcome to our holiday home. Everything you need for the house,
            local area and emergencies is below.
          </p>


        </div>

        <div className="heroBadge">
          <span>☀️</span>
          <strong>Welcome</strong>
          <small>Relax and enjoy your stay</small>
        </div>
      </section>

      <h2 className="groupTitle">House</h2>
      <CardGrid cards={[
        { title: 'House Essentials', icon: '🔑', path: '/house-essentials' },
        { title: 'Awning', icon: '⛱️', path: '/awning' },
        { title: 'Bins', icon: '🗑️', path: '/bins' },
        { title: 'Pool', icon: '🏊', path: '/pool' },
      ]} />

      <h2 className="groupTitle">Explore</h2>
      <CardGrid cards={[
        { title: 'Local Area', icon: '📍', path: '/local-area' },
      ]} />

      <h2 className="groupTitle">Important</h2>
      <CardGrid cards={[
        { title: 'Emergency', icon: '🚨', path: '/emergency' },
      ]} />
    </>
  )
}

export default Home
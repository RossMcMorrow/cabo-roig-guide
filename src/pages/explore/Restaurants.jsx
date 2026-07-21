import GuidePage from '../../components/GuidePage'

function Restaurants() {
  return (
    <GuidePage title="Restaurants" icon="🍽️">
      <div className="infoBlock">
        <h2>🍽️ Local Restaurant Area</h2>

        <p>
          There are lots of restaurants within walking distance. The map below
          shows the main restaurant areas nearby.
        </p>

        <img
          src="/images/restaurants-map.jpg"
          alt="Map showing nearby restaurant areas"
          className="guideImage"
        />
      </div>

      <div className="infoBlock">
        <h2>⭐ Our Favourites</h2>

        <div className="keyRow">
          <strong>1.</strong>
          <span><strong>Pachino's</strong> — Italian food.</span>
        </div>

        <div className="keyRow">
          <strong>2.</strong>
          <span><strong>Asian Fusion</strong> — Chinese / Asian food.</span>
        </div>

        <div className="keyRow">
          <strong>3.</strong>
          <span><strong>The Claddagh</strong> — Pizzas and casual food.</span>
        </div>

        <div className="keyRow">
          <strong>4.</strong>
          <span>
            <strong>The Red Chilli</strong> — Indian food, with European options
            for children.
          </span>
        </div>
      </div>

      <div className="infoBlock">
        <h2>💡 Tip</h2>
        <p>
          Restaurants can get busy in high season, so it is worth going a little
          earlier or booking ahead if possible.
        </p>
      </div>
    </GuidePage>
  )
}

export default Restaurants
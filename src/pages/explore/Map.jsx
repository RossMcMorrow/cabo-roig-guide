import GuidePage from '../../components/GuidePage'

function Map() {
  return (
    <GuidePage title="Map & Location" icon="🗺️">
      <div className="infoBlock">
        <h2>📍 House Location</h2>

        <p>
          The house is located in Aguamarina, Cabo Roig, within easy walking
          distance of the beach, restaurants, shops and the community pool.
        </p>

        <img
          src="/images/map-house-location.jpg"
          alt="House location map"
          className="guideImage"
        />
      </div>

      <div className="infoBlock">
        <h2>🚶 Local Area</h2>

        <p>
          Most facilities are within a short walk of the house.
        </p>

        <ul>
          <li>🏖️ Beach</li>
          <li>🏊 Community Pool</li>
          <li>🍽️ Restaurants</li>
          <li>🛒 Shops & Supermarkets</li>
          <li>🚌 Bus Stops</li>
        </ul>

        <img
          src="/images/map-local-area.jpg"
          alt="Local area map"
          className="guideImage"
        />
      </div>

      <div className="infoBlock">
        <h2>💡 Helpful Tip</h2>

        <p>
          The beach-side gate (Calle del Fuego) is often the quickest route to
          the beach and coastal promenade.
        </p>

        <p>
          The strip-side gate (Calle del Mar) is convenient for restaurants,
          shops and transport.
        </p>
      </div>
    </GuidePage>
  )
}

export default Map
import GuidePage from '../../components/GuidePage'

function Shops() {
  return (
    <GuidePage title="Shops & Supermarkets" icon="🛒">
      <div className="infoBlock">
        <h2>🛒 Local Shopping</h2>

        <p>
          There are plenty of shops and supermarkets within walking distance of
          the house.
        </p>

        <img
          src="/images/shops-map.jpg"
          alt="Map showing nearby shops and supermarkets"
          className="guideImage"
        />
      </div>

      <div className="infoBlock">
        <h2>🚶 Walking Distance</h2>

        <ul>
          <li>🛍️ Several Chinese shops for household items, beach gear and toys.</li>
          <li>🥖 Small supermarkets and convenience stores along the strip.</li>

        </ul>
      </div>

      <div className="infoBlock">
        <h2>🏬 La Zenia Boulevard</h2>

        <p>
          La Zenia Boulevard is the largest shopping centre in the region and is
          only a short drive away.
        </p>

        <ul>
          <li>🛒 Large supermarkets</li>
          <li>👕 Clothes and fashion stores</li>
          <li>👟 Sports shops</li>
          <li>🍽️ Restaurants and cafés</li>
          <li>🎵 Entertainment and seasonal events</li>
        </ul>


      </div>

      <div className="infoBlock">
        <h2>💡 Tip</h2>

        <p>
          The Chinese shops are surprisingly well stocked and are often the
          quickest place to find beach toys, inflatables, chargers, tools and
          other holiday essentials.
        </p>
      </div>
    </GuidePage>
  )
}

export default Shops
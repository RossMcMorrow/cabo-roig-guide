import GuidePage from '../../components/GuidePage'

function Beach() {
  return (
    <GuidePage title="Beaches" icon="🌊">
      <div className="infoBlock">
        <h2>🏖️ Nearby Beaches</h2>

        <p>
          There are two excellent beaches within walking distance of the house.
        </p>

        <img
          src="/images/beach-map.jpg"
          alt="Map showing nearby beaches"
          className="guideImage"
        />
      </div>

      <div className="infoBlock">
        <h2>🐟 Cala de la Glea</h2>

        <p>
          Cala de la Glea is the closest beach to the house and is one of our
          favourites.
        </p>

        <ul>
          <li>🤿 Excellent for snorkelling</li>
          <li>🏄 Great for paddle boarding (SUP)</li>
          <li>🚣 Ideal for kayaking</li>
          <li>🐠 Lots of fish around the rocky and seagrass areas</li>
        </ul>

        <p>
          If you enjoy exploring marine life, this is usually the best beach to
          visit.
        </p>
      </div>

      <div className="infoBlock">
        <h2>🏖️ Playa de Cabo Roig</h2>

        <p>
          Playa de Cabo Roig is a larger and more sheltered beach.
        </p>

        <ul>
          <li>🏊 Great for swimming</li>
          <li>🌬️ More protected on windy days</li>
          <li>🍹 Beach bar nearby</li>
          <li>🎵 Live music at weekends during the season</li>
        </ul>

        <p>
          This is often the best choice when the sea is rough elsewhere along
          the coast.
        </p>
      </div>

      <div className="infoBlock">
        <h2>☀️ Beach Tips</h2>

        <ul>
          <li>Bring water and sun protection during summer.</li>
          <li>Early mornings are ideal for snorkelling and paddle boarding.</li>
          <li>Sea conditions can change quickly on windy days.</li>
        </ul>
      </div>


      <div className="infoBlock">
  <h2>🏖️ Other Nearby Beaches</h2>

  <h3>Cala Capitán</h3>

  <p>
    Cala Capitán is a great family beach with a sheltered section that is ideal
    for younger children. The calm water makes it a popular choice for families.
  </p>

  <h3>Playa Aguamarina</h3>

  <p>
    Playa Aguamarina is known for its long stretch of white sand and generally
    clear water with very little seaweed.
  </p>

  <ul>
    <li>🏖️ Long sandy beach</li>
    <li>🌊 Clear water</li>
    <li>🏰 Aqua inflatable water park during the summer season</li>
  </ul>

  <h3>Playa de La Zenia</h3>

  <p>
    Playa de La Zenia is one of the largest beaches in the area and is very
    popular during the summer months.
  </p>

  <ul>
    <li>🏖️ Large sandy beach</li>
    <li>☀️ Plenty of space</li>
    <li>🌊 Can experience stronger waves and currents on windy days</li>
  </ul>

  <p>
    Please pay attention to the beach flags and sea conditions before swimming.
  </p>
</div>


      <div className="infoBlock">
  <h2>🚩 Beach Safety Flags</h2>

  <p>
    During the summer season, lifeguards use coloured flags to indicate sea
    conditions.
  </p>

  <ul>
    <li>
      <strong>🟢 Green Flag</strong> – Safe to swim.
    </li>

    <li>
      <strong>🟡 Yellow Flag</strong> – Swim with caution. Children should be
      supervised and weaker swimmers should stay close to shore.
    </li>

    <li>
      <strong>🔴 Red Flag</strong> – No swimming permitted due to dangerous
      conditions.
    </li>

    <li>
      <strong>🟣 Purple Flag</strong> – Jellyfish or other marine hazards may
      be present.
    </li>
  </ul>

  <p>
    Always follow the instructions of the lifeguards and pay attention to the
    flag displayed when entering the beach.
  </p>
</div>
    </GuidePage>
  )
}

export default Beach
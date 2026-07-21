import GuidePage from '../../components/GuidePage'

function CeilingFan() {
  const base = import.meta.env.BASE_URL

  return (
    <GuidePage title="Ceiling Fan" icon="🌀">
      <div className="infoBlock">
        <h2>🌀 Ceiling Fan</h2>

        <img
          src={`${base}images/ceiling-fan.png`}
          alt="Ceiling fan"
          className="guideImage"
        />

        <p>
          These ceiling fans are installed throughout the house and are very
          effective at keeping rooms comfortable.
        </p>
      </div>

      <div className="infoBlock">
        <h2>Recommended Use</h2>

        <ul>
          <li>Use the air conditioning for 1 hour before bed.</li>
          <li>If the room becomes warm during the night, use the ceiling fan.</li>
          <li>Medium speed is usually sufficient.</li>
          <li>The fan is very quiet and energy efficient.</li>
        </ul>
      </div>

      <div className="infoBlock">
        <h2>🎮 Remote Control</h2>

        <img
          src={`${base}images/c-remote.jpg`}
          alt="Ceiling fan remote"
          className="guideImage rotate90"
        />

        <p>
          Please refer to the labelled remote image below for the different
          functions.
        </p>
      </div>

      <div className="infoBlock">
        <h2>💡 Light Functions</h2>

        <ul>
          <li>Warm White</li>
          <li>Neutral White</li>
          <li>Cool White</li>
          <li>Dimmable brightness</li>
        </ul>
      </div>

      <div className="infoBlock">
        <h2>🌬️ Fan Functions</h2>

        <ul>
          <li>3 fan speeds</li>
          <li>Timer function</li>
          <li>Summer / Winter mode</li>
          <li>Very quiet DC motor</li>
        </ul>
      </div>

      <div className="infoBlock warningBlock">
        <h2>Helpful Tip</h2>

        <p>
          The ceiling fan uses very little electricity and is often enough on
          its own during cooler evenings.
        </p>
      </div>

      <a
        href={`${base}manuals/ceiling-fan-manual.pdf`}
        target="_blank"
        rel="noreferrer"
        className="manualLink"
      >
        📄 Open Ceiling Fan Manual
      </a>
    </GuidePage>
  )
}

export default CeilingFan
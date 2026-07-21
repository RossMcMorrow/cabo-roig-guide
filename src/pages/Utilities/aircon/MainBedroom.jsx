import { Link } from 'react-router-dom'
import GuidePage from '../../../components/GuidePage'

function MainBedroom() {
  return (
    <GuidePage title="Main Bedroom Air Conditioning" icon="🛏️">
      <div className="infoBlock">
        <h2>❄️ Main Bedroom Unit</h2>

        <img
          src="/images/main-bedroom-aircon.jpg"
          alt="Main bedroom air conditioning unit"
          className="guideImage"
        />

        <p>
          This air conditioning unit cools the main bedroom. It is best used for
          short cooling periods rather than running all night.
        </p>
      </div>

      <div className="infoBlock">
        <h2>Recommended Night-Time Use</h2>

        <ol>
          <li>Turn the air conditioning on when going to bed.</li>
          <li>Set the timer for <strong>1 hour</strong>.</li>
          <li>If the room becomes too warm during the night, repeat the 1-hour timer.</li>
          <li>
            Alternatively, use the ceiling fan if available. See the{' '}
            <Link to="/utilities/ceiling-fan" className="textLink">
              Ceiling Fan guide
            </Link>.
          </li>
        </ol>
      </div>

      <div className="infoBlock warningBlock">
        <h2>⚠️ Important: Water Bottle</h2>

        <p>
          This is the only air conditioning unit with a water bottle that needs
          to be emptied.
        </p>

        <p>
          Please empty the bottle every <strong>2 days</strong>. If it becomes
          full, dirty water can leak down onto the new awning fabric.
        </p>
      </div>

      <div className="infoBlock warningBlock">
        <h2>⚠️ Known Issue: Water Drainage</h2>

        <p>
          Like the living room unit, if this air conditioning unit is run on full
          power for a long time, the drain can freeze and block.
        </p>

        <p>
          If this happens, water may start to run down the wall.
        </p>

        <ol>
          <li>Turn the air conditioning unit off.</li>
          <li>Leave it off for a while so the frozen drain can melt.</li>
          <li>Once melted, the water should drain correctly again.</li>
        </ol>
      </div>

      <div className="infoBlock">
        <h2>Suggested Settings</h2>

        <ul>
          <li><strong>Mode:</strong> Cool / ❄️</li>
          <li><strong>Temperature:</strong> 24°C is recommended</li>
          <li><strong>Fan:</strong> Auto</li>
          <li><strong>Timer:</strong> 1 hour at bedtime</li>
        </ul>
      </div>

      <div className="infoBlock">
        <h2>Manual</h2>

        <a
          href="/manuals/main-bedroom-aircon-manual.pdf"
          target="_blank"
          rel="noreferrer"
          className="manualLink"
        >
          📄 Open Main Bedroom Air Conditioning Manual
        </a>
      </div>
    </GuidePage>
  )
}

export default MainBedroom
import { Link } from 'react-router-dom'
import GuidePage from '../../../components/GuidePage'

function TopBedroom() {
  return (
    <GuidePage title="Top Bedroom Air Conditioning" icon="🏠">
      <div className="infoBlock">
        <h2>❄️ Top Bedroom Unit</h2>

        <img
          src="/images/kids-room-aircon.jpg"
          alt="Top bedroom air conditioning unit"
          className="guideImage"
        />

        <p>
          This air conditioning unit cools the top bedroom. It is best used for
          short cooling periods rather than running all night.
        </p>
      </div>

      <div className="infoBlock">
        <h2>Recommended Night-Time Use</h2>

        <ol>
          <li>Turn the air conditioning on when going to bed.</li>
          <li>Set the timer for <strong>1 hour</strong>.</li>
          <li>
            If the room becomes too warm during the night, repeat the
            1-hour timer.
          </li>
          <li>
            Alternatively, use the ceiling fan, which is very effective.
          </li>
        </ol>

        <p>
          For ceiling fan instructions, see the{' '}
          <Link to="/utilities/ceiling-fan" className="textLink">
            Ceiling Fan guide
          </Link>.
        </p>
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

      <div className="infoBlock warningBlock">
        <h2>Please Remember</h2>

        <ul>
          <li>Please do not run the air conditioning all night.</li>
          <li>Keep the window and door closed while it is running.</li>
          <li>Turn it off when leaving the room.</li>
        </ul>
      </div>

      <div className="infoBlock">
        <h2>Manual</h2>

        <p>
          The full top bedroom air conditioning manual will be available here once added.
        </p>

        <a
          href="/manuals/top-bedroom-aircon-manual.pdf"
          target="_blank"
          rel="noreferrer"
          className="manualLink"
        >
          📄 Open Top Bedroom Air Conditioning Manual
        </a>
      </div>
    </GuidePage>
  )
}

export default TopBedroom
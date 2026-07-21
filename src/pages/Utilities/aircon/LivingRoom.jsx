import GuidePage from '../../../components/GuidePage'

function Livingroom() {
  return (
    <GuidePage title="Living Room Air Conditioning" icon="🛋️">
      <div className="infoBlock">
        <h2>❄️ Living Room Unit</h2>

        <img
          src="/images/aircomLivingroom.png"
          alt="Living room air conditioning unit"
          className="guideImage"
        />

        <p>
          This air conditioning unit cools the main living room area.
          Please keep doors and windows closed while it is running.
        </p>
      </div>

      <div className="infoBlock">
        <h2>Recommended Settings</h2>

        <ul>
          <li><strong>Mode:</strong> Cool / ❄️</li>
          <li><strong>Temperature:</strong> 24°C is usually comfortable</li>
          <li><strong>Fan:</strong> Auto</li>
          <li><strong>Swing:</strong> Optional</li>
        </ul>
      </div>

      <div className="infoBlock warningBlock">
        <h2>Important</h2>

        <ul>
          <li>Please turn it off when leaving the house.</li>
          <li>Do not run the unit with windows or doors open.</li>
          <li>If water appears, turn the unit off and contact us.</li>
        </ul>
      </div>

      <div className="infoBlock warningBlock">
  <h2>⚠️ Known Issue: Water Drainage</h2>

  <p>
    If this air conditioning unit is run on full power for a long time,
    usually around 3 hours or more, the water drain can freeze and block.
  </p>

  <p>
    When this happens, water may start to run down the wall.
  </p>

  <h3>What to do</h3>

  <ol>
    <li>Turn the air conditioning unit off.</li>
    <li>Leave it off for a while so the frozen drain can melt.</li>
    <li>Once melted, the water should drain correctly again.</li>
  </ol>

  <p>
    To avoid this, please use a moderate temperature such as
    <strong> 24°C </strong> and avoid running the unit on full power for long periods.
  </p>
</div>

      <div className="infoBlock">
        <h2>Manual</h2>

        <p>
          The full air conditioning manual will be available here once added.
        </p>

        <a
          href="/manuals/living-room-aircon-manual.pdf"
          target="_blank"
          rel="noreferrer"
          className="manualLink"
        >
          📄 Open Air Conditioning Manual
        </a>
      </div>
    </GuidePage>
  )
}

export default Livingroom
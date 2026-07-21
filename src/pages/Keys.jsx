import GuidePage from '../components/GuidePage'

function Keys() {
  return (
    <GuidePage title="Keys & Access" icon="🔑">
      <div className="infoBlock">
        <h2>🔑 Main Key Bunch</h2>

        <p><img
          src="/images/Keys.svg"
          alt="Keys"
          className="guideImage"
        /></p>

        <div className="keyRow">
          <strong>1.</strong>
          <span>
            Phase 4 & 5 Community Gate key on Calle del Mar — Strip Side Map Link
          </span>
        </div>

        <div className="keyRow">
          <strong>2.</strong>
          <span>House Gate Key</span>
        </div>

        <div className="keyRow">
          <strong>3.</strong>
          <span>Metal Security Door Key</span>
        </div>

        <div className="keyRow">
          <strong>4.</strong>
          <span>House Front Door Key</span>
        </div>
      </div>

      <div className="infoBlock">
        <h2>🗄️ Key Press</h2>

        <p><p><img
          src="/images/KeyPress.png"
          alt="Keys"
          className="guideImage"
        /></p></p>

        <div className="keyRow">
          <strong>1.</strong>
          <span>Black fob for pool access</span>
        </div>

        <div className="keyRow">
          <strong>2.</strong>
          <span>
            Two red fobs for the Phase 4 & 5 Community Gate on Calle del Fuego —
            Beach Side Map Link
          </span>
        </div>
      </div>

      <div className="infoBlock warningBlock">
        <h2>🏠 Locking Up</h2>

        <p>
          We lock the front door when going out, but lock all doors and gates
          when returning form your holiday.
        </p>
      </div>
    </GuidePage>
  )
}

export default Keys
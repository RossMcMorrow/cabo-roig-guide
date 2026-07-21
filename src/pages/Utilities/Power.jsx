import GuidePage from '../../components/GuidePage'

function Power() {
  return (
    <GuidePage title="Power" icon="🔌">
      <div className="infoBlock">
        <h2>⚡ Fuse Board Location</h2>

        <p>
          The house fuse board is shown below. If part of the house loses
          power, a circuit breaker may have tripped.
        </p>

        <img
          src="/images/power.svg"
          alt="House fuse board"
          className="guideImage"
        />
      </div>

      <div className="infoBlock">
        <h2>🔄 Resetting a Trip Switch</h2>

        <ol>
          <li>Locate the fuse board.</li>
          <li>Look for a switch that is in a different position to the others.</li>
          <li>Push the switch fully to the OFF position.</li>
          <li>Then move it back to the ON position.</li>
        </ol>

        <p>
          In most cases, this will restore power immediately.
        </p>
      </div>

      <div className="infoBlock warningBlock">
        <h2>⚠️ Important</h2>

        <ul>
          <li>If the switch trips again immediately, unplug any recently connected appliances.</li>
          <li>Do not repeatedly force a breaker back on.</li>
          <li>If you cannot restore power, please contact us using the emergency details in this guide.</li>
        </ul>
      </div>

      <div className="infoBlock">
        <h2>💡 Helpful Tip</h2>

        <p>
          Occasionally, using several high-power appliances at the same time
          (such as kettles, heaters or hairdryers) may cause a circuit to trip.
        </p>
      </div>
    </GuidePage>
  )
}

export default Power
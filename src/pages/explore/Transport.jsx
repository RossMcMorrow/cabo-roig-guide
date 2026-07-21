import GuidePage from '../../components/GuidePage'

function Transport() {
  return (
    <GuidePage title="Transport" icon="🚌">
      <div className="infoBlock">
        <h2>🚌 Bus to La Zenia Boulevard</h2>

        <p>
          The bus stop is on <strong>Calle del Mar</strong>. The bus goes to
          <strong> La Zenia Boulevard</strong>.
        </p>

        <p>
          We are at the <strong>Aguamarina</strong> stop, which is the last stop.
        </p>

        <img
          src="/images/bus-timetable.jpg"
          alt="Bus timetable"
          className="guideImage"
        />
      </div>

      <div className="infoBlock">
        <h2>💳 Bus Card</h2>

        <p>
          There is a bus card in the key box.
        </p>

        <ul>
          <li>Normal ticket: <strong>€1.65</strong> per trip (wont take notes).</li>
          <li>With the bus card: <strong>€0.80</strong> per trip.</li>
          <li>The card can be tapped up to <strong>5 times</strong> for 5 people travelling together.</li>
          <li>The card was purchased for €2 and topped up with €20.</li>
          <li>You can top it up with the bus driver.</li>
          <li>The ticket shows the current balance left on the card.</li>
        </ul>
      </div>

      <div className="infoBlock">
        <h2>🚕 Taxis</h2>

        <p>
          There is a taxi rank on the strip (around from KFC), but it can be difficult to get a
          taxi from there.
        </p>

        <p>
          It is usually much easier to get a taxi back from
          <strong> La Zenia Boulevard</strong>.
        </p>
      </div>

      <div className="infoBlock warningBlock">
        <h2>💡 Tip</h2>

        <p>
          For trips to La Zenia Boulevard, the bus is usually the easiest and
          cheapest option, but it takes 45 minutes and does not have great run times.
        </p>
      </div>
    </GuidePage>
  )
}

export default Transport
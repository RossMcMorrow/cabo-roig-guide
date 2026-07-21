import GuidePage from '../components/GuidePage'

function Bins() {
  return (
    <GuidePage title="Bins" icon="🗑️">
      <div className="infoBlock">
        <h2>🗑️ Household Rubbish</h2>

        <p>
          The communal bins are located on the nearby streets.
        </p>

        <p>
          When the house bins become full, please empty them into the large bins in the streets.
        </p>

        <p>
          There is no need to wait until checkout — feel free to use the communal
          bins whenever needed during your stay.
        </p>
      </div>

      <div className="infoBlock">
        <h2>💡 Helpful Tip</h2>

        <p>
          During the summer months, regularly emptying food waste helps keep the
          house fresh and avoids unwanted insects.
        </p>
      </div>
    </GuidePage>
  )
}

export default Bins
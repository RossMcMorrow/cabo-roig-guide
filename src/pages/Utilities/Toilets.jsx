import GuidePage from '../../components/GuidePage.jsx'

function Toilets() {
  return (
    <GuidePage title="Toilets & Plumbing" icon="🚽">
      <div className="infoBlock">
        <h2>🚽 Spanish Plumbing</h2>

        <p>
          Plumbing systems in Spain can be a little different from those in
          Ireland and the UK. From time to time, you may notice a slight drain
          smell in the bathrooms.
        </p>

        <p>
          This is normal and we have had the system inspected by a plumber, who
          confirmed that everything is operating correctly and as designed.
        </p>
      </div>

      <div className="infoBlock">
        <h2>💨 If You Notice a Drain Smell</h2>

        <p>
          The smell is usually caused by air movement within the drainage
          system. Running water through the drains normally resolves it.
        </p>

        <ol>
          <li>Run the sink taps for a few minutes.</li>
          <li>Run water into the bath or shower tray.</li>
          <li>Run the bidet for a few minutes.</li>
          <li>For best results, allow the basin or bath to partially fill and then release the plug.</li>
        </ol>

        <p>
          This helps refresh the water traps and push any trapped air through
          the drainage system.
        </p>
      </div>

      <div className="infoBlock">
        <h2>🎥 Video Guide</h2>

        <p>
          A short video demonstrating this process will be added here.
        </p>

        <video controls className="guideVideo">
          <source src="/videos/toilet-plumbing-guide.mp4" type="video/mp4" />
          Your browser does not support video playback.
        </video>
      </div>

      <div className="infoBlock warningBlock">
        <h2>Helpful Tip</h2>




        <p>
  The more regularly the bathrooms are used, the less likely drain smells are
  to occur, as the water seals in the plumbing remain fresh and effective.
</p>


      </div>
    </GuidePage>
  )
}

export default Toilets
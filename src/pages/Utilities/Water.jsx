import GuidePage from '../../components/GuidePage'

function Water() {
  return (
    <GuidePage title="Hot Water" icon="🚿">
      <div className="infoBlock">
        <h2>Electric Hot Water Boiler</h2>

        <p>
          The house uses an electric hot water boiler. Hot water may take a
          little time to heat up if a lot has been used.
        </p>
      </div>

      <div className="infoBlock">
        <h2>How to Use It</h2>

        <p>
          A short video showing the hot water boiler will be added here.
        </p>

        <video controls className="guideVideo">
          <source src="/videos/hot-water-boiler.mp4" type="video/mp4" />
          Your browser does not support video playback.
        </video>
      </div>

      <div className="infoBlock warningBlock">
        <h2>If There Is No Hot Water</h2>

        <ol>
          <li>Check that the boiler switch is on.</li>
          <li>Allow time for the water to heat.</li>
          <li>Avoid running multiple showers one after another if the tank has emptied.</li>
        </ol>
      </div>
    </GuidePage>
  )
}

export default Water
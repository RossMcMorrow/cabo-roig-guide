import GuidePage from '../../components/GuidePage'

function Wifi() {
  return (
    <GuidePage title="Wi-Fi" icon="📶">
      <div className="infoBlock">
  <h2>Wi-Fi Details</h2>

  <p>
    Use the Wi-Fi name and password below to connect your phone,
    tablet, laptop or TV device.
  </p>

  <div className="wifiCredentials">
    <div className="wifiItem">
      <span className="wifiLabel">📶 Wi-Fi Name</span>
      <span className="wifiValue">FibraNortons-A5A5-5G</span>
    </div>

    <div className="wifiItem">
      <span className="wifiLabel">🔑 Wi-Fi Password</span>
      <span className="wifiValue">jqPR43Kf</span>
    </div>
  </div>
</div>

      <div className="infoBlock">
        <h2>Internet Speed</h2>

        <img
          src="/images/wifi-speed.png"
          alt="Wi-Fi speed test result"
          className="guideImage"
        />


      </div>

      <div className="infoBlock warningBlock">
        <h2>If Wi-Fi Stops Working</h2>

        <ol>
          <li>Wait one minute and try reconnecting.</li>
          <li>Check that your device is connected to the correct Wi-Fi network.</li>
          <li>If needed, restart the router by turning it off for 30 seconds and turning it back on.</li>
        </ol>
      </div>
    </GuidePage>
  )
}

export default Wifi
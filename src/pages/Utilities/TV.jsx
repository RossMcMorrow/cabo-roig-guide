import GuidePage from '../../components/GuidePage'

function TV() {
  return (
    <GuidePage title="TV & Entertainment" icon="📺">
      <div className="infoBlock">
        <h2>📺 Getting Started</h2>
        <p>
          The TV is connected to a Smart Box. The Smart Box gives access to
          English free-to-air TV channels and a movie/TV library.
        </p>
        <ul>
          <li>Turn on the TV.</li>
          <li>Turn on the Smart Box.</li>
          <li>Use the Smart Box remote for most things.</li>
        </ul>
      </div>

      <div className="infoBlock">
        <h2>📡 English TV Channels</h2>
        <img
          src="/images/tvbox.jpg"
          alt="Live TV channels screen"
          className="guideImage"
        />
        <p>
          Use the Live TV section to browse the available English free-to-air
          channels.
        </p>
      </div>

      <div className="infoBlock">
        <h2>🎬 Movies & TV Shows</h2>
        <img
          src="/images/movies.png"
          alt="KD Player movie library"
          className="guideImage"
        />
        <p>
          Open <strong>KD Player</strong> to access the movie and TV show
          library.
        </p>
      </div>

      <div className="infoBlock warningBlock">
        <h2>⚠️ If the Picture Disappears</h2>
        <img
          src="/images/tvremote.jpg"
          alt="TV remote source button"
          className="guideImage"
        />
        <p>
          Sometimes the TV can jump out of HDMI mode if buttons are pressed on
          the TV remote.
        </p>
        <ol>
          <li>Press the <strong>Source</strong> button on the TV remote.</li>
          <li>Select <strong>HDMI</strong>.</li>
          <li>The Smart Box screen should reappear.</li>
        </ol>
      </div>

      <div className="infoBlock">
        <h2>🎮 Which Remote?</h2>
        <img
          src="/images/tv-remotes.jpg"
          alt="TV and Smart Box remotes"
          className="guideImage"
        />
        <ul>
          <li><strong>TV remote:</strong> Power, volume and HDMI source.</li>
          <li><strong>Smart Box remote:</strong> Channels, KD Player, movies and navigation.</li>
        </ul>
      </div>
    </GuidePage>
  )
}

export default TV
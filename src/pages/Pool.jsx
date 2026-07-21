import GuidePage from '../components/GuidePage'

function Pool() {
  return (
    <GuidePage title="Pool" icon="🏊">
      <div className="infoBlock">
        <h2>🏊 Pool Access</h2>

        <p>
          Access to the pool is via the <strong>black pool fob</strong>.
        </p>

        <p>
          We keep the fob attached to the lanyard to help prevent it from being
          lost. Please return it to the key press after use.
        </p>
      </div>

      <div className="infoBlock">
        <h2>🕘 Opening Hours</h2>

        <p>
          The pool is open daily from <strong>9:00 AM until 10:00 PM</strong>.
        </p>
      </div>

      <div className="infoBlock">
        <h2>📋 Community Pool Rules</h2>

        <p>
          The community has a number of rules in place to help everyone enjoy
          the pool safely. During the high season, a lifeguard may also be on duty.
        </p>

        <ol>
          <li>No glass is permitted in the pool area.</li>
          <li>
            Large inflatables and floaties are not permitted. Swim aids for
            children are allowed.
          </li>
        </ol>
      </div>

      <div className="infoBlock warningBlock">
        <h2>💡 Please Be Considerate</h2>

        <p>
          This is a shared community pool. Please help keep the area clean and
          respect other residents and guests.
        </p>
      </div>
    </GuidePage>
  )
}

export default Pool
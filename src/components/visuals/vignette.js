import * as React from 'karet';

import './vignette.css';

const Vignette = () =>
  <svg className="visuals__vignette">
    <defs>
      <radialGradient id="vignette">
        <stop offset="50%" stopColor="rgba(0, 0, 0, 0)" />
        <stop offset="100%" stopColor="rgba(0, 0, 0, 0.2)" />
      </radialGradient>
    </defs>

    <circle cx="50%" cy="50%" r="71%" fill="url(#vignette)" />
  </svg>;

export default Vignette;

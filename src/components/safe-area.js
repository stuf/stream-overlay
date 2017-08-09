import * as React from 'karet';
import * as L from 'partial.lenses';
import './safe-area.css';

const toPct = v => `${v}%`;

// It hurts to live

const Margin = {
  TITLE_SAFE: 5,
  ACTION_SAFE: 3.5,
};

const Size = {
  TITLE_SAFE: 100 - (Margin.TITLE_SAFE * 2),
  ACTION_SAFE: 100 - (Margin.ACTION_SAFE * 2),
};

const rewriteProps =
  L.get(L.pick({ x: 'margin',
                 y: 'margin',
                 width: 'size',
                 height: 'size' }));

const getDimensions =
  L.transform(L.seq([L.values, L.modifyOp(toPct)],
                     L.rewrite(rewriteProps)));

const Dimension = {
  TITLE_SAFE: getDimensions({ margin: Margin.TITLE_SAFE, size: Size.TITLE_SAFE }),
  ACTION_SAFE: getDimensions({ margin: Margin.ACTION_SAFE, size: Size.ACTION_SAFE }),
};

const SafeArea = () =>
  <svg className="safe-area__component"
       viewBox="0 0 1920 1080"
       preserveAspectRatio="none">
    <defs>
      {/* Screen-centered cross */}
      <path id="cross" className="cross" d="M0,540 h1920 M960,0 v1080" />

      <rect id="titleSafe" className="area" {...Dimension.TITLE_SAFE} />
      <rect id="actionSafe" className="area" {...Dimension.ACTION_SAFE} />

      {/* Mask for inner part of safe frame */}
      <mask id="areaCrossMask">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <rect x="10%" y="10%" width="80%" height="80%" fill="black" />
      </mask>

      <mask id="middleCrossMask">
        <rect x="47.5%" y="47.5%" width="5%" height="5%" fill="rgba(255, 255, 255, 1)" />
      </mask>
    </defs>

    {/* Set up the element */}
    <use xlinkHref="#titleSafe" />
    <use xlinkHref="#actionSafe" />
    <use xlinkHref="#cross" mask="url(#middleCrossMask)" />
    <use xlinkHref="#cross" mask="url(#areaCrossMask)" />
  </svg>;

export default SafeArea;

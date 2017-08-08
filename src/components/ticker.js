/* eslint-disable no-console */
import * as React from 'karet';
import * as U from 'karet.util';

import './ticker.css';

//

//

const Ticker = ({ items }) =>
  <div className="ticker">
    {U.sink(U.seq(items,
                  U.reverse,
                  U.take(6),
                  U.lift(U.show),
                  U.on({
                    value: v => v,
                    error: err => console.error(err),
                  })))}
  </div>;

export default Ticker;

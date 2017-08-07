import * as React from 'karet';
import * as U from 'karet.util';
import Kefir from 'kefir';
import d3 from 'd3';

import './ticker.css';

//

const renderItems = items => {
  console.log('render items');
};

//

const Ticker = ({ items }) =>
  <div className="ticker">
    {U.sink(U.seq(items,
                  U.reverse,
                  U.take(6),
                  U.lift(U.show),
                  U.on({
                    value: v => {},
                    error: err => console.error(err)
                  })))}
  </div>;

export default Ticker;

import * as React from 'karet';
import * as U from 'karet.util';
import './safe-area.css';

const toPct = v => `${v}%`;

const crossLineLength = 5;
const middle = 50;

//

const CrossLine = ({
  direction,
  x1 = middle,
  x2 = middle,
  y1 = middle,
  y2 = middle,
  offset = (crossLineLength / 2),
}) =>
  U.fromKefir(
    U.ifte(U.equals(direction, 'horizontal'),
          <line {...{ x1: toPct(middle - offset),
                      x2: toPct(middle + offset),
                      y1: toPct(y1),
                      y2: toPct(y2) }} />,
          <line {...{ x1: toPct(x1),
                      x2: toPct(x2),
                      y1: toPct(middle - offset),
                      y2: toPct(middle + offset) }} />));

//

const SafeArea = () =>
  <svg className="safe-area__component">
    <rect className="area__action-safe" />
    <rect className="area__title-safe" />
    <CrossLine />
    <CrossLine direction="horizontal" />
  </svg>;

export default SafeArea;

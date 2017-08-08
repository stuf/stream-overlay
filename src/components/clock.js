import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'ramda';
import { format } from 'date-fns';
import './clock.css';

const timeFormat = 'HH:mm:ss';

const getNow = R.constructN(0, Date);
const getFormatted = () => format(getNow(), timeFormat);
const getFormattedU = U.lift1(getFormatted);

//

const Clock = ({ className }) =>
  <div className={U.cns(className, 'clock__component')}>
    {U.seq(U.interval(1000, null),
           U.startWith(getFormattedU),
           U.flatMapLatest(getFormattedU))}
  </div>;

export default Clock;

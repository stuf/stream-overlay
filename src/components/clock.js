import * as React from 'karet';
import * as U from 'karet.util';
import { format } from 'date-fns';
import './clock.css';

const Clock = ({ className }) =>
  <div className={U.cns(className, 'clock__component')}>
    {U.seq(U.interval(1000, null),
           U.flatMapLatest(() => format(new Date(), 'HH:mm:ss')))}
  </div>;

export default Clock;
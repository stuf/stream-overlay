/* eslint-env browser */
import * as React from 'karet';
import K, * as U from 'karet.util';
import * as R from 'ramda';
import * as L from 'partial.lenses';

import * as M from './meta';
import { SafeArea, Clock, TitleCard } from './components';
import { Vignette } from './components/visuals';
import './App.css';

//

const state = U.atom();
const itemsIn = U.view(M.Items.in);

const items = U.bus();
const itemsProp = U.template(items);

//

Object.assign(window, {
  state,
  items,
  itemsProp,
  itemsIn,
  K,
  U,
  R,
  M,
  L,
});

//

const App = () =>
  <div>
    <TitleCard title="Profunctor optics"
               subtitle="You are like a little baby" />
    <SafeArea />
    <Clock />
    <Vignette />
  </div>;

export default App;

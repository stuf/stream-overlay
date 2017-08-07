import * as React from 'karet';
import K, * as U from 'karet.util';
import * as R from 'ramda';
import * as L from 'partial.lenses';
import { sequentially } from 'kefir';
import 'bootstrap/dist/css/bootstrap.css';

import * as M from './meta';
import * as State from './state';
import { SafeArea, Clock } from './components';
import logo from './logo.svg';
import './App.css';

//

const state = U.atom();
const itemsIn = U.view(M.Items.in);
const addItemsIn = U.view(M.Item.append);

const items = U.bus();
const itemsProp = U.template(items);

//

Object.assign(window, {
  state,
  items,
  itemsProp,
  itemsIn,
  K, U, R, M, L
});

//

const App = ({ items = itemsIn(state)}) =>
  <div>
    <SafeArea />
    <Clock />
  </div>;

export default App;

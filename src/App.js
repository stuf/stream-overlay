/* eslint-env browser */
import * as React from 'karet';

import { SafeArea, Clock, TitleCard } from './components';
import { Vignette } from './components/visuals';
import './App.css';

//

const App = () =>
  <div className="app__root">
    <TitleCard title="Salt Boxes"
               subtitle="You are like a little baby" />
    <SafeArea />
    <Clock />
    <Vignette />
  </div>;

export default App;

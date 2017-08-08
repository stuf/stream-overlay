/* eslint-disable import/prefer-default-export */
import * as U from 'karet.util';
import Stored from 'atom.storage';

export const createStore = (initial = {}) =>
  Stored({ Atom: U.atom,
           key: 'stream-overlay:v1',
           value: initial,
           debounce: 1000 });

import * as L from 'partial.lenses';

export const Items = {
  in: ['items', L.define([1, 2, 3, 10, 20, 30])]
};

export const Item = {
  append: [Items.in, L.append]
};

import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import { unmountComponentAtNode } from "react-dom";
import { generateBoard} from './Board.js';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('render 3 handholds', () => {
  const height = 5;
  const width = 4;
  const handholdArray = [[0,1,2,3],[4,5,6],[7,8,9,10],[11,12,13],[14,15,16,17]];
    expect(generateBoard(height, width)).toStrictEqual(handholdArray);

});
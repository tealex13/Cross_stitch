import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import { unmountComponentAtNode } from "react-dom";
import { Board} from './Board.js';

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

const testBoard = new Board;

test('render 3 handholds', () => {
  const height = 5;
  const width = 4;
  const handholdArray = [[0,1,2,3],[4,5,6],[7,8,9,10],[11,12,13],[14,15,16,17]];
    expect(testBoard.generateBoard(height, width)).toStrictEqual(handholdArray);

});

test('render 0 handholds', () => {
  const height = 0;
  const width = 0;
  const handholdArray = [];
    expect(testBoard.generateBoard(height, width)).toStrictEqual(handholdArray);

});

test('render 0 handholds', () => {
  const height = 0;
  const width = 0;
  const handholdArray = [];
    expect(testBoard .generateBoard(height, width)).toStrictEqual(handholdArray);

});

test('mapToHCoord index 0 returns [0,0]', () => {
    expect(testBoard .mapIndexToHhCoords(0)).toStrictEqual([0,0]);

});

test('mapToHCoord middle condition', () => {
    //set board width and height
    expect(testBoard .mapIndexToHhCoords(3)).toStrictEqual([0,3]);

});

test('mapToHCoord start edge condition', () => {
    //set board width and height
    expect(testBoard .mapIndexToHhCoords(11)).toStrictEqual([2,0]);

});
test('mapToHCoord end edge condition', () => {
    //set board width and height
    expect(testBoard .mapIndexToHhCoords(10)).toStrictEqual([1,4]);

});
test('mapToHCoord middle even condition', () => {
    //set board width and height
    expect(testBoard .mapIndexToHhCoords(40)).toStrictEqual([7,1]);
});

test('mapHhCoordsToIndex 0', () => {
    //set board width and height
    expect(testBoard .mapHhCoordsToIndex([0,0])).toStrictEqual(0);
});

test('mapHhCoordsToIndex end edge condition', () => {
    //set board width and height
    expect(testBoard .mapHhCoordsToIndex([0,5])).toStrictEqual(5);
});

test('mapHhCoordsToIndex start edge condition', () => {
    //set board width and height
    expect(testBoard .mapHhCoordsToIndex([1,0])).toStrictEqual(6);
});
test('mapHhCoordsToIndex start edge even condition', () => {
    //set board width and height
    expect(testBoard .mapHhCoordsToIndex([2,0])).toStrictEqual(11);
});
test('mapHhCoordsToIndex end edge even condition', () => {
    //set board width and height
    expect(testBoard .mapHhCoordsToIndex([2,5])).toStrictEqual(16);
});
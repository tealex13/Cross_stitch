import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import { renderRow } from './Row.js';

import { unmountComponentAtNode } from "react-dom";

{/*jest.mock('../Handhold/Handhold.js', Handhold() = <div data-testid ="HandHoldId" />)*/}

jest.mock('../Handhold/Handhold.js', () => {
  const originalModule = jest.requireActual('../Handhold/Handhold.js');

  //Mock renderHandhold()
  return {
    __esModule: true,
    ...originalModule,
    renderHandhold: (HandholdData) => <div data-testid ="mockHandHoldId" key = {HandholdData.id}/>,
  };
});

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
  const  numberOfHandholds = 3;
  act(() => {
    const handHolds = [];
    for (let i = 0; i < numberOfHandholds; i++){
      handHolds.push({id: i});
    }
  render(renderRow(handHolds));
  
  }); 
  // screen.debug();
  expect(screen.queryAllByTestId('mockHandHoldId').length).toBe(numberOfHandholds);
});

test('render no handholds', () => {
  const  numberOfHandholds = 0;
  act(() => {
    const handHolds = [];
  render(renderRow(handHolds));
  
  }); 
  // screen.debug();
  expect(screen.queryAllByTestId('mockHandHoldId').length).toBe(numberOfHandholds);
});
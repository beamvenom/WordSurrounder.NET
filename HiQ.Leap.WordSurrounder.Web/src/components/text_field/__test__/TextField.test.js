import React from 'react'
import { render, screen } from '@testing-library/react'
import TextField from '../TextField.jsx'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ text: "hej"}),
  })
);
beforeEach(() => {
    render(<TextField uploadedFile = {null}></TextField>)
    fetch.mockClear()
  });

test("Component renders correctly",() =>{
    expect(screen.getByTestId("showText")).toHaveTextContent("Processed text will be printed here!")
})
test("matches snapshot", () => {
  const tree = renderer.create(<TextField uploadedFile = {null}></TextField>)
  expect(tree).toMatchSnapshot()
})
// TODO: test("Process file works correctly",() =>{
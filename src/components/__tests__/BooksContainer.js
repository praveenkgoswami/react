import React from 'react';
import { shallow } from 'enzyme';
import BooksContainer from '../books_container';

describe("BooksContainer", () => {
  it("Should render correctly", () => {
    expect(shallow(<BooksContainer />)).toMatchSnapshot();
  })
})

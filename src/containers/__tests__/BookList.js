import React from 'react';
import { shallow } from 'enzyme';
import BookListComponent from '../book-list';

describe("BookListComponent", () => {
  let allProps;

  beforeEach(){
    
  }
  it("Should render correctly", () => {
    expect(shallow(<BookListComponent />)).toMatchSnapshot();
  })
})

import React from 'react';
import { connect } from "react-redux";
import {setButton} from '../actions/articles';

function Pagination ()  {
  const pageNumbers = [];

  for (let i = 1; i <= 7; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className='pagination'>
        {[1,2,3,4,5].map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => props.setNumber(number)} href='!#' className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
  //props.setNumber(2)
  // return(
  //   <button onClick= { () => console.log(value)}> hola </button>
  // )
  // return (
  //   <div>
  //     hola
  //   </div>
  // )
}
const mapStateToProps = state => ({
  magicbutton: state.magicbutton
})

function mapDispatchToProps(dispatch) {
  return {
    setNumber: (number) => dispatch(setButton(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
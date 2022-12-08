import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addNumber, divideNumber, multiplyNumber, newNumber, newNumber2, subtractNumber} from "../../store/countSlice";

function CountPage(props) {
  const dispatch = useDispatch()
  const {result} = useSelector(state => state.countReducer)

  return (
      <div>
        <input type="number"  onChange={e => dispatch(newNumber(+e.target.value))}/>
        <input type="number"  onChange={e => dispatch(newNumber2(+e.target.value))}/>
        <button onClick={() => {dispatch(addNumber())}}>+</button>
        <button onClick={() => {dispatch(subtractNumber())}}>-</button>
        <button onClick={() => {dispatch(multiplyNumber())}}>*</button>
        <button onClick={() => {dispatch(divideNumber())}}>/</button>
        <div>{result}</div>
      </div>
  );
}

export default CountPage;
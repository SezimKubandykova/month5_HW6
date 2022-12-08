import {createSlice} from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "countSlice",
  initialState: {
    number: 0,
    number2: 0,
    result: 0
  },
  reducers: {
    newNumber: (state, action) => {
      state.number = action.payload
    },
    newNumber2: (state, action) => {
      state.number2 = action.payload
    },
    addNumber: (state, action) => {
      state.result = state.number !== 0 && state.number2 !== 0 ? state.number + state.number2 : alert ("Заполните пустое поле!")
    },
    subtractNumber: (state, action) => {
      state.result = state.number !== 0 && state.number2 !== 0 ? state.number - state.number2 : alert ("Заполните пустое поле!")
    },
    multiplyNumber: (state, action) => {
      state.result = state.number !== 0 && state.number2 !== 0 ? state.number * state.number2 : alert ("Заполните пустое поле!")
    },
    divideNumber: (state, action) => {
      state.result = state.number !== 0 && state.number2 !== 0 ? state.number / state.number2 : alert ("Заполните пустое поле!")
    }
  }
})
export const {newNumber, newNumber2, addNumber, subtractNumber, multiplyNumber, divideNumber} = countSlice.actions
export default countSlice.reducer
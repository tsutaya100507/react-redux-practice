import { INCREMENT, DECREMENT } from '../actions'

const initialStatee = { value: 0 }

export default (state = initialStatee, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1}
    case DECREMENT:
      return { value: state.value - 1}
  }
}
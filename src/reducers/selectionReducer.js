export default (state = null, action) => {

  let selected
  switch (action.type) {
    case 'select_library':
      selected = action.payload
      break
    default:
      selected = state
  }

  return selected
}
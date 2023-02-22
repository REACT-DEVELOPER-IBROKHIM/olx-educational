const initialState ={
  email: ""
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case "CREATE_USER":
      return {email: action.email}
    default:
      return state
  }
}

export { reducer };
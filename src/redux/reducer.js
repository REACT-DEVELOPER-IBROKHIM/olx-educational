const initialState ={
  email: ""
}

const wishlistInitialState= {
  likedProducts: []
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case "CREATE_USER":
      return {email: action.email}
    default:
      return state
  }
}

const wishlistReducer = (state = wishlistInitialState, action) => {
  switch(action.type){
    case "ADD_TO_WISHLIST":
      return {
        likedProducts: [...state.likedProducts, action.product]
      }
    case "REMOVE_FROM_WISHLIST":
      const indexOfDeleteProduct = state.likedProducts.findIndex(p => p.id === action.id);
      state.likedProducts.splice(indexOfDeleteProduct, 1);
      return {
        likedProducts: [...state.likedProducts]
      }
    default:
      return state
  }
}

export { reducer, wishlistReducer };
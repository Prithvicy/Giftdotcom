//reducer is just listening and waiting for instructions and then acts on it 

export const initialState = {
    basket: [],
    user: null
  };

  
  // Selector
  //takes basket |amount initial state => price+amount
  export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);
  
    //takes in the current state and the action that was performed
  const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],//current state of the basket+new item added 
        };

      
      case 'EMPTY_BASKET':
        return {
          ...state,
          basket: []
        }
  
      case "REMOVE_FROM_BASKET":
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
        let newBasket = [...state.basket];
  
        if (index >= 0) {
          newBasket.splice(index, 1);
  
        } else {
          console.warn(
            `Cant remove product (id: ${action.id}) as its not in basket!`
          )
        }
  
        return {
          ...state,
          basket: newBasket
        }
      
      case "SET_USER":
        return {
          ...state,
          user: action.user
        }
  
      default:
        return state; //the default state 
    }
  };
  
  export default reducer;
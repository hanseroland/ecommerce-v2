import { ADD_QUANTITY, ADD_TO_CART, REMOVE_FROM_CART, SUB_QUANTITY } from "../constants/cartConstants";



const initialState = {
   // products: [],
    addedItems: [],
    total: 0,
    //quantitItem:0
}


const cartReducer = (state = initialState, action) => {
   // let nextState;
   
    switch (action.type) {
        case ADD_TO_CART:
            let addedItem = action.payload.product;
            let existed = state.addedItems.find(item => action.payload.id === item._id)
            let index = state.addedItems.map(item => item._id).indexOf(action.payload.id)
            if(existed){
                // addedItem.quantityItem +=1;
                //addedItem.color = action.payload.color
                //addedItem.size = action.payload.size
               
                state.addedItems[index].quantityItem +=1
                state.addedItems[index].color = action.payload.color
                state.addedItems[index].size = action.payload.size
                return{
                    ...state,
                    total:state.total + addedItem.price
                }
               
            }else{
                addedItem.quantityItem = 1;
                addedItem.color = action.payload.color
                addedItem.size = action.payload.size
                let newTotal = state.total + addedItem.price;
                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: newTotal
                }
            }
        case REMOVE_FROM_CART:
            let itemToRemove = state.addedItems.find(item => action.payload.id === item._id);
            let newItems = state.addedItems.filter(item => action.payload.id !== item._id);
            let newTotal = state.total - (itemToRemove.price*itemToRemove.quantityItem);
            //console.log("removeItem",itemToRemove)
           
            return{
                ...state,
                addedItems: newItems,
                total: newTotal
            }
        case ADD_QUANTITY:
            let addedItemAddQty = state.addedItems.find(item => item._id === action.payload.id);
            addedItemAddQty.quantityItem +=1;
            let newTotalQty = state.total + addedItemAddQty.price;
            return{
                ...state,
                total: newTotalQty
            }
        case SUB_QUANTITY:
            let addedItemSubQty = state.addedItems.find(item => item._id === action.payload.id);
            if(addedItemSubQty.quantityItem === 1){
                let newItemSubQty = state.addedItems.filter(item=>item._id !== action.payload.id);
                let newTotalSubQty = state.total - addedItemSubQty.price;
                return{
                    ...state,
                    addedItems:newItemSubQty,
                    total:newTotalSubQty
                }
            }else{
                addedItemSubQty.quantityItem -=1;
                let newTotalSubQt = state.total - addedItemSubQty.price;
                return{
                    ...state,
                    total:newTotalSubQt
                }
            }
        default:
            return state    
    }
}

export default cartReducer;
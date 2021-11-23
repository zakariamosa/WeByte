import createDataContext from './createDataContext';

const ProductReducer = (state, action) => {
  switch (action.type) {
    case 'edit_productgpost':
      return state.map((productgPost) => {
        return productgPost.id === action.payload.id ? action.payload : productgPost;
      });
    case 'delete_productgpost':
      return state.filter((productgPost) => productgPost.id !== action.payload);
    case 'add_productgpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          productName: action.payload.productName,
          productType: action.payload.productType,
          productPrice: action.payload.productPrice
        },
      ];
    default:
      return state;
  }
};

const addProductPost = (dispatch) => {
  return (productName, productType, productPrice, callback) => {
    dispatch({ type: 'add_productgpost', payload: { productName, productType, productPrice } });
    if (callback) {
      callback();
    }
  };
};
const deleteProductPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_productgpost', payload: id });
  };
};
const editProductPost = (dispatch) => {
  return (id, productName, productType, productPrice, callback) => {
    dispatch({
      type: 'edit_productgpost',
      payload: { id, productName, productType, productPrice },
    });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  ProductReducer,
  { addProductPost, deleteProductPost, editProductPost },
  [{ productName: 'P Name', productType: 'P Type', productPrice:'P Price', id: 1 }]
);

import createDataContext from './createDataContext';

const ProductReducer = (state, action) => {
  switch (action.type) {
    case 'edit_blogpost':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case 'add_blogpost':
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
    dispatch({ type: 'add_blogpost', payload: { productName, productType, productPrice } });
    if (callback) {
      callback();
    }
  };
};
const deleteProductPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};
const editProductPost = (dispatch) => {
  return (id, productName, productType, productPrice, callback) => {
    dispatch({
      type: 'edit_blogpost',
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

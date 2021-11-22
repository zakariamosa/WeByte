import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
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

const addBlogPost = (dispatch) => {
  return (productName, productType, productPrice, callback) => {
    dispatch({ type: 'add_blogpost', payload: { productName, productType, productPrice } });
    if (callback) {
      callback();
    }
  };
};
const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};
const editBlogPost = (dispatch) => {
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
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ productName: 'Product Name Test', productType: 'Product Type Test', productPrice:'Product Price Test', id: 1 }]
);

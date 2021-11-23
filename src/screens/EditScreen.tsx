import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/ProductContext';
import ProductPostForm from '../components/ProductPostForm';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editProductPost } = useContext(Context);

  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <ProductPostForm
      initialValues={{ productName: blogPost.productName, productType: blogPost.productType,productPrice: blogPost.productPrice }}
      onSubmit={(productName, productType, productPrice) => {
        editProductPost(id, productName, productType, productPrice,  () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;

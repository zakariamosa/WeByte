import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/ProductContext';
import BlogPostForm from '../components/ProductPostForm';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(productName, productType, productPrice) => {
        addBlogPost(productName, productType,productPrice, () => navigation.navigate('Index'));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;

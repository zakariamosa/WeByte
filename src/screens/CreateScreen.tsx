import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/ProductContext';
import ProductPostForm from '../components/ProductPostForm';

const CreateScreen = ({ navigation }) => {
  const  {addProductPost}  = useContext(Context);

  return (
    <ProductPostForm
      onSubmit={(productName, productType, productPrice) => {
        addProductPost(productName, productType,productPrice, () => navigation.navigate('Index'));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;

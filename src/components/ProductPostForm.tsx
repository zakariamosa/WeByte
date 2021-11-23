import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';




const defaultValue = 'Integrated';

const ProductPostForm = ({ onSubmit, initialValues }) => {
  const [productName, setproductName] = useState(initialValues.productName);
  const [productType, setproductType] = useState(initialValues.productType);
  const [productPrice, setproductPrice] = useState(initialValues.productPrice);
  const [value, setValue] = React.useState(defaultValue);

  return (
    <View>
      <Text style={styles.label}>Enter productName:</Text>
      <TextInput
        style={styles.input}
        value={productName}
        onChangeText={text => setproductName(text)}
      />
      <Text style={styles.label}>Enter productType:</Text>
       <TextInput
        style={styles.input}
        value={productType}
        onChangeText={text => setproductType(text)}
      /> 
      
      <Text style={styles.label}>Enter productPrice:</Text>
      <TextInput
        style={styles.input}
        value={productPrice}
        onChangeText={text => setproductPrice(text)}
      />
      <Button title="Save Product" onPress={() => onSubmit(productName, productType, productPrice)} />
    </View>
  );
};

ProductPostForm.defaultProps = {
  initialValues: {
    productName: '',
    productType: '',
    productPrice: ''
  }
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default ProductPostForm;

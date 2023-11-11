import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

const App = () => {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const convertCurrency = () => {
    const rate = 1.1; // for example the rate is 1.1
    setConvertedAmount((amount * rate).toFixed(2) + ' USD');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter amount in EUR"
        value={amount}
        onChangeText={setAmount}
      />
      <Button title=" Convert to USD " onPress={convertCurrency} />
      <Text style={styles.result}>
        {convertedAmount ? `Converted Amount: ${convertedAmount}` : ''}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 20,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: 'green',
  },
});

export default App;

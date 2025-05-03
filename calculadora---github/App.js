import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch {
      setResult('Erro');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.result}>{result || input || '0'}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <Button title="1" onPress={() => handlePress('1')} />
          <Button title="2" onPress={() => handlePress('2')} />
          <Button title="3" onPress={() => handlePress('3')} />
          <Button title="/" onPress={() => handlePress('/')} />
        </View>
        <View style={styles.row}>
          <Button title="4" onPress={() => handlePress('4')} />
          <Button title="5" onPress={() => handlePress('5')} />
          <Button title="6" onPress={() => handlePress('6')} />
          <Button title="*" onPress={() => handlePress('*')} />
        </View>
        <View style={styles.row}>
          <Button title="7" onPress={() => handlePress('7')} />
          <Button title="8" onPress={() => handlePress('8')} />
          <Button title="9" onPress={() => handlePress('9')} />
          <Button title="-" onPress={() => handlePress('-')} />
        </View>
        <View style={styles.row}>
          <Button title="C" onPress={handleClear} />
          <Button title="0" onPress={() => handlePress('0')} />
          <Button title="." onPress={() => handlePress('.')} />
          <Button title="+" onPress={() => handlePress('+')} />
        </View>
        <View style={styles.row}>
          <Button title="=" onPress={handleCalculate} />
        </View>
      </View>
    </View>
  );
};

const Button = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonsContainer: {
    flex: 3,
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;



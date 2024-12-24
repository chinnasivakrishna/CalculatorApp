import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  const [result, setResult] = useState('0');
  const [expression, setExpression] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(expression);
        setResult(evalResult.toString());
        setExpression(evalResult.toString());
      } catch (error) {
        setResult('Error');
        setExpression('');
      }
    } else if (value === 'C') {
      setResult('0');
      setExpression('');
    } else {
      setExpression(expression + value);
      setResult(expression + value);
    }
  };

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['C', '0', '=', '+']
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((row, i) => (
          <View key={i} style={styles.row}>
            {row.map((button) => (
              <TouchableOpacity
                key={button}
                style={[
                  styles.button,
                  button === '=' && styles.equalButton,
                  ['/', '*', '-', '+'].includes(button) && styles.operatorButton
                ]}
                onPress={() => handlePress(button)}
              >
                <Text style={[
                  styles.buttonText,
                  ['/', '*', '-', '+'].includes(button) && styles.operatorText,
                  button === '=' && styles.equalText
                ]}>
                  {button}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
      <Text style={styles.signature}>Calc by [Chinna Siva Krishna Thota]</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  display: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  result: {
    fontSize: 48,
    color: '#333',
  },
  buttons: {
    flex: 5,
    padding: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 10,
    elevation: 3,
  },
  buttonText: {
    fontSize: 24,
    color: '#333',
  },
  operatorButton: {
    backgroundColor: '#f0f0f0',
  },
  operatorText: {
    color: '#ff9500',
  },
  equalButton: {
    backgroundColor: '#4CAF50', // Green background for = button
  },
  equalText: {
    color: '#fff',
  },
  signature: {
    textAlign: 'center',
    padding: 10,
    color: '#666',
    fontSize: 16,
  }
});
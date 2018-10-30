import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onpress, children }) => {
  return (
    <TouchableOpacity onpress={onpress} style={styles.button}>
      <Text style={styles.text}> {children} </Text>
    </TouchableOpacity>
  );
}

const styles = {
  button: {
    marginTop: 10,
    padding: 20,
    width: '100%',
    backgroundColor: '#00aeef',
    borderRadius: 4,
    alignItems: 'center',
  },
  text: {
    fontWeight: '700',
    fontSize: 18,
  }
}

export { Button };

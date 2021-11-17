import React from 'react';
import {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const ContadorScreen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={style.container}>
      <Text style={style.title}>counter: {counter}</Text>
      <TouchableOpacity style={style.fabLocationBR} onPress={() => setCounter(counter + 1)}>
        <View style={style.fab}>
          <Text style={style.fabText}>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ContadorScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 20,
    right: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    position: 'relative',
    top: -100,
  },
  fab: {
  backgroundColor: '#5856D6', 
  borderRadius: 100,
  width: 60,
  height: 60,
  justifyContent: 'center'
},
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});

import React, {useState} from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';
import ToDoItem from '../components/ToDoItem/index'

export default function TabOneScreen() {
  const [todos, setTodos] = useState([{
    id: '1',
    content: 'Buy Eggs',
    isCompleted: true
  }, {
    id: '2',
    content: 'Buy Milk',
    isCompleted: false
  },
  {
    id: '3',
    content: 'Buy Cereal',
    isCompleted: false
  },
  {
    id: '4',
    content: 'Buy Carrots',
    isCompleted: false
  }]);

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One is right !!!</Text>

      <FlatList 
      data={todos}
      renderItem = {({item}) => <ToDoItem todo= {item} />}
      style={{ width: '100%'}}
      />

      
    
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});



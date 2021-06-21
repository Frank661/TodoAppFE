import React, {useState} from 'react';
import { StyleSheet, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Text, View } from '../components/Themed';
import ToDoItem from '../components/ToDoItem/index'




let id = '4'
export default function TabOneScreen() {

  const [title, setTitle] = useState('');
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

  const createNewItem = (atIndex) => {
    console.warn(`new item at ${atIndex}`)
    const newTodos = [...todos];
    newTodos.splice(atIndex, 0,{
      id: id,
      content: '',
      isCompleted: false
    })
    setTodos(newTodos);
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 130 : 0}
      style={{flex:1}}
    >
      <View style={styles.container}> 
        <TextInput 
          value ={title}
          onChangeText={setTitle}
          placeholder={'Write Title Here'}
          style={styles.title} />

          <FlatList 
          data={todos}
          renderItem = {({item, index}) => (
            <ToDoItem 
            todo= {item} 
            onSubmit={() => createNewItem(index+1)}
            />
          )}

          style={{ width: '100%'}}
        />
      </View>
    </KeyboardAvoidingView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },
  title: {
    color: 'white',
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12
  },
});



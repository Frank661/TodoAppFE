import React, {useState, useEffect} from 'react'
import { View, TextInput } from 'react-native'
import Checkbox from '../Checkbox/index';


interface TodoItemProps {
    todo: {
        id: string;
        content: string;
        isCompleted: boolean;
    }
}


const ToDoItem = ({todo}: TodoItemProps) => {

    const [isChecked, setIsChecked] = useState(false);
    const [content, setContent] = useState('');

    useEffect(() => {
        if(!todo){return}
        setIsChecked(todo.isCompleted);
        setContent(todo.content)
    }, [todo])

    return (
        <View style={{ flexDirection : "row", alignItems:'center', marginVertical: 3}}>
        {/* {Checkbox} */}
        <Checkbox isChecked ={isChecked} onPress= {() => {setIsChecked(!isChecked)}} />

        {/* {Text Input } */}
        <TextInput  
        value= {content}
        onChangeText={setContent}
        style={{
          color: "white",
          flex: 1,
          fontSize: 18,
          marginLeft: 12
        }}
        multiline
        />
      </View>
    )
}

export default ToDoItem

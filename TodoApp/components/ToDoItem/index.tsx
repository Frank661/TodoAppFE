import React, {useState, useEffect, useRef} from 'react'
import { View, TextInput } from 'react-native'
import Checkbox from '../Checkbox/index';


interface TodoItemProps {
    todo: {
        id: string;
        content: string;
        isCompleted: boolean;
    },
    onSubmit: () => void;

}


const ToDoItem = ({todo, onSubmit}: TodoItemProps) => {

    const [isChecked, setIsChecked] = useState(false);
    const [content, setContent] = useState('');
    const input = useRef(null)

    useEffect(() => {
        if(!todo){return}
        setIsChecked(todo.isCompleted);
        setContent(todo.content)
    }, [todo])

    useEffect(() => {
        if(input.current){
           input?.current?.focus() 
        }
        
    }, [input])  

    const onKeyPress = ({nativeEvent}) => {
        if(nativeEvent.key == 'Backspace' && content === ''){
            console.warn('Delete Item')
        }
    }


    return (
        <View style={{ flexDirection : "row", alignItems:'center', marginVertical: 3}}>
        {/* {Checkbox} */}
        <Checkbox isChecked ={isChecked} onPress= {() => {setIsChecked(!isChecked)}} />

        {/* {Text Input } */}
        <TextInput  
        ref={input}
        value= {content}
        onChangeText={setContent}
        style={{
          color: "white",
          flex: 1,
          fontSize: 18,
          marginLeft: 12
        }}
        multiline
        onSubmitEditing={onSubmit}
        blurOnSubmit
        onKeyPress = {onKeyPress}
        />
      </View>
    )
}

export default ToDoItem

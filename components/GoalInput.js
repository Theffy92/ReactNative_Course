import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
      };

    const onAddGoal = ()=>{
      props.addGoalHandler(enteredGoalText);
      setEnteredGoalText('');
    };

    return (
    <Modal>
        <View style={inputStyles.inputContainer}>
            <TextInput 
            style={inputStyles.textInput} 
            placeholder='Your course goal!'
            onChangeText={goalInputHandler}
            value={enteredGoalText}
            />
            <Button title= "Add Goal" onPress={onAddGoal}/>
        </View>
    </Modal>
    );
};

export default GoalInput;

const inputStyles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingBottom:24,
        borderBottomWidth:1,
        borderBottomColor: '#caff',
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
      },
});
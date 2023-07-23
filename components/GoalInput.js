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
    <Modal visible={props.visible} animationType="fade">
        <View style={inputStyles.inputContainer}>
            <TextInput 
              style={inputStyles.textInput} 
              placeholder='Your course goal!'
              onChangeText={goalInputHandler}
              value={enteredGoalText}
            />
            <View style={inputStyles.buttonContainer}>
              <View style={inputStyles.button}>
                <Button title= "Add Goal" onPress={onAddGoal}/>
              </View>
              <View style={inputStyles.button}>
                <Button title="Cancel" onPress={props.onCancel}/>
              </View>
            </View>
        </View>
    </Modal>
    );
};

export default GoalInput;

const inputStyles = StyleSheet.create({
    inputContainer: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        padding:16,
        paddingBottom:24,
        borderBottomWidth:1,
        borderBottomColor: '#caff',
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8,
      },
      buttonContainer:{
        marginTop:16,
        flexDirection: 'row',
  
      },
      button:{
        width: '25%',
        marginHorizontal:8,
      }
});
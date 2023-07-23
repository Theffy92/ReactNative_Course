import {useState, useRef} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const textInputRef= useRef(null);

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler(){
     setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      enteredGoalText,
    ]);
    setEnteredGoalText('');
    textInputRef.current.clear();
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          ref={textInputRef}
          style={styles.textInput} 
          placeholder='Your course goal!'
          onChangeText={goalInputHandler}
        />
        <Button title= "Add Goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal)=> (
          <View
            key={goal} 
            style={styles.goalItem} 
          > 
            <Text style={styles.goalText}>
              {goal}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    padding: 80,
    paddingHorizontal:16,
  },
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
  goalsContainer: {
    flex: 4,
    marginTop: 20,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  }
});

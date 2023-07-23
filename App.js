import {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  
  const addGoalHandler = (enteredGoalText) =>{
     setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      //convert enteredGoalText in an object to use in FlatList
      {text:enteredGoalText, key: Math.random().toString()},
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals} 
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text}/>;
          }} 
          keyExtractor = {(item, index) => {
            return item.id;
          } }
          alwaysBounceVertical={false} 
        />
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
  goalsContainer: {
    flex: 4,
    marginTop: 20,
  },
});

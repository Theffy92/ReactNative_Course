import {useState} from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
      setModalIsVisible(true);
  };
  
  const endAddGoalHandler = () => {
     setModalIsVisible(false);
  };
  const addGoalHandler = (enteredGoalText) =>{
     setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      //convert enteredGoalText in an object to use in FlatList
      {text:enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <Button 
        title='Add New Goal' 
        color="#5e0acc" 
        onPress={startAddGoalHandler}
      />
      {modalIsVisible && <GoalInput visible={modalIsVisible} onCancel={endAddGoalHandler} addGoalHandler={addGoalHandler} />}
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals} 
          renderItem={(itemData) => {
            return <GoalItem 
                     text={itemData.item.text} 
                     id={itemData.item.id}
                     onDeleteItem={deleteGoalHandler}/>;
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

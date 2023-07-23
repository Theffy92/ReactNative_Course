import {StyleSheet, View, Text} from 'react-native';


function GoalItem(props) {
    return <View style={itemStyles.goalItem}>
    <Text style={itemStyles.goalText}>{props.text}</Text>
  </View>;
};

export default GoalItem;

const itemStyles = StyleSheet.create({
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
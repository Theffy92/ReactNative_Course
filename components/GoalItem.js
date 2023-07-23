import {StyleSheet, View, Text, Pressable} from 'react-native';


function GoalItem(props) {
    return(
        <View style={itemStyles.goalItem}>
            <Pressable 
                android_ripple={{color: '#210644'}}
                onPress={props.onDeleteItem.bind(this, props.id)}
                //pressed is used to apply special styling to iOS component
                style={({pressed}) => pressed && itemStyles.pressedItem }
            >
                <Text style={itemStyles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
};

export default GoalItem;

const itemStyles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
      },
      pressedItem: {
        opacity: 0.5,
      },
      goalText: {
        color: 'white',
      }
});
import { Image, StyleSheet, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { DiceDisplay } from '@/components/DiceDisplay';
import React from 'react';
import Pressable from '@/components/ui/Pressable';
import { roll } from '@/scripts/roller';
import { Picker } from '@react-native-picker/picker';
//import { num } from '@/components/DiceDisplay';


export default function HomeScreen() {
  var [num, onNumChange] = React.useState(1);
  var [sides, onSidesChange] = React.useState(4);
  var [dice, onDiceChange] = React.useState(1);
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.contentContainer}>

        <ThemedView style={styles.displayContainer}>
          {DiceDisplay(num)}
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <Pressable
            style={styles.button} 
            activeOpacity={0.5}
            onPress= {() => {num = roll(sides, dice); onNumChange(num);}}>
            
            {/// function with database call here -> then redirect to account(?) page with user data
            } 
            <ThemedText style = {styles.defaultText}>
              Roll
            </ThemedText>


          </Pressable>

          <ThemedView style = {styles.pickerContainer}>
              
            <ThemedText style = {styles.defaultText}>
              Number of Sides
            </ThemedText>

          
            <Picker
              selectedValue={sides}
              onValueChange={(itemValue, itemIndex) =>
                onSidesChange(itemValue)
              }>
              <Picker.Item label="4" value="4" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="12" value="12" />
              <Picker.Item label="20" value="20" />
              <Picker.Item label="100" value="100" />


            </Picker>

            <ThemedText style = {styles.defaultText}>
              Number of Dice
            </ThemedText>

            <Picker 
              selectedValue={dice}
              onValueChange={(itemValue, itemIndex) =>
                onDiceChange(itemValue)
              }>
              <Picker.Item label="1" value= "1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="10" value="10" />


            </Picker>

          </ThemedView>
        </ThemedView>


      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  contentContainer: {
    //alignContent: 'center',
    //justifyContent: 'center',
    alignItems: 'center',
    padding: 16,  
    width: '100%',
    height: '100%',
  },
  displayContainer: {
    
    width: 200,
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 8,
    backgroundColor: 'transparent',
    borderColor: '#D3D3D3',
    borderWidth: 3
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  pickerContainer: {
    //borderColor: '#D3D3D3',
    //borderWidth: 3,
    width: 300,
    display: 'flex',
    //flexDirection: 'row',
    //gap: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  button: {
    backgroundColor: '#707070',
    borderRadius: 20,
    padding: 8,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

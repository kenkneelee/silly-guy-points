import { Image } from 'expo-image';
import { Button, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

export default function Dice() {
  // State Tracking
  const [diceValue, setDiceValue] = useState<number | null>(null);
  
  const rollDice = () => {
    setDiceValue (Math.floor(Math.random() * (6)) + 1)
  }
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/otter/otter_crop_welcome.png')}
          style={styles.otterWelcome}
        />
      }>
        
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Dice</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.rollResult}>
        <Button title="roll" onPress={rollDice}/>
        
        {diceValue !== null && (
          <ThemedText type="subtitle">You rolled a {diceValue}!</ThemedText>
        )}
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
  
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },

  otterWelcome: {
    width: 600,
    height: 800,
    top: 0,
  },
  
  rollResult: {
    justifyContent: 'center',
    alignItems:"center"
  }
});

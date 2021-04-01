import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container} key="">
      {/* Todo today section */}      
      <View style={styles.tasksSection}>
        <Text style={styles.Titre}>Todo today</Text>
        {
          data.map(d => {
            return(
              <Task initialParams={{d}} ></Task>
            )
          })
        }
      </View>
    </View>
  );
}

const data = [
  {
    id: 1,
    thumbnail: '',
    label: '🏋 Work out 30 minutes',
    isCompleted: false
  },
  {
    id: 2,
    thumbnail: '',
    label: '🏫 Ace the react native test',
    isCompleted: false
  },
  {
    id: 3,
    thumbnail: '',
    label: ' 🍸 Chill out',
    isCompleted: false
  },
 ]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8C82FF'    
  },
  tasksSection: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  Titre:{
    fontSize: 24,
    fontWeight: "bold",
    color: "white"
  }
});

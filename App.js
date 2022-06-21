import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-rn'

export default function App() {
  return (
    <View style={tw("flex-1 justify-center items-center")}>
      <Text>Hello Amrit from react-native!!</Text>
      <Text>Inside App.js</Text>
      <Button title="Click me" />
      <StatusBar style="auto" />
    </View>
  );
}


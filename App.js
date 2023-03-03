import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {TailwindProvider} from "tailwindcss-react-native";

export default function App() {
  return (
    <TailwindProvider>
      <View>
        <Text>Hello</Text>
        <StatusBar style="auto" />
      </View>
    </TailwindProvider>
  );
}

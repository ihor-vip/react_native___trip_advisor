import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView} from 'react-native';
import {TailwindProvider} from "tailwindcss-react-native";

export default function App() {
  return (
    <TailwindProvider>
      <SafeAreaView className='flex-1 items-center justify-center'>
        <Text>Hello</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    </TailwindProvider>
  );
}

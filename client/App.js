import Nav from './components/Nav/Nav';
import {SafeAreaProvider} from "react-native-safe-area-context"


export default function App() {
  return (
    <SafeAreaProvider>
      <Nav/>
    </SafeAreaProvider>
  );
}


import Nav from './components/Nav/Nav';
import {SafeAreaProvider} from "react-native-safe-area-context"
import { Provider } from 'react-redux'
import { store } from './redux/store';


export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Nav/>
      </SafeAreaProvider>
    </Provider>
  );
}


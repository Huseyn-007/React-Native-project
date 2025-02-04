import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import "./global.css"


const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
     
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App
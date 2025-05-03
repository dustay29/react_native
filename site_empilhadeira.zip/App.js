import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Avaliacoes from './Screens/Avaliacoes';
import CriarAvaliacao from './Screens/CriarAvaliacao';
import DetalhesAvaliacao from './Screens/DetalhesAvaliacao';
import CriarManobra from './Screens/CriarManobra';
import Manobras from './Screens/Manobras';
import Home from './Screens/Home';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3498db',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
        }}>
        <Stack.Screen name="Home" component={Home} options={{ title: 'APPlhadeira' }}/>
        <Stack.Screen name="CriarAvaliacao" component={CriarAvaliacao} options={{ title: 'APPlhadeira'}}/>
        <Stack.Screen name="Avaliacoes" component={Avaliacoes} options={{ title: 'APPlhadeira'}} />
        <Stack.Screen name="DetalhesAvaliacao" component={DetalhesAvaliacao}options={{ title: 'APPlhadeira'}}/>
        <Stack.Screen name="CriarManobra"component={CriarManobra} options={{title:'APPlhadeira'}}/>
        <Stack.Screen name="Manobras" component={Manobras} options={{ title: 'APPlhadeira' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

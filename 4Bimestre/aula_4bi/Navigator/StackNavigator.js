
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Runas from '../screens/Runas';
import Personagens from '../screens/Personagens';
import Institutos from '../screens/Institutos';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState('');

  function realizarLogin(nome) {
    setUsuario(nome);
    setLogado(true);
  }

  function realizarLogout() {
    setLogado(false);
    setUsuario('');
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#0a0a0c'
        }
      }}
    >
      {!logado ? (
        <Stack.Screen name="Login">
          {props => (
            <Login
              {...props}
              realizarLogin={realizarLogin}
            />
          )}
        </Stack.Screen>
      ) : (
        <>
          <Stack.Screen name="Home">
            {props => (
              <Home
                {...props}
                usuario={usuario}
                realizarLogout={realizarLogout}
              />
            )}
          </Stack.Screen>

          <Stack.Screen
            name="Runas"
            component={Runas}
          />

          <Stack.Screen
            name="Personagens"
            component={Personagens}
          />

          <Stack.Screen
            name="Institutos"
            component={Institutos}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

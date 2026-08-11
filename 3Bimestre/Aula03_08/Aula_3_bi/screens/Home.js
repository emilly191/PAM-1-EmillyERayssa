import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        SUPERNATURAL
      </Text>

      <Text style={styles.welcome}>
        Bem-vindo ao mundo dos caçadores!
      </Text>

      <Text style={styles.texto}>
        Explore informações sobre a série,
        seus personagens e o universo sobrenatural.
      </Text>

      <View style={styles.botao}>
        <Button
          title="VER PERSONAGENS"
          color="#8B0000"
          onPress={() => navigation.navigate('Personagens')}
        />
      </View>

      <View style={styles.botao}>
        <Button
          title="VOLTAR PARA LOGIN"
          color="#444444"
          onPress={() => navigation.navigate('Login')}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0b0b0b',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  welcome: {
    color: '#b22222',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  texto: {
    color: '#cccccc',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 35,
  },

  botao: {
    width: '80%',
    marginBottom: 15,
  },

});
import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

export default function Login({ navigation }) {

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        SUPERNATURAL
      </Text>

      <Text style={styles.subtitulo}>
        Entre no mundo dos caçadores
      </Text>

      <Text style={styles.label}>
        E-mail
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>
        Senha
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        placeholderTextColor="#888"
        secureTextEntry
      />

      <View style={styles.botao}>
        <Button
          title="ENTRAR"
          onPress={() => navigation.navigate('Home')}
          color="#8B0000"
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
  },

  titulo: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitulo: {
    color: '#b0b0b0',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },

  label: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 5,
  },

  input: {
    backgroundColor: '#1c1c1c',
    color: '#ffffff',
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    padding: 12,
    marginBottom: 20,
  },

  botao: {
    marginTop: 10,
  },

});
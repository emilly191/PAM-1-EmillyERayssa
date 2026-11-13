
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  ImageBackground, SafeAreaView, StatusBar,
  Alert, StyleSheet
} from 'react-native';

export default function Login({ realizarLogin }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function entrar() {
    if (usuario.trim() === '' || senha.trim() === '') {
      Alert.alert('Erro', 'Preencha o usuário e a senha!');
      return;
    }

    if (senha === '1234' || senha === 'angelico') {
      realizarLogin(usuario);
    } else {
      Alert.alert(
        'Acesso Negado',
        'Senha incorreta! Dica: use 1234'
      );
    }
  }

  return (
    <ImageBackground
      source={require('../assets/fundo-login.jpg')}
      style={styles.fundo}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.overlay}>
        <StatusBar barStyle="light-content" />

        <View style={styles.card}>
          <Text style={styles.titulo}>
            ⚡ SHADOWHUNTERS ⚡
          </Text>

          <Text style={styles.subtitulo}>
            Acervo do Instituto
          </Text>

          <Text style={styles.label}>
            Nephilim / Usuário:
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu nome..."
            placeholderTextColor="#888"
            value={usuario}
            onChangeText={setUsuario}
          />

          <Text style={styles.label}>
            Senha de Acesso:
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Sua senha (ex: 1234)..."
            placeholderTextColor="#888"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <TouchableOpacity
            style={styles.botao}
            onPress={entrar}
          >
            <Text style={styles.textoBotao}>
              ENTRAR NO INSTITUTO
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(10,10,12,0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'rgba(22,22,26,0.95)',
    padding: 25,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d4af37'
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#d4af37',
    textAlign: 'center'
  },
  subtitulo: {
    fontSize: 14,
    color: '#94a3b8',
    textAlign: 'center',
    marginBottom: 25
  },
  label: {
    color: '#f8fafc',
    fontSize: 14,
    marginBottom: 6,
    fontWeight: '600'
  },
  input: {
    backgroundColor: '#0f172a',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 8,
    color: '#fff',
    padding: 12,
    marginBottom: 16,
    fontSize: 15
  },
  botao: {
    backgroundColor: '#d4af37',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10
  },
  textoBotao: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15
  }
});

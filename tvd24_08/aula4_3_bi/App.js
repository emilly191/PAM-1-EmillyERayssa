import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

import styles from './Estilo';
import { verificarLogin } from './Funcoe';

export default function Login({ navigation }) {

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function fazerLogin() {

    if (verificarLogin(usuario, senha)) {
      navigation.navigate('Home');
    } else {
      Alert.alert(
        'Ops!',
        'Usuário ou senha incorretos!'
      );
    }
  }

  return (
    <View style={styles.container}>

      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
        }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>
        Bem-vinda! ✨
      </Text>

      <Text style={styles.subtitulo}>
        Entre para acessar sua calculadora
      </Text>

      <Text style={styles.label}>
        Usuário
      </Text>

      <TextInput
        placeholder="Digite seu usuário"
        style={styles.input}
        value={usuario}
        onChangeText={setUsuario}
      />

      <Text style={styles.label}>
        Senha
      </Text>

      <TextInput
        placeholder="Digite sua senha"
        style={styles.input}
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity
        style={styles.botaoLogin}
        onPress={fazerLogin}
      >
        <Text style={styles.textoBotaoLogin}>
          ENTRAR
        </Text>
      </TouchableOpacity>

    </View>
  );
}
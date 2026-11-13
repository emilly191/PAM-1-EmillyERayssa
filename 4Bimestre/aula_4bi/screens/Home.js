
import React from 'react';
import {
  View, Text, TouchableOpacity,
  SafeAreaView, StyleSheet, StatusBar
} from 'react-native';

export default function Home({
  navigation, usuario, realizarLogout
}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.topBar}>
        <View>
          <Text style={styles.topBarTitulo}>
            INSTITUTO
          </Text>
          <Text style={styles.topBarUser}>
            Agente: {usuario}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.botaoSair}
          onPress={realizarLogout}
        >
          <Text style={styles.textoSair}>Sair</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.conteudo}>
        <Text style={styles.simbolo}>⚡</Text>

        <Text style={styles.titulo}>
          SHADOWHUNTERS
        </Text>

        <Text style={styles.subtitulo}>
          Bem-vindo ao Acervo do Instituto
        </Text>

        <Text style={styles.descricao}>
          Explore os registros dos Caçadores de
          Sombras, conheça as runas angelicais,
          os guerreiros e os institutos.
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Runas')}
        >
          <Text style={styles.textoBotao}>
            ✦ RUNAS ANGELICAIS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Personagens')}
        >
          <Text style={styles.textoBotao}>
            ✦ PERSONAGENS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Institutos')}
        >
          <Text style={styles.textoBotao}>
            ✦ INSTITUTOS
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0c'
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#16161a',
    borderBottomWidth: 1,
    borderColor: '#d4af37'
  },
  topBarTitulo: {
    color: '#d4af37',
    fontSize: 18,
    fontWeight: 'bold'
  },
  topBarUser: {
    color: '#94a3b8',
    fontSize: 12
  },
  botaoSair: {
    backgroundColor: '#991b1b',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6
  },
  textoSair: {
    color: '#fff',
    fontWeight: 'bold'
  },
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25
  },
  simbolo: {
    fontSize: 60,
    color: '#d4af37'
  },
  titulo: {
    color: '#d4af37',
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitulo: {
    color: '#fff',
    fontSize: 17,
    marginTop: 12,
    textAlign: 'center'
  },
  descricao: {
    color: '#94a3b8',
    textAlign: 'center',
    lineHeight: 24,
    marginVertical: 35
  },
  botao: {
    backgroundColor: '#16161a',
    borderWidth: 1,
    borderColor: '#d4af37',
    padding: 18,
    borderRadius: 10,
    width: '100%',
    marginBottom: 15
  },
  textoBotao: {
    color: '#d4af37',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

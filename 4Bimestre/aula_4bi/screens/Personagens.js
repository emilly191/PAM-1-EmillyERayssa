
import React, { useState } from 'react';
import {
  View, Text, TextInput, FlatList,
  Image, TouchableOpacity, SafeAreaView,
  StyleSheet
} from 'react-native';

const PERSONAGENS = [
  {
    id: '1',
    nome: 'Jace Herondale',
    funcao: 'Caçador de Sombras',
    arma: 'Lâmina Seráfica',
    foto: require('../assets/jace.jpg')
  },
  {
    id: '2',
    nome: 'Clary Fray',
    funcao: 'Caçadora de Sombras / Artista',
    arma: 'Poder de Criar Runas',
    foto: require('../assets/clary.jpg')
  },
  {
    id: '3',
    nome: 'Alec Lightwood',
    funcao: 'Líder do Instituto',
    arma: 'Arco e Flecha',
    foto: require('../assets/alec.jpg')
  },
  {
    id: '4',
    nome: 'Magnus Bane',
    funcao: 'Alto Feiticeiro de Brooklyn',
    arma: 'Magia de Feiticeiro',
    foto: require('../assets/magnus.jpg')
  },
  {
    id: '5',
    nome: 'Isabelle Lightwood',
    funcao: 'Caçadora de Sombras',
    arma: 'Chicote de Prata Eletrum',
    foto: require('../assets/isabele.jpg')
  }
];

export default function Personagens({ navigation }) {
  const [busca, setBusca] = useState('');

  const personagensFiltrados = PERSONAGENS.filter(p =>
    p.nome.toLowerCase().includes(busca.toLowerCase())
  );

  function renderItemPersonagem({ item }) {
    return (
      <View style={styles.cardItemRow}>
        <Image source={item.foto} style={styles.avatar} />

        <View style={styles.infoCol}>
          <Text style={styles.itemTitulo}>{item.nome}</Text>
          <Text style={styles.itemTag}>{item.funcao}</Text>
          <Text style={styles.itemDesc}>
            Arma: {item.arma}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.voltar}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>PERSONAGENS</Text>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar personagens..."
        placeholderTextColor="#777"
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={personagensFiltrados}
        keyExtractor={item => item.id}
        renderItem={renderItemPersonagem}
        contentContainerStyle={{ paddingHorizontal: 12 }}
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Nenhum personagem encontrado.
          </Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0c'
  },
  topBar: {
    backgroundColor: '#16161a',
    padding: 18,
    borderBottomWidth: 1,
    borderColor: '#d4af37',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  voltar: {
    color: '#d4af37',
    fontWeight: 'bold'
  },
  titulo: {
    color: '#d4af37',
    fontSize: 19,
    fontWeight: 'bold'
  },
  searchInput: {
    backgroundColor: '#16161a',
    borderWidth: 1,
    borderColor: '#334155',
    color: '#fff',
    borderRadius: 8,
    padding: 12,
    margin: 12
  },
  cardItemRow: {
    flexDirection: 'row',
    backgroundColor: '#16161a',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#d4af37'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12
  },
  infoCol: {
    flex: 1
  },
  itemTitulo: {
    color: '#f8fafc',
    fontSize: 16,
    fontWeight: 'bold'
  },
  itemTag: {
    color: '#38bdf8',
    fontSize: 12,
    marginVertical: 2
  },
  itemDesc: {
    color: '#94a3b8',
    fontSize: 13
  },
  vazio: {
    color: '#94a3b8',
    textAlign: 'center',
    marginTop: 30
  }
});

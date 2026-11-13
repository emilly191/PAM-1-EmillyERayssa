
import React, { useState } from 'react';
import {
  View, Text, TextInput, FlatList,
  TouchableOpacity, SafeAreaView, StyleSheet
} from 'react-native';

const INSTITUTOS = [
  {
    id: '1',
    nome: 'Instituto de Nova York',
    local: 'Manhattan, EUA',
    lider: 'Alec Lightwood'
  },
  {
    id: '2',
    nome: 'Instituto de Londres',
    local: 'Londres, Reino Unido',
    lider: 'Família Blackthorn'
  },
  {
    id: '3',
    nome: 'Alicante (Idris)',
    local: 'Pátria dos Caçadores',
    lider: 'A Clave'
  }
];

export default function Institutos({ navigation }) {
  const [busca, setBusca] = useState('');

  const institutosFiltrados = INSTITUTOS.filter(i =>
    i.nome.toLowerCase().includes(busca.toLowerCase())
  );

  function renderItemInstituto({ item }) {
    return (
      <View style={styles.card}>
        <Text style={styles.itemTitulo}>
          🏛️ {item.nome}
        </Text>

        <Text style={styles.itemTag}>
          Local: {item.local}
        </Text>

        <Text style={styles.itemDesc}>
          Líder / Responsável: {item.lider}
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.voltar}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>INSTITUTOS</Text>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar institutos..."
        placeholderTextColor="#777"
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={institutosFiltrados}
        keyExtractor={item => item.id}
        renderItem={renderItemInstituto}
        contentContainerStyle={{ paddingHorizontal: 12 }}
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Nenhum instituto encontrado.
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
    fontSize: 20,
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
  card: {
    backgroundColor: '#16161a',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#38bdf8'
  },
  itemTitulo: {
    color: '#f8fafc',
    fontSize: 16,
    fontWeight: 'bold'
  },
  itemTag: {
    color: '#38bdf8',
    fontSize: 12,
    marginVertical: 5
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


import React, { useState } from 'react';
import {
  View, Text, TextInput, FlatList,
  TouchableOpacity, SafeAreaView, StyleSheet
} from 'react-native';

const RUNAS = [
  {
    id: '1',
    nome: 'Runa do Anjo (Raziel)',
    tipo: 'Poder Angelical',
    desc: 'Concede força divina e purificação contra demônios.'
  },
  {
    id: '2',
    nome: 'Iratze',
    tipo: 'Cura',
    desc: 'Runa básica de cura para fechar ferimentos de batalha.'
  },
  {
    id: '3',
    nome: 'Parabatai',
    tipo: 'Vínculo',
    desc: 'Conecta a alma de dois Caçadores de Sombras parceiros de lutas.'
  },
  {
    id: '4',
    nome: 'Furtividade',
    tipo: 'Camuflagem',
    desc: 'Permite ao caçador mover-se sem emitir ruídos.'
  }
];

export default function Runas({ navigation }) {
  const [busca, setBusca] = useState('');

  const runasFiltradas = RUNAS.filter(r =>
    r.nome.toLowerCase().includes(busca.toLowerCase())
  );

  function renderItemRuna({ item }) {
    return (
      <View style={styles.card}>
        <Text style={styles.itemTitulo}>{item.nome}</Text>
        <Text style={styles.itemTag}>Tipo: {item.tipo}</Text>
        <Text style={styles.itemDesc}>{item.desc}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.voltar}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>RUNAS</Text>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar runas..."
        placeholderTextColor="#777"
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={runasFiltradas}
        keyExtractor={item => item.id}
        renderItem={renderItemRuna}
        contentContainerStyle={{ paddingHorizontal: 12 }}
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Nenhuma runa encontrada.
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
    gap: 25
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

import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './estilo';

export default function Home() {

  const filmes = [
    {
      id: '1',
      nome: 'Interestelar',
      genero: 'Ficção Científica',
      ano: '2014',
    },
    {
      id: '2',
      nome: 'O Senhor dos Anéis',
      genero: 'Fantasia',
      ano: '2001',
    },
    {
      id: '3',
      nome: 'Homem-Aranha',
      genero: 'Ação',
      ano: '2002',
    },
    {
      id: '4',
      nome: 'Toy Story',
      genero: 'Animação',
      ano: '1995',
    },
    {
      id: '5',
      nome: 'Vingadores: Ultimato',
      genero: 'Ação / Aventura',
      ano: '2019',
    },
    {
      id: '6',
      nome: 'Jurassic Park',
      genero: 'Aventura',
      ano: '1993',
    },
    {
      id: '7',
      nome: 'Batman: O Cavaleiro das Trevas',
      genero: 'Ação / Drama',
      ano: '2008',
    },
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        🎬 CineLista
      </Text>

      <Text style={styles.subtitulo}>
        Meus filmes favoritos
      </Text>

      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>

            <Text style={styles.nome}>
              {item.nome}
            </Text>

            <Text style={styles.genero}>
              Gênero: {item.genero}
            </Text>

            <Text style={styles.ano}>
              Ano: {item.ano}
            </Text>

          </View>
        )}
      />

    </View>
  );
}

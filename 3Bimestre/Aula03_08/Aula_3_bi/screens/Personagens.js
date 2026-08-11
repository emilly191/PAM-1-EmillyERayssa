import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function Personagens({ navigation }) {

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.titulo}>
        PERSONAGENS
      </Text>

      <View style={styles.card}>

        <Text style={styles.nome}>
          Sam Winchester
        </Text>

        <Text style={styles.descricao}>
          Um dos principais caçadores da série,
          conhecido por sua inteligência e determinação.
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.nome}>
          Dean Winchester
        </Text>

        <Text style={styles.descricao}>
          Irmão de Sam e caçador experiente,
          conhecido por sua coragem e pelo amor ao seu irmão.
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.nome}>
          Castiel
        </Text>

        <Text style={styles.descricao}>
          Um anjo que se torna um importante aliado
          dos irmãos Winchester durante a história.
        </Text>

      </View>

      <View style={styles.botao}>

        <Button
          title="VOLTAR"
          color="#8B0000"
          onPress={() => navigation.navigate('Home')}
        />

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0b0b0b',
    padding: 20,
  },

  titulo: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 25,
  },

  card: {
    backgroundColor: '#1c1c1c',
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
  },

  nome: {
    color: '#b22222',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  descricao: {
    color: '#cccccc',
    fontSize: 15,
    lineHeight: 22,
  },

  botao: {
    marginVertical: 20,
  },

});
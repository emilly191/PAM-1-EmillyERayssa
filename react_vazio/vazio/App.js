import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Miraculos</Text>

      <Text style={styles.subtitulo}>Ladybug</Text>

      <Text style={styles.cont_texto}>
        Ladybug tem habilidades físicas sobre-humanas muito mais incríveis,
        como força, velocidade, agilidade e quase invulnerabilidade a danos físicos.

        {'\n\n'}Ela tem um talento notável em empunhar seu ioiô, como usá-lo como um gancho,
        uma corda para conter os outros, um projétil e, se ela girar rápido o suficiente,
        até um escudo.

        {'\n\n'}Depois que um Akuma é liberado de seu objeto corrompido, ela pode abrir
        seu ioiô e jogá-lo para agarrá-lo e remover a energia com a qual Hawk Moth o carregou.

        {'\n\n'}Seu poder especial, Talismã, a ajuda invocando um objeto que ela usa para
        atingir seu objetivo.

        {'\n\n'}Como Cosmo Bug, ela tem a capacidade de sobreviver no espaço.
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c01f1f',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  cont_texto: {
    marginTop: 20,
    width: '90%',
    textAlign: 'center',
    color: 'white',
  },
});


import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet
} from 'react-native';


export default function App() {

  const [nome, setNome] = useState('');
  const [personagem, setPersonagem] = useState('');
  const [runa, setRuna] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [pontos, setPontos] = useState(0);
  const [modoCacador, setModoCacador] = useState(false);


  // REVELAR DESTINO

  function revelarDestino() {

    if (nome.trim() === '') {

      Alert.alert(
        '⚠️ Atenção',
        'Digite seu nome primeiro!'
      );

      return;
    }

    setMensagem(
      '⚔️ ' + nome +
      ', o Instituto reconheceu você como um novo Caçador de Sombras!'
    );

    setPontos(pontos + 10);
  }


  // ESCOLHER PERSONAGEM

  function escolherPersonagem(nomePersonagem) {

    setPersonagem(nomePersonagem);

    setPontos(pontos + 5);

    Alert.alert(
      '⚔️ Escolha feita!',
      'Você escolheu ' + nomePersonagem
    );
  }


  // ESCOLHER RUNA

  function escolherRuna(nomeRuna) {

    setRuna(nomeRuna);

    setPontos(pontos + 5);

    setMensagem(
      '✦ Você recebeu a ' + nomeRuna + '!'
    );
  }


  // MODO CAÇADOR

  function ativarModoCacador() {

    if (modoCacador === false) {

      setModoCacador(true);

      setPontos(pontos + 15);

      Alert.alert(
        '🔥 MODO CAÇADOR',
        'As runas foram ativadas!'
      );

    } else {

      setModoCacador(false);

    }
  }


  // RESET

  function apagarEscolhas() {

    setNome('');
    setPersonagem('');
    setRuna('');
    setMensagem('');
    setPontos(0);
    setModoCacador(false);

  }


  return (

    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
    >


      {/* CABEÇALHO */}

      <View style={styles.header}>

        <Text style={styles.espadas}>
          ⚔️
        </Text>

        <Text style={styles.titulo}>
          SHADOWHUNTERS
        </Text>

        <Text style={styles.subtitulo}>
          THE MORTAL INSTRUMENTS
        </Text>

        <Text style={styles.frase}>
          O mundo invisível está esperando por você.
        </Text>

      </View>


      {/* PONTUAÇÃO */}

      <View style={styles.pontosBox}>

        <Text style={styles.pontosTitulo}>
          ✦ NÍVEL DE CAÇADOR ✦
        </Text>

        <Text style={styles.pontos}>
          {pontos} XP
        </Text>

      </View>


      {/* IDENTIDADE */}

      <View style={styles.card}>

        <Text style={styles.tituloCard}>
          ⚔️ SUA IDENTIDADE
        </Text>

        <Text style={styles.texto}>
          Digite seu nome para descobrir seu destino.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome..."
          placeholderTextColor="#777"
          value={nome}
          onChangeText={setNome}
        />


        <TouchableOpacity
          style={styles.botaoDourado}
          onPress={revelarDestino}
        >

          <Text style={styles.textoBotao}>
            REVELAR MEU DESTINO ✨
          </Text>

        </TouchableOpacity>


        {mensagem !== '' && (

          <View style={styles.mensagemBox}>

            <Text style={styles.mensagem}>
              {mensagem}
            </Text>

          </View>

        )}

      </View>


      {/* PERSONAGENS */}

      <View style={styles.card}>

        <Text style={styles.tituloCard}>
          🗡️ ESCOLHA SEU PERSONAGEM
        </Text>

        <Text style={styles.texto}>
          Quem seria seu parceiro na caça?
        </Text>


        <TouchableOpacity
          style={styles.botaoAzul}
          onPress={() =>
            escolherPersonagem('Clary Fray')
          }
        >

          <Text style={styles.textoBotao}>
            🟠 CLARY FRAY
          </Text>

        </TouchableOpacity>


        <TouchableOpacity
          style={styles.botaoAzul}
          onPress={() =>
            escolherPersonagem('Jace Herondale')
          }
        >

          <Text style={styles.textoBotao}>
            🟢 JACE HERONDALE
          </Text>

        </TouchableOpacity>


        <TouchableOpacity
          style={styles.botaoVermelho}
          onPress={() =>
            escolherPersonagem('Isabelle Lightwood')
          }
        >

          <Text style={styles.textoBotao}>
            🔴 ISABELLE LIGHTWOOD
          </Text>

        </TouchableOpacity>


        <TouchableOpacity
          style={styles.botaoAzul}
          onPress={() =>
            escolherPersonagem('Alec Lightwood')
          }
        >

          <Text style={styles.textoBotao}>
            🔵 ALEC LIGHTWOOD
          </Text>

        </TouchableOpacity>


        {personagem !== '' && (

          <View style={styles.selecaoBox}>

            <Text style={styles.selecaoTitulo}>
              SEU ESCOLHIDO
            </Text>

            <Text style={styles.selecao}>
              ⚔️ {personagem}
            </Text>

          </View>

        )}

      </View>


      {/* RUNAS */}

      <View style={styles.card}>

        <Text style={styles.tituloCard}>
          ✦ RUNAS
        </Text>

        <Text style={styles.texto}>
          Escolha uma runa para receber seu poder.
        </Text>


        <TouchableOpacity
          style={styles.botaoDourado}
          onPress={() =>
            escolherRuna('Runa Parabatai')
          }
        >

          <Text style={styles.textoBotao}>
            ⚔️ RUNA PARABATAI
          </Text>

        </TouchableOpacity>


        <TouchableOpacity
          style={styles.botaoAzul}
          onPress={() =>
            escolherRuna('Runa de Força')
          }
        >

          <Text style={styles.textoBotao}>
            💪 RUNA DE FORÇA
          </Text>

        </TouchableOpacity>


        <TouchableOpacity
          style={styles.botaoVermelho}
          onPress={() =>
            escolherRuna('Runa de Cura')
          }
        >

          <Text style={styles.textoBotao}>
            ❤️ RUNA DE CURA
          </Text>

        </TouchableOpacity>


        {runa !== '' && (

          <View style={styles.runaBox}>

            <Text style={styles.runaTitulo}>
              RUNA ESCOLHIDA
            </Text>

            <Text style={styles.runa}>
              ✦ {runa}
            </Text>

          </View>

        )}

      </View>


      {/* MODO CAÇADOR */}

      <View style={styles.card}>

        <Text style={styles.tituloCard}>
          🔥 MODO CAÇADOR
        </Text>

        <Text style={styles.texto}>
          Ative seu lado Shadowhunter.
        </Text>


        <TouchableOpacity
          style={
            modoCacador
              ? styles.botaoAtivo
              : styles.botaoVermelho
          }

          onPress={ativarModoCacador}
        >

          <Text style={styles.textoBotao}>

            {modoCacador
              ? '⚔️ MODO CAÇADOR ATIVADO'
              : 'ATIVAR MODO CAÇADOR'}

          </Text>

        </TouchableOpacity>


        {modoCacador && (

          <View style={styles.ativadoBox}>

            <Text style={styles.ativadoTitulo}>
              ✦ AS RUNAS ESTÃO BRILHANDO ✦
            </Text>

            <Text style={styles.ativadoTexto}>
              Seu treinamento começou.
              {'\n\n'}
              O Instituto está contando com você.
              {'\n\n'}
              Proteja os mundanos.
            </Text>

          </View>

        )}

      </View>


      {/* BOTÃO RESET */}

      <TouchableOpacity
        style={styles.botaoLimpar}
        onPress={apagarEscolhas}
      >

        <Text style={styles.textoLimpar}>
          ↻ APAGAR TODAS AS ESCOLHAS
        </Text>

      </TouchableOpacity>


      <Text style={styles.rodape}>
        ⚔️ SHADOWHUNTERS FAN APP ⚔️
      </Text>


    </ScrollView>

  );

}


/* =========================
   ESTILOS
========================= */

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#050B14'
  },


  conteudo: {
    padding: 20,
    paddingBottom: 50
  },


  header: {
    alignItems: 'center',
    paddingVertical: 25,
    borderBottomWidth: 2,
    borderBottomColor: '#D4AF37',
    marginBottom: 20
  },


  espadas: {
    fontSize: 48,
    marginBottom: 8
  },


  titulo: {
    color: '#D4AF37',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center'
  },


  subtitulo: {
    color: '#FFFFFF',
    fontSize: 12,
    letterSpacing: 3,
    marginTop: 6
  },


  frase: {
    color: '#7891AB',
    fontSize: 13,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 15
  },


  pontosBox: {
    backgroundColor: '#0B1A2B',
    borderWidth: 1,
    borderColor: '#D4AF37',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20
  },


  pontosTitulo: {
    color: '#D4AF37',
    fontSize: 13,
    fontWeight: 'bold'
  },


  pontos: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 5
  },


  card: {
    backgroundColor: '#0B1726',
    borderRadius: 15,
    padding: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#1D4668'
  },


  tituloCard: {
    color: '#D4AF37',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10
  },


  texto: {
    color: '#B9C7D5',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 13
  },


  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 13,
    color: '#111111',
    fontSize: 15,
    marginBottom: 12
  },


  botaoDourado: {
    backgroundColor: '#B8941F',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10
  },


  botaoAzul: {
    backgroundColor: '#174D78',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#2E6D9D'
  },


  botaoVermelho: {
    backgroundColor: '#8B1E2D',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10
  },


  botaoAtivo: {
    backgroundColor: '#B22234',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#D4AF37'
  },


  textoBotao: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  },


  mensagemBox: {
    backgroundColor: '#10283E',
    borderLeftWidth: 4,
    borderLeftColor: '#D4AF37',
    padding: 14,
    marginTop: 8,
    borderRadius: 8
  },


  mensagem: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 21
  },


  selecaoBox: {
    backgroundColor: '#101F30',
    borderWidth: 1,
    borderColor: '#D4AF37',
    borderRadius: 10,
    padding: 13,
    alignItems: 'center',
    marginTop: 5
  },


  selecaoTitulo: {
    color: '#D4AF37',
    fontSize: 12,
    fontWeight: 'bold'
  },


  selecao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 7
  },


  runaBox: {
    backgroundColor: '#101F30',
    borderWidth: 1,
    borderColor: '#D4AF37',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center'
  },


  runaTitulo: {
    color: '#D4AF37',
    fontSize: 12,
    fontWeight: 'bold'
  },


  runa: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 7
  },


  ativadoBox: {
    backgroundColor: '#24151A',
    borderWidth: 1,
    borderColor: '#B22234',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    alignItems: 'center'
  },


  ativadoTitulo: {
    color: '#D4AF37',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center'
  },


  ativadoTexto: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 20
  },


  botaoLimpar: {
    borderWidth: 1,
    borderColor: '#8B1E2D',
    borderRadius: 10,
    padding: 13,
    alignItems: 'center',
    marginTop: 5
  },


  textoLimpar: {
    color: '#D95A68',
    fontWeight: 'bold',
    fontSize: 12
  },


  rodape: {
    color: '#526B82',
    textAlign: 'center',
    marginTop: 25,
    fontSize: 11
  }

});
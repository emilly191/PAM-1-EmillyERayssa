import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  FlatList,
  ScrollView,
  StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


// ======================================================
// PERSONAGENS
// ======================================================

const personagens = [
  {
    id: '1',
    nome: 'Clary',
    nomeCompleto: 'Clary Fray',
    tipo: 'Caçadora de Sombras',
    poder: 'Criação de runas',
    descricao:
      'Clary descobre que faz parte do mundo dos Caçadores de Sombras e passa a conhecer o Instituto e as runas.'
  },

  {
    id: '2',
    nome: 'Jace',
    nomeCompleto: 'Jace Herondale',
    tipo: 'Caçador de Sombras',
    poder: 'Combate e habilidades de Caçador',
    descricao:
      'Jace é um dos principais Caçadores de Sombras e possui grande habilidade em combate.'
  },

  {
    id: '3',
    nome: 'Simon',
    nomeCompleto: 'Simon Lewis',
    tipo: 'Mundano',
    poder: 'Ser sobrenatural',
    descricao:
      'Simon é amigo de Clary e acaba entrando no mundo sobrenatural que antes desconhecia.'
  },

  {
    id: '4',
    nome: 'Alexander',
    nomeCompleto: 'Alexander Lightwood',
    tipo: 'Caçador de Sombras',
    poder: 'Arco e flecha',
    descricao:
      'Alexander, conhecido como Alec, é um Caçador de Sombras habilidoso e integrante da família Lightwood.'
  },

  {
    id: '5',
    nome: 'Isabelle',
    nomeCompleto: 'Isabelle Lightwood',
    tipo: 'Caçadora de Sombras',
    poder: 'Combate',
    descricao:
      'Isabelle é uma Caçadora de Sombras determinada e muito habilidosa em combate.'
  },

  {
    id: '6',
    nome: 'Magnus',
    nomeCompleto: 'Magnus Bane',
    tipo: 'Feiticeiro',
    poder: 'Magia',
    descricao:
      'Magnus Bane é um feiticeiro poderoso que possui grande conhecimento sobre o mundo sobrenatural.'
  }
];


// ======================================================
// LOGIN
// ======================================================

function Login({ navigation }) {

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function fazerLogin() {

    if (usuario === 'admin' && senha === 'admin') {

      navigation.navigate('Home');

    } else {

      Alert.alert(
        'Erro',
        'Usuário ou senha incorretos!'
      );

    }
  }

  return (

    <ScrollView
      contentContainerStyle={styles.loginContainer}
    >

      <Text style={styles.espadas}>
        ⚔️
      </Text>

      <Text style={styles.loginTitulo}>
        SHADOWHUNTERS
      </Text>

      <Text style={styles.loginSubtitulo}>
        BEM-VINDO AO INSTITUTO
      </Text>


      <View style={styles.loginCard}>

        <Text style={styles.label}>
          Usuário
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu usuário"
          placeholderTextColor="#777"
          value={usuario}
          onChangeText={setUsuario}
        />


        <Text style={styles.label}>
          Senha
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#777"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />


        <TouchableOpacity
          style={styles.botaoPrincipal}
          onPress={fazerLogin}
        >

          <Text style={styles.textoBotao}>
            ENTRAR
          </Text>

        </TouchableOpacity>


        <Text style={styles.dica}>
          Usuário: admin{'\n'}
          Senha: admin
        </Text>

      </View>

    </ScrollView>
  );
}


// ======================================================
// HOME
// ======================================================

function Home({ navigation }) {

  const [favoritos, setFavoritos] = useState([]);
  const [xp, setXp] = useState(0);


  function adicionarFavorito(id) {

    if (favoritos.includes(id)) {

      setFavoritos(
        favoritos.filter(item => item !== id)
      );

      setXp(xp - 5);

    } else {

      setFavoritos([
        ...favoritos,
        id
      ]);

      setXp(xp + 5);

    }
  }


  function abrirPersonagem(personagem) {

    navigation.navigate(
      'Detalhes',
      {
        personagem: personagem
      }
    );
  }


  function renderPersonagem({ item }) {

    const favorito =
      favoritos.includes(item.id);


    return (

      <View style={styles.personagemCard}>

        <View style={styles.personagemInfo}>

          <Text style={styles.personagemNome}>
            {item.nome}
          </Text>

          <Text style={styles.personagemTipo}>
            {item.tipo}
          </Text>

          <Text style={styles.personagemPoder}>
            ✦ {item.poder}
          </Text>

        </View>


        <View style={styles.botoesPersonagem}>

          <TouchableOpacity
            style={styles.botaoFavorito}
            onPress={() =>
              adicionarFavorito(item.id)
            }
          >

            <Text style={styles.textoFavorito}>
              {favorito ? '★' : '☆'}
            </Text>

          </TouchableOpacity>


          <TouchableOpacity
            style={styles.botaoDetalhes}
            onPress={() =>
              abrirPersonagem(item)
            }
          >

            <Text style={styles.textoBotaoPequeno}>
              VER
            </Text>

          </TouchableOpacity>

        </View>

      </View>
    );
  }


  return (

    <View style={styles.container}>

      <FlatList

        data={personagens}

        keyExtractor={(item) => item.id}

        renderItem={renderPersonagem}

        ListHeaderComponent={

          <View>

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

            </View>


            <View style={styles.banner}>

              <Text style={styles.bannerTexto}>
                ✦ BEM-VINDO AO INSTITUTO ✦
              </Text>

              <Text style={styles.bannerDescricao}>
                Escolha seu personagem e descubra seu destino.
              </Text>

            </View>


            <View style={styles.xpBox}>

              <Text style={styles.xpTitulo}>
                ⚔️ EXPERIÊNCIA
              </Text>

              <Text style={styles.xpTexto}>
                {xp} XP
              </Text>

            </View>


            <Text style={styles.secaoTitulo}>
              PERSONAGENS
            </Text>

          </View>
        }


        ListFooterComponent={

          <View style={styles.footer}>

            <TouchableOpacity
              style={styles.botaoPerfil}
              onPress={() =>
                navigation.navigate('Perfil')
              }
            >

              <Text style={styles.textoBotao}>
                ✦ MEU PERFIL
              </Text>

            </TouchableOpacity>


            <TouchableOpacity
              style={styles.botaoSair}
              onPress={() =>
                navigation.navigate('Login')
              }
            >

              <Text style={styles.textoBotao}>
                SAIR
              </Text>

            </TouchableOpacity>


            <Text style={styles.rodape}>
              ⚔️ SHADOWHUNTERS FAN APP ⚔️
            </Text>

          </View>
        }

      />

    </View>
  );
}


// ======================================================
// DETALHES
// ======================================================

function Detalhes({ route, navigation }) {

  const personagem = route.params.personagem;

  const [runa, setRuna] = useState('');
  const [modoCacador, setModoCacador] = useState(false);


  function escolherRuna(nomeRuna) {

    setRuna(nomeRuna);

    Alert.alert(
      'Runa escolhida',
      'Você escolheu ' + nomeRuna + '!'
    );

  }


  function ativarModoCacador() {

    setModoCacador(!modoCacador);

  }


  return (

    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
    >

      <View style={styles.headerDetalhes}>

        <Text style={styles.espadas}>
          ⚔️
        </Text>

        <Text style={styles.titulo}>
          {personagem.nome}
        </Text>

      </View>


      <View style={styles.detalhesCard}>

        <Text style={styles.detalhesNome}>
          {personagem.nomeCompleto}
        </Text>

        <Text style={styles.detalhesTipo}>
          {personagem.tipo}
        </Text>


        <View style={styles.linha} />


        <Text style={styles.detalhesTitulo}>
          PODER / HABILIDADE
        </Text>

        <Text style={styles.detalhesTexto}>
          ✦ {personagem.poder}
        </Text>


        <Text style={styles.detalhesTitulo}>
          SOBRE
        </Text>

        <Text style={styles.detalhesTexto}>
          {personagem.descricao}
        </Text>

      </View>


      <View style={styles.card}>

        <Text style={styles.tituloCard}>
          ✦ ESCOLHA UMA RUNA
        </Text>


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


        <TouchableOpacity
          style={styles.botaoDourado}
          onPress={() =>
            escolherRuna('Runa de Visão')
          }
        >

          <Text style={styles.textoBotaoEscuro}>
            👁 RUNA DE VISÃO
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


      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() =>
          navigation.goBack()
        }
      >

        <Text style={styles.textoBotao}>
          ← VOLTAR
        </Text>

      </TouchableOpacity>

    </ScrollView>
  );
}


// ======================================================
// PERFIL
// ======================================================

function Perfil({ navigation }) {

  const [nome, setNome] = useState('');
  const [personagem, setPersonagem] = useState('');
  const [mensagem, setMensagem] = useState('');


  function revelarDestino() {

    if (nome === '') {

      Alert.alert(
        'Atenção',
        'Digite seu nome primeiro!'
      );

      return;
    }


    if (personagem === '') {

      Alert.alert(
        'Atenção',
        'Digite seu personagem favorito!'
      );

      return;
    }


    setMensagem(
      'Olá, ' +
      nome +
      '! Seu destino está ligado ao universo de Shadowhunters. Seu personagem favorito é ' +
      personagem +
      '.'
    );

  }


  return (

    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
    >

      <View style={styles.header}>

        <Text style={styles.espadas}>
          ⚔️
        </Text>

        <Text style={styles.titulo}>
          MEU PERFIL
        </Text>

        <Text style={styles.subtitulo}>
          DESCUBRA SEU DESTINO
        </Text>

      </View>


      <View style={styles.card}>

        <Text style={styles.tituloCard}>
          SEU NOME
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#777"
          value={nome}
          onChangeText={setNome}
        />


        <Text style={styles.tituloCard}>
          PERSONAGEM FAVORITO
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: Jace"
          placeholderTextColor="#777"
          value={personagem}
          onChangeText={setPersonagem}
        />


        <TouchableOpacity
          style={styles.botaoPrincipal}
          onPress={revelarDestino}
        >

          <Text style={styles.textoBotao}>
            ✦ REVELAR MEU DESTINO ✦
          </Text>

        </TouchableOpacity>


        {mensagem !== '' && (

          <View style={styles.destinoBox}>

            <Text style={styles.destinoTitulo}>
              SEU DESTINO
            </Text>

            <Text style={styles.destinoTexto}>
              {mensagem}
            </Text>

          </View>

        )}

      </View>


      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() =>
          navigation.goBack()
        }
      >

        <Text style={styles.textoBotao}>
          ← VOLTAR
        </Text>

      </TouchableOpacity>

    </ScrollView>
  );
}


// ======================================================
// APP PRINCIPAL / NAVEGAÇÃO
// ======================================================

export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#050B14'
          },

          headerTintColor: '#D4AF37',

          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />


        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Shadowhunters'
          }}
        />


        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{
            title: 'Detalhes'
          }}
        />


        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{
            title: 'Meu Perfil'
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}


// ======================================================
// ESTILOS
// ======================================================

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#050B14'
  },


  conteudo: {
    padding: 20,
    paddingBottom: 50
  },


  loginContainer: {
    flexGrow: 1,
    backgroundColor: '#050B14',
    justifyContent: 'center',
    padding: 25
  },


  espadas: {
    fontSize: 45,
    textAlign: 'center',
    marginBottom: 10
  },


  loginTitulo: {
    color: '#D4AF37',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center'
  },


  loginSubtitulo: {
    color: '#FFFFFF',
    fontSize: 12,
    letterSpacing: 3,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 30
  },


  loginCard: {
    backgroundColor: '#0D1826',
    borderWidth: 1,
    borderColor: '#174D78',
    borderRadius: 15,
    padding: 20
  },


  header: {
    alignItems: 'center',
    paddingVertical: 25,
    borderBottomWidth: 2,
    borderBottomColor: '#D4AF37',
    marginBottom: 20
  },


  headerDetalhes: {
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#D4AF37',
    marginBottom: 20
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


  label: {
    color: '#D4AF37',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 7,
    marginTop: 10
  },


  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 13,
    fontSize: 16,
    marginBottom: 15,
    color: '#111'
  },


  botaoPrincipal: {
    backgroundColor: '#D4AF37',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10
  },


  textoBotao: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },


  textoBotaoEscuro: {
    color: '#050B14',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },


  dica: {
    color: '#777',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 12
  },


  banner: {
    backgroundColor: '#0D1826',
    borderWidth: 1,
    borderColor: '#8B1E2D',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center'
  },


  bannerTexto: {
    color: '#D4AF37',
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center'
  },


  bannerDescricao: {
    color: '#FFFFFF',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 14
  },


  xpBox: {
    backgroundColor: '#174D78',
    borderRadius: 10,
    padding: 15,
    marginBottom: 25,
    alignItems: 'center'
  },


  xpTitulo: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14
  },


  xpTexto: {
    color: '#D4AF37',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5
  },


  secaoTitulo: {
    color: '#D4AF37',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12
  },


  personagemCard: {
    backgroundColor: '#0D1826',
    borderWidth: 1,
    borderColor: '#174D78',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },


  personagemInfo: {
    flex: 1
  },


  personagemNome: {
    color: '#D4AF37',
    fontSize: 20,
    fontWeight: 'bold'
  },


  personagemTipo: {
    color: '#FFFFFF',
    marginTop: 4
  },


  personagemPoder: {
    color: '#A9C7E8',
    marginTop: 7
  },


  botoesPersonagem: {
    alignItems: 'center',
    marginLeft: 10
  },


  botaoFavorito: {
    backgroundColor: '#8B1E2D',
    borderRadius: 20,
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 7
  },


  textoFavorito: {
    color: '#FFFFFF',
    fontSize: 25
  },


  botaoDetalhes: {
    backgroundColor: '#174D78',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12
  },


  textoBotaoPequeno: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 11
  },


  footer: {
    marginTop: 20,
    alignItems: 'center'
  },


  botaoPerfil: {
    backgroundColor: '#D4AF37',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    marginBottom: 10
  },


  botaoSair: {
    backgroundColor: '#8B1E2D',
    padding: 15,
    borderRadius: 8,
    width: '100%'
  },


  rodape: {
    color: '#777',
    marginTop: 25,
    fontSize: 12,
    textAlign: 'center'
  },


  detalhesCard: {
    backgroundColor: '#0D1826',
    borderWidth: 1,
    borderColor: '#174D78',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20
  },


  detalhesNome: {
    color: '#D4AF37',
    fontSize: 26,
    fontWeight: 'bold'
  },


  detalhesTipo: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 5
  },


  linha: {
    height: 1,
    backgroundColor: '#174D78',
    marginVertical: 15
  },


  detalhesTitulo: {
    color: '#D4AF37',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 7
  },


  detalhesTexto: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 23
  },


  card: {
    backgroundColor: '#0D1826',
    borderWidth: 1,
    borderColor: '#174D78',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20
  },


  tituloCard: {
    color: '#D4AF37',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12
  },


  texto: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 12
  },


  botaoAzul: {
    backgroundColor: '#174D78',
    padding: 14,
    borderRadius: 8,
    marginBottom: 10
  },


  botaoVermelho: {
    backgroundColor: '#8B1E2D',
    padding: 14,
    borderRadius: 8,
    marginBottom: 10
  },


  botaoDourado: {
    backgroundColor: '#D4AF37',
    padding: 14,
    borderRadius: 8,
    marginBottom: 10
  },


  botaoAtivo: {
    backgroundColor: '#174D78',
    borderWidth: 2,
    borderColor: '#D4AF37',
    padding: 14,
    borderRadius: 8,
    marginBottom: 10
  },


  runaBox: {
    backgroundColor: '#050B14',
    borderWidth: 1,
    borderColor: '#D4AF37',
    borderRadius: 8,
    padding: 15,
    marginTop: 5
  },


  runaTitulo: {
    color: '#D4AF37',
    fontWeight: 'bold',
    textAlign: 'center'
  },


  runa: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 7
  },


  ativadoBox: {
    backgroundColor: '#050B14',
    borderWidth: 1,
    borderColor: '#D4AF37',
    borderRadius: 8,
    padding: 15,
    marginTop: 5
  },


  ativadoTitulo: {
    color: '#D4AF37',
    fontWeight: 'bold',
    textAlign: 'center'
  },


  ativadoTexto: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 21
  },


  destinoBox: {
    backgroundColor: '#050B14',
    borderWidth: 1,
    borderColor: '#D4AF37',
    borderRadius: 8,
    padding: 15,
    marginTop: 20
  },


  destinoTitulo: {
    color: '#D4AF37',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },


  destinoTexto: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 10
  },


  botaoVoltar: {
    backgroundColor: '#174D78',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20
  }

});
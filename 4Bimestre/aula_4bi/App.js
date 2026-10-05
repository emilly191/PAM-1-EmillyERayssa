import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
  Alert,
  StyleSheet
} from 'react-native';


// =====================================================
// IMAGENS
// =====================================================

const imagens = {
  clary: require('./assets/clary.jpg'),
  alec: require('./assets/alec.jpg'),
  magnus: require('./assets/magnus.jpg'),
  isabelle: require('./assets/isabelle.jpg'),
  jace: require('./assets/jace.jpg'),
  runas: require('./assets/runas.jpg'),
  simon: require('./assets/simon.jpg')
};


// =====================================================
// PERSONAGENS
// =====================================================

const personagens = [
  {
    id: '1',
    nome: 'Clary Fairchild',
    tipo: 'Shadowhunter',
    imagem: imagens.clary,
    descricao:
      'Clary é uma Shadowhunter determinada, corajosa e muito ligada às pessoas que ama.'
  },

  {
    id: '2',
    nome: 'Alec Lightwood',
    tipo: 'Shadowhunter',
    imagem: imagens.alec,
    descricao:
      'Alec é um Shadowhunter disciplinado, protetor e extremamente leal aos seus amigos.'
  },

  {
    id: '3',
    nome: 'Magnus Bane',
    tipo: 'Alto Feiticeiro',
    imagem: imagens.magnus,
    descricao:
      'Magnus é um poderoso feiticeiro, conhecido por sua personalidade marcante e seus conhecimentos sobre o mundo das sombras.'
  },

  {
    id: '4',
    nome: 'Isabelle Lightwood',
    tipo: 'Shadowhunter',
    imagem: imagens.isabelle,
    descricao:
      'Isabelle é uma Shadowhunter habilidosa, confiante e determinada.'
  },

  {
    id: '5',
    nome: 'Jace Herondale',
    tipo: 'Shadowhunter',
    imagem: imagens.jace,
    descricao:
      'Jace é um dos Shadowhunters mais habilidosos, conhecido por sua coragem, confiança e lealdade.'
  },

  {
    id: '6',
    nome: 'Simon Lewis',
    tipo: 'Mundano',
    imagem: imagens.simon,
    descricao:
      'Simon é leal, engraçado e está sempre tentando ajudar seus amigos, mesmo quando se mete em situações perigosas.'
  }
];


// =====================================================
// APP
// =====================================================

export default function App() {

  // TELAS
  const [tela, setTela] = useState('login');

  // LOGIN
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  // PERFIL
  const [nome, setNome] = useState('');

  // PERSONAGEM
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

  // OUTRAS INTERAÇÕES
  const [runaSelecionada, setRunaSelecionada] = useState('');
  const [favorito, setFavorito] = useState(null);
  const [xp, setXp] = useState(0);
  const [modoCacador, setModoCacador] = useState(false);

  // PESQUISA
  const [pesquisa, setPesquisa] = useState('');


  // =====================================================
  // LOGIN
  // =====================================================

  function fazerLogin() {

    if (usuario === 'admin' && senha === 'admin') {

      setTela('home');

      Alert.alert(
        'Bem-vindo!',
        'Você entrou no Instituto dos Shadowhunters.'
      );

    } else {

      Alert.alert(
        'Login incorreto',
        'Use usuário: admin e senha: admin.'
      );
    }
  }


  // =====================================================
  // ESCOLHER PERSONAGEM
  // =====================================================

  function escolherPersonagem(personagem) {

    setPersonagemSelecionado(personagem);

    setXp(xp + 10);

    setTela('detalhes');
  }


  // =====================================================
  // FAVORITO
  // =====================================================

  function favoritar(personagem) {

    if (favorito === personagem.id) {

      setFavorito(null);

      Alert.alert(
        'Favorito removido',
        `${personagem.nome} não é mais seu favorito.`
      );

    } else {

      setFavorito(personagem.id);

      setXp(xp + 5);

      Alert.alert(
        'Favorito!',
        `${personagem.nome} foi adicionado aos favoritos.`
      );
    }
  }


  // =====================================================
  // ESCOLHER RUNA
  // =====================================================

  function escolherRuna(runa) {

    setRunaSelecionada(runa);

    setXp(xp + 5);

    Alert.alert(
      'Runa escolhida',
      `Você escolheu a runa: ${runa}.`
    );
  }


  // =====================================================
  // MODO CAÇADOR
  // =====================================================

  function ativarModoCacador() {

    if (modoCacador) {

      setModoCacador(false);

      Alert.alert(
        'Modo desativado',
        'Você saiu do modo Shadowhunter.'
      );

    } else {

      setModoCacador(true);

      setXp(xp + 20);

      Alert.alert(
        'Modo Shadowhunter',
        'O modo Caçador de Sombras foi ativado!'
      );
    }
  }


  // =====================================================
  // RESETAR
  // =====================================================

  function resetar() {

    setNome('');
    setPersonagemSelecionado(null);
    setRunaSelecionada('');
    setFavorito(null);
    setXp(0);
    setModoCacador(false);
    setPesquisa('');

    Alert.alert(
      'Dados apagados',
      'Suas escolhas foram resetadas.'
    );
  }


  // =====================================================
  // SAIR
  // =====================================================

  function sair() {

    setUsuario('');
    setSenha('');
    setTela('login');
  }


  // =====================================================
  // FILTRO DOS PERSONAGENS
  // =====================================================

  const personagensFiltrados = personagens.filter((personagem) =>
    personagem.nome
      .toLowerCase()
      .includes(pesquisa.toLowerCase())
  );


  // =====================================================
  // TELA DE LOGIN
  // =====================================================

  if (tela === 'login') {

    return (

      <ImageBackground
        source={imagens.runas}
        style={styles.fundo}
        imageStyle={styles.fundoImagem}
      >

        <View style={styles.overlay}>

          <Text style={styles.titulo}>
            SHADOWHUNTERS
          </Text>

          <Text style={styles.subtitulo}>
            THE MORTAL INSTRUMENTS
          </Text>

          <View style={styles.caixaLogin}>

            <Text style={styles.tituloLogin}>
              INSTITUTO
            </Text>

            <Text style={styles.textoLogin}>
              Entre no mundo dos Caçadores de Sombras
            </Text>


            <TextInput
              style={styles.input}
              placeholder="Usuário"
              placeholderTextColor="#aaa"
              value={usuario}
              onChangeText={setUsuario}
            />


            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#aaa"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />


            <TouchableOpacity
              style={styles.botaoDourado}
              onPress={fazerLogin}
            >

              <Text style={styles.textoBotao}>
                ENTRAR
              </Text>

            </TouchableOpacity>

          </View>

        </View>

      </ImageBackground>
    );
  }


  // =====================================================
  // TELA HOME
  // =====================================================

  if (tela === 'home') {

    return (

      <View style={styles.container}>

        <View style={styles.topo}>

          <View>

            <Text style={styles.logo}>
              SHADOWHUNTERS
            </Text>

            <Text style={styles.bemVindo}>
              Bem-vindo ao Instituto, {nome || 'Caçador'}
            </Text>

          </View>

          <Text style={styles.xp}>
            XP: {xp}
          </Text>

        </View>


        <TextInput
          style={styles.inputPesquisa}
          placeholder="Pesquisar personagem..."
          placeholderTextColor="#999"
          value={pesquisa}
          onChangeText={setPesquisa}
        />


        <Text style={styles.tituloSecao}>
          PERSONAGENS
        </Text>


        <FlatList
          data={personagensFiltrados}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}

          renderItem={({ item }) => (

            <TouchableOpacity
              style={styles.card}
              onPress={() => escolherPersonagem(item)}
            >

              <Image
                source={item.imagem}
                style={styles.imagemCard}
              />

              <View style={styles.infoCard}>

                <Text style={styles.nomePersonagem}>
                  {item.nome}
                </Text>

                <Text style={styles.tipoPersonagem}>
                  {item.tipo}
                </Text>

                <Text style={styles.verMais}>
                  VER DETALHES →
                </Text>

              </View>


              <TouchableOpacity
                style={styles.botaoFavorito}
                onPress={() => favoritar(item)}
              >

                <Text style={styles.estrela}>
                  {favorito === item.id ? '★' : '☆'}
                </Text>

              </TouchableOpacity>

            </TouchableOpacity>
          )}
        />


        <View style={styles.menu}>

          <TouchableOpacity
            style={styles.menuBotao}
            onPress={() => setTela('perfil')}
          >

            <Text style={styles.menuTexto}>
              MEU PERFIL
            </Text>

          </TouchableOpacity>


          <TouchableOpacity
            style={styles.menuBotao}
            onPress={ativarModoCacador}
          >

            <Text style={styles.menuTexto}>
              {modoCacador
                ? 'CAÇADOR ATIVO'
                : 'MODO CAÇADOR'}
            </Text>

          </TouchableOpacity>


          <TouchableOpacity
            style={styles.menuBotao}
            onPress={resetar}
          >

            <Text style={styles.menuTexto}>
              RESETAR
            </Text>

          </TouchableOpacity>


          <TouchableOpacity
            style={styles.menuBotaoVermelho}
            onPress={sair}
          >

            <Text style={styles.menuTexto}>
              SAIR
            </Text>

          </TouchableOpacity>

        </View>

      </View>
    );
  }


  // =====================================================
  // TELA DETALHES
  // =====================================================

  if (tela === 'detalhes' && personagemSelecionado) {

    const personagem = personagemSelecionado;

    return (

      <View style={styles.container}>

        <ScrollView
          showsVerticalScrollIndicator={false}
        >

          <TouchableOpacity
            style={styles.voltar}
            onPress={() => setTela('home')}
          >

            <Text style={styles.voltarTexto}>
              ← VOLTAR
            </Text>

          </TouchableOpacity>


          <Image
            source={personagem.imagem}
            style={styles.imagemGrande}
          />


          <View style={styles.detalhes}>

            <Text style={styles.nomeGrande}>
              {personagem.nome}
            </Text>

            <Text style={styles.tipoGrande}>
              {personagem.tipo}
            </Text>

            <Text style={styles.descricao}>
              {personagem.descricao}
            </Text>


            <TouchableOpacity
              style={styles.botaoDourado}
              onPress={() => favoritar(personagem)}
            >

              <Text style={styles.textoBotao}>
                {favorito === personagem.id
                  ? '★ FAVORITO'
                  : '☆ ADICIONAR AOS FAVORITOS'}
              </Text>

            </TouchableOpacity>


            <Text style={styles.tituloSecao}>
              ESCOLHA SUA RUNA
            </Text>


            <Image
              source={imagens.runas}
              style={styles.imagemRunas}
            />


            <View style={styles.runasContainer}>

              <TouchableOpacity
                style={styles.botaoRuna}
                onPress={() => escolherRuna('Cura')}
              >

                <Text style={styles.textoRuna}>
                  CURA
                </Text>

              </TouchableOpacity>


              <TouchableOpacity
                style={styles.botaoRuna}
                onPress={() => escolherRuna('Força')}
              >

                <Text style={styles.textoRuna}>
                  FORÇA
                </Text>

              </TouchableOpacity>


              <TouchableOpacity
                style={styles.botaoRuna}
                onPress={() => escolherRuna('Parabatai')}
              >

                <Text style={styles.textoRuna}>
                  PARABATAI
                </Text>

              </TouchableOpacity>

            </View>


            {runaSelecionada !== '' && (

              <Text style={styles.runaEscolhida}>
                Runa escolhida: {runaSelecionada}
              </Text>

            )}

          </View>

        </ScrollView>

      </View>
    );
  }


  // =====================================================
  // TELA MEU PERFIL
  // =====================================================

  if (tela === 'perfil') {

    const personagemFavorito =
      personagens.find((item) => item.id === favorito);


    return (

      <View style={styles.container}>

        <ScrollView>

          <TouchableOpacity
            style={styles.voltar}
            onPress={() => setTela('home')}
          >

            <Text style={styles.voltarTexto}>
              ← VOLTAR
            </Text>

          </TouchableOpacity>


          <Text style={styles.tituloPerfil}>
            MEU PERFIL
          </Text>


          <View style={styles.perfilBox}>

            <Text style={styles.label}>
              SEU NOME
            </Text>


            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              placeholderTextColor="#999"
              value={nome}
              onChangeText={setNome}
            />


            <Text style={styles.xpPerfil}>
              XP ACUMULADO: {xp}
            </Text>


            <Text style={styles.label}>
              PERSONAGEM FAVORITO
            </Text>


            {personagemFavorito ? (

              <View>

                <Image
                  source={personagemFavorito.imagem}
                  style={styles.imagemPerfil}
                />

                <Text style={styles.nomeFavorito}>
                  {personagemFavorito.nome}
                </Text>

              </View>

            ) : (

              <Text style={styles.semFavorito}>
                Você ainda não escolheu um favorito.
              </Text>

            )}


            {runaSelecionada !== '' && (

              <Text style={styles.runaPerfil}>
                Runa escolhida: {runaSelecionada}
              </Text>

            )}


            <TouchableOpacity
              style={styles.botaoDourado}
              onPress={resetar}
            >

              <Text style={styles.textoBotao}>
                APAGAR DADOS
              </Text>

            </TouchableOpacity>

          </View>

        </ScrollView>

      </View>
    );
  }


  return null;
}


// =====================================================
// ESTILOS
// =====================================================

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#050B14',
    paddingTop: 40,
    paddingHorizontal: 18
  },


  fundo: {
    flex: 1
  },


  fundoImagem: {
    opacity: 0.75
  },


  overlay: {
    flex: 1,
    backgroundColor: 'rgba(5,11,20,0.72)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25
  },


  titulo: {
    color: '#D4AF37',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center'
  },


  subtitulo: {
    color: '#fff',
    fontSize: 13,
    letterSpacing: 3,
    marginBottom: 35
  },


  caixaLogin: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'rgba(5,11,20,0.94)',
    borderWidth: 1,
    borderColor: '#D4AF37',
    borderRadius: 15,
    padding: 25
  },


  tituloLogin: {
    color: '#D4AF37',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },


  textoLogin: {
    color: '#ccc',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 25
  },


  input: {
    backgroundColor: '#111B29',
    borderWidth: 1,
    borderColor: '#38506B',
    borderRadius: 8,
    padding: 13,
    color: '#fff',
    marginBottom: 15
  },


  botaoDourado: {
    backgroundColor: '#D4AF37',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15
  },


  textoBotao: {
    color: '#050B14',
    fontWeight: 'bold'
  },


  topo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18
  },


  logo: {
    color: '#D4AF37',
    fontSize: 20,
    fontWeight: 'bold'
  },


  bemVindo: {
    color: '#ccc',
    marginTop: 5
  },


  xp: {
    color: '#D4AF37',
    fontWeight: 'bold'
  },


  inputPesquisa: {
    backgroundColor: '#111B29',
    borderWidth: 1,
    borderColor: '#38506B',
    borderRadius: 8,
    padding: 12,
    color: '#fff',
    marginBottom: 15
  },


  tituloSecao: {
    color: '#D4AF37',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 12
  },


  card: {
    backgroundColor: '#101A28',
    borderRadius: 12,
    marginBottom: 12,
    padding: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#243B55',
    alignItems: 'center'
  },


  imagemCard: {
    width: 85,
    height: 110,
    borderRadius: 8
  },


  infoCard: {
    flex: 1,
    paddingLeft: 12
  },


  nomePersonagem: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  },


  tipoPersonagem: {
    color: '#D4AF37',
    marginTop: 5
  },


  verMais: {
    color: '#7899B8',
    marginTop: 10,
    fontSize: 12
  },


  botaoFavorito: {
    padding: 10
  },


  estrela: {
    color: '#D4AF37',
    fontSize: 27
  },


  menu: {
    borderTopWidth: 1,
    borderTopColor: '#243B55',
    paddingTop: 10,
    paddingBottom: 5
  },


  menuBotao: {
    backgroundColor: '#174D78',
    padding: 11,
    borderRadius: 7,
    marginBottom: 6,
    alignItems: 'center'
  },


  menuBotaoVermelho: {
    backgroundColor: '#8B1E2D',
    padding: 11,
    borderRadius: 7,
    marginBottom: 6,
    alignItems: 'center'
  },


  menuTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12
  },


  voltar: {
    paddingVertical: 10
  },


  voltarTexto: {
    color: '#D4AF37',
    fontWeight: 'bold'
  },


  imagemGrande: {
    width: '100%',
    height: 430,
    borderRadius: 12
  },


  detalhes: {
    paddingBottom: 40
  },


  nomeGrande: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 18
  },


  tipoGrande: {
    color: '#D4AF37',
    fontSize: 16,
    marginTop: 5
  },


  descricao: {
    color: '#ccc',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 15
  },


  imagemRunas: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 15
  },


  runasContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },


  botaoRuna: {
    backgroundColor: '#174D78',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    minWidth: 100,
    alignItems: 'center'
  },


  textoRuna: {
    color: '#fff',
    fontWeight: 'bold'
  },


  runaEscolhida: {
    color: '#D4AF37',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10
  },


  tituloPerfil: {
    color: '#D4AF37',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  },


  perfilBox: {
    backgroundColor: '#101A28',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#243B55'
  },


  label: {
    color: '#D4AF37',
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 10
  },


  xpPerfil: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20
  },


  imagemPerfil: {
    width: '100%',
    height: 350,
    borderRadius: 10,
    marginTop: 10
  },


  nomeFavorito: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10
  },


  semFavorito: {
    color: '#999',
    marginBottom: 20
  },


  runaPerfil: {
    color: '#D4AF37',
    fontWeight: 'bold',
    fontSize: 16, 
    marginVertical: 20
  }

});
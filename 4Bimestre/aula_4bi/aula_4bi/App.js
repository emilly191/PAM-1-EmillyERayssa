import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
  SafeAreaView,
  StatusBar,
} from 'react-native';

// --- DADOS DO APP (INSTITUTOS, RUNAS E PERSONAGENS) ---
const RUNAS = [
  { id: '1', nome: 'Runa do Anjo (Raziel)', tipo: 'Poder Angelical', desc: 'Concede força divina e purificação contra demônios.' },
  { id: '2', nome: 'Iratze', tipo: 'Cura', desc: 'Runa básica de cura para fechar ferimentos de batalha.' },
  { id: '3', nome: 'Parabatai', tipo: 'Vínculo', desc: 'Conecta a alma de dois Caçadores de Sombras parceiros de lutas.' },
  { id: '4', nome: 'Furtividade', tipo: 'Camuflagem', desc: 'Permite ao caçador mover-se sem emitir ruídos.' },
];

const PERSONAGENS = [
  { id: '1', nome: 'Jace Herondale', funcao: 'Caçador de Sombras', arma: 'Lâmina Seráfica', foto: require('./assets/jace.jpg') },
  { id: '2', nome: 'Clary Fray', funcao: 'Caçadora de Sombras / Artista', arma: 'Poder de Criar Runas', foto: require('./assets/clary.jpg') },
  { id: '3', nome: 'Alec Lightwood', funcao: 'Líder do Instituto', arma: 'Arco e Flecha', foto: require('./assets/alec.jpg') },
  { id: '4', nome: 'Magnus Bane', funcao: 'Alto Feiticeiro de Brooklyn', arma: 'Magia de Feiticeiro', foto: require('./assets/magnus.jpg') },
];

const INSTITUTOS = [
  { id: '1', nome: 'Instituto de Nova York', local: 'Manhattan, EUA', lider: 'Alec Lightwood' },
  { id: '2', nome: 'Instituto de Londres', local: 'Londres, Reino Unido', lider: 'Família Blackthorn' },
  { id: '3', nome: 'Alicante (Idris)', local: 'Pátria dos Caçadores', lider: 'A Clave' },
];

export default function App() {
  // Estado para controle do Login
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  // Estado para navegação e busca
  const [aba, setAba] = useState('runas'); // 'runas', 'personagens', 'institutos'
  const [busca, setBusca] = useState('');

  // Função para validar o Login
  function realizarLogin() {
    if (usuario.trim() === '' || senha.trim() === '') {
      Alert.alert('Erro', 'Por favor, preencha o usuário e a senha!');
      return;
    }
    // Aceita qualquer usuário para teste ou valida "shadowhunter"
    if (senha === '1234' || senha === 'angelico') {
      setLogado(true);
    } else {
      Alert.alert('Acesso Negado', 'Senha incorreta! Dica: use 1234');
    }
  }

  function realizarLogout() {
    setLogado(false);
    setUsuario('');
    setSenha('');
  }

  // --- TELA DE LOGIN ---
  if (!logado) {
    return (
      <SafeAreaView style={styles.containerLogin}>
        <StatusBar barStyle="light-content" />
        <View style={styles.cardLogin}>
          <Text style={styles.tituloHeader}>⚡ SHADOWHUNTERS ⚡</Text>
          <Text style={styles.subtituloHeader}>Acervo do Instituto</Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Nephilim / Usuário:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome..."
              placeholderTextColor="#888"
              value={usuario}
              onChangeText={setUsuario}
            />

            <Text style={styles.label}>Senha de Acesso:</Text>
            <TextInput
              style={styles.input}
              placeholder="Sua senha (ex: 1234)..."
              placeholderTextColor="#888"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />

            <TouchableOpacity style={styles.botaoGold} onPress={realizarLogin}>
              <Text style={styles.textoBotaoGold}>ENTRAR NO INSTITUTO</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  // --- RENDERIZAÇÃO DAS LISTAS COM FLATLIST ---
  const renderItemRuna = ({ item }) => (
    <View style={styles.cardItem}>
      <Text style={styles.itemTitulo}>{item.nome}</Text>
      <Text style={styles.itemTag}>Tipo: {item.tipo}</Text>
      <Text style={styles.itemDesc}>{item.desc}</Text>
    </View>
  );

  const renderItemPersonagem = ({ item }) => (
    <View style={styles.cardItemRow}>
      <Image
        source={typeof item.foto === 'string' ? { uri: item.foto } : item.foto}
        style={styles.avatar}
      />
      <View style={styles.infoCol}>
        <Text style={styles.itemTitulo}>{item.nome}</Text>
        <Text style={styles.itemTag}>{item.funcao}</Text>
        <Text style={styles.itemDesc}>Arma: {item.arma}</Text>
      </View>
    </View>
  );

  const renderItemInstituto = ({ item }) => (
    <View style={styles.cardItem}>
      <Text style={styles.itemTitulo}>🏛️ {item.nome}</Text>
      <Text style={styles.itemTag}>Local: {item.local}</Text>
      <Text style={styles.itemDesc}>Líder / Responsável: {item.lider}</Text>
    </View>
  );

  // Filtro de buscas
  const runasFiltradas = RUNAS.filter(r => r.nome.toLowerCase().includes(busca.toLowerCase()));
  const persFiltrados = PERSONAGENS.filter(p => p.nome.toLowerCase().includes(busca.toLowerCase()));
  const instFiltrados = INSTITUTOS.filter(i => i.nome.toLowerCase().includes(busca.toLowerCase()));

  return (
    <SafeAreaView style={styles.containerApp}>
      <StatusBar barStyle="light-content" />

      {/* Cabeçalho */}
      <View style={styles.topBar}>
        <View>
          <Text style={styles.topBarTitulo}>INSTITUTO</Text>
          <Text style={styles.topBarUser}>Agente: {usuario}</Text>
        </View>
        <TouchableOpacity style={styles.botaoSair} onPress={realizarLogout}>
          <Text style={styles.textoBotaoSair}>Sair</Text>
        </TouchableOpacity>
      </View>

      {/* Campo de Busca */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar no acervo..."
          placeholderTextColor="#777"
          value={busca}
          onChangeText={setBusca}
        />
      </View>

      {/* Menu de Abas (Navegação) */}
      <View style={styles.abasContainer}>
        <TouchableOpacity
          style={[styles.aba, aba === 'runas' && styles.abaAtiva]}
          onPress={() => setAba('runas')}>
          <Text style={[styles.textoAba, aba === 'runas' && styles.textoAbaAtivo]}>Runas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.aba, aba === 'personagens' && styles.abaAtiva]}
          onPress={() => setAba('personagens')}>
          <Text style={[styles.textoAba, aba === 'personagens' && styles.textoAbaAtivo]}>Personagens</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.aba, aba === 'institutos' && styles.abaAtiva]}
          onPress={() => setAba('institutos')}>
          <Text style={[styles.textoAba, aba === 'institutos' && styles.textoAbaAtivo]}>Institutos</Text>
        </TouchableOpacity>
      </View>

      {/* Exibição com FlatList */}
      <View style={styles.listaContainer}>
        {aba === 'runas' && (
          <FlatList
            data={runasFiltradas}
            keyExtractor={(item) => item.id}
            renderItem={renderItemRuna}
          />
        )}

        {aba === 'personagens' && (
          <FlatList
            data={persFiltrados}
            keyExtractor={(item) => item.id}
            renderItem={renderItemPersonagem}
          />
        )}

        {aba === 'institutos' && (
          <FlatList
            data={instFiltrados}
            keyExtractor={(item) => item.id}
            renderItem={renderItemInstituto}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

// --- ESTILOS DO PROJETO (Cores: Preto Obsidiana, Dourado, Azul Seráfico, Branco) ---
const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: '#0a0a0c',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  cardLogin: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#16161a',
    padding: 25,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d4af37',
  },
  tituloHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#d4af37',
    textAlign: 'center',
  },
  subtituloHeader: {
    fontSize: 14,
    color: '#94a3b8',
    textAlign: 'center',
    marginBottom: 25,
  },
  formGroup: {
    width: '100%',
  },
  label: {
    color: '#f8fafc',
    fontSize: 14,
    marginBottom: 6,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#0f172a',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 8,
    color: '#fff',
    padding: 12,
    marginBottom: 16,
    fontSize: 15,
  },
  botaoGold: {
    backgroundColor: '#d4af37',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotaoGold: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
  },
  containerApp: {
    flex: 1,
    backgroundColor: '#0a0a0c',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#16161a',
    borderBottomWidth: 1,
    borderColor: '#d4af37',
  },
  topBarTitulo: {
    color: '#d4af37',
    fontSize: 18,
    fontWeight: 'bold',
  },
  topBarUser: {
    color: '#94a3b8',
    fontSize: 12,
  },
  botaoSair: {
    backgroundColor: '#991b1b',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  textoBotaoSair: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  searchContainer: {
    padding: 12,
  },
  searchInput: {
    backgroundColor: '#16161a',
    borderWidth: 1,
    borderColor: '#334155',
    color: '#fff',
    borderRadius: 8,
    padding: 10,
  },
  abasContainer: {
    flexDirection: 'row',
    marginHorizontal: 12,
    marginBottom: 10,
    backgroundColor: '#16161a',
    borderRadius: 8,
    padding: 4,
  },
  aba: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 6,
  },
  abaAtiva: {
    backgroundColor: '#d4af37',
  },
  textoAba: {
    color: '#94a3b8',
    fontWeight: '600',
    fontSize: 13,
  },
  textoAbaAtivo: {
    color: '#000',
    fontWeight: 'bold',
  },
  listaContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
  cardItem: {
    backgroundColor: '#16161a',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#38bdf8',
  },
  cardItemRow: {
    flexDirection: 'row',
    backgroundColor: '#16161a',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#d4af37',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  infoCol: {
    flex: 1,
  },
  itemTitulo: {
    color: '#f8fafc',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemTag: {
    color: '#38bdf8',
    fontSize: 12,
    marginVertical: 2,
  },
  itemDesc: {
    color: '#94a3b8',
    fontSize: 13,
  },
});
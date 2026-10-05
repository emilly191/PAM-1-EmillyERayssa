import React, { useState } from 'react';
import { 
  Shield, 
  Sparkles, 
  Search, 
  LogOut, 
  MapPin, 
  UserCheck, 
  Eye, 
  Swords, 
  Crosshair, 
  BookOpen, 
  Lock, 
  Mail,
  Zap,
  Building2,
  Award
} from 'lucide-react';

const RUNES_DATA = [
  {
    id: '1',
    name: 'Runa Parabatai',
    meaning: 'Une dois caçadores de sombras em um elo espiritual e de combate indissolúvel.',
    type: 'Aliança',
    icon: '⚔️',
    color: '#D4AF37', // Dourado Angelical
    detail: 'Apenas dois guerreiros podem compartilhar esta marca para toda a vida. Aumenta os reflexos e a sincronia em batalha.'
  },
  {
    id: '2',
    name: 'Visão (Voyance)',
    meaning: 'Permite enxergar através do Glamour e ver o Mundo das Sombras como ele realmente é.',
    type: 'Percepção',
    icon: '👁️',
    color: '#2980B9', // Azul Seráfico
    detail: 'Uma das primeiras marcas recebidas por um Nephilim. Revela demônios, fadas e feitiços ocultos aos olhos mundanos.'
  },
  {
    id: '3',
    name: 'Cura (Iratze)',
    meaning: 'Cura ferimentos físicos e elimina venenos de demônios no corpo do Caçador.',
    type: 'Suporte',
    icon: '✨',
    color: '#27AE60', // Verde Cura
    detail: 'Desenhada diretamente sobre a pele com a estela. Age instantaneamente fechando cortes e estancando sangramentos.'
  },
  {
    id: '4',
    name: 'Força (Fortitude)',
    meaning: 'Concede força física aumentada temporariamente para batalhas intensas.',
    type: 'Combate',
    icon: '🛡️',
    color: '#E67E22', // Laranja Escudo
    detail: 'Aumenta consideravelmente a resistência muscular e a força de impacto em duelos de longa duração.'
  },
  {
    id: '5',
    name: 'Velocidade (Swiftness)',
    meaning: 'Aumenta os reflexos e a velocidade de movimento do guerreiro.',
    type: 'Combate',
    icon: '⚡',
    color: '#F1C40F', // Amarelo Raio
    detail: 'Concede agilidade extraordinária para esquivas rápidas e investidas letais contra demônios velozes.'
  },
  {
    id: '6',
    name: 'Silêncio (Soundless)',
    meaning: 'Permite mover-se em silêncio absoluto, ideal para missões de furtividade.',
    type: 'Furtividade',
    icon: '🌙',
    color: '#8E44AD', // Roxo Furtivo
    detail: 'Abafa os passos e o ruído das armas do Nephilim, permitindo infiltrações imperceptíveis em territórios inimigos.'
  }
];

const CHARACTERS_DATA = [
  {
    id: '1',
    name: 'Jace Herondale',
    role: 'Caçador de Sombras',
    institute: 'Instituto de Nova York',
    weapon: 'Espada Seráfica / Gravis',
    status: 'Ativo',
    avatar: '🗡️',
    faction: 'Nephilim',
    quote: "Amar é destruir, e ser amado é ser destruído."
  },
  {
    id: '2',
    name: 'Clary Fray',
    role: 'Caçadora de Sombras',
    institute: 'Instituto de Nova York',
    weapon: 'Estela / Hephaastis',
    status: 'Ativo',
    avatar: '🖌️',
    faction: 'Nephilim',
    quote: "Heróis nem sempre são aqueles que vencem, são aqueles que continuam lutando."
  },
  {
    id: '3',
    name: 'Alec Lightwood',
    role: 'Inquisidor / Líder do Instituto',
    institute: 'Instituto de Nova York',
    weapon: 'Arco e Flechas de Madeira Bruxa',
    status: 'Ativo',
    avatar: '🏹',
    faction: 'Nephilim',
    quote: "Não há fingimento. Eu amo você e amarei até o dia em que eu morrer."
  },
  {
    id: '4',
    name: 'Isabelle Lightwood',
    role: 'Caçadora de Sombras',
    institute: 'Instituto de Nova York',
    weapon: 'Chicote de Electrum Dourado',
    status: 'Ativo',
    avatar: '🐍',
    faction: 'Nephilim',
    quote: "Eu sou uma Lightwood. Nós não nos escondemos e não nos rendemos."
  },
  {
    id: '5',
    name: 'Magnus Bane',
    role: 'Alto Feiticeiro',
    institute: 'Brooklyn, NY',
    weapon: 'Magia de Feiticeiro & Fogo Seráfico',
    status: 'Aliado',
    avatar: '🔮',
    faction: 'Feiticeiro',
    quote: "Vivi por séculos e amei muitos, mas você é o meu coração."
  }
];

const INSTITUTES_DATA = [
  {
    id: '1',
    name: 'Instituto de Nova York',
    location: 'Manhattan, Nova York, EUA',
    head: 'Alec Lightwood',
    description: 'Um dos maiores e mais ativos institutos do Nephilim nas Américas, disfarçado como uma igreja gótica secular para os mundanos.',
    code: 'NY-01',
    status: 'Sede Ativa'
  },
  {
    id: '2',
    name: 'Instituto de Londres',
    location: 'Fleet Street, Londres, Reino Unido',
    head: 'Conselho do Enclave',
    description: 'Sede histórica com vasto acervo de tomos antigos, relíquias sagradas e uma rica biblioteca sobre a história dos Nephilim.',
    code: 'LD-04',
    status: 'Sede Histórica'
  },
  {
    id: '3',
    name: 'Instituto de Los Angeles',
    location: 'Costa de Malibu, Califórnia, EUA',
    head: 'Arthur Blackthorn',
    description: 'Localizado no topo de uma colina com vista para o oceano Pacifico, responsável pela vigilância marítima e patrulhas costeiras.',
    code: 'LA-02',
    status: 'Vigilância Costeira'
  },
  {
    id: '4',
    name: 'Crave de Alicante (Gardt)',
    location: 'Alicante, Idris',
    head: 'Conselho Nephilim & Inquisidor',
    description: 'A capital cobiçada do mundo dos Caçadores de Sombras. Protegida pelas Torres de Demônios que resplandecem sob o sol.',
    code: 'ID-00',
    status: 'Capital Celestial'
  }
];

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [currentTab, setCurrentTab] = useState('runas');

  // Login Form States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Handle Login Action
  const handleLogin = (e) => {
    if (e) e.preventDefault();
    setLoginError('');

    if (!email.trim() || !password.trim()) {
      setLoginError('Por favor, preencha todos os campos.');
      return;
    }

    if (password.length < 6) {
      setLoginError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    // Success Authentication
    const userName = email.split('@')[0] || 'Caçador';
    setUser({ name: userName.charAt(0).toUpperCase() + userName.slice(1), email });
    setIsLoggedIn(true);
    setEmail('');
    setPassword('');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setCurrentTab('runas');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col justify-between items-center p-4 sm:p-6 font-sans">
        <div className="w-full max-w-md my-auto space-y-6">
          
          {/* Logo Container */}
          <div className="text-center space-y-3">
            <div className="mx-auto w-20 h-20 rounded-full border-2 border-[#D4AF37] bg-[#161616] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              <span className="text-4xl animate-pulse">⚔️</span>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-widest text-[#D4AF37]">
                SHADOWHUNTERS
              </h1>
              <p className="text-xs uppercase tracking-widest text-[#A0A0A0] mt-1">
                Arquivos do Instituto Nephilim
              </p>
            </div>
          </div>

          {/* Login Form Box */}
          <form onSubmit={handleLogin} className="bg-[#161616] border border-[#262626] rounded-xl p-6 sm:p-8 space-y-4 shadow-xl">
            <div>
              <label className="block text-xs font-bold text-[#D4AF37] tracking-wider uppercase mb-2 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" /> Identificação Nephilim
              </label>
              <input
                type="email"
                placeholder="seu.email@clave.org"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0D0D0D] border border-[#333333] rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#D4AF37] tracking-wider uppercase mb-2 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" /> Senha de Acesso
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0D0D0D] border border-[#333333] rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>

            {loginError && (
              <div className="p-3 bg-[#C0392B]/10 border border-[#C0392B]/40 rounded-lg text-center">
                <p className="text-xs text-[#E74C3C] font-medium">{loginError}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#D4AF37] hover:bg-[#c49f27] text-[#0D0D0D] font-bold py-3.5 px-4 rounded-lg text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] active:scale-[0.99]"
            >
              Entrar no Sistema
            </button>
          </form>

          {/* Footer Motto */}
          <p className="text-center text-xs text-[#555555] font-serif italic">
            "Sed Lex, Dura Lex" • Clave de Idris
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col font-sans">
      
      {/* Top Header */}
      <header className="bg-[#121212] border-b border-[#222222] px-4 sm:px-6 py-4 sticky top-0 z-30 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full border border-[#D4AF37] bg-[#181818] flex items-center justify-center text-lg">
            ⚔️
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-bold font-serif text-[#D4AF37] tracking-wider">
              ARQUIVOS NEPHILIM
            </h1>
            <p className="text-xs text-[#888888] flex items-center gap-1">
              <span>Guerreiro:</span>
              <span className="text-white font-medium">{user?.name}</span>
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#C0392B] text-[#C0392B] hover:bg-[#C0392B]/10 text-xs font-semibold transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sair</span>
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6 pb-24">
        {currentTab === 'runas' && <RunesTab />}
        {currentTab === 'personagens' && <CharactersTab />}
        {currentTab === 'institutos' && <InstitutesTab />}
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#121212] border-t border-[#222222] px-4 py-2 z-30">
        <div className="max-w-md mx-auto flex items-center justify-around">
          
          <button
            onClick={() => setCurrentTab('runas')}
            className={`flex flex-col items-center gap-1 py-1 px-4 rounded-lg transition-all ${
              currentTab === 'runas' ? 'text-[#D4AF37]' : 'text-[#666666] hover:text-[#aaaaaa]'
            }`}
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-[11px] font-medium">Runas</span>
          </button>

          <button
            onClick={() => setCurrentTab('personagens')}
            className={`flex flex-col items-center gap-1 py-1 px-4 rounded-lg transition-all ${
              currentTab === 'personagens' ? 'text-[#D4AF37]' : 'text-[#666666] hover:text-[#aaaaaa]'
            }`}
          >
            <Swords className="w-5 h-5" />
            <span className="text-[11px] font-medium">Personagens</span>
          </button>

          <button
            onClick={() => setCurrentTab('institutos')}
            className={`flex flex-col items-center gap-1 py-1 px-4 rounded-lg transition-all ${
              currentTab === 'institutos' ? 'text-[#D4AF37]' : 'text-[#666666] hover:text-[#aaaaaa]'
            }`}
          >
            <Building2 className="w-5 h-5" />
            <span className="text-[11px] font-medium">Institutos</span>
          </button>

        </div>
      </nav>

    </div>
  );
}

function RunesTab() {
  const [search, setSearch] = useState('');
  const [activeRune, setActiveRune] = useState(null);

  const filtered = RUNES_DATA.filter(rune =>
    rune.name.toLowerCase().includes(search.toLowerCase()) ||
    rune.type.toLowerCase().includes(search.toLowerCase()) ||
    rune.meaning.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4 animate-fadeIn">
      <div>
        <h2 className="text-xl font-serif font-bold text-white mb-1">Compêndio de Runas (Marcas)</h2>
        <p className="text-xs text-[#888888]">
          Símbolos sagrados gravados na pele dos Nephilim com uma estela de adamas.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666666]" />
        <input
          type="text"
          placeholder="Buscar runa por nome, tipo ou efeito..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-[#161616] border border-[#282828] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-[#666666] focus:outline-none focus:border-[#D4AF37] transition-colors"
        />
      </div>

      {/* Runes Grid/List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filtered.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveRune(activeRune?.id === item.id ? null : item)}
            className={`bg-[#161616] border rounded-xl p-4 transition-all duration-200 cursor-pointer ${
              activeRune?.id === item.id 
                ? 'border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.15)] bg-[#1a1a1a]' 
                : 'border-[#242424] hover:border-[#3a3a3a]'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0D0D0D] border border-[#2d2d2d] flex items-center justify-center text-xl shrink-0">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-bold text-white truncate">{item.name}</h3>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#242424] text-[#2980B9] shrink-0">
                    {item.type}
                  </span>
                </div>
                <p className="text-xs text-[#CCCCCC] mt-1 line-clamp-2 leading-relaxed">
                  {item.meaning}
                </p>
              </div>
            </div>

            {/* Expandable details when clicked */}
            {activeRune?.id === item.id && (
              <div className="mt-3 pt-3 border-t border-[#262626] text-xs text-[#A0A0A0] space-y-1 animate-fadeIn">
                <p className="text-[#D4AF37] font-semibold text-[11px] uppercase tracking-wider">
                  Detalhes do Tomo:
                </p>
                <p className="italic leading-relaxed">{item.detail}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-10 bg-[#161616] border border-[#242424] rounded-xl">
          <p className="text-xs text-[#666666]">Nenhuma runa encontrada com o termo pesquisado.</p>
        </div>
      )}
    </div>
  );
}

function CharactersTab() {
  const [search, setSearch] = useState('');

  const filtered = CHARACTERS_DATA.filter(char =>
    char.name.toLowerCase().includes(search.toLowerCase()) ||
    char.role.toLowerCase().includes(search.toLowerCase()) ||
    char.weapon.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4 animate-fadeIn">
      <div>
        <h2 className="text-xl font-serif font-bold text-white mb-1">Caçadores & Aliados</h2>
        <p className="text-xs text-[#888888]">
          Guerreiros Nephilim, Feiticeiros e Seres do Submundo em destaque nos arquivos.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666666]" />
        <input
          type="text"
          placeholder="Buscar personagem, classe ou arma..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-[#161616] border border-[#282828] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-[#666666] focus:outline-none focus:border-[#D4AF37] transition-colors"
        />
      </div>

      {/* Characters List */}
      <div className="space-y-3">
        {filtered.map((item) => (
          <div key={item.id} className="bg-[#161616] border border-[#242424] rounded-xl p-4 space-y-3 hover:border-[#3a3a3a] transition-all">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0D0D0D] border border-[#333333] flex items-center justify-center text-xl">
                  {item.avatar}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{item.name}</h3>
                  <p className="text-xs text-[#888888]">{item.role}</p>
                </div>
              </div>
              
              <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md ${
                item.status === 'Ativo' 
                  ? 'bg-[#27AE60]/10 text-[#27AE60] border border-[#27AE60]/30' 
                  : 'bg-[#2980B9]/10 text-[#2980B9] border border-[#2980B9]/30'
              }`}>
                {item.status}
              </span>
            </div>

            <div className="pt-2 border-t border-[#222222] grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-[#D4AF37] font-semibold block text-[10px] uppercase">Sede:</span>
                <span className="text-[#A0A0A0]">{item.institute}</span>
              </div>
              <div>
                <span className="text-[#D4AF37] font-semibold block text-[10px] uppercase">Arma Favorita:</span>
                <span className="text-[#A0A0A0]">{item.weapon}</span>
              </div>
            </div>

            {item.quote && (
              <p className="text-[11px] italic text-[#777777] pt-1">
                "{item.quote}"
              </p>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-10 bg-[#161616] border border-[#242424] rounded-xl">
          <p className="text-xs text-[#666666]">Nenhum personagem encontrado com o termo pesquisado.</p>
        </div>
      )}
    </div>
  );
}

function InstitutesTab() {
  return (
    <div className="space-y-4 animate-fadeIn">
      <div>
        <h2 className="text-xl font-serif font-bold text-white mb-1">Sedes & Bastiões da Clave</h2>
        <p className="text-xs text-[#888888]">
          Fortalezas estratégicas dos Caçadores de Sombras espalhadas pelo mundo e Idris.
        </p>
      </div>

      <div className="space-y-3">
        {INSTITUTES_DATA.map((item) => (
          <div key={item.id} className="bg-[#161616] border-l-4 border-l-[#D4AF37] border-y border-r border-[#242424] rounded-r-xl p-4 space-y-3 hover:border-r-[#3a3a3a] transition-all">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-bold text-white">{item.name}</h3>
                <p className="text-xs text-[#888888] flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-[#D4AF37]" />
                  <span>{item.location}</span>
                </p>
              </div>
              <div className="bg-[#222222] px-2.5 py-1 rounded text-xs font-mono font-bold text-[#D4AF37] border border-[#333333]">
                {item.code}
              </div>
            </div>

            <p className="text-xs text-[#CCCCCC] leading-relaxed">
              {item.description}
            </p>

            <div className="pt-2 border-t border-[#222222] flex items-center justify-between text-xs">
              <div>
                <span className="text-[#D4AF37] font-semibold">Líder Responsável: </span>
                <span className="text-[#A0A0A0]">{item.head}</span>
              </div>
              <span className="text-[10px] text-[#2980B9] font-medium bg-[#2980B9]/10 px-2 py-0.5 rounded border border-[#2980B9]/30">
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
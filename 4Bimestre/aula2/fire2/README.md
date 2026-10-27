# Shadowhunters — Instituto de Nova York

Projeto escolar React Native / Expo, com navegação em pilha conforme `navegação.pdf` e CRUD real com Firebase Cloud Firestore.

## Preparação

1. Abra a pasta do projeto no VS Code e execute `npm install`.
2. No [Firebase Console](https://console.firebase.google.com/), crie um projeto e registre um app **Web** (mesmo que use Expo no celular).
3. Em **Build > Firestore Database**, crie o banco e configure regras de acesso adequadas. Para uma demonstração escolar, siga as instruções do professor; não publique regras abertas permanentemente.
4. Copie o objeto de configuração do Firebase para `config/firebase.js`, substituindo os valores `COLOQUE_...`.
5. Execute `npx expo start` para usar o Expo Go, ou `npm run web` para abrir no navegador.
6. Faça `git init`, `git add .`, `git commit -m "App Shadowhunters Firebase"`, conecte seu repositório remoto com `git remote add origin URL_DO_SEU_REPOSITORIO` e envie com `git push -u origin main` (se sua branch for main).

## Funcionalidades

- **Login:** entrada temática sem autenticação real.
- **Home:** Read, pesquisa, filtro por espécie e Delete com confirmação.
- **Cadastro:** Create.
- **Perfil:** consulta individual.
- **Editar:** Update.
- **Sobre:** informações e galeria temática de runas.

A coleção do Firestore se chama `personagens` e contém `nome`, `especie`, `arma`, `descricao` e timestamps. Os dados só são persistidos após configurar o Firebase.

## Importante

GitHub guarda o código; Firestore guarda os dados. O Firebase SDK no app é a conexão entre os dois ambientes. As configurações Web do Firebase não são uma senha secreta, mas **nunca** inclua chaves privadas de contas de serviço no GitHub. Configure regras do Firestore antes de disponibilizar publicamente.

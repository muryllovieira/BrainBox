# 🧠 BrainBox

BrainBox é uma interface de chat inteligente desenvolvida como solução para o desafio proposto pela **FinTechX**, empresa do setor financeiro. O app funciona como um assistente virtual que responde às dúvidas dos clientes em tempo real, utilizando linguagem natural para proporcionar uma experiência de atendimento fluida, personalizada e eficiente.

---

## 📱 Sobre o Projeto

A FinTechX identificou a necessidade de melhorar a interação com seus clientes, enfrentando desafios como lentidão nas respostas, falta de personalização no atendimento e ausência de ferramentas que simplifiquem processos. O BrainBox surge como resposta a esses desafios: uma interface intuitiva e responsiva integrada a um modelo de linguagem (LLM) para suporte automatizado e inteligente.

---

## 🚀 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/) com [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Google Gemini API](https://ai.google.dev/) — LLM para o chat inteligente
- [Expo Router](https://expo.github.io/router/) — navegação baseada em arquivos
- Jest — testes automatizados
- ESLint + Prettier — padronização de código

---

## 📁 Estrutura de Pastas

```
BrainBox/
├── app/                  # Rotas e telas da aplicação (Expo Router)
├── components/           # Componentes reutilizáveis
├── presentation/
│   └── atomic/           # Componentes atômicos (design system)
├── hooks/                # Custom hooks
├── service/              # Integração com APIs externas (Google Gemini)
├── model/                # Tipagens e modelos de dados
├── data/                 # Context API e Providers globais
├── constants/            # Constantes globais
├── theme/                # Tokens de tema (cores, tipografia, espaçamentos)
├── assets/               # Imagens, fontes e outros recursos estáticos
├── __tests__/            # Testes automatizados
└── .github/workflows/    # Pipelines de CI/CD
```

---

## ⚙️ Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Aplicativo **Expo Go** no seu celular (opcional, para testar em dispositivo físico)

---

## 🔧 Instalação e Configuração

1. **Clone o repositório:**

```bash
git clone https://github.com/muryllovieira/BrainBox.git
cd BrainBox
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure as variáveis de ambiente:**

Crie um arquivo `.env` na raiz do projeto com a seguinte variável:

```env
EXPO_PUBLIC_GOOGLE_API_KEY=sua_chave_aqui
```

> Você pode obter sua chave de API em [Google AI Studio](https://aistudio.google.com/).

---

## ▶️ Como Rodar

```bash
# Iniciar o servidor de desenvolvimento
npx expo start

# Rodar no Android
npx expo run:android

# Rodar no iOS
npx expo run:ios
```

---

## 🧪 Testes

```bash
npm test
```

Os testes estão localizados na pasta `__tests__/` e utilizam Jest como framework.

---

## 🏗️ Arquitetura

O projeto segue os princípios de **Atomic Design** na camada de apresentação, separando os componentes em átomos reutilizáveis. A lógica de negócio é desacoplada da UI por meio de hooks customizados e serviços, facilitando a manutenção e escalabilidade.

- **`service/`** — responsável pela comunicação com a API do Google Gemini
- **`model/`** — define as interfaces e tipos de dados
- **`hooks/`** — encapsula a lógica de estado e side effects
- **`presentation/atomic/`** — componentes base do design system
- **`theme/`** — centraliza as definições visuais do app

---

## 📄 Licença

Este projeto foi desenvolvido para fins de avaliação técnica. Todos os direitos reservados ao autor.

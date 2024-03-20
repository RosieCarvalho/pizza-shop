### Aprendizados

- Configurando ESLint e Prettier

  - npm i eslint @rocketseat/eslint-config -D
  - eslint-plugin-simple-import-sort : organiza os importes

- tipos de estados

  - Local State, HTTP State e Global State. O Local State é o estado que colocamos dentro dos componentes usando o useState. O Global State é quando usamos bibliotecas como Redux ou Zustand para ter estados globais acessíveis por vários componentes. O HTTP State é o estado dos dados retornados pelas requisições HTTP, como as requisições GET feitas a uma API. Vamos ver como atualizar esses dados usando o React Query ou bibliotecas similares. Vamos mostrar como fazer isso usando o hook useMutation e a função onSuccess. Vamos buscar os dados atuais usando o queryClient.getQueryData e atualizar os dados usando o queryClient.setQueryData. Vamos mostrar como fazer isso na prática e como podemos tipar esses dados usando interfaces. Essa é uma funcionalidade incrível do React Query e é uma das mais importantes que vamos aprender.

- interface otimista

  - permite reagir a alterações de entrada do usuário antes mesmo que elas sejam confirmadas no backend. Para implementar a interface otimista, separamos o código de atualização em uma função separada e a chamamos no evento onMutate, que é acionado no momento em que o usuário clica no botão de salvar. Também utilizamos o evento onError para lidar com erros na requisição, revertendo o cache para os dados originais caso ocorra algum problema. A interface otimista é uma técnica poderosa para melhorar a experiência do usuário em situações em que a probabilidade de erro é baixa.
    - exemplo em:(src/components/store-profile-dialog.tsx)

- Quando na paginação precisar que fixe informações, melhor colocar na url

- Testes - teoria

  - testes unitários: são usados para testar componentes ou funções isoladamente, sem depender do contexto da aplicação
  - Mock: Quando desenvolvemos uma aplicação front-end, geralmente precisamos de um back-end/API para fornecer os dados. No entanto, isso pode se tornar complicado, especialmente quando temos vários serviços e dependências. O mock simula o fornecimento de dados como uma API.
  - testes end-to-end:simulam as ações do usuário na aplicação

## Testes - implementação

- lib usada usar funções globais - para não precisa importar as funções de teste: https://vitest.dev/
  - configuração do vitest na aplicação através do comentario: #configVitest
- lib para teste unitário: https://testing-library.com/docs/react-testing-library/intro/
  - o plugin jest-dom é para aplicações html, ele ajuda a lidar com o dom: https://testing-library.com/docs/ecosystem-jest-dom/
    - configuração atraves : #configDomTest
- opcional - para simular o browser : https://github.com/capricorn86/happy-dom
- para simular um usuario: @testing-library/user-event
- _para criar mock_: MSW (Mock Service Worker)
  - simula um back-end
  - O MSW nos permite interceptar as requisições HTTP feitas pelo front-end e retornar dados fictícios, facilitando o desenvolvimento e os testes. Ao contrário de outras bibliotecas, o MSW usa Service Workers para criar um back-end fictício, mantendo as requisições visíveis para fins de debug
  - para rodar o MSW inserir no package
    "dev:test": "vite --port 50789 --mode test",
  - config: npx msw init public/
  - configuração atraves na aplicação: ##configMock
- _testes end-to-end_
  - usando: PlayWright - https://playwright.dev/
  - rodar interface: npx playwright test --ui
- exemplos de testes na aplicação através do comentario: #exTest

### Bibliotecas

- shadcn/ui : components sem estilos mas com funcionalidades que seriam complicadas no html puro.
  -- _tailwindcss_: para estilizar
  -- darkmode: aplicação em modo escuro

- react-router-dom : roteamento
  --- design padrão: Outlet

- @hookform e zod para validação

- react-helmet-async : titulos padrões

- Sonner: toast, notificações https://sonner.emilkowal.ski/

- Recharts: para graficos

- react-query: uma serie de hooks para facilidar requisições entre front e back. Tem uma funcionalidade sensacional de memorizar informações entre componentes: se dois components fazem uma mesma requisição, ele cria um cache e evita que tenha duas requisições

- integração como axios

- calendários

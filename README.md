# Guia de Instalação e Execução do Projeto

## Requisitos

- Certifique-se de que tens **Python** instalado e que a variável de ambiente no **PATH** está corretamente configurada.
- O mesmo vale para **Node.js** e **npm**: garanta que a última versão está instalada e configurada nas variáveis de ambiente.

---

## Clonando o Repositório

Clone o repositório ou faça o download e extração em seu computador:

```sh
git clone "https://github.com/Matheus-Forte-Melo/teste-react"
```

---

## Acessando o Repositório

Dentro do repositório clonado, você verá duas pastas principais:

- **interface/** (Frontend)
- **backend/** (Backend)

Abra a pasta **teste-react** no **VSCode** e abra **dois terminais** ou abra dois terminais **PowerShell** diretamente.

---

## Iniciando o Backend

Com o terminal aberto na pasta **teste-react/**, execute os seguintes comandos (uma linha por vez):

```sh
cd backend
python ./.venv/Scripts/activate
cd gerenciador_empresas
python manage.py runserver
```

> **Importante**: Mantenha este terminal aberto! Fechar o terminal interromperá o servidor e causará erros na aplicação.

---

## Iniciando o Frontend

Com o segundo terminal aberto na pasta **teste-react/**, execute os seguintes comandos (uma linha por vez):

```sh
cd interface
npm install # Certifique-se que tens Node.js e npm instalados e configurados
npm run dev
```

Se tudo estiver correto, deverá aparecer no terminal:

```sh
Local: http://localhost:5173/
```

Agora, copie esse [endereço](http://localhost:5173/) e cole no seu navegador.

> **Nota**: O terminal do **Backend deve continuar rodando** enquanto a aplicação estiver em uso.

---

## Testando a Aplicação

1. Aguarde a página carregar.
2. Clique em **LOGIN** (não é necessário inserir usuário e senha, pois não foi implementada autenticação).
3. Você verá a listagem contendo **duas empresas**.
4. Para cadastrar uma nova empresa:
   - Clique no botão **CADASTRAR** no lado direito da tela.
   - O sistema valida **CNPJs reais**, então utilize um CNPJ válido.
5. Se o cadastro for bem-sucedido:
   - Um alerta de sucesso aparecerá.
   - Ao clicar em **OK**, você será redirecionado para a tela de listagem novamente.

---

## Navegação

Na **sidebar**, apenas os **três primeiros** ícones levam a páginas distintas:

1. **Primeiro ícone**: Volta para a tela de **Login**.
2. **Segundo ícone**: Leva para a tela de **Listagem de Empresas**.
3. **Terceiro ícone**: Leva para a tela de **Planilhas**.

---

## Observação Final

- Nos locais onde deveriam estar os **logos** do sistema, aparece apenas um **placeholder cinza** com "logo" escrito dentro.
- Isso ocorre porque não havia certeza sobre a permissão de uso das logos ou a disponibilidade do arquivo correspondente.

---

Pronto! Agora você viu tudo que foi solicitado.


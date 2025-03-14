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

> Abra a pasta **teste-react** no **VSCode** e abra **dois terminais** distintos, **OU** se preferir, abra dois terminais distintos no **PowerShell** e vá até o local do repositório clonado.
> Certifique-se de que os terminais estão no local do repositório. Se não estiver, use `cd` para navegar até ele.

---

## Iniciando o Backend

Com o primeiro terminal aberto na pasta **teste-react/**, execute os seguintes comandos (uma linha por vez):

```sh
cd back-end
./.venv/Scripts/activate
cd gerenciador_empresas
python manage.py runserver
```

> **Importante 1**: PRONTO. Mantenha este terminal aberto! Fechar o terminal interromperá o servidor e causará erros na aplicação.
> **Importante 2**: **Se houver algum erro de dependência de pacotes no Python** (ou se não tiver clonado o .venv), crie um ambiente virtual com `python -m venv .venv`, ative-o e coloque o comando (a partir do caminho `backend/`) `pip install -r requirements.txt`. 
> > Caso isso não resolva, certifique-se de que ativou o ambiente virtual Python com `./.venv/Scripts/activate`.

---

## Iniciando o Frontend

Com o segundo terminal aberto na pasta **teste-react/**, execute os seguintes comandos (uma linha por vez):

```sh
cd interface
npm install # Essa etapa demora alguns segundos, se der algum erro, ertifique-se que tens Node.js e npm instalados e configurados.
npm run dev
```

Se tudo estiver correto, deverá aparecer no terminal:

```sh
Local: http://localhost:5173/
```

Agora, copie esse [endereço](http://localhost:5173/) e cole no seu navegador. Se não funcionar, atente-se ao número da porta (`5173`) se ele for diferente, sem problemas, você deverá acessar a rota com o numero disposto no terminal.
> Continue lendo abaixo para entender como funciona o fluxo do sistema. Neste momento, se tudo deu certo, você deve estar se deparando com uma tela de Login.

> **Nota**: O terminal do **Backend deve continuar rodando** enquanto a aplicação estiver em uso.

---

## Testando a Aplicação

1. Aguarde a página carregar (se necessário).
2. Clique em **LOGIN** (não é necessário inserir usuário e senha, pois não há autenticação).
3. Você verá a listagem contendo **duas empresas** (se não aparecer, recarregue a página).
4. Para cadastrar uma nova empresa:
   - Clique no botão **CADASTRAR** no lado direito da tela.
   - O sistema valida **CNPJs reais**, então utilize um CNPJ válido.
   - Se quiser, pode também deletar o registro de uma empresa clicando no icone de lixeira.
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

## Imagens do Sistema

![image](https://github.com/user-attachments/assets/ecd629a6-7881-499c-a190-a629a6940f2e)
![image](https://github.com/user-attachments/assets/2275289c-7295-4591-b4d4-7c98c64418e2)
![image](https://github.com/user-attachments/assets/c728b71b-e0d8-4a9b-a946-9ea4c6c1c971)


## Observação Final

- Nos locais onde deveriam estar os **logos** do sistema, aparece apenas um **placeholder cinza** com "logo" escrito dentro.
- Isso ocorre porque não havia certeza sobre a permissão de uso das logos ou a disponibilidade do arquivo correspondente.

---



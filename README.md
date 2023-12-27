# Desafio do Curso DevQuest: Formulário com Validação usando JavaScript Puro

Neste desafio do **Curso DevQuest**, o objetivo é criar um formulário HTML e implementar validações usando **JavaScript puro**. Vamos explicar como realizar esse desafio passo a passo:

## Passos para a Solução

1. **Estrutura HTML**:
   - <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quest - Formulario com validação</title>

    <link rel="stylesheet" href="./src/css/reset.css">
    <link rel="stylesheet" href="./src/css/responsivo.css">
    <link rel="stylesheet" href="./src/css/estilos.css">
</head>

<body>
    <main>
        <section class="info">
            <h1>Ficou com dúvida?
                Nos mande uma mensagem!
            </h1>
            <p>caso tenha ficado com qualquer dúvida basta nos mandar uma mensagem e entraremos em contato em menos de
                24h.</p>
        </section>
     ```

2. **JavaScript para Validação**:
   - Criei um arquivo chamado `script.js` e linkei ao meu HTML.
   - No arquivo `script.js`, selecione os elementos do formulário e adicione os ouvintes de eventos necessários:
     ```javascript
     const inputsVazios = document.querySelectorAll('.input');

    const formulario = document.querySelector('.formulario');

    
   - Nesse código:
     - O laço `forEach` adiciona um ouvinte de mudança a cada campo de entrada. Se o campo não estiver vazio, adicionamos a classe `preenchido`.
     - O ouvinte de envio do formulário verifica se algum campo está vazio. Se sim, impede o envio do formulário e destaca o campo com a classe `campo-invalido`.
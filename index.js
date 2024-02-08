const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para comentários de uma única linha em JavaScript?",
      respostas: [
        "// Comentário A",
        "/* Comentário B */",
        "# Comentário C",
      ],
      correta: 0
    },
    {
      pergunta: "O que significa a sigla DOM em JavaScript?",
      respostas: [
        "Document Object Model",
        "Data Object Module",
        "Dynamic Order Management",
      ],
      correta: 0
    },
    {
      pergunta: "Como declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o evento 'click' em JavaScript?",
      respostas: [
        "Uma função embutida no navegador",
        "Uma operação de clique do mouse",
        "Um tipo de dado em JavaScript",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do método 'parseInt()' em JavaScript?",
      respostas: [
        "Converter uma string para um número inteiro",
        "Arredondar um número para o inteiro mais próximo",
        "Retornar a parte decimal de um número",
      ],
      correta: 0
    },
    {
      pergunta: "O que é 'NaN' em JavaScript?",
      respostas: [
        "Um valor numérico",
        "Not a Number",
        "Um tipo de objeto",
      ],
      correta: 1
    },
    {
      pergunta: "Como verificar se uma variável é do tipo 'string' em JavaScript?",
      respostas: [
        "typeof myVar === 'text'",
        "myVar instanceof String",
        "typeof myVar === 'string'",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Ambos comparam valores e tipos de dados",
        "==' compara valores, enquanto '===' compara valores e tipos de dados",
        "===' compara valores, enquanto '==' compara valores e tipos de dados",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um closure em JavaScript?",
      respostas: [
        "Um bloco de código dentro de uma função",
        "Um tipo de loop",
        "Uma função que tem acesso a variáveis fora do seu escopo",
      ],
      correta: 2
    },
    {
      pergunta: "Como realizar uma iteração sobre os elementos de um array em JavaScript?",
      respostas: [
        "for (let i in myArray)",
        "for (let i = 0; i < myArray.length; i++)",
        "ambos são corretos",
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laco de repeticao
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
   quiz.appendChild(quizItem)
  }
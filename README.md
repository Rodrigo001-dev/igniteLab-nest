<h1 align="center">
  <img alt="Ignite Lab Node" title="#BolaoDaCopa" src="" width="380px" />
</h1>

## :page_with_curl: Projeto

Criando um microsserviço no Ignite Lab!
básicamente é um serviço de notificações totalmente criado com Node e o Framework Nest.js, utilizando alguns princípios do SOLID.

<LINKEDIN>
Fala Dev!

Que evento incrível 🚀🚀

Mais uma vez queria agradecer a Rocketseat por sempre estar se superando e melhorando para trazer conteúdos relevantes e atualizados, e também queria agradecer o Diego pela sua metodologia incrível!!

Depois das aulas tivemos a live que faz o encerramento do evento e implementa o Kafka.

Mas o que é o Kafka?

Basicamente o Kafka é uma plataforma para realizar a comunicação entre serviços.

Mas por que utilizar o Kafka?

Pense na seguinte situação:

Nós temos 2 microsserviços, um para receber as compras do usuário e esse serviço vai ter um banco de dados próprio que vai armazenar os dados de compra e imaginem que temos um outro microsserviço para emissão de nota fiscal eletrônica. Então quando o usuário faz a compra, depois que a compra foi processada, o serviço de compras avisa o serviço de nota fiscal que houve uma nova compra, o serviço de nota fiscal gera a nota fiscal e envia isso por email para o usuário.

Os serviços são totalmente independentes, ou seja, um não depende do outro para funcionar se por algum motivo o serviço de nota fiscal estiver fora do ar, o serviço de compras não vai ser afetado.

Mas o que aconteceria se o serviço de nota fiscal estiver fora do ar?

É ai que entra os sistemas de mensageria assincrona. Utilizando o Kafka como ferramenta vamos ter que entender três principais conceitos:

Producers(Produtores): é todo mundo que envia eventos, ou seja, pegando o exemplo acima o producer vai ser o serviço de compras.

Consumers(Consumidores): é todo mundo que consome eventos, ou seja, pegando o exemplo acima o consumer vai ser o serviço de nota fiscal eletrônica.

Topics: os tópicos são os tipos de mensagem que podemos transitar entre os dois lados(producers e consumers).

Toda vez que o serviço de compras for enviar uma mensagem para o serviço de nota fiscal eletrônica, ele precisa dizer qual o tópico que está sendo enviado, nesse caso temos apenas um único tópico, que é o de compra, ou seja, toda vez que ouver uma compra o serviço de compras vai enviar um evento para o tópico chamado compra informando a nova compra, ele vai enviar junto todas as informações daquela compra e o tópico no Kafka funciona como um banco de dados, cada tópico no Kafka é como se fosse uma tabela.

Mas o que ganhamos com isso?

Se por algum motivo quando houve uma nova compra o serviço de nota fiscal estiver fora do ar, no modelo onde o kafka avisaria esse serviço ele teria um erro, quando temos o comportamento de pulling, ou seja, o consumer buscar a informação ao invés de push onde a informação é enviada para o consumer, nos ganhamos muito mais tolerância a falha, porque se o serviço de nota fiscal estiver fora do ar os outros serviços(consumers) vão conseguir tranquilamente buscar dados da compra, e quando o serviço de nota fiscal voltar ao ar ele vai buscar todas as mensagens que ele não consumiu ainda.

Existem vários outros conceitos quando falamos sobre escala com Kafka mas o core é isso.
</LINKEDIN>

## 🚀 Tecnologias/Bibliotecas utilizadas

<a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript"> </a>
<a href="https://nodejs.dev/" target="_blank"> <img src="https://img.shields.io/badge/-Node.js-32CD32?style=flat-square&logo=Node.js&logoColor=white" alt="Node.js"> </a>
<a href="https://docs.nestjs.com/" target="_blank"> <img src="https://img.shields.io/badge/-Nest.js-ED2945?style=flat-square&logo=Nestjs&logoColor=white" alt="Nest.js"> </a>
<a href="https://jestjs.io/pt-BR/" target="_blank"> <img src="https://img.shields.io/badge/-Jest-FF7800?style=flat-square&logo=jest&logoColor=white" alt="Jest"> </a>
<a href="https://kafka.apache.org/" target="_blank"> <img src="https://img.shields.io/badge/Apache%20Kafka-000?style=flat-square&logo=apachekafka&logoColor=white" alt="Kafka"> </a>
<a href="https://upstash.com/" target="_blank"> <img src="https://img.shields.io/badge/-Upstash-00E9A3?style=flat-square&logo=upstash&logoColor=white" alt="Upstash"> </a>

## 💻 Autor

Feito com 💜 by Rodrigo Rael

<a href="https://www.linkedin.com/in/rodrigo-rael-a7a4b51a9/" target="_blank"> <img src="https://img.shields.io/badge/-RodrigoRael-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https" alt="Linkedin Rodrigo"> </a>
<a href="https://img.shields.io/badge/-rodrigorael53@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rodrigorael53@gmail.com" target="_blank"> <img src="https://img.shields.io/badge/-rodrigorael53@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rodrigorael53@gmail.com" alt="Gmail Rodrigo"> </a>
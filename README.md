📄 Descrição do Projeto

Nome do Projeto: Classificador de Nível do Herói

Descrição:
Este projeto em Node.js permite classificar o nível de um herói com base na quantidade de experiência (XP) informada pelo usuário. Utilizando a linha de comando, o usuário insere o nome e o XP do herói, e o sistema retorna o ranking correspondente, de acordo com faixas predefinidas de XP.

Funcionalidades:

Entrada interativa de dados via terminal.

Conversão de valores e classificação de níveis de XP.

Exibição clara do ranking do herói.

Tecnologias Utilizadas:

Node.js

JavaScript

Módulo readline para interação com o terminal.

Tabela de Rankings:

Faixa de XP	Ranking
Menor que 1000	Ferro
1001 a 2000	Bronze
2001 a 5000	Prata
5001 a 7000	Ouro
7001 a 8000	Platina
8001 a 9000	Ascendente
9001 a 10000	Imortal
Maior que 10000	Radiante

Como Executar:

Clone o repositório:

git clone https://github.com/Js07f/classificador-nivel-heroi.git


Acesse a pasta do projeto:

cd classificador-nivel-heroi


Execute o arquivo:

node heroi.js


Exemplo de Uso:

Digite o nome do herói: Lupo
Digite o XP do herói: 8200

O herói Lupo tem 8200 de XP e está no ranking Ascendente


Autor:
Desenvolvido por Js07f.

🚀 Próximos Passos

Se desejar, podemos expandir o projeto com:

Validação de entrada (por exemplo, garantir que o XP seja um número válido).

Adição de funcionalidades extras, como salvar os dados em um arquivo.

Criação de uma interface web para o mesmo classificador.

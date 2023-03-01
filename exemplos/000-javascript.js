// o comando abaixo apresenta uma mensagem na tela
console.log('ola estou programando em javascript');

/*
         comentario que ocupa mais
         de uma linha
*/

// criação de variavel do tipo texto
let nome = 'maju santos';
// criação de variavel do tipo numerico (inteiro)
let idade = 17;
// criação de variavel do tipo numerico (decimal)
let altura = 1.68;
// criação de variavel do tipo verdadeiro/falso
let trabalha = true; // true = verdadeiro | false = falso
// exemplo de variavel do nome composto 
let corfavorita = 'laranja';
// exemplo de variavel do tipo lista de valores 
let cores_favoritas = [ 'laranja', 'roxo', 'azul'];
//  exemplo de variavel que armazena um objeto 
let endereco = {
    'lougradouro'       :'Rua',
    'nome_lougradouro'  :'brasil',
    'número'            :'50 A',
    'bairro'            :'centro',
    'cidade'            :'Tupã'
};
let covid;
let dengue = null;

console.log('nome: ' + nome)
console.log('idade: ' + idade)
console.log('altura: ' + altura)
console.log('trabalha: ' + trabalha)
console.log('corfavorita: ' + corfavorita)
console.log('cores_favoritas: ' + cores_favoritas[0] + ', ' +  cores_favoritas[1] + ', ' +  cores_favoritas[2] )
console.log('endereço: ' + endereco.lougradouro + ' ' + endereco.nome_lougradouro + ', ' + endereco.número + ' - ' + endereco.bairro + ' - ' + endereco.cidade)
console.log('covid: ' + covid)
console.log('dengue: ' + dengue)

// Elabore um programa que leia um numero e devolva para o usuário o dobro do número informado.
const lerNumero = prompt ("Digite um valor");
alert (lerNumero * 2);

//Elabore um programa que calcule o valor do jantar, sendo o valor total do jantar composto pela conta junto com a taxa de atendimento do garçom. 
const valorConta = prompt ("Digite o valor da conta");
//console.log (typeof valorConta);
const converte =  parseInt(valorConta);
//console.log (typeof converte);
const taxa = prompt ("Digite o valor da taxa :");
const converteTaxa  = parseInt (taxa);
const porcentagem = converte * (taxa / 100);
const valorFinal = converte + porcentagem ;
alert ( valorFinal);
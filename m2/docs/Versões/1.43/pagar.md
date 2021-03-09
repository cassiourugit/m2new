# Pagar
Novidades do módulo Pagar

## 1.43.68

### Manutenção

**Extrato de fornecedores**

Efetuado alteração no Extrato de fornecedores: Adicionado a coluna Tipo do lançamento, o totalizador Total de entradas - saídas e corrigido o Total geral.

Acesso em: Pagar > Relatórios > Extrato de fornecedores

## 1.43.56

### Manutenção

**Pagamento bancário**

Alterado processo de Gerar remessa, para registrar a data de pagamento igual a data de vencimento do título.

Acesso em: Pagar > Contas a pagar > Mais opções > Gerar remessa

## 1.43.15

### Manutenção

**Relatórios de comissões**

Alterado relatórios de comissões para separar as comissões sobre representação e supervisão. 
- Comissões a pagar
- Comissões a pagar resumido
- Previsão de comissões a pagar


Acesso em: Pagar > Relatórios

**Extrato de fornecedor**

Aprimorado exibição dos dados no Extrato de fornecedor, onde muda a ordem de fornecedor para data e mostra os saldos iniciais e finais por dia.

Acesso em: Pagar > Relatórios > Extrato de fornecedor


## 1.43.0

### Novas funcionalidades

**Pag For – Pagamento Bancário**

Disponibilizado processo de Pagamento bancário – PagFor via arquivo, este serviço simplifica o processo de contas a pagar.
Seu acesso é feito pelo Módulo Pagar, através dos processos:

•	Vincular código de barras

•	Remessas para pagto bancário

•	Retorno de pagto bancário

•	DDA

Configurações PagFor:

Em Parametrização > Contas a pagar foram adicionadas duas configurações para o uso do PagFor:

•	Configuração de pagamento bancário: onde deve-se configurar os convênios (bancos) para pagamento bancário.
 
•	Método de pagamento bancário para liquidação normal:  configuração do método padrão para liquidação do título.


Vincular código de barras:

Esse é o processo de vincular e desvincular boletos aos títulos a pagar.

Para vincular, deve-se informar o código de barras ou linha digitável do boleto a pagar, o sistema verifica se é um código válido, caso positivo, busca por um título e realiza a vinculação. Caso encontre mais de um título, abre a janela de pesquisa de títulos para que seja selecionado o título certo pelo usuário.

Após vinculado, as informações do código de barras e linha digitável é registrada no título, podendo ser vista na tela de consultas do Contas a pagar.

Para desvincular, informa-se o código de barras ou linha digitável do boleto, o sistema irá validar se tem algum título vinculado e desfaz o processo, desvinculando o boleto do título.


Remessa para pagamento bancário:

Este é o processo serve para gerar o arquivo de remessa do pagamento bancário.

Para gerar a remessa, selecione o (s) títulos (s) no Contas a pagar, no botão Mais opções, está disponível a opção Gerar remessa, trazendo para gerar a remessa. Informe a conta e convênio, caso tenha mais de um, após o sistema irá validar cada título sugerindo a modalidade de pagamento:

•	Pagamento bancário: se houver dado de boleto definidos no título, informados pelo processo de vinculação ou DDA.

•	Conta corrente, TED e DOC: se o título não conter dados de pagamento bancário (sem código de barras vinculado), o sistema sugere a conta bancária padrão do cadastro do fornecedor e sugere o movimento de Inclusão de registro.

Após processar a remessa, o sistema altera o status de pagamento dos títulos para Remetido, visível na tela de consulta do contas a pagar e gera o arquivo de remessa. Esse arquivo é salvo na pasta definida nas configurações do pagamento bancário.

No botão Mais opções, do Contas a pagar, está disponível o processo de rastrear Remessa de pagamento bancário.
 

Retorno do pagamento bancário:

O processo de retorno bancário serve para tomar essas ações:

•	Confirmar o agendamento de pagamento

•	Confirmar o pagamento, gerando a liquidação do título

•	Retirar o título do pagamento bancário

Ao gerar um retorno de pagamento, deve-se informar a data, conta e o arquivo de retorno, o sistema verifica se há método de pagamento padrão configurado nas parametrizações, efetua a validação e processa o arquivo retornando as ocorrências interpretadas. As ações a tomar para cada título são definidas pelas ocorrências:

•	Títulos pagos têm a ocorrência de liquidação.
 
•	Títulos enviados e aceitos pelo banco aparecem como confirmados.

•	Títulos enviados que tiveram rejeição aparecem como rejeitados.

•	As demais operações aparecem como outros.

Após processar o retorno, o sistema efetua as seguintes ações:

•	Títulos liquidados: o sistema gera um lote de baixa agrupando os títulos com mesma data de pagamento e com mesma modalidade de pagamento.

•	Títulos confirmados: o sistema altera o status de pagamento bancário para “Pagamento bancário”.

•	Títulos rejeitados: o sistema altera o status de pagamento bancário para “Não remetido”.
 

### Manutenção

**Recibo de contas a pagar**

Alterado o campo Observação do Recibo de contas a pagar, permitindo imprimir até 4 linhas de informações.

**Obs:** O mesmo processo foi efetuado no Recibo de contas a receber.

Acesso em: Pagar > Contas a pagar > Mais opções > Recibo


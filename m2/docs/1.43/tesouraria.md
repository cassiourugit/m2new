# Tesouraria
Novidades do módulo Tesouraria

## 1.43.82
### Manutenção

**Fluxo previsto**

Efetuado correção nos lançamentos do Fluxo de caixa previsto, validado tipo de movimento para respeitar entradas e saídas.

Acesso em: Tesouraria > Fluxo previsto


## 1.43.77
### Manutenção

**Extrato de conciliação por extrato**

Efetuado correção no relatório de Extrato conciliação por extrato, para não trazer movimentações canceladas.

Acesso em: Tesouraria > Relatórios > Extrato conciliação por extrato


## 1.43.60
### Manutenção

**Conciliação bancária**

Efetuado correção no processo de Conciliação bancária por extrato, onde ao importar o arquivo, informado a conta conforme o mesmo,  exibia mensagem informando que a conta não era a mesma do arquivo.

Acesso em: Tesouraria > Conciliação bancária por extrato

## 1.43.53
### Manutenção

**Conciliação bancária**

Efetuado correção no processo de conciliação da cobrança por extrato: quando cancelado a conciliação, os registros selecionados, eram excluídos da lista e o movimento financeiro, ficava com status Pendente. Corrigido para que quando for realizado a Conciliação dos lançamentos e o processo de conciliação não for finalizado, quando o usuário voltar a fazer a conciliação os registros que foram marcados e conciliados deverão estar salvos no registro mostrando que eles estão conciliados entre Extrato do Sistema e Extrato do Banco.

Acesso em: Tesouraria > Conciliação bancária por extrato



## 1.43.15
### Novas funcionalidades

**Extrato de conciliação**

Disponibilizado Relatório de conciliação, exibindo os lançamentos conciliados, lançamentos não conciliados e totalizadores.

Acesso em: Tesouraria > Relatórios > Extrato de conciliação por extrato


## 1.43.0
### Novas funcionalidades

**Conciliação por extrato**

A nova conciliação por extrato permite que o sistema realize a mesma utilizando um arquivo OFX. A função funciona da seguinte forma:

Iniciar

É informado uma conta, a data da conciliação e o arquivo com a extensão OFX deve ser inserido.
Ao avançar (“botão próximo”), o sistema submete o arquivo ao servidor, que inicia uma nova conciliação.
O ambiente lê o arquivo para obter o período e define o mesmo como período da conciliação.
Identifica quais são os movimentos novos e quais já estavam inseridos no extrato e depois insere os novos movimentos


Extrato bancário

Essa tela mostra o extrato bancário que foi importado via OFX.
O sistema recupera todos os movimentos do extrato bancário não cancelados no período dessa conciliação.
Caso o registro consultado já esteja conciliado, o sistema mostra o ícone verde.
Ao avançar (“botão próximo”), o servidor faz a conciliação automática e exibe a aba de cheques.


Cheques recebidos


A aba Cheques mostra todos os cheques recebidos nessa empresa com os status apresentado ou reapresentado.
Na aba de extrato bancário todos os movimentos do extrato bancário não excluídos no período dessa conciliação que sejam movimentos de entrada.
Ao clicar na lupa o sistema abre a janela mostrando com que esse registro foi conciliado.


Pesquisar: Essa opção busca o cheque ou movimento bancário.


Conciliar

•	Conciliar os lançamentos:

o	 Status de conciliação muda

o	 Aparece o ícone verde nos dois registros escolhido

o	 O valor conciliado e o saldo no rodapé são atualizados.

•	Não conciliar: 

O sistema rejeita a conciliação se a regra de negócio quebrou. Nesse caso, nada muda na tela.


Desfazer

Essa opção desfaz a conciliação. Ela envia os registros escolhidos na tela do sistema que validará a regra e aceitará ou não a operação.

O sistema valida a regra e poderá:

•	Desfazer a conciliação: 

o	Status de conciliação muda, retornando para não conciliado.

o	O ícone verde é removido nos registros que foram desconciliados.

o	O valor conciliado e o saldo no rodapé diminuem.


Lançamentos

Em "Extrato do Sistema" mostra os registros de movimento financeiro não conciliados.

Em "Extrato bancário" mostra os registros do extrato do banco não cancelados, não conciliados com cheques (no passo anterior) no período da conciliação.

Ao clicar na lupa o sistema abre a tela mostrando com qual extrato esse registro foi conciliado. Na grade superior mostra o registro conciliado no sistema e na inferior mostra o registro do banco.
 
Conciliar

•	Concilia os lançamentos:

o	Status de conciliação muda

o	Aparece o ícone verde nos dois registros escolhido

o	Os valores de entradas e saídas conciliados e o saldo no rodapé são atualizados.

•	Não conciliar: 

O servidor rejeita a conciliação se a regra de negócio quebrou. Nesse caso, nada muda na tela.


Desfazer

Essa opção desfaz a conciliação. Ela envia os registros escolhidos na tela do sistema que validará a regra e aceitará ou não a operação.

O sistema valida a regra de negócio e poderá:


•	Desfazer a conciliação: 

o	Status de conciliação muda, retornando para não conciliado.

o	O ícone verde  é removido nos registros que foram desconciliados.

o	Os valores de entradas, saídas e saldo final são atualizados.


Mais opções/Novo lançamento

Essa opção abre a tela de novo movimento financeiro com alguns dados preenchidos:

•	Conta: Conta da conciliação

•	Data: Data do movimento selecionado no extrato bancário

•	Número: Número do movimento selecionado no extrato bancário

•	Histórico: Histórico do movimento selecionado no extrato bancário

•	E/S: Conforme o movimento selecionado no extrato bancário

•	Valor: Valor do movimento selecionado no extrato bancário

Caso o usuário selecione vários registros no extrato some o valor.

Ao processar a operação você deve mostrar o registro inserido no extrato do sistema e conciliar esse movimento com os movimentos do extrato.


Mais opções/Nova transferência

Essa opção abre a tela de transferência entre contas com alguns dados preenchidos:

•	Conta de saída: Se o movimento for de saída, preencha com a conta da conciliação.

•	Conta de entrada: Se o movimento for de entrada, preencha com a conta da conciliação.

•	Data: Data do movimento selecionado no extrato bancário

•	Número: Número do movimento selecionado no extrato bancário

•	Histórico: Histórico do movimento selecionado no extrato bancário

•	Valor: Valor do movimento selecionado no extrato bancário


Ao processar a operação deve-se mostrar o registro inserido no extrato do sistema e conciliar esse movimento com os movimentos do extrato.


Mais opções/Atualizar dados

Busca os registros na tabela de movimento financeiro e sincroniza o extrato do sistema. Essa função serve para buscar registros que foram inseridos no movimento depois do usuário começa a conciliação.


Finalizar


O botão finalizar, que está presente nas telas de cheque, lançamento e fechamento efetiva a conciliação no financeiro.


Ações ao finalizar: 

•	Compensa os cheques

•	Concilia o movimento financeiro gerado pela compensação do cheque contra o movimento do extrato.

•	Concilia os movimentos financeiros e movimentos do banco selecionados.


### Manutenção
**Conciliação bancária**

Corrigido processo na tela de Conciliação bancária, onde apresentava o valor -0,00 nos campos Total conciliado e Diferença.

Acesso em: Tesouraria > Conciliação bancária

**Histórico financeiro**

Alterado cadastro de Histórico financeiro, adicionado na lista de variáveis o campo Observação, no processo Movimento financeiro.

Acesso em: Tesouraria > Listas > Histórico financeiro



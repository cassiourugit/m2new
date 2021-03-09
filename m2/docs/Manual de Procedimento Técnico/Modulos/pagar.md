## Conteúdo

[Sobre o módulo Contas a pagar](#sobre-o-modulo-contas-a-pagar)


[1 Configurações](#configuracoes)<br>
 -   [1.1 Configuração da filial](#1-1-configuracao-da-filial)
 -   [1.2 Configuração das transações]()
 -   [1.2.1	Transação de nota fiscal de entrada]()
 -   [1.2.2	Transação do contas a pagar]()
 -   [1.2.3	Baixa de contas a pagar]()
 -   [1.2.4	Renegociação de Contas a Pagar]()
 -   [1.2.5	Despesas programadas]()<br>

[2 Processos]()<br>
 -   [2.1 Geração de título de contas a pagar]()
 -   [2.2 Notas fiscais de entrada]()
 -   [2.3 Títulos Manuais]()
 -   [2.4 Operações com títulos a Pagar]()
 -   [2.5 Baixar um título]()
 -   [2.6 Baixar por Método]()
 -   [2.7 Baixa por Endosso]()
 -   [2.8 Realizar a baixa por endosso]()
 -   [2.9 Alteração de Vencimento]()
 -   [2.10 Renegociar]()
 -   [2.11 Pagamento Bancário]()
 -   [2.12 Realizando o Pagamento Bancário]()
 -   [2.13 Alterar Portador]()
 -   [2.14 Alterar Espécie]()
 -   [2.15 Alterar método de pagamento]()
 -   [2.16 Alterar Valor]()
 -   [2.17 Alterar observação]()
 -   [2.18 Vincular / Desvincular código de barras]()
 -   [2.19 Receber Documento (Boleto dp)]()
 -   [2.20 Desfazer receber documento]()
 -   [2.21 Preparar para baixa]()
 -   [2.22 Desdobramento de contas a pagar]()
 -   [2.22.1 Geração de desdobramento de conts a pagar]()
 -   [2.23 Programação de despesas / Despesas programadas]()
 -   [2.23.1 Geração de programação de despesas]()
 -   [2.24 Despesas programadas]()
 

## **Sobre o módulo contas a pagar**

Este módulo auxilia na tomada de decisões sobre todos os compromissos da empresa que representem o desembolso de recursos. O módulo Pagar do sistema visa controlar títulos que são gerados a partir de notas fiscais de entrada ou gerados manualmente. 

 
## **1 Configurações**

Existem algumas configurações que devem ser verificadas no M2 anteriormente à geração dos títulos de contas a pagar.


## **1.1 Configuração da filial**

Esta parte abordará parâmetros importantes para o cadastro de Filial:

a)	Acesse "Listas > Geral > Filiais", clique no botão "Listar", selecione a filial desejada e, em seguida, clique no botão "Editar".


> Quando o parâmetro estiver marcado como "Data da vinculação", o sistema buscará os cheques emitidos nesta data no momento de vincular os cheques no contas a pagar. Quando estiver como "Data prev compensação do cheque", o sistema buscará os cheques pela data de compensação. Para verificar a configuração do campo Status processado, clique em "Listas > Geral > Filiais".

**Haverá 3 diferentes opções para este campo:**

	Bloqueado: Ao criar e processar o título, ele ficará com o status de bloqueado.

	Aberto: Ao criar e processar o título ele ficará com o status de aberto.

	Transação: Respeita a transação do Contas a pagar que possui um status.


**1.2	Configuração das Transações**

Em toda transação existe a guia Contabilidade que serve para empresas que trabalham com lançamentos contábeis. Para esta configuração consulte o manual de contabilidade.


**1.2.1	Transação de nota fiscal de entrada**

Para verificar esta configuração, acesse: Configurações > Transações > Compras > Notas fiscais de Entrada, clique no botão Listar. Selecione a transação desejada e clique em Editar. O parâmetro fica localizado conforme demonstra a Figura 3.
	 
						

**1.2.2	Transação do Contas a Pagar**

Para que seja possível efetuar as movimentações de contas a receber é preciso configurar as transações conforme os menus abaixo; No cadastro da transação de notas de Entrada : “Gera contas a pagar conforme item acima”; Para verificar esta configuração, acesse: Transações > Pagar > Contas a Pagar. 
 

Para verificar esta configuração, acesse o menu: Transações > Receber > Contas a Receber. Abaixo encontra-se a tela do cadastro da transação. Nesta guia poderá ser configurada a transação de contas a receber, conforme imagem a descrição dos campos:

Campos da tela
Código	Este campo é automático e sequencial gerado pelo sistema.
Descrição	Este campo é utilizado para identificar a transação.
Portador	Este campo é configurado para que ao efetuar um cadastro de contas a receber  o registro possua um portador, que poderá ser carteira, banco identificando onde ou quem está de posse do título. O cadastro de portador localiza-se em Listas > Financeiro > Geral > Portadores.
Espécie de títulos	Este campo é utilizado para identificar qual o tipo do título, Dinheiro, Duplicata. O cadastro da Espécie de títulos localiza-se em Listas > Financeiro > Geral > Espécie de títulos.
Série	Este campo define a série e a numeração do título de contas a pagar. O cadastro da série localiza-se em Listas > Comercial > Geral > Séries de notas fiscais.
Tipo lançamento	Este campo define qual será o tipo de registro de contas a receber.
Contas a pagar	Ao utilizar a transação cujo tipo seja Contas a pagar, será possível efetuar a baixa deste título, renegociar, substituir, enfim, efetuar as ações conforme mencionadas, num fluxo normal de baixa e recebimento.
Nota de débito	Ao utilizar a transação cujo tipo seja Nota de débito, este registro será utilizado na baixa de contas a receber, por exemplo, sua empresa vendeu 10 itens de um determinado item, porém seu cliente por algum motivo irá devolver 5 itens, o seu cliente não devolverá o dinheiro da devolução parcial dos itens para você, será gerada uma nota de Débito para o seu cliente afim de utilizar este débito para uma nova venda ou abater no registro de contas a receber gerado pela venda destes itens. 
Situação do título	Este campo define se o título gerado será Aberto ou Bloqueado.

Ainda no cadastro desta transação de contas a pagar existe a aba Contabilidade que serve para empresas que utilizam a contabilidade do M2. Para mais detalhes, consulte o manual M2 contabilidade.


**1.2.3	Baixa de contas a pagar**

Esta transação serve para títulos que já foram gerados e que precisam ser baixados. Para verificar tal configuração, acesse: Transações > Pagar > Baixa de Contas a Pagar, clique em Listar.

Para verificar o cadastro de qualquer transação de baixa de contas a pagar, selecione uma determinada transação e clique em Editar.  Abaixo, na Figura 5, encontra-se a tela do cadastro deste tipo de transação e a descrição dos campos:



Campos da tela

Código	Este campo é automático e sequencial, gerado pelo sistema.
Descrição	Este campo é utilizado para identificar a transação.
Transação de Saída (Pagamento)	A transação que é informada neste campo deve ser do tipo Saída, pois ela será responsável por efetuar a movimentação financeira no módulo Tesouraria, para cadastrar uma transação acesse o menu: Configurações > Transações >  Tesouraria > Movimento Financeiro.

Transação de entrada (troco)	A transação que é informada neste campo deve ser do tipo entrada, pois ela será responsável por efetuar a movimentação financeira no módulo Tesouraria, para cadastrar uma transação acesse o menu:  Configurações > Transações >  Tesouraria > Movimento Financeiro.

Trans. De adiantamento de Fornecedor	A transação que é informada neste campo deve ser do tipo Adiantamento, pois ela será responsável por efetuar a movimentação financeira no módulo Tesouraria. Para cadastrar uma transação, acesse o menu: Configurações > Transações > Tesouraria > Movimento Financeiro. 

Transação p/ pagto c/ Cheq. Emit. 	A transação que é informada neste campo deve ser do tipo Saída, pois ela será responsável por efetuar a movimentação financeira no Módulo tesouraria, para cadastrar uma transação acesse o menu: Configurações > Transações >  Tesouraria > Movimento Financeiro.

Transação de baixa CR	A transação informada neste campo será responsável por gerar o lote de baixa de contas a receber no caso de utilização de títulos endossados ao efetuar a baixa do Contas a pagar.
Conta corrente Saída	Neste campo informa-se a conta que receberá a movimentação financeira.

Conta Corrente Entrada	Neste campo informa-se a conta que receberá a movimentação financeira.

Tipo Lançamento	Este campo definirá o lançamento que será gerado a partir da baixa de contas a receber, sendo que ela está divida em 3 partes: Lançamento; Financeiro, Contábil e Nenhum.

Financeiro	Quando selecionada esta opção ao efetuar a baixa do título é gerado um lote de baixa de Contas a receber, este registro irá gerar um movimento financeiro na tesouraria registando a entrada da receita. É importante lembrar que esta opção é a mais usada pelos clientes, pois nesta configuração é possível efetuar o registro da movimentação na tesouraria, possibilitando gerenciar melhor as movimentações financeiras.

Contábil	Quando selecionada esta opção ao efetuar a baixa do título, será gerado somente o lançamento contábil, não gerando nenhum movimento financeiro.

Nenhum	Quando selecionada esta opção, não será efetuada nenhuma ação sobre o registro de lote de baixa, não será gerado nenhum lançamento financeiro na tesouraria e não será registrado nenhum lançamento contábil.

Tipo Estorno	Este campo definirá qual será a ação sobre o registro do lote de baixa ao efetuar a reabertura ou cancelamento do registro. O tipo de estorno está divido em duas partes:

i.	Excluir lançamento: Quando definido este tipo, ao efetuar o cancelamento ou reabertura de um determinado lote de baixa de contas a receber, será efetuada a exclusão do registro de movimento financeiro de entrada.

ii.	Lançar contrapartida: Quando definido este tipo, ao efetuar o cancelamento ou reabertura de um determinado lote de baixa de contas a receber, será lançado na tesouraria um movimento financeiro de saída no valor do lote de baixa, com isso anulando a entrada efetuada, por exemplo, um determinado lote de baixa registra entrada de R$100, ao efetuar o cancelamento ou reabertura deste lote, será gerado um lançamento de saída no valor do lote de baixa. Importante É importante lembrar que quando é referenciado movimento de entrada, significa que entrou receita na tesouraria; e quando referenciado a saída, significa que saiu dinheiro da tesouraria.

Utiliza notas de crédito	

Ao marcar esta opção, será possível utilizar notas de crédito ao efetuar a baixa de contas a pagar. Será habilitado na tela Lote de baixa de contas a pagar, na guia Contas a Pagar através do botão Ações a opção Utilizar notas de crédito. Esta opção pode ser utilizada quando houver uma devolução de um determinado produto por parte da empresa, neste caso poderá ser configurada a transação de saída que será do tipo devolução, para que seja gerada uma nota de crédito (contas a receber), caso seja comprado deste fornecedor novamente, será possível abater esta nota de crédito ao efetuar a baixa de contas a pagar. 
Utiliza vinculação de cheques emitidos	Ao marcar esta opção será possível vincular cheques emitidos ao efetuar a baixa de contas a pagar. Para cadastrar um cheque, acesse o módulo Tesouraria > Cheques emitidos.

Utiliza endosso de cheques recebidos

Ao marcar esta opção, será possível vincular cheques recebidos ao efetuar a baixa de contas a pagar por endosso. Para cadastrar um cheque, acesse o módulo Tesouraria > Cheques recebidos. 

Utiliza adiantamentos lançados na movimentação financeira	Ao marcar esta opção será possível vincular adiantamentos financeiros ao efetuar a baixa de contas a receber. Exemplo de aplicação: Um cliente compra da sua empresa R$ 100, porém como parte da negociação você solicita 50% do valor, ao efetuar a baixa deste título, você poderá utilizar o valor do “sinal” para abater no Contas a receber gerado.
Utiliza endosso de títulos a receber	Ao marcar esta opção, será possível efetuar baixa de contas a pagar através de endosso com títulos de contas a receber. 

Importante lembrar que ao marcar esta opção, você deverá utilizar a opção Baixa título (s) – por endosso.
 

**1.2.4	Renegociação de Contas a Pagar**

Esta transação permite realizar a renegociação de um título já gerado e com o status em aberto. Para verificar esta configuração, acesse: Transações > Pagar > Renegociação de contas a Pagar. Na Figura 6 estão demonstrados os campos de preenchimento para cadastro desta transação:


**1.2.5	Despesas programadas**

Esta transação permite lançar títulos que possuem despesas programadas na empresa. Para verificar esta configuração, acesse: Transações > Pagar > Despesas programada e clique em Listar: 

Na Figura 7 estão presentes os campos de preenchimento para cadastro desta transação de despesa:


# **2	Processos**

**2.1	Geração de título de contas a pagar**

O processo de contas a pagar pode ser gerado em duas partes distintas: Notas fiscais de entrada - Compras > Notas Fiscais de entrada e manual Módulo Pagar > Contas a pagar. Segue abaixo conforme os tópicos, o detalhamento dessas duas formas.


**2.2	Notas fiscais de entrada**

A geração do título de contas a pagar pela nota fiscal de entrada é gerada a partir da configuração da transação utilizada na nota. Esta transação deve estar configurada em seu parâmetro para gerar o Contas a pagar. O parâmetro está mencionado na Figura 3, logo no início do manual. 

Na aba Pagamentos são solicitados os preenchimentos dos campos para gerar os títulos (Figura 8).

O campo Condição de pagamento é gerado conforme a necessidade de quantidade de parcelas em que a empresa pretende realizar a compra. É por meio deste campo que é gerado um ou mais títulos.


**2.3	Títulos Manuais**

A geração de títulos manuais não possui vínculos com notas de entrada. Para criar um título manual, acesse o módulo Pagar > Contas a Pagar. Clique no botão Novo, informe a transação de contas a pagar e preencha os demais campos. Abaixo segue a Figura 9, demonstrando a tela de geração de título manual:
 

**2.4	Operações com títulos a Pagar**

Ao criar um título de contas a pagar, seja ele manual ou através de notas de entrada, é possível realizar algumas operações com este título.  Com o botão auxiliar do mouse ou o botão Ações é possível verificar as operações que podem ser realizadas com os títulos. A figura abaixo exibe as operações que podem ser realizada em um título:

 
Figura 10 – Operações com títulos de contas a pagar


2.5	Baixar um título

Para realizar a baixa de um título de contas a pagar, selecione o título desejado. No botão Ações selecione a opção Operações > Baixar. O sistema exibirá uma tela chamada Lote de Baixa de Contas a Pagar com três abas: Principal / Contas a Pagar / Totalizadores.

Na aba Principal informe a transação de baixa de contas a pagar. Preencher os demais campos conforme necessidade. No Contas a pagar é descriminado o título que foi selecionado para ser baixado. Na aba Contas a pagar é possível realizar o pagamento parcial do títulos, na coluna onde é informado o valor total do título, é possível colocar valores a menos, como colocar valores a maior. * O valor maior ficará como juros na aba pagamentos, * O valor menor que o título ficará como saldo a ser baixado na aba Totalizadores e o título ficará com o status Parcial. Na guia Totalizadores é demonstrado o total dos valores de título da baixa e se há saldos pendentes ou juros. Ao processar a baixa do(s) título(s), o sistema gera um registro de lote de pagamento. Este registro encontra-se em Pagar > Lotes de pagamento.


2.6	Baixar por Método

Para realizar a baixa do título por método, siga os passos:

1°	Selecione o título de contas a pagar;

2°	No botão Ações selecione a opção Operações > Baixar por método

3°	O sistema exibirá uma tela chamada Baixar por método de pagamento.

4°	Esta tela possui três abas: Principal, Totais, Contabilidade.

5°	Na aba Principal é solicitada uma transação. A transação informada é uma transação de Baixa de contas a pagar. 

6°	Informa-se a conta corrente que será movimentado o valor, o método, quando utilizado cheque, automaticamente o sistema já irá cadastrar os cheques, após isso, escolhe-se a sequência da baixa. Para os títulos que não forem definidos, na sequência será gerado somente um movimento financeiro.

7°	Na aba Totais são exibidos campos não digitáveis que apenas mostra os totais do(s) título(s).


2.7	Baixa por Endosso

Para realizar este tipo de baixa, crie uma transação de baixa de contas a receber por endosso e uma transação de baixa de contas a pagar por endosso.

i.	Cadastro da transação de contas a receber por endosso: Acesse Configurações > Transações > Receber > baixa de contas a receber. Lembrando que o campo Tipo lançamento deve ser Contábil e deve estar marcado o parâmetro Utilizar endosso de títulos a receber. Feito este procedimento, realize a próxima configuração.

ii.	Cadastro da transação de contas a pagar por endosso: Acesse Configurações > Transações > Pagar > Baixa de contas a pagar. Lembrando que o campo Tipo lançamento deve ser Contábil e deve estar marcado o parâmetro Utilizar endosso de títulos a receber. Feito este procedimento realize a próxima configuração.


2.8	Realizar a baixa por endosso	

Para realizar a baixa de títulos por endosso, siga os passos:

1°	Selecione o título de contas a pagar.

2°	No botão Ações > Operações > Baixar por endosso.

3°	O sistema exibirá uma tela chamada Lote de Baixa contas a pagar (por endosso).

4°	Esta tela mostrará 4 abas: Principal / Contas a Pagar / Títulos Endossados / Totalizadores.

5°	Na tela Principal, informe a transação de baixa.

6°	No botão Ações, selecione a opção Endossar título a receber.

7°	O sistema emitirá uma tela de assistente para localizar o título a receber. Confira a seguinte figura:

 
Figura 11 – Assistente para vinculação de contas a receber


1°	Através dos filtros da janela do assistente, escolha o título a receber e clique no botão Vincular Selecionado.

2°	O título vinculado será mostrado na aba Títulos endossados.

3°	Ambos os títulos ficarão com status de Total após finalizar a baixa.

4°	Após realizar este procedimento, o sistema irá gerar um registro de lote de recebimento por endosso. 

5°	Este registro encontra-se em Pagar > Lotes de recebimento por endosso. 

6°	Caso seja necessário cancelar este lote, o sistema armazena o registro de cancelamento em estorno de endosso. Localizado em Pagar > Estorno de endosso.


2.9	Alteração de Vencimento

Para realizar a alteração do vencimento em um título, siga os passos:

1°	Selecione o título de contas a pagar.

2°	No botão Ações selecione a opção Operações > Alterar vencimento.

3°	A nova data deve ser informada na coluna Novo vencimento.

4°	A figura abaixo mostra a tela de alteração de vencimento:

 
Figura 12 – Alteração de vencimento


2.10	Renegociar	

A renegociação permite originar vários títulos a partir de um já gerado. Ela é realizada sobre um título com o status Aberto. Para realizar a renegociação, No botão Ações selecione a opção Operações > Renegociar, será exibida a tela chamada Renegociação de contas a Receber, na guia Principal deve estar informada a transação de renegociação de títulos, na guia Substituídos aparecem descriminados os títulos que estão em renegociação. Na guia Substitutos possui campos que auxiliam na geração de novos títulos. O campo quantidade de títulos é onde será divido o valor original do título com essa quantidade informada. Os campos de preenchimento são um auxilio para se inserir as informações em todos os títulos da grade. A grade onde estão descriminados os títulos pode ser editada conforme a necessidade. A figura abaixo mostra os campos para preenchimento:


 
Figura 13 – Renegociação de contas a pagar


Após preencher todos os dados necessários e processar o título original, ficará com o status de Substituídos. Este status não permite a realização de nenhum procedimento, apenas rastreamento dos títulos originados a partir dele.

Para localizar os títulos substitutos do original, selecione o título origem que estará com o status de Substituído, clique no botão Ações e selecione a opção Rastreamento > Renegociação substituição. O sistema exibirá o registro de renegociação. Neste registro, selecione e rastreie (contas a pagar substitutos). Após realizar este procedimento, o sistema gera um registro de renegociação, localizado em Pagar > Renegociação de títulos.


2.11	Pagamento Bancário

Em títulos de contas a pagar é possível realizar o pagamento bancário, para isso é necessário realizar o cadastramento de Conta Corrente; Portador; Modalidade; Tipo Movto; Instrução; Mensagens;
	
Para cadastrar a conta corrente, siga os passos:

1°	Acesse o menu Listas > Financeiro >Tesouraria > Contas Correntes.

2°	Clicar no botão Novo


3°	O sistema exibirá a tela Conta Corrente.

4°	Esta tela possui 5 abas

5°	Na aba principal existe o pré-cadastro de Tipo de conta / Banco/ Leiaute.

6°	O tipo de conta é cadastrado em: Listas > Financeiro > Tesouraria > Tipo de conta.

7°	Abaixo você observa a figura que mostra o cadastro do tipo de conta:

 
Figura 14 - Cadastro de tipo de conta


O cadastro do banco localiza-se em: Listas > Financeiro > Geral > Bancos. Abaixo você observa a tela que exibe os campos de preenchimento:

 
Figura 15 – Cadastro de Banco


O cadastro do leiaute de extrato bancário encontra-se em: Configuração > Leiautes > Leiautes de arquivo. A tela abaixo exibe os campos de preenchimento:

 
Figura 16 - Cadastro de Leiaute


1°	Após realizar estes pré-cadastros, preencher a aba Principal.

2°	Na aba Convênios existem as colunas Carteira, Variação, Remessa, Retorno, Cód. Boleto, Espelho Boleto, Msg. Boleto, Montagem NN.

3°	A carteira é cadastrada no seguinte caminho: Listas > Financeiro > Receber > Carteira de cobrança

4°	A variação está no mesmo caminho: Listas > Financeiro > Receber > Carteira de cobrança

5°	A remessa e o retorno encontram-se no Leiaute (mostrado nos passos 10 e 11)

6°	O código do boleto é cadastrado em Configuração > Leiautes > Leiautes código do boleto.

7°	Espelho boleto fica armazenado no relatório.

8°	Msg boleto fica armazenada em mensagens padrão (Listas > Geral > Mensagens padrão)

9°	A coluna Mensagem NN possui o código fonte.

10°	Os leiautes de remessa e retorno foram explicados no passo 10 e 11

11°	Na aba Filiais do cadastro da conta corrente é informado a filial que irá trabalhar com esta conta.

12°	Na aba Usuários informam-se os usuários autorizados a visualizar a conta.

13°	A aba Contabilidade é utilizada para empresas que trabalham com contabilidade.

14°	Após realizar todos os preenchimentos da aba, clique em Processar para validar sua conta corrente.

	Portador: O portador está explicado no cadastro Transação \ Contas a Pagar
		
	Modalidade: A localização deste cadastro encontra-se em: Listas > Financeiro > Pagar > Modalidade. A figura abaixo exibe os campos a serem preenchidos:

 
Figura 17 – Tela Modalidade de remessa


	Tipo movto: O cadastro deste tipo encontra-se em: Listas > Financeiro > Pagar > Tipos de movimento de remessa. A figura abaixo exibe os campos de preenchimento:

 
Figura 18 – Tipo de Movimento de remessa


	Instrução: A instrução é cadastrada no seguinte caminho: Listas > Financeiro > Pagar > Instruções de remessa. A figura abaixo mostra a tela de cadastro:

 
Figura 19 – Instrução de remessa


	Mensagem: A mensagem é cadastrada no seguinte caminho: Listas > Geral > Mensagens Padrão. Abaixo você confere os campos do cadastro na tela:

 
Figura 20 – Tela de cadastro de mensagem

	
2.12	Realizando o Pagamento Bancário

Para realizar o pagamento bancário, siga os passos: 

1°	Selecione o título de contas a pagar.

2°	Clique no botão Ações e selecione a opção Operação > Pagamento Bancário.

3°	Na aba Principal, informe a conta, o convênio e o portador.

4°	Na aba títulos, preencha os campos solicitados. 

5°	Ao preencher estes campos, automaticamente serão direcionados os dados para a linha que descrimina o título. Nesta linha existem colunas que devem ser preenchidas conforme a necessidade do banco.

6°	Clicar em Processar.

7°	O título ficará com o status de Pagamento bancário. 


2.13	Alterar Portador 
	
Para realizar este procedimento, siga os passos: Selecione o título de contas a pagar. Clique no botão Ações e selecione a opção Operações > Alterar portador. A figura abaixo mostra a tela de alteração de portador:

 
Figura 21 – Alteração de portador
	
	
2.14	Alterar Espécie

Para realizar este procedimento, siga os passos: clique no botão Ações e selecione a opção Operações > Alterar espécie. Abaixo está a tela de alteração da espécie de um título:

 
Figura 22 – Alteração de espécie

	
2.15	Alterar método de pagamento 

Para realizar este procedimento, selecione o titulo de contas a pagar, clique no botão Ações e selecione a opção Operações > Alterar método de pagamento. A figura abaixo mostra a tela de alteração método:

 
Figura 23 – Alteração de Método

	
2.16	Alterar Valor

Para realizar este procedimento, selecione o título de contas a pagar, clicar no botão Ações e selecione a opção Operações > Alterar Valor. Abaixo você encontra a tela de alteração.

 
Figura 24 – Alteração de valor


2.17	Alterar observação

Para realizar este procedimento, selecione o título de contas a pagar, clique no botão Ações e selecione a opção Operações > Alterar Observação. Abaixo você confere a tela de alteração:

 
Figura 25 – Alterar observação


2.18	Vincular / Desvincular código de barras

Este processo é utilizado quando o sistema está configurado para utilização da remessa de pagamento bancário. A opção de vincular e desvincular está atrelada à leitura do código de barra efetuada no boleto bancário para pagamento. Através da leitura do código de barras, o sistema efetua a identificação dos títulos com determinado valor e vencimento e os coloca na relação de títulos encontrados da tela. Após o processamento das informações na tela de contas a receber é preciso personalizar a lista para que seja visualizado o código de barras vinculado ao título.


2.19	Receber Documento (Boleto dp)

Esta opção no sistema auxilia o usuário a identificar os registros em que foram recebidos os boletos para pagamento. Para melhor identificar quais os registros que já tiveram seus boletos recebidos, através da opção Personalizar listas, selecione o campo S/N doc. Recebido. Para definir o recebimento do boleto para o título, selecione o título de contas a pagar, clique no botão Ações e selecione a opção Operações > Receber Documento (boleto dp). Abaixo você encontra a tela de recebimento.

 
Figura 26 - Recebimento de título


2.20	Desfazer receber documento

Para realizar este procedimento, selecione o título de contas a pagar, clique no botão Ações e selecione a opção Operações > Desfazer receber documento. Este processo cancela o procedimento explicado acima (Receber Documento (Boleto dp).


2.21	Preparar para baixa 

Esta opção está disponível para efetuar o lançamento das informações referente a: Juros, Desconto, Outros Acréscimos, Outros abatimentos para os títulos selecionados. Para inserir estas informações temos duas opções: i) através do botão do teclado Insert; ou ii) através do botão direito do mouse sobre o registro Operações > Preparar para baixa. 

Após definidas as informações referentes a: Juros, Desconto, Outros Acréscimos, Outros abatimentos de um ou mais títulos, você poderá acessar Operações > Concluir baixa(F9), logo será exibida uma  tela com a descrição Preparação para lote de baixa..., você poderá selecionar a opção Gerar lote de baixa por método, o funcionamento esta no item 13 deste manual ou método  convencional Lote de baixa normal”.

Após selecionar, será exibida uma tela com os registros selecionados e com as informações referentes a: Juros, Desconto, Outros Acréscimos, Outros abatimentos informados pelo usuário anteriormente. Como sugestão, você pode efetuar uma conferência e processar as informações. Você poderá desfazer toda ação através da opção Operações > Desfazer lote de preparação.


2.22	Desdobramento de contas a pagar

Permite o lançamento de despesas com mais de uma data de pagamento como por exemplo: realizar o lançamento de um financiamento em 60 meses.


2.22.1	Geração de desdobramento de contas a pagar

Para realizar o procedimento de desdobrar contas a pagar, siga os passos:

1°	Acesse o módulo Pagar > Desdobramento de contas a pagar. O sistema exibirá a tela Desdobramento de contas a pagar. A transação informada nesta tela é transação de pagar. O campo número será o prefixo do título a ser criado.

2°	No campo valor total, informe o valor que será rateado entre as quantidades de parcelas.

3°	Informe a quantidade de parcelas.

4°	Informe o intervalo entre as parcelas e preencha os demais campos. Na aba Parcelas estarão todos os títulos descriminados com os valores rateados. Todas as linhas da aba Parcela podem ser editadas caso seja necessário. 


2.23	Programação de despesas / Despesas programadas

O processo de programação de despesa tem como função programar as despesas futuras, auxiliando na geração do título de contas a pagar. Exemplos deste caso são: contas telefônicas, energia elétrica entre outros. Ao gerar um registro de programação de despesa, é armazenado automaticamente um registro de despesa programada. Este registro influenciará no momento de lançar um título de contas a pagar, quando informado o mesmo fornecedor em que foi cadastrada a despesa. O sistema emitirá um alerta informando que tal fornecedor possui uma despesa já programada e que será possível lançar o título já com os dados preenchidos.
	

2.23.1	Geração de programação de despesas

Para realizar este procedimento, siga os passos:

1°	Acesse o módulo Pagar > Programação de despesa.

2°	Clique no botão Novo. O sistema abrirá a tela chamada Programação de Despesa. 

3°	Preencha todos os campos. 

4°	No campo Valor total informe o valor que será rateado entre as quantidades de parcelas. A aba Parcelas estará com todos os títulos discriminados com os valores rateados. 

5°	Ao clicar em Processar, o registro ficará com o status de gerado e automaticamente será gerada a Despesa programada, que localiza-se em Pagar > Despesas Programadas. 

6°	Esta despesa programada influenciará no momento de gerar um título de contas a pagar e utilizar o mesmo fornecedor da despesa. A figura abaixo mostra a tela de alerta no momento de gerar o Contas a pagar, quando informado o mesmo fornecedor da despesa já cadastrada.

 
Figura 27 - Alerta no contas a pagar (Despesa)


Ao clicar em Sim o sistema emitirá a tela de vinculação, conforme mostrado abaixo. Selecione a despesa e clique no botão Lançar.

 
Figura 28 – Assistente de vinculação de Despesa Programadas


2.24	Despesas programadas

A geração de despesa programada origina-se da programação de despesa, porém, pode ser gerada manualmente acessando direto o caminho: Pagar > Despesas programadas. O registro desta despesa programada pode ser gerado em apenas uma única parcela. 











































# Receber
Novidades do módulo Receber

## 1.43.81
### Manutenção

**Contas a receber**

Corrigido processo de "Copiar link para boleto" onde ocorria mensagem de erro não permitindo o processo.

Acesso em: Receber > Contas a receber > Mais opções > Copiar link para boleto

## 1.43.80
### Manutenção

**Contas a receber**

Efetuado correções para atualizar a coluna Número NFS-e na tela de consulta de contas a receber de acordo com a Nota fiscal de serviço emitida.

Acesso em: Receber > Contas a receber

## 1.43.75
### Manutenção

**Negociação de cobrança**

Efetuado correções no Painel de cobrança:
1.  Paginação: na aba Clientes, o processo de paginação não estava exibindo os dados conforme opções informadas.
2. Filtro dias de atraso: não estava listando conforme filtro aplicado.
3. Título da coluna: Ajustado título da coluna 'Cheques' em duplicidade, para 'Total'
4. Adicione totalizadores no rodapé da tela para as colunas: Títulos, Cheques, Qtde de títulos, Qtde de cheques, Qtde total.
5. Adicionado o filtro Qtde. títulos: exibe os clientes que tem qtde. de títulos maior ou igual ao dado informado.
6. Adicionado filtro Risco de crédito: exibe os clientes conforme filtro aplicado. O usuário pode tomar ações de cobranças diferentes para clientes com riscos diferentes.


Acesso em: Receber > Negociações de cobrança


## 1.43.68
### Manutenção

**Extrato de clientes**

Efetuado alteração no Extrato de fornecedores: Adicionado a coluna Tipo do lançamento, o totalizador Total de entradas - saídas e corrigido o Total geral.

Acesso em: Receber > Relatórios > Extrato de clientes

## 1.43.61
### Manutenção

**Retornos bancários**

Efetuado correção na importação do retorno bancário do banco SICOOB, onde ocorria mensagem de Object reference.

Acesso em:  Receber > Retornos bancários > Novo


## 1.43.60
### Manutenção

**Lançamentos de cartões**

Realizado correção no Lançamento de Cartão: onde o sistema permitia cancelar o lançamento, antes de cancelar as baixas.

Acesso em:  Receber > Lançamentos de Cartões

**Contas a receber**

Alterado processo de cópia de Contas a receber: ao efetuar a cópia, exibe a mensagem: "Você deseja atualizar a data de emissão para hoje?" para facilitar o uso do recurso.

Acesso em: Receber > Contas a receber > Mais opções > Copiar


## 1.43.58
### Manutenção

**Negociação de cobrança**

Realizado alterações no processo de Cobrança:
1. Adicionado filtro Período de vencimento, para busca pela data de vencimento dos títulos.
2. Adicionado Contador de títulos em atraso na tela de consulta de clientes. (Qtd. títulos, Qtd. cheques, Qtd. total)
3. Adicionado coluna Risco de crédito na tela de de consulta de clientes
4. Adicionado a opção 'Alterar risco de crédito' no menu Mais opções, essa ação muda o risco de crédito cadastrado no cliente.
5. Adicionado a opção Risco de crédito do cliente na área Resumo, no painel de negociação, permitindo alterá-la.
6. Adicionado contador de títulos na tela de cobrança
7. Disponibilizado a opção de alterar a visão da lista de títulos, agrupando ou não pela origem.

Acesso em: Receber > Negociação de cobrança

**Adiantamentos**

Efetuado correção no processo de Receber adiantamento, onde exibia mensagem de alerta e não processava a solicitação.

Acesso em: Receber > Adiantamentos > Receber adiantamento


## 1.43.56
### Manutenção

**Retorno bancário**

Efetuado correção no processo de Retorno bancário, onde ao processar retorno com Conta transitória, exibia mensagem informando não haver conta financeira para a transferência financeira.

Acesso em: Receber > Retorno bancário

## 1.43.50
### Manutenção

**Copiar link para o boleto**

Disponibilizado na tela de consulta do contas a receber em Mais opções, a opção 'Copiar link para o boleto', ao executar essa ação, o sistema copia o link do boleto para a área de transferência. Assim o usuário poderá colar o link no e-mail ou Whats app.

Acesso em: Receber > Mais opções > Copiar link para o boleto

## 1.43.21
### Novas funcionalidades

**Relatório de retenções**

Disponibilizado o relatório de retenções sobre as saídas. O relatório mostra os títulos liquidados no período.

Alterações:
1. No cadastro de cliente > fiscal > Vendas, disponibilizado o campo "Deduzir retenções do valor a receber e enviar no arquivo XML".
2. Na Nota fiscal de saída e de serviço: se o parâmetro acima, estiver desmarcado, irá calcular a retenção, mas não enviará a informação no XML e não irá diminuir o valor do título a receber.
3. Ao gerar o título a receber: será rateado os valores retidos da Nota fiscal para os títulos, calculando o valor líquido de cada título.

Acesso em: Receber > Relatórios > Impostos retidos sobre as contas a receber


## 1.43.15
### Novas funcionalidades

**Aviso de vencimento com link público**

Disponibilizado processo de consulta de títulos atrasados para imprimir o boleto bancário. Esse recurso unifica o e-mail de aviso de vencimento e o link público.

Alterações:
1. Na parametrização> Comum> Templates de e-mail, foi adicionada a opção 'Títulos vencidos'.
2. Disponibilizado o template padrão para essa operação.
3. Na parametrização > Contas a receber foi adicionada a opção 'Aviso de contas a receber vencidas (Novo), para habilitar a consulta de títulos vencidos.
4. No cadastro do cliente, foi adicionado a opção 'Enviar e-mail de aviso de título vencido no cliente.

Funcionamento:
Uma vez por dia o sistema verifica os títulos vencidos. Se existir título vencido que ainda não foi notificado para o cliente, o sistema gera um link com duração de 10 dias para consultar esses títulos vencidos, com todos os títulos inclusive os já notificados.
Depois disso, o sistema envia um e-mail com a relação de títulos atrasados e o link com duração de 10 dias.



### Manutenção

**Histórico do boleto**

Aprimorado o processo de registro das informações no Histórico do boleto bancário, para gerar as informações das seguintes operações:

•	Boleto emitido

•	Boleto impresso

•	Boleto cancelado

•	Boleto atualizado


Acesso em: Receber > Boletos


**Emissão de boleto bancário**

Alterado a ordenação ao emitir vários boletos bancários, efetuando o agrupamento por clientes.

Acesso em: Receber > Contas a receber > Mais opções > Emitir boleto > Títulos


**Baixa de contas a receber**

Realizado alteração no processo de Baixa de Contas a Receber. O sistema não permitia acesso a aba contabilidade, mesmo após configurar toda a aba Principal.

Acesso em: Receber > Contas a receber

**Extrato de cliente**

Aprimorado exibição dos dados no Extrato de cliente, onde muda a ordem de cliente para data e mostra os saldos iniciais e finais por dia.

Acesso em: Receber > Relatórios > Extrato de cliente


## 1.43.0


### Manutenção

**Histórico do boleto**

Aprimorado o processo de registro das informações no Histórico do boleto bancário, para gerar as informações das seguintes operações:

•	Boleto emitido

•	Boleto impresso

•	Boleto cancelado

•	Boleto atualizado


Acesso em: Receber > Boletos


**Emissão de boleto bancário**

Alterado a ordenação ao emitir vários boletos bancários, efetuando o agrupamento por clientes.

Acesso em: Receber > Contas a receber > Mais opções > Emitir boleto > Títulos


**Baixa de contas a receber**

Realizado alteração no processo de Baixa de Contas a Receber. O sistema não permitia acesso a aba contabilidade, mesmo após configurar toda a aba Principal.

Acesso em: Receber > Contas a receber


# Compras
Novidades do módulo de Compras


## 1.43.83
### Manutenção

**Importar XML da NF-e**

Efetuado ajuste no processo:

1. A unidade selecionada será a unidade da nota de entrada e a quantidade do xml, será a quantidade gerada na nota de entrada.

    **Ex.:** Importar um XML com unidade "UN" e quantidade 1, se alterar a unidade para CX (sendo que essa unidade contém 6 unidades por caixa), a nota será gerada com quantidade 1 e unidade CX. A movimentação de estoque se dará em 6 unidades.

2. Ao importar XML com parcelas: ao Finalizar, apresentar a tela para inserir as condições de pagamento.

Acesso em: Compras > Importar XML da NF-e²

**Pedidos de compra**

Removido mensagem "Nenhum plano de contas configurado nesta empresa" que aparecia ao inserir um Item no Pedido de Compra.

Acesso em: Compras > Pedidos de compra

## 1.43.81
### Manutenção

**Importar XML da NF-e**

1. Disponibilizado o campo para informar o frete quando o modelo for 4 = Transporte próprio por conta do destinatário (tag no xml modfrete = 4).

2. Efetuado ajuste para trazer as alíquotas de PIS e COFINS conforme estipulado no tipo de entrada informado na tela de importação.

Acesso em: Compras > Importar XML da NF-e²

## 1.43.80
### Manutenção

**Importar XML da NF-e**

Efetuado correção no processo de Importação de XML da NF-e:

1 - Ao finalizar a importação, ocorria mensagem de erro impedindo o lançamento da nota.

2 - Ajustado para respeitar a ordem dos itens no lançamento e impressão dos espelhos da nota fiscal.

Acesso em: Compras > Importar XML da NF-e²

## 1.43.79
### Manutenção

**Importar XML da NF-e**

Efetuado correção no processo de Importação de XML da NF-e com nota de Devolução: Se o sistema estiver parametrizado para gerar única nota de débito, não irá exigir parcelamento, processando a importação, gerando a nota e o Contas a pagar com a devida ND.

Parametrização > Compras > Nota de débito para devolução = Gerar uma unica com vencimento na data de entrada da NF

Acesso em: Compras > Importar XML da NF-e²

**Conhecimento de transportes**

Efetuado correção no processo de Conhecimento de transporte para atribuir a cidade de destino ao lançar o conhecimento manual.

Acesso em: Compras > Conhecimento de transportes

## 1.43.77
### Manutenção

**Pedido de compra**

Corrigido processo de cópia de pedido de compras onde estava mantendo o saldo já entregue de faturamento parcial, quando gerado a nota de entrada do pedido copiado.

Acesso em: Compras > Pedido de compra

**Declaração de importação**

Efetuado correção no processo de DI para nota de entrada, onde ocorria erro ao salvar a declaração.

Acesso em: Compras > Nota fiscal de entrada > Mais opções > Outros > Declaração de importação

## 1.43.63
### Manutenção

**Nota fiscal de estorno**

Corrigido processo de lançar nota de estorno própria, permitindo lançar nota com tipo de entrada cadastrado com tipo de operação 'Outros'.

Acesso em: Compras > Notas fiscais de entrada > Novo > Nota fiscal de estorno

**Conhecimento de transportes**

Corrigido processo de Conhecimento de transporte manual, adequando para ter o mesmo comportamento do importador de XML, referente ao PIS/COFINS, onde a regra vem do tipo de entrada, quando setado Calcula PIS e COFINS = SIM, para exibir os dados de PIS e COFINS na tela do CT-e, aba Valores e fiscal.

Acesso em: Compras > Conhecimento de transportes


## 1.43.62
### Manutenção

**Importar XML da NF-e 2.0**

Correções do importador: 

1. Alterado sistema para exportar o Valor do ICMS ST do item da NF para o campo Valor SUBTRI do sistema contábil (PC2).

2. Ao importar XML da NF-e sem fornecedor cadastrado, exibia mensagem travando o processo.

3. Efetuado correção na importação de XML da NF-e, onde ocorria diferença de débito e crédito ao processar a importação.

Acesso em: Compras > Importar XML da NF-e²


## 1.43.60
### Manutenção

**Necessidade de compras**

Efetuado correção no processo de Necessidade de compra: 
1. Ao gerar necessidade com o filtro Fornecedor informado, usando o método Estoque mínimo ou máximo, carrega os dados conforme filtros.

2. O sistema estava considerando o saldo das Notas Fiscais de Saída emitidas para o fornecedor Filtrado. O correto deve ser o sistema filtrar as Notas Fiscais de Saída que possuem itens vinculados a determinado fornecedor.

Acesso em: Compras > Necessidade de compras

**Notas fiscais de entrada**

Corrigido recurso de rastrear documentos vinculados dos processos de notas de entrada.

Acesso em: Entrada > Notas fiscais de entrada > Mais opções > Rastrear > Documentos vinculados

## 1.43.56
### Manutenção

**Importar XML da NF-e 2.0**

Aplicada melhorias na importação de XML da NF-e²:

1. Realizado correção no lançamento contábil ao lançar nota de um fornecedor Simples: quando lançar o valor do simples, no botão Valor das obs., esse valor diminui o custo e deve aparecer no lançamento contábil.

2. Adicionado opção para creditar ICMS cobrado anteriormente por ST na importação de XML da NF-e.

3. Efetuado correção no cálculo do custo quando vincular conhecimento de transporte.

4. Corrigido rateio de valores de impostos do conhecimento de transporte informados na nota de entrada.

Acesso em: Compras > Importar XML da NF-e²

**Necessidade de compra**

Realizado correção no filtro Fornecedor: ao aplicar o filtro por Fornecedor,  o sistema retornava uma demanda aleatória ou sem informações. O objetivo do filtro é trazer o cálculo de acordo com os itens de notas fiscais de saída que estão vinculados ao fornecedor vinculado.

Acesso em: Compras > Necessidade de Compra

**Benefício fiscal**

Adequado sistema para enviar a tag de Número do processo: quando a empresa tem benefício fiscal que permite considerar o desconto do ICMS para fins de base de cálculo do Pis e Cofins.

Alteração: 
- No cadastro de Empresa, aba Fiscal, disponibilizado uma grade permitindo cadastrar os números de processo. 
- Na nota, disponibilizado esta mesma grade na opção de edição da nota (Mais opções > Outros > Dados fiscais).
- Esta informação é gravada e enviada no XML (tag nProc), para nota fiscal de Saída quanto Entrada.

Compras > Nota fiscal de entrada


## 1.43.53
### Manutenção

**Pedidos de compra**

Alterada a coluna "Natureza financeira" da lista personalizada na tela de consulta do pedido de compra, para exibir a descrição da natureza ao invés do código.

Acesso em: Compras > Pedido de compra


**Conhecimento de transportes**

Realizado correção no Conhecimento de Transporte. Ao informar uma transportadora o sistema não estava trazendo as informações de "Forma de pagto" e "Cond. de pagto" conforme informado no cadastro do transportador.

Acesso em: Compras > Conhecimento de transportes

**Importar XML da NF-e 2.0**

Efetuado correção na Importação de XML da NF-e, ao processar, exibia mensagem que havia Informação complementar duplicada na nota.

Implementado no processo de Importação XML da NF-e, para efetuar o lançamento da nota quando o fornecedor for do regime "Simples Nacional Excesso".

Acesso em: Compras > Importar XML da NF-e²



## 1.43.21
### Manutenção

**Rastrear Painel de compras**

Disponibilizado na tela de consulta da Solicitação de compras, a opção de Rastrear painel de compras. Essa opção abre o painel de compras e lista os registros associados com essa solicitação que estão no painel.

Acesso em: Compras > Solicitação de compras > Mais opções > Rastrear painel de compras



## 1.43.15
### Novas funcionalidades

**Nota fiscal de entrada**

Disponibilizado processo de atualização de preço a partir da nota de entrada: 

•	O sistema deve estar parametrizado para Atualizar preço de venda das mercadorias na entrada de NF.

•	Após lançar a nota, será inserida uma formação de preços pendente com origem da nota fiscal, com os itens da NF lançados e todas as tabelas de preços do item que sejam tabelas em valor (não pode serve para tabelas em %).

•	Será enviado uma notificação para o usuário responsável pela atualização de preços.

Acesso em: Compras > Nota fiscal de entrada

**Rateio contábil na Importação de XML da NF-e 2.0**

Disponibilizado o processo de rateio contábil na Importação de XML NF-e 2.0 utilizando as mesmas regras da Notas de Entrada.

Acesso em: Compras > Importar XML da NF-e ²


### Manutenção

**Necessidade de compras**

Disponibilizado os filtros Fornecedor e Tipo de Item no processo de Necessidade de compras.

Alteração:
1. Na aba Filtros: adicionado os filtros Tipo item e Fornecedor
2. Na aba Demanda: adicionado o filtro Fornecedor

Acesso em: Compras > Pedido de compra


**Painel de compras**

Adicionada opção de Rastrear a solicitação de Compra no menu Mais opções do processo Painel de compras.

Acesso em: Compras > Painel de compras > Mais opções > Rastrear solicitação de compra

Disponibilizado as colunas Est. Máximo, Último Pedido, Data último Pedido, Preço último pedido, Última NF, Ent. última NF e Preco Última NF no Painel de Compras.

Acesso em: Compras > Painel de compras

Adicionada a coluna "Observação interna" na tela de Solicitaçãoes de compras do Paine de compras.

Acesso em: Compras > Painel de compras > aba Solicitações de compras


**Assistente de proposta**

Adicionado o filtro "Nº Cot. Cliente e a coluna "Nº Cotação Cliente" na tela de "Lançar pedido por proposta".

Acesso em: Compras > Lançar pedido por proposta


**Relatório de Itens de notas fiscais de entrada**


Aprimorado "Relatório de Itens de notas fiscais de entrada" permitindo seleção múltipla no filtro "Tipo de entrada".

Acesso em: Compras > Relatórios > Relatório de Itens de notas fiscais de entrada


**Cotação de compras**


Aprimorado processo de Cotação: ao gerar uma cotação a partir da solicitação de compras o conteúdo do campo Complemento da solicitação é copiado para o campo Complemento da cotação. 
Ao gerar um pedido a partir da Solicitação, Cotação ou Negociação, o conteúdo do campo Complemento do item, será copiado para o pedido de compra.

Acesso em: Compras > Cotação de compras


**Importar XML da NF-e 2.0**

Alterado processo de Importação de XML da NF-e, para lançar lotes e configurar impostos creditados:

Alterações:

1 - PIS e COFINS diferentes do XML da NF-e: permitir digitar PIS e COFINS na importação do XML.

2 - Cálculo de impostos: Adicionado na Parametrização/Compras/Importação de XML uma nova opção chamada 'Tributação na importação de XML (Importador 2.0)' para configurar os cálculos de impostos.

3 - Lotes: Quando houver lotes informados no XML, ao importar, são carregados os lotes  do fornecedor como sugestão, com suas datas de fabricação e validade, quando o item controla validade. Esses novos lotes são cadastrados no item.

4 - Cálculo do PIS e da COFINS: Correção efetuada para calcular o valor do imposto, caso informado alíquota manual.

Acesso em: Compras > Importar XML NF-e 2.0


## 1.43.0
### Novas funcionalidades
**Nota fiscal de entrada**

Disponibilizado processo de atualização de preço a partir da nota de entrada: 

•	O sistema deve estar parametrizado para Atualizar preço de venda das mercadorias na entrada de NF.

•	Após lançar a nota, será inserida uma formação de preços pendente com origem da nota fiscal, com os itens da NF lançados e todas as tabelas de preços do item que sejam tabelas em valor (não pode serve para tabelas em %).

•	Será enviado uma notificação para o usuário responsável pela atualização de preços.

Acesso em: Compras > Nota fiscal de entrada

**Rateio contábil na Importação de XML da NF-e 2.0**

Disponibilizado o processo de rateio contábil na Importação de XML NF-e 2.0 utilizando as mesmas regras da Notas de Entrada.

Acesso em: Compras > Importar XML da NF-e ²


### Manutenção

**Pedido de compra**

Alterado processo do Pedido de compras ao aplicar conversão de unidade, quando o preço é do fornecedor. Neste caso, o sistema efetuará a conversão do preço de acordo com a unidade informada.

Acesso em: Compras > Pedido de compra


**Acesso as Importações XML de NF-e e CT-e 2.0**

Alterado acesso das Importações de XML da NF-e e CT-e 2.0, adicionado botão de acesso no Módulo Compras. 

Acesso em: Compras > Importar XML da NF-e ² e Importar XML do CT-E²





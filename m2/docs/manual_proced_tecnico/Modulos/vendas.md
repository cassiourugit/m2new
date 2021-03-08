<div align= "justify">

# **Módulo Vendas**

[Clientes](#clientes) <br>
[Itens e serviços](#itens-e-servicos) <br>
[Tabelas de preços de venda](#tabela-de-precos-de-venda) <br>
[Orçamentos](#orcamentos) <br>
[Formação de preços](#formacao-de-precos) <br>
[Consultar preço e estoque](#consultar-preco-e-estoque) <br>
[Propostas de venda](#propostas-de-venda) <br>
[Lançar pedido por proposta](#lancar-pedido-por-proposta) <br>
[Pedidos](#pedidos) <br>
[Caixa de faturamento](#caixa-de-faturamento) <br>
[Notas fiscais de saída](#notas-fiscais-de-saida) <br>
[Listas](#listas) <br>
[Relatórios](#relatorios) <br>
[Mais opções](#mais-opcoes) <br>

<br><br>
____________________________

_____________________________

<br><br>

# **Processos do módulo Vendas**


## Clientes

Este acesso é responsável pelos cadastros de: cliente, fornecedor, empregado, vendedor/representante e transportador. As informações aqui cadastradas serão utilizadas no módulos vendas, e também nos módulos: [compras](~/manual_proced_tecnico/Modulos/compras.md), [contas a pagar](~/manual_proced_tecnico/Modulos/pagar.md), [a receber](~/manual_proced_tecnico/Modulos/receber.md), etc.  


## Itens e serviços

## Tabelas de preços de venda

As tabelas de preços permitem determinar políticas de preço de venda e podem ser de uso geral ou específica para um cliente, quando a empresa praticar preços especiais.

### <u>Pesquisar</u>

Na tela inicial do cadastro de tabelas de preços, a consulta poderá ser realizada pela descrição da tabela ou pelos registros ativos ou não ativos.

![Tabela de preço de venda](../Img/manual_m2/tabelaPrecoVendaPesquisa.png)

### <u>Cadastro da tabela de preços</u>

Para cadastrar uma tabela de preços clique no botão "Novo". Na tela demonstrada, informe os campos conforme segue:
- **Descrição:** será utilizada para selecionar a tabela nos processos do sistema, como por exemplo, no cadastro de cliente, realizar uma venda ou outra operação.

- **Vigência:** as datas determinarão o limite de utilização da tabela. Fora do período determinado não é possível efetuar lançamentos relacionados a tabela. É possível cadastrar uma tabela de preços com vigência indeterminada ou limitar.

> O controle por datas é comumente usado para realizar promoções.



<!--

Tabela promocional
Normalmente a empresa tem sua política de preços cadastradas através de tabelas de preços. A tabela de preços promocional permite desviar da política padrão e utilizar a promoção quando for desejado.

Pode ser cadastrada por exemplo uma tabela promocional para os itens da tabela da linha popular ou promoção para a tabela de preços a vista.

A tabela promocional normalmente tem uma vigência determinada. O sistema utilizará a promoção apenas no período de vigência.

Lançar os itens e preços da tabela
Após cadastrar a tabela devem ser relacionados os itens e preços. É possível inserir itens individualmente ou utilizar a ferramenta de lotes para cadastrar vários itens com um critério comum.

Cadastrar itens individualmente
Para cadastrar um item manualmente informe o item desejado, unidade e preço máximo e mínimo.

Cada unidade usada para comercializar o item deve ser informada na tabela de preços.

O preço mínimo e máximo são opcionais, caso a empresa não permite vender fora da faixa estabelecida.

Cadastrar itens em lote
Ao cadastrar uma tabela nova pode haver muitos itens para inserir. Nesse caso a ferramenta para adicionar vários itens na tabela de preços permite inserir itens por critérios como grupo, tipo de item, marca, etc.

Reajustar preços
Permite reajustar o preço de venda, preço mínimo e máximo dos itens da tabela em lote.

Campos Definir e De
Indica se o reajuste é para aumentar o reduzir o preço e o valor ou percentual de reajuste.

Sobre
Indica se o reajuste será do preço de venda, mínimo, máximo, frete ou todos.

Forma de cálculo e casas decimais
Indica como o sistema deve calcular o preço com números decimais. É possível truncar ou arredondar valores e especificar quantas casas decimais devem ser consideradas. Por exemplo:

Digamos que o preço do item foi alterado para 1,4450 após o reajuste. Conforme a configuração o preço será alterado conforme a tabela abaixo:

 

Casas decimais/Forma de cálculo
0
1
2
3
Truncar	1,00	1,40	1,44	1,445
Arredondar	1,00	1,40	1,45	1,445
 -->

## Orçamentos

## Formação de preços



## Pedidos de venda

O pedido de venda é o documento utilizado para organizar as vendas realizadas. Nele são armazenadas as condições de venda que foram firmadas com o cliente, controlando os itens, preços, quantidade e prazos repassados.

Um pedido de venda pode ser gerado manualmente ou ser gerado através de uma proposta de venda aprovada pelo cliente, para venda de um determinado produto ou aquisição de serviço.

A entrega de materiais ou a prestação do serviço é confirmada através do faturamento do pedido, que é efetivado na nota fiscal de saída.


<!--Lançando um pedido de venda
Área geral
A área geral identifica o pedido de venda. Informe a data do pedido, o vendedor que irá receber comissão sobre a venda, o cliente e altere o endereço se for necessário. Caso seja possível, informe também o número do pedido do cliente, para que o processo B2B seja facilitado.

Número do pedido do cliente

Icon
Quando o número do pedido do cliente é informado, a nota fiscal eletrônica vinculada ao pedido é enviada ao cliente com esta informação, que poderá auxiliar o cliente na importação e vinculação dos dados.

Área de itens
A área de itens possibilita a inserção discriminada dos produtos e serviços contidos no pedido de venda. Nessa mesma área é possível:

Conceder desconto em percentual ou em valor sobre os itens do pedido. O valor informado será rateado para todos os itens do pedido, sem exceção. No caso em que os itens já possuírem valores de desconto informado, o sistema irá desconsiderar o valor antigo e atribuir o novo valor rateado. Com isso, o valor total de cada item será recalculado, assim como os valores dos impostos.
Acrescentar outras despesas no pedido. Este valor será também rateado para os itens do pedido e irá interferir nos valores de impostos já lançados. O valor total do item não é alterado.
Acesse o link de item do pedido de venda para mais detalhes sobre a inserção de itens no pedido.

Área de transporte
Na área de entrega deve ser informado o transportador e os detalhes do transporte como a modalidade, valor do frete, valor do seguro e a transportadora para redespacho. A alteração nos valores de frete e seguro irão refazer o cálculo dos impostos dos itens do pedido.

Área de resumo
No resumo do pedido são apresentados os totalizadores de valores e impostos do pedido. São dados apenas informativos e servem para que o usuário possa verificar em uma visão ampla os totais do pedido de venda.

Área de fechamento
Nessa área deve ser definida a condição de pagamento e a classificação da venda para o fluxo de caixa através da natureza financeira. Também pode ser informado as observações internas do pedido e observações para o cliente.

Alterando um pedido de venda
Após o processamento do pedido não é permitido alterar seus dados pela tela de cadastro. Para realizar modificações específicas, utilize as funções para alteração do pedido. 
-->


</div>




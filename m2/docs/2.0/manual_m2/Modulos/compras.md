<div align= "justify">

[Vendas](~/manual_proced_tecnico/Modulos/vendas.md) &nbsp; || &nbsp;
[Estoque](~/manual_proced_tecnico/Modulos/estoque.md) &nbsp; || &nbsp;
[Receber](~/manual_proced_tecnico/Modulos/receber.md) &nbsp; || &nbsp;
[Pagar](~/manual_proced_tecnico/Modulos/pagar.md) &nbsp; || &nbsp;
[Tesouraria](~/manual_proced_tecnico/Modulos/tesouraria.md) &nbsp; || &nbsp;
[Contábil](~/manual_proced_tecnico/Modulos/contabil.md) &nbsp; 

# **Processos do módulo Compras**

[Fornecedores](#fornecedores)<br>
[Itens e serviços](#itens-e-servicos) <br>
[Tabelas de preços de compra](#tabela-de-precos-de-compra) <br>
[Compra rápida](#compra-rapida) <br>
[Painel de compra](#painel-de-compra) <br>
[Conhecimento de transportes](#conhecimento-de-transportes) <br>
[Solicitações de compra](#solicitacao-de-compra) <br>
[Pedido de compra](#pedido-de-compra) <br>
[Notas fiscais de entrada](#notas-fiscais-de-entrada) <br>
[Importar XML do CT-e](#importar-xml-do-cte) <br>
[Necessidade de compra](#necessidade-de-compra) <br>
[Demanda](#demanda) <br>
[Entrada](#entrada) <br>
[Importar XML do NF-e](#importar-xml-do-nfe) <br>
[Listas](#listas) <br>
[Relatórios](#relatorios) <br>
[Mais opções](#mais-opcoes) <br>
 

<br><br>

## Demanda


[Voltar ao topo](#processos-do-modulo-compras)

<br>

## Compra rápida

**Sumário**

[1 Objetivo](#1-objetivo) <br>
[2 Configurações](#2-configuracoes) <br>
[3 Calcular a necessidade de compra](#3-calcular-necessidade-de-compra) <br>
[4 Análise](#analise) <br>
 
## **1 Objetivo**

O processo "Compra rápida" serve para auxiliar na gestão da necessidade de compras. Nele, são utilizados os mesmos recursos já disponíveis no processo padrão da demanda e necessidade de compra do sistema. Compra rápida é um procedimento destinado a empresas que trabalham com distribuição de mercadorias.
Seu acesso está disponível em Módulo Compras > Mais opções > Compra rápida


## **2 Configurações**

Essa é a tela do Compra rápida, na parte superior temos os parâmetros que serão usados no cálculo da necessidade:

•	Fornecedor: filtra os itens de acordo com o fornecedor padrão definido em seu cadastro (Cadastro do item/ aba Fornecedores).

•	Grupo do item: filtra os itens de acordo com o grupo do item informado no cadastro de itens.

•	Almoxarifado: o filtro almoxarifado é obrigatório, permite seleção múltipla e com base nele serão calculadas as colunas “Demanda” e “Estoque disponível”. O sistema listará apenas os pedidos de venda realizados para os almoxarifados definidos no filtro, e aplicará a mesma regra para retornar o saldo disponível do item, ou seja, será somado o saldo de estoque disponível do item nos almoxarifados informados. 


Ao lado dos filtros, encontram-se as configurações para realizar a análise:

•	Analisar carteira de pedidos em aberto: realiza a verificação da carteira de pedidos em aberto e qual a demanda necessária para suprir a carteira.

•	Analisar itens com o estoque abaixo do mínimo: realiza a verificação dos itens que estão com o saldo de estoque abaixo do mínimo e sugere na necessidade.


## **3 Calcular necessidadede compra**

Para iniciar a análise, basta selecionar o botão “Calcular necessidade de compra”, o sistema listará os registros com base nos parâmetros e filtros informados. 

Grade de itens:

No canto esquerdo temos as colunas de informações sobre os itens: Histórico, Visualizar e Estoque.

- **<u>Histórico</u>:** Exibe o histórico de compras (Últimas compras) e de consumo (Requisições) do item analisado.

- **<u>Visualizar</u>:** exibe as informações de “Pedidos” usados no cálculo da demanda, “Estoque” que mostra o estoque dos almoxarifados considerados no cálculo e “Compras prevista do item” que são as compras consideradas no cálculo da demanda.

- **<u>Estoque:</u>** exibe a tela do processo de Consulta de estoque do item.<br>
 
No canto direito temos o ícone na forma de um filtro, contendo o parâmetro “Somente itens com necessidade de compra”, quando marcado exibe somente os itens que possuem valor maior que zero na coluna “Comprar”. Por padrão esse parâmetro vem marcado.

> Na grade de itens, após gerar a análise, os itens vêm agrupados pelo fornecedor padrão. Quando o item não possuir um fornecedor padrão, são exibidos na lista “Sem fornecedor”. 


A grade de itens possui as seguintes colunas:

•	Item e Descrição: mostra a identificação e a descrição do item respectivamente.
•	Demanda: mostra o saldo do item na carteira de pedidos que foi considerada no cálculo da necessidade.
•	Estoque mínimo: mostra o estoque mínimo que foi considerado no cálculo da necessidade.
•	Estoque disponível: mostra o estoque que foi considerado no cálculo da necessidade.
•	Compras previstas: mostra a soma das compras previstas que foram consideradas no cálculo da necessidade. Nessa coluna também são inclusos as solicitações, as compras em andamento (painel de compras) e os pedidos de compra.
•	Necessidade: mostra o resultado da análise para compra.
•	Comprar: mostra o resultado da seguinte expressão: Demanda + Estoque mínimo - Estoque disponível - Compras disponível. 

> O cálculo das colunas Necessidade e Comprar, também subtraem a quantidade reservada de itens. Pode-se ter essa informação, acessando a opção Visualizar (ícone “lupa”), aba Estoque.


## **4 Análise**

Após iniciar a análise, clicando no botão “Calcular necessidade de compra”, o sistema listará os registros com base nos parâmetros aplicados.

Com os dados em tela pode-se tomar duas ações:

•	Gerar solicitação
•	Gerar o pedido de compra

No lançamento da solicitação de compra, o sistema agrupará todos os registros selecionados em uma única solicitação. Portanto basta selecionar os registros que pretende gerar a solicitação, e em seguida selecionar o botão “Gerar solicitação”. Irá abrir a tela com dois campos: “Solicitante” e “Finalidade”, cabe ressaltar que o preenchimento desses campos é obrigatório.

Para a geração do pedido de compra, é necessário que seja informado um fornecedor para cada registro. Para definição do fornecedor podem ser utilizadas as teclas de atalho "CTRL + selecionar o registro" ou "CTRL + A" para todos, e posteriormente, clicar no botão “Definir fornecedor”. Com o fornecedor dos registros informados, basta selecionar a opção “Gerar pedido”. É obrigatório o preenchimento dos campos “Solicitante” e “Finalidade”.

Ações disponíveis para o processo:

 
•	Definir fornecedor: define o fornecedor para os registros selecionados.
•	Gerar solicitação: gera a solicitação de compra para os registros selecionados.
•	Gerar pedido: gera o pedido de compra para os registros selecionados.
•	Finalizar: finaliza o processo, gerando uma necessidade com status processado na tela “Necessidade de compra”.

[Voltar ao topo](#processos-do-modulo-compras)

<br>

# Entrada 

[1 Objetivo](#1-objetivo) <br>
[2 Configurações](#2-configuracoes) <br>
[3 Processos](#3-processos) <br>

 
## **1 Objetivo**

O processo de “entrada” centraliza tudo o que chega até a empresa: quando uma mercadoria desembarca na empresa, ela é recebida no processo de entrada; quando recebe uma devolução, ela é processada através da entrada; quando contrata um serviço, faz o lançamento a partir da entrada e assim por diante.
A entrada pode ser iniciada manualmente ou disparada por outro evento que iniciou um processo de entrada. Ao receber um XML, por exemplo, iniciamos uma operação de entrada.
Em resumo, usamos o processo de entrada para lançar uma nota fiscal.
 
Acesso em: Compras > Mais opções > Entradas


## **2	Configurações**


O fluxo dos lançamentos da entrada compreende:

 ![Fluxo entrada](imamgem.png)

Antes de iniciar o processo de Entrada, deve-se configurar o tipo de entrada padrão, para que o sistema possa efetuar a geração da nota.

Acesso em Compras > Listas > Tipo de entrada padrão




3	Processos


O novo processo de entrada ficou mais prático porque é feito por etapas, primeiro é lançado o material e posterior a parte de impostos. 
Processos de entrada disponíveis:

Ao clicar na “seta” do botão Novo, exibe os processos de entrada.

 
Figura 3 – Opções de entrada

Processo Entrada: Lançar nota manual (nota digitada)

No botão Novo, clicar em Entrada, abrirá a tela de lançamento da nota, com as abas “Identificação”, para informar o cabeçalho da nota e “Itens” para informar os itens de entrada ou vincular um pedido de compra existente.
Na aba Identificação pode-se escolher o tipo de Emitente, se nota de terceiros onde é possível inserir a Chave de acesso para preenchimento automático dos dados ou nota própria para lançar nota da própria empresa.

 
Figura 4 – Nota manual – aba Identificação

Após preencher os dados de identificação e salvá-los, deve-se preencher os dados da aba Itens, inserindo os itens ou vinculando a pedidos. As informações do item são básicas também, conforme imagem abaixo.

 
Figura 5 – Nota manual – aba Itens

OBS: Nessa tela tem o parâmetro “Movimenta estoque”, caso efetue uma entrada num item onde não é controlado estoque, basta desmarcá-lo e o sistema ignora a validação do Tipo de entrada aplicado, não efetuando a movimentação de estoque do item.

 
Figura 6 – Tela vincular pedidos

Após inserir os itens, tem-se duas ações:

•	Botão Fechar: caso queira inserir mais itens posteriormente, o botão Fechar deixa a nota com status Pendente, sendo possível editá-la.

•	Botão Processar: finaliza essa etapa da nota com status Processado.

Com a nota processada, seguimos as etapas na tela de consultas da Entrada:
 
Figura 7 – Opções da Entrada


Caso a nota esteja com status Pendente, deve-se clicar no botão Processar e posterior no botão Conferir, caso esteja com status Processado, basta clicar em Conferir.

Conferência da nota:

Na etapa de conferência é efetuado o lançamento de estoque conferido para o almoxarifado informado no item e o lançamento do estoque de defeito, faltante e sobra no almoxarifado pertinente. Deve-se criar os almoxarifados para defeitos, faltas e sobras (Figura 9 – Almoxarifados). 

 
Figura 8 – Tela de conferência

 Pode-se efetuar a conferência de forma automática ou manual.

Opções de configuração: No canto direito da tela, tem-se o ícone de engrenagem onde pode-se parametrizar a conferência, almoxarifados e XML.

 
Figura 9 – Configurações da entrada
•	Aba Parâmetros: se a opção “Lançar entrada conferida” for marcada, o processo de conferência é executado automático. Por padrão, esse parâmetro vem desmarcado.

•	Aba Almoxarifados: serve para configurar os almoxarifados para faltas e sobras para a movimentação do estoque. Deve-se criar esses almoxarifados e vincular os itens para que o sistema possa gerar a movimentação de estoque corretamente.

 
Figura 10 – Configurações almoxarifados

•	Aba XML: serve para configurar a tributação da importação do XML, se o sistema aplica a tributação do XML ou do tipo de entrada. Esse processo se mantém igual, não foi alterado.


 
Figura 11 – Configurações XML
Após efetuar a conferência da nota, o status passa para Conferido. A etapa seguinte é clicar no botão Lançar NF, nesse momento, abre a tela com as demais abas para preenchimento. Ao finalizar, o sistema termina o processo lançando e contabilizando a nota, inserindo os títulos, lançando comissões caso tenha e baixando o pedido caso tenha sido vinculado.

 
Figura 12 – Lançar NF

Declaração de importação (DI): as notas de importação sofreram alteração, geralmente o lançamento da DI é feita para todos os itens da nota, porém alguns fornecedores geram DI especifica por item, sendo assim, foi adicionado a botão “Especificar itens” onde é possível selecionar os itens informados na DI.

Processo Devolução: Lançar nota de devolução

Este processo não sofreu alterações. 

Processo Transferência: Lançar nota de transferência

Quando uma nota de transferência é lançada, a forma de movimentar estoque, é feita de filial para filial. 
Ao fazer a nota, o sistema gera uma requisição de transferência. Ao finalizar o processo, o sistema atende essa requisição e movimenta o estoque, dando saída no almoxarifado de trânsito e entrada no almoxarifado da filial.

Processo Serviço: Lançar nota de serviço

**Este processo está em desenvolvimento, logo será documentado.

Processo Importar XML: Lançar nota pela importação de XML

Este processo não sofreu alterações, apenas foi inserido na tela da nova Entrada.


</div>
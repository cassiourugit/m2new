# Vendas
Novidades do módulo de Vendas

## 1.43.84
### Manutenção

**Nota fiscal de Devolução**

Corrigido processo, o sistema não estava inserindo a forma de pagamento na Nota. Obs: A parametrização "Nota de crédito para devolução" deve estar devidamente configurada.

Acesso em: Vendas > Notas Fiscais de Saída > (Novo) Nota fiscal de Devolução

## 1.43.83
### Manutenção

**Pedidos de venda**

Efetuado correção ao reabrir um pedido no sistema Loja, para não duplicar a informação do campo Obs, ao replicar o pedido ao sistema M2.

Acesso em: Vendas > Pedidos de venda

**Itens e serviços**

Realizado correção na Formação de Preços na tela de "Itens e Serviços". Campo "Custo do Item" permite 4 casas após a vírgula.

Acesso em: Vendas > Itens e Serviços > Mais opções > Formação de preço

**Relatório Saldo de estoque**

Efetuado correção para coincidir os valores em relação aos períodos.

Acesso em: Vendas > Relatórios > Saldo de estoque


## 1.43.82
### Manutenção

**Notas fiscais de saída**

Efetuado ajuste no DF-e para que o mesmo sincronize as notas novamente, evitando duplicidade no Sefaz.

Acesso em: Vendas > Notas fiscais de saída

**Proposta de venda**

Removido validação de origem do sistema Loja para os processos de "Reabrir" e "Cancelar proposta", sendo permitido executar os comandos.

Acesso em: Vendas > Proposta de venda

## 1.43.81
### Manutenção

**Notas fiscais de saída**

Alterado processo de Autorização de nota para enviar a IE de Substituição tributária no XML e DANFE da nota fiscal de saída.

Acesso em: Vendas > Notas fiscais de saída

## 1.43.79
### Manutenção

**Notas fiscais de saída**

Efetuado correção no processo de alterar dados da nota, para respeitar a transportadora informada nesse processo.

Acesso em: Vendas > Notas fiscais de saída > Mais opções > Alterar > Dados da nota

Aplicado tratativa para autorizar notas quando a transportadora for do exterior (EX), não sendo solicitado CNPJ/CPF ou Doc. estrangeiro.

Acesso em: Vendas > Notas fiscais de saída

**Pedidos de venda**

Efetuado correção no Histórico de Pedidos, ao clicar no botão Itens alterados, ocorria mensagem de erro não permitindo a exibição da listagem.

Acesso em: Vendas > Pedidos de venda

## 1.43.75
### Manutenção

**Orçamentos**

Efetuado correções no processo de Orçamento:
1. Corrigido o campo data permitindo sua alteração na cópia de orçamento
2. Corrigido processo ao informar Roteiro no Orçamento, onde ocorria msg de erro.

Acesso em: Vendas > Orçamentos

## 1.43.70
### Manutenção

**Tela de consulta de Clientes**

Adicionado na tela de consulta do cadastro de clientes as opções:
- Filtro: Grupo empresarial
- Coluna: Grupo empresarial, com a descrição do grupo

Acesso em: Vendas > Clientes


## 1.43.65
### Manutenção

**Pedidos de venda**

Efetuado alteração no lançamento de pedido originado no Portal do representante: no cadastro de cliente  tem a configuração de desconto condicional, quando o pedido for lançado pelo portal, o sistema irá aplicar esse desconto ao lançar o pedido no M2.

Acesso em: Vendas > Pedidos de venda


## 1.43.63
### Manutenção

**Orçamentos**

Efetuado correção no processo de Cópia do Orçamento, para carregar a data atual para o registro copiado.

Acesso em: Vendas > Orçamentos > Mais opções > Copiar

**Clientes**

Alterado cadastro de Cliente, aba Comercial, campo segmento: ao inserir um novo segmento na tela de cadastro de cliente, ocorria erro não permitindo efetuar o processo.

Acesso em: Vendas > Clientes

**Site de embarque**

Efetuado correção no processo de embarque, onde não estava carregando a Unidade do item na Ordem de carregamento, site de carregamento (Embarque).

Acesso em: Site de embarque > Ordem de carregamento

**Notas fiscais de saída**

Disponibilizado no processo de Exportação do SPED fiscal a informação do Código do benefício fiscal, no registro C197.

Acesso em: Vendas > Notas fiscais de saída

## 1.43.62
### Manutenção

**Formação de preço**

Efetuado correção no processo de Formação de preço, para permitir inserir despesas que somem mais de 100%, utilizando o método 'Margem de contribuição'.

Acesso em: Vendas > Formação de preço > Novo

**Notas fiscais de serviço**

Efetuado alteração no processo de impressão da NFS-e, provedor Betha:
1. No campo Código dos serviços: quando a nota conter mais de um serviço, imprime todos os códigos e descrição.
2. Forma de pagamento: Quando a nota for a vista, imprimir o campo Tipo como "A vista" e os demais campos deixar em branco.
3. Permitido gerar a impressão da nota com mais de 2000 caracteres, sendo enviado ao XML apenas a parte que couber. Disponibilizado parâmetro para essa alteração: Acesso em Parâmetro > Fiscal > NFS-e: "Permitir descrição do item da NFS-e maior que 2000 caracteres."

Acesso em: Vendas > Notas fiscais de serviço

## 1.43.61
### Manutenção

**Relatório PIS/COFINS a recolher**

Alterado relatório de PIS/COFINS a recolher: para trazer a analise das devoluções para checagem de saldos de faturamento.

Alteração:

1. Criado o bloco de Devoluções no final do relatório que compõe todas as notas de devolução com ou sem PIS/COFINS para dedução do total do faturamento.


Acesso em: Vendas > Relatórios > PIS/COFINS a recolher

**Nota fiscais de serviço**

Corrigido processo de retenção de INSS e ISS sobre o título, recalculando o contas a receber.

Acesso em: Vendas > Notas fiscais de serviço


## 1.43.60
### Manutenção

**Notas fiscais de saída**

Corrigido recurso de rastrear documentos vinculados dos processos de notas de saída.

Acesso em: Vendas > Notas fiscais de saída > Mais opções > Rastrear > Documentos vinculados


## 1.43.58
### Manutenção

**Embarque**

Efetuado correção no processo de Carregamento, onde ao efetuar o carregamento ocorria aleatoriamente, duplicidade do peso total e quantidade de itens.
Colocado validação para que quando ocorra uma entrada duplicada no carregamento, exiba a mensagem: "Quantidade do volume maior que a quantidade do item carregado." não efetuando a duplicidade.

Acesso em: Sistema de Embarque > Ordem de carregamento


**Notas fiscais de saída**

Corrigido processo de Alterar dados da nota: ao efetuar alteração da transportadora, o dado informado não estava sendo gravado.

Acesso em: Vendas > Notas fiscais de saída > Mais opções> Alterar> Dados da nota

**Orçamento**

Efetuado tratativa para o processo de edição de dados, na guia Preço do Orçamento: quando clicar no botão Editar da aba Preços e efetuar alguma alteração, o processo deverá ser SALVO ou CANCELADO pelo usuário. Se o usuário tentar trocar de aba, o sistema dispara mensagem solicitando uma ação.

Acesso em: Vendas > Orçamento

**Proposta de venda**

Efetuado correção na Proposta de venda:
- Disponibilizado o campo Identificação para digitar o dado, quando for selecionado a opção Item não cadastrado. 
- Ajustado espelho da Proposta para mostrar a identificação do item, quando o mesmo for originado de um orçamento.

Acesso em: Vendas > Proposta de venda

## 1.43.56
### Manutenção

**Benefício fiscal**

Adequado sistema para enviar a tag de Número do processo: quando a empresa tem benefício fiscal que permite considerar o desconto do ICMS para fins de base de cálculo do Pis e Cofins.

Alteração: 
- No cadastro de Empresa, aba Fiscal, disponibilizado uma grade permitindo cadastrar os números de processo. 
- Na nota, disponibilizado esta mesma grade na opção de edição da nota (Mais opções > Outros > Dados fiscais).
- Esta informação é gravada e enviada no XML (tag nProc), para nota fiscal de Saída quanto Entrada.

Acesso em: Vendas > Nota fiscal de saída

**Nota fiscal de devolução**

Efetuado correção no valor das parcelas de nota de devolução, onde estava duplicando o valor das faturas.

Acesso em: Vendas > Novo > Nota fiscal de devolução


## 1.43.31
### Novas funcionalidades

**Nova modalidade de cálculo do DIFAL**

Disponibilizado no processo de  nota fiscal de saída a modalidade de cálculo do DIFAL para o estado do PR.

Alterações:
1. Na Exceção fiscal do ICMS > aba Alterações no ICMS: adicionado o campo 'Modalidade de cálculo do DIFAL' com as opções Normal e Calcular ICMS por dentro
2. Adicionado o ícone 'i' com a explicação dos cálculos
3. Adicionado o campo '% do ICMS interno sobrescrito: Esse campo serve para calcular alíquota interna para os itens que são considerados supérfluos onde o estado do PR aumentou a alíquota.


## 1.43.26
### Novas funcionalidades

**Família de produto**

Disponibilizado processo de Família de produtos. Esse processo serve como modelo para vários produtos diferentes. No cadastro de uma família, define-se as várias características que ela possui. Pode-se informar restrições, ou seja, quais opções de características são compatíveis entre si e por fim, pode-se informar quais componentes o produto deve conter de acordo com cada característica. Uma vez configurada, pode-se cadastrar um pedido com base na família.

Acesso em Vendas > Mais opções > Família de produtos


## 1.43.21
### Manutenção

**Ajustes no cálculo do preço na Formação de preço**

Aprimorado o processo de cálculo do preço na formação de preços onde as despesas fixas são incorporadas ao custo.

Alterações:
1. Alteração na Parametrização > Vendas > Forma de cálculo para formação de preços
- Alterada a opção 'Margem' para 'Margem de contribuição'
- Adicionada a opção 'Margem de lucro'
- Adicionado o ícone 'i' para exibir a explicação de cada fórmula.

Acesso em: Vendas > Formação de preço


## 1.43.15
### Novas funcionalidades

**Reenviar e-mail da NF-e e NFS-e**

Disponibilizado opção de reenvio de e-mai da Nota fiscal de saída e Nota fiscal de serviço.
Na tela de consulta da NF-e e NFS-e botão Mais opções,  foi adicionada a opção 'Distribuir NF', para reenvio do e-mail.

Acessos em: 

Vendas > Notas fiscais de saída > Mais opções > Outros > Distribuir NF

Vendas> Notas fiscais de serviço > Mais opções > Outros > Distribuir NF


**Impressão de etiquetas para mala direta**

Disponibilizado Relatório de mala direta para impressão de etiquetas. O Relatório mostra as informações básicas de Clientes e Fornecedores.

Acesso em: Vendas > Relatórios > Etiquetas para mala direta


**Impressão de etiqueta folha de rosto**

Disponibilizado processo de impressão de etiqueta de folha de rosto, em impressora a laser.

Acesso em: Vendas > Notas fiscais de saída > Mais opções > Etiqueta - folha de rosto

**Faturamento de Kit com detalhamento dos componentes na NF**

Aprimorado o processo de faturamento, para faturar Kit com detalhamento dos componentes na NF.

Alterações:
1. Adicionado na Parametrização > Comum a opção 'Detalhar os itens do Kit na NF'
2. Ao gerar o faturamento:
    - Quando o sistema estiver configurado para explodir os itens do Kit, será exibido os componentes do kit com seus devidos lotes.
    - Será exibido nas observações um texto resumindo os kits.
    - A baixa de estoque será do produto Kit.

Acessos em:

Vendas > Pedidos de venda > Mais opções > Emitir nota

Vendas > Pedidos de venda > Embarque 



**Notas fiscais de saída**

Disponibilizado novas validações na Nota fiscal de saída, conforme Nota técnica 2019.00, as empresas que tenham benefício fiscal serão impactadas.

Alterações:

Adicionado o campo 'Código do benefício fiscal' no cadastro de Tipo de saída, aba ICMS e no cadastro de Exceção fiscal do ICMS, aba Alterações no ICMS.

Adicionado o campo 'cBenef' no XML de distribuição da nota.

Aprimorado processo da Nota fiscal de saída, onde o calculo da quantidade tributável estava divergente do peso líquido dos itens no XML da nota.

Alteração:
1. Criado parâmetro para especificar a forma de cálculo da unidade tributável da nota:
- Fator de conversão - forma que o sistema já efetua, essa opção vem como padrão
- Peso Líquido - nova forma, deve ser selecionada, quando o sistema for atuar pelo peso.
 Parametrização > Vendas >  Forma de cálculo da unidade tributável

Acesso em: Vendas > Notas fiscais de saída


### Manutenção

**Outras informações na NFS-e**

Disponibilizado  campo "Outras Informações" no XML quando for utilizado o porte da empresa ME ou MEI pra emissão da Nota.

Alteração: 
1. Adicionado os campos abaixo, na parametrização da NFS-e (Inicio > Parametrização > Fiscal > NFS-e), quando selecionado o provedor Betha V1:
    - Recolhimento do ISS
    - Enviar porte e recolhimento do ISS nas outras informações da NFS-e

Acesso em: Vendas > Notas fiscais de serviço


**Cadastro de clientes e fornecedores**

Aprimorado a busca pelo CNPJ ou CPF no cadastro de Clientes e Fornecedores permitindo digitar os pontos entre os números.

Aprimorado cadastro de clientes, para registrar o ID do usuário que efetuou o cadastro, assim como a data e hora do cadastro. Na tela de consulta do Cadastro de clientes, deve-se personalizar a coluna Cód. usuário de casdastro. 

Adicionado campo 'Dias para protesto' no cadasto de clientes. Ao gerar boleto e remessa bancária, será pesquisado a informação no cadastro de cliente, caso não exista informação, busca da instrução na configuração bancária.

Acesso em: Vendas > Clientes

**Tipo de saída**

Adicionado o ícone "?" ao lado do campo CFOP fora do estado,  contendo nota informativa referente ao CFOP Fora do Estado.

Nota informativa:

"O M2 encontra o CFOP fora do estado automaticamente. Por exemplo: O M2 altera CFOP padrão 5101 para 6101 sem que você digite o campo CFOP fora do estado.
Informe o CFOP fora do estado somente quando o código da operação fora do estado for diferente do interno, por exemplo: dentro do estado é 5405 e fora do estado é 6402".

Acesso em: Vendas > Listas > Tipo de saída


**Retirar pedido do Planejamento de embarque**


Adicionado bt. Mais opções, na aba Demanda, da tela de Planejamento de embarque, permitindo remover pedidos por completo, informando o número do mesmo.

Acesso em: Vendas > Embarque > Planejamento de embarque

**Relatório ABC**


Análise ABC - Modelo: Análise ABC por item 

O relatório tem por função realizar um ranqueamento dos itens dentro de cada cliente. O relatório irá mostrar os clientes em uma ordem de faturamento (Do que obteve um faturamento maior para os menores) e irá mostrar também  os itens faturados dentro de cada cliente.

Análise ABC por Item - Modelo: Análise ABC por cliente

O relatório tem por função realizar um ranqueamento do cliente dentro de cada item. O relatório mostra os itens na ordem de maior faturamento para o menor e dentro desses itens os clientes que mais o compraram aparecem.

Acesso em: 

Vendas > Relatórios > Análise ABC - Modelo: Análise ABC por item 

Vendas > Relatórios > Análise ABC por Item - Modelo: Análise ABC por cliente


**Relatório de Itens de notas fiscais de saída**


Aprimorado "Relatório de Itens de notas fiscais de saída" permitindo seleção múltipla no filtro "Tipo de Saída".

Acesso em: Vendas > Relatórios > Relatório de Itens de notas fiscais de saída


**Alterar reservas do estoque do pedido**


Aprimorado tela de reserva de estoque com o objetivo de deixar a mesma mais clara para consulta:  alterado a coluna 'Saldo Estoque' para 'Saldo Físico' e adicionado a coluna 'Saldo Disponível'.

Acesso em: Vendas > Pedidos de venda> Mais opções > Alterar > Reservas de estoque


**Orçamento**

Aprimorado processo de Orçamento. 

Alterações: 

- O campo frete (Inserido na aba "Preço") é informado em percentual;
- As despesas fixas do Orçamento serão incorporadas ao custo;
- Criado parâmetro "Forma de cálculo para orçamento". Nele existem duas opções de configuração: Margem de Contribuição e Margem de Lucro. Ao selecionar "Margem de Lucro"  a opção "Preço Margem Zero" que fica na aba "Preço" é ocultada e a opção "% Margem de contribuição" é substituída por "Margem de lucro";
- O Orçamento agora calcula o Orçamento de forma individual. Ou Seja: Mesmo ao informar a Quantidade no início do cadastro com mais de uma unidade, o sistema não irá multiplicar os valores finais do item pela quantidade informada no início, como era feito anteriormente.

Acesso em: Vendas > Orçamento


## 1.43.0
### Novas funcionalidades
**Cadastro de clientes**

Disponibilizado o processo de cálculo de Juros por clientes: adicionado o campo “Juros do cliente (%)” no cadastro de cliente, aba Financeiro.  Essa alteração permite calcular juros diferente por cliente.  Agora o sistema busca a taxa no cadastro de cliente, caso não tenha % informado, efetua a busca no cadastro de portador.

Adicionado no cadastro de clientes, aba Financeiro, os campos de Instrução bancária. A emissão do boleto e cobrança, irá verificar as instruções do cliente, caso não tenha informação, segue buscando os dados de instruções da configuração da cobrança bancária normalmente.

Disponibilizado no cadastro de Clientes, aba Fiscal, os campos de alíquotas de retenção: INSS, PIS, COFINS e CSLL, para permitir particularizar as alíquotas por clientes, caso não tenha dado no cadastro do cliente, o sistema continua utilizando os dados do cadastro do Tipo de saída.

Acesso em: Vendas > Clientes


**Váriáveis padrões para formação de preços**

Disponibilizado o cadastro Variáveis padrões para a formação de preços, para informar os valores padrão para compor a formação de preços. 

Acesso em: Vendas > Listas > Variáveis para formação de preço

**Orçamentos**

Disponibilizado o recurso de Orçamento para atender a necessidade de elaborar um projeto de produto sob medida, podendo utilizar produtos que não estão cadastrados, gerando novos produtos específicos para determinada atividade. No orçamento tem-se a possibilidade de relacionar todos os custos e despesas do projeto, realizando a viabilidade e elaborando uma proposta.

Seu acesso é realizado pelo Módulo Vendas, botão Orçamentos.

Ao criar um novo Orçamento deve-se informar os dados de cadastro do item, após processa-lo pode-se abrir o Orçamento clicando no ícone de Cubo ao lado do status, onde apresenta o andamento do processo:

Estrutura:  Cadastro da estrutura do produto orçado.

•	Importar estrutura: abre uma tela para selecionar a estrutura do item no PCP, sendo permitido quando o produto é um item cadastrado.

•	Novo: gera nova estrutura onde deve-se informar item por item

Pode inserir qualquer item diferente de imobilizado e serviço.

Para produtos diferentes de Produto acabado, deve-se configurar o custo para cálculo de margem em Parametrização > Vendas, para definir se deve buscar o último custo ou o custo médio do item.

Roteiro: Cadastro do roteiro de produção do item.

•	Importar roteiro: abre uma tela exibindo os roteiros que o produto está vinculado. Essa opção pode ser usada quando o item é um produto cadastrado.

•	Novo: gera novo roteiro onde deve-se informar operação por operação.

Serviços: Cadastro dos serviços realizados.

•	Pode-se inserir itens do tipo serviço.

•	Pode-se inserir serviços não cadastrados.


Terceirização: Cadastro para informar os itens do tipo serviço.

•	Pode-se inserir serviços não cadastrados.

Outros custos: Cadastro para informar outros valores de custos não especificados nas outras áreas.

•	Deve-se informar o custo

•	E o sistema sugere o valor padrão do custo que está cadastrado.

Custo: Mostra os totalizadores das etapas anteriores (Custo total é a soma de todos os custos).

Preço: Essa aba totaliza o preço, pode receber outras variáveis e mostra o preço final.

•	Custo total: Repete o custo total da aba custos.

•	Frete: Pode ser informado em valor.

•	Comissão: Valor informado em %. Ao ser informado recalcula o preço com margem zero, preço sugerido, preço com desconto e preço.
 
•	Impostos: Valor informado em %. Ao informar recalcula o preço com margem zero, preço sugerido, preço com desconto e preço.
 
•	Despesas financeiras: Valor informado em %. Ao ser informado  recalcula o preço com margem zero, preço sugerido, preço com desconto e preço.

•	Preço c/ margem zero. Valor calculado pelo sistema.

•	Margem: Valor informado em %. Ao ser informado recalcula o preço sugerido, preço com desconto e preço de venda.

•	Preço sugerido: Calculado pelo sistema.

•	Desconto: Valor % informado: Ao ser informado recalcula o preço com desconto e o preço de venda.

•	Preço c/ desconto: Calculado pelo sistema.

•	Preço de venda: Sugerido pelo sistema igual ao preço com desconto. Esse campo pode ser alterado manualmente.


**Formação de preço**

Disponibilizado nova Formação de preços para produtos e mercadorias. A Formação não atende serviço e não serve para orçamento sob medida. Juntamente a esse recurso, foi disponibilizado o cadastro para informar os valores padrão para a formação de preço, chamado Variáveis padrões para formação de preços, acessível no botão Listas do módulo de Vendas, onde devem ser informados os dados das variáveis (valores) que compõe o preço, como Despesas, Despesas variáveis de venda e Preços de venda.

Seu acesso é feito pelo módulo de vendas, através do botão (tile) Formação de preço ou diretamente no item, através do botão Mais opções > Formação de preços. Após criar as variáveis padrões para a formação de preço e vincula-la numa tabela de preços com seus determinados itens, pode-se gerar uma formação.

Para gerar uma formação, na tela de consultas, clicar no botão Novo.
 
Regras para criar uma formação de preços:

•	O item deve estar adicionado a uma tabela de preços.

•	A Formação utiliza apenas tabela de preço em valor, as tabelas referenciadas ou em percentual não tem funcionalidade com a formação de preço.

•	Utiliza a unidade de venda do item e aplica a conversão de unidade conforme o item.

Na tela do cadastro da Formação, foi disponibilizado a opção Filtrar (link posicionado no lado direito da tela), que dispõe de opções para busca de dados.

Pode-se Adicionar itens ou Adicionar tabelas, carregando na grade os dados conforme selecionados.

No botão Mais opções da tela de cadastro da Formação de preços, está disponível as opções:
 
•	Alterar todos

•	Definir tipo de aplicação de preços

•	Remover tabelas

Regras para aplicar o preço:

•	Ao aplicar preços, os mesmos são convertidos para a unidade da tabela de preços, o novo preço é aplicado em todas as unidades da tabela.

•	Se o item controlar preço mínimo e máximo, os mesmos também serão atualizados conforme o % de variação do preço de venda antigo X novo.

•	O Markup é alterado no item da tabela de preços.

Na tela de consulta da Formação de preços, botão Mais opções, temos as opções:

•	Aplicar preços

•	Arquivar: Oculta a Formação de preços, não sendo possível seu acesso posteriormente

•	Cancelar: Esta opção é permitida para Formação não finalizada. Sua função é apenas descartar uma Formação iniciada e não concluída.

•	Copiar

•	Ratrear NF: Caso a formação tenha sido gerada com origem em Nota fiscal de entrada



### Manutenção

**Validação de preço mínimo e máximo**

Corrigido processo de atualização de preços da tabela de preços, para efetuar a validação de preço mínimo e máximo. Caso o preço máximo for menor que o preço base, exibirá mensagem informativa.

Acesso em: Vendas > Tabela de preços de venda


**Impressão do DANFE**

Correção na impressão do DANFE da Nota fiscal de saída, onde ocorria a mensagem “Falha ao carregar documento PDF”.

**Edição das mensagens na Nota fiscal de saída**

Corrigido o processo de Mensagens na nota fiscal de saída (informação complementar), permitindo excluir as mensagens desnecessárias e processar a nota, sem que as mesmas retornem. 

Acesso em: Vendas > Notas fiscais de saída

**Validação da unidade ao copiar um item**

Alterado o processo de cópia de item, para validar a unidade do Item dentro do grupo “Material de uso e consumo”, permitindo salvar o cadastro.

Acesso em: Vendas > Itens e serviços > Mais opções > Copiar

**Atualização manual da NFS-e**

Corrigido o processo de atualização e cancelamento manual da NFS_e.

Acesso em: Vendas > Notas fiscais de serviços

**Conversão de unidade**

Aumentado a precisão do fator de conversão em todo o sistema. Alterado tela de unidades do cadastro do Item para suportar a informação, sendo possível cadastrar até 10 casas decimais nas unidades.

Acesso em: Vendas > Itens e serviços

**Copiar registro de cliente**

Efetuado otimização no tempo e  tamanho do arquivo, ao gerar cópias de registro de um cliente, evitando o alto consumo de recurso do servidor.
Obs: Essa otimização foi realizada em todos os processos de “Cópia” do sistema.

Acesso em: Vendas > Clientes > Mais opções > Copiar


**Discriminação dos serviços na Nota fiscal de serviço**

Aprimorado o campo Complemento, da aba Resumo da Nota fiscal de serviço, permitindo uma descrição com até 2000 caracteres. Para usar essa alteração, faz-se necessário configurar o Tipo de saída: selecionar o Tipo de saída de serviço > aba Adm > Campo Descrição para nota fiscal: escolher a opção Descrição do item + Complemento. Essa alteração também tem influência sobre o RPS.
Acesso em: Vendas > Notas fiscais de serviço



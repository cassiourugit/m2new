# Estoque
Novidades do módulo de Estoque

## 1.43.75
### Manutenção

**Etiquetas de itens**

Adicionado o campo Complemento do item na lista de variáveis para impressão de etiquetas.
Configuração das variáveis: Início > Listas > Etiquetas

Acesso em: Estoque > Imprimir etiquetas de itens

## 1.43.62
### Manutenção

**Fechamento de estoque por item**


Corrigido relatório de Fechamento de estoque por item, onde o final de um exercício deve bater com o inicial do outro.

Acesso em: Estoque > Fechamento de estoque por item

## 1.43.61
### Manutenção

**Fechamento de estoque**


Corrigido processo de Fechamento de estoque: ao ajustar um item do tipo produto acabado, após fechar o estoque, não deve calcular o custo médio do item.

Acesso em: Estoque > Fechamento de estoque


## 1.43.15
### Novas funcionalidades

**Relatório de giro de estoque**


Disponibilizado Relatório de Giro de Estoque. Tem como principal função demonstrar se determinado item tem boa saída de venda ou se fica muito tempo parado em estoque.

Acesso em: Estoque > Relatórios > Giro de estoque

**Relatório de custos**


Disponibilizado Relatório de Custo. Nesse relatório é discriminado o Custo médio do Item por:  Grupo e Conta. O estoque, bem como o último custo e o custo médio são as funções principais do relatório.

Modelos:
- Padrão
- Grupo
- Conta

Acesso em: Estoque > Relatórios > Custos

**Relatório de números de série**


Disponibilizado Relatório de número de série. Esse relatório tem por função permitir a consulta do número de série dos itens, auxiliando em seu rastreio e suporte.

Acesso em: Estoque > Relatórios > Números de série


### Manutenção

**Relatório de Saldo de estoque**

Adicionada a coluna "Estoque Mínimo" e "Estoque Máximo" no Relatório de Saldo de Estoque.

Acesso em: Estoque > Relatórios

**Inventário - lançar contagem**

Aprimorado tela de lançamento de contagem no Inventário. Otimizado sistema para finalizar o lançamento de forma mais rápida. Aumentado tamanho do campo Item para melhor visualização dos dados.

Acesso em: Estoque > Mais opções > Inventário > Mais opções > Lançar contagem




## 1.43.0

### Manutenção

**Formatação das casas decimais no Histórico da requisição**

Corrigida formatação de casas decimais da tela de Histórico de Requisição de materiais, aba Atendimentos, permitindo até 4 dígitos após a virgula.

Acesso em: Estoque > Requisição de materiais > Mais opções > Histórico

**Gerenciamento de custos dos itens**

Aplicado melhorias no gerenciamento de custos dos itens.
A fim de aprimorar o ajuste de estoque do sistema, foram desenvolvidas as seguintes melhorias:

•	Bloqueio da edição da conta contábil de estoque no cadastro do Almoxarifado. Seguindo o mesmo padrão de Lógica da identificação do Item atual, quando um cadastro no almoxarifado for realizado pela primeira vez a conta ficará aberta para informar. Após informar, ela fica somente como leitura

•	Inserido o botão "Editar" ao lado da Conta. Ao acessar, o sistema irá verificar se a conta inserida possui movimentações. Se possuir alguma movimentação o sistema emitirá o alerta  “Não é possível alterar a conta contábil de estoque do almoxarifado. Existem movimentações realizadas para esta conta".

•	Aprimoramento no layout da tela de "Saldos Iniciais"

•	No ajuste de estoque o usuário tem a possibilidade de informar o preço do item (Na versão anterior esse campo atualizava somente o Saldo do item)

•	Busca pelo último custo para Sugestão do preço.

Acesso em: Estoque > Saldo Iniciais
	       Estoque > Almoxarifados > Novo


**Melhorias nos relatórios de Saldo de estoque**

Aprimorado os relatórios de Saldo de estoque e Saldo de estoque consolidado:

•	Adicionado coluna “Estoque mínimo”

•	Adicionado filtro “Fornecedor”

•	Adicionado checkbox “Apenas itens abaixo do estoque mínimo


Acesso em: Estoque > Relatórios > Saldo de estoque e Saldo de estoque consolidado


**Impressão de código de barras por unidade**

Alterado processo de Impressão de etiqueta do item:
Adicionado o campo “Unidade” abaixo do campo “Item”, na tela de Adicionar item, para imprimir o código de barras por unidade. O preenchimento desse campo é opcional, pois pode ter código de barra cadastrado sem unidade.

Acesso em: Estoque > Imprimir etiquetas de itens


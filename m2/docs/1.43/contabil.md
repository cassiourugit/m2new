# Contábil
Novidades do módulo Contábil

## 1.43.85
### Manutenção

**SPED Fiscal**

1. Criado parâmetro "Enviar ICMS, ICMSST e IPI para as notas de entrada sem crédito do imposto" para que os registros C100 e C170 sejam gerados com os valores dos impostos.

2. Ajustada a geração do arquivo com estrutura SPED, para que os registros C100 e C170 sejam gerados com os valores corretos nos campos 16 e 7, respectivamente, e ajustados os demais campos desses registros para que sejam gerados os valores corretos de acordo com o direito a crédito dos impostos. Também foi ocultado parâmetro "Enviar ICMS, ICMSST e IPI para as notas de entrada sem crédito do imposto".

Acesso em: Contábil> SPED Fiscal

## 1.43.84
### Manutenção

**SPED Fiscal**

Correção na geração dos registros C100 e C170 no arquivo, quando Nota fiscal de entrada conter substituição tributária.

Acesso em: Contábil > SPED Fiscal

## 1.43.72
### Manutenção

**SPED Fiscal**

Efetuado alteração no Sped Fiscal para ler a informação do livro de inventário e agrupar por item os blocos H010 e K200

Acesso em: Contábil > Sped Fiscal


## 1.43.61
### Manutenção

**Exceção fiscal do ICMS**

Alterado processo de Exceção fiscal ICMS para atender a nova regra que entra em vigor dia 1º de março/2020: alteração no percentual de alíquotas de ICMS para operações internar entre contribuintes de SC. Lei 17.878/2019.

Alterações:

1 - Cadastro do cliente: adicionado campo Contribuinte de ICMS na tela.

2 - Cadastro da Exceção fiscal: adicionado campo Contribuinte de ICMS na tela.

Acesso em: Contábil > Listas > Exceção fiscal do ICMS

## 1.43.16
### Novas funcionalidades

**Filtros na consulta de CFOP**

Disponibilizado os filtros "Destino/Origem" e "Entrada/Saída" na tela de consulta de CFOPs.

Acesso em:
Contábil > Listas > CFOP


## 1.43.0
### Novas funcionalidades
**FCI - Ficha de Conteúdo de importação**

Disponibilizado o recurso de FCI para situações onde o produto possui alguns materiais importados em sua composição. A partir de um determinado percentual de produto importado, a alíquota do ICMS e do CST de origem do produto mudam.

Seu acesso está no módulo Contábil > Mais opções.

O sistema permite duas opções:

•	Criar o cadastro de Ficha de Conteúdo de importação

•	Criar o processo de Remessa/Retorno da Ficha de Conteúdo de importação


Criar o cadastro de Ficha de Conteúdo de importação:

A tela de cadastro é composta pelos campos:

•	Item: Adicionar o item

•	Valor saída: Insere o valor do item

•	Valor importado: Valor do item importado

•	% Importação: Calculado pelo sistema. Valor em porcentagem da matéria importada

•	CST de origem: Inserção do CST de Oritem

•	%ICMS: Valor do ICMS (Em porcentagem)

•	Emitente: Pode-se escolher entre "Própria" ou "Terceiros"



Remessa FCI:

A Remessa FCI permite buscar o FCI cadastrado anteriormente. No campo "Novo" o sistema localiza o FCI cadastrado. Ao processar é gerado um arquivo .txt com as informações cadastradas.
 
Em "Mais opções > Importar Retorno" o sistema oferece a opção de Importar um FCI do computador para o ambiente.


**Exportação de lançamentos contábeis para terceiros**

Disponibilizado o processo de Exportação de Lançamento contábeis para terceiros, afim de gerar os arquivos com os lançamentos a serem importados no sistema contábil utilizado.  O processo gera um arquivo, (geralmente em .txt) com os lotes contábeis no período e  filial solicitados.

O que foi adicionado:

•	Opção "Exportação contábil para terceiros" na Parametrização > Contabilidade (Layout "Versão 7")

•	Botão de acesso (Tile) "Exportar lancto contábeis" no módulo de Contábil


Acesso em: Contábil > Exportar lancto contábeis

### Manutenção

**Número da nota fiscal devolvida para impressão na informação complementar da nota**

Adicionada a variável "Número das NF devolvidas" na configuração da Informação complementar. Essa variável imprime o número das notas devolvidas vinculadas, através do assistente de devolução de notas.
 
Acesso em: Contábil > Listas > Informação complementar






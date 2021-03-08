<div align= "justify">

# Novidades da versão 4.6.20/361

Liberado nessa segunda-feira 26 de maio 2020, a versão 4.6.20/361 com algumas alterações e correções.

* [Arquivo de empreendimento](#arquivo-de-empreendimento)

## **Novas funcionalidades**

### **Arquivo de empreendimento**  

Foi disponibilizado em **Contabilidade > Mais opções > Empreendimento** a geração do XML para envio ao Sistema de Gestão da Transmissão (SIGET), ferramenta utilizada pela Aneel para gerir as informações referentes ao sistema de transmissão de energia elétrica. Para mais informações é possível conferir o manual do SIGET no endereço a seguir: [Manual SIGET](http://www.aneel.gov.br/busca?p_p_id=101&p_p_lifecycle=0&p_p_state=maximized&_101_struts_action=%2Fasset_publisher%2Fview_content&_101_assetEntryId=14474728&_101_type=document)

![siget](../Img/Versão_4.6.20/siget.jpg)

## **Correções**

**<u>Compras > Pedido de compra > Mais opções > Gerar nota fiscal**</u>  
Foi ajustado a sugestão da natureza financeira para carregar na nota conforme informado no pedido de compra. Caso a nota não tem vínculo com pedido deve continuar sugerindo como ja fazia antes.

**<u>Almoxarifado > Cálculo JOA**</u>  
Alterado o cálculo do JOA quando o tipo de cálculo é sobre ODI e a ordem possui vínculos com a obra, será considerado no valor da participação financeira apenas o valor aplicado no orçamento, anteriormente o valor da participação era sobre o valor total do orçamento, então estava considerando valores com serviço e retirados no orçamento.

Também foi ajustado o cadastro do calculo do JOA para carregar corretamente a conta em curso e em serviço conforme informado no parâmetro do almoxarifado.

**<u>Almoxarifado > Relatório**</u>  
Foi disponibilizado o relatório de **Materiais sem movimento** no sistema.

**<u>Almoxarifado > Relatório**</u>  
Disponibilizado no sistema o relatório materiais requisitados.

**<u>Obras > Relatórios > Custos adicionais orçado x realizado**</u>  
Ajustado o relatório para exibir os valores orçados retirado de mão de obra considerando os valores com destino despesa.

**<u>Obras > Relatórios > Relação das ordens em curso**</u>  
Disponibilizado no sistema o relatório **Relação das ordens em curso**.

**<u>Obras > Relatórios > Resumo da movimentação das ordens em curso em curso**</u>  
Foi adicionado no sistema o relatório resumo da movimentação das ordens em curso.

**<u>Obras > Laudo > Mais opções**</u>  
Foi adiciona no relatório do laudo o modelo **Imprimir laudo - Separados por destino**.

**<u>Obras > Resumo das participações financeiras**</u>  
Foi adicionado no relatório de resumo das participações o filtro data de fechamento das ordens.

**<u>Patrimônio > Relatório > Baixa de bens**</u>  
Foi convertido o relatório de baixa de bens para ferramenta nova de relatórios.

**<u>Patrimônio > Relatório > Aquisição de bens**</u>
Foi convertido o relatório de Aquisição de bens para ferramenta nova de relatórios.

**<u>Cobranças > Importação do faturamento**</u>  
Ajustado a importação do AVC para quando gerar as notas fiscais, a CST carregar corretamente conforme o estado das ONS, ou seja, CST 041 operações interestadual e 051 operações internas.

**<u>Contabilidade > Importação do faturamento**</u>  
Foi alterado a importação de notas de energia para exibir os valores de ICMS corretamente quando for faturas de baixa renda.

</div>
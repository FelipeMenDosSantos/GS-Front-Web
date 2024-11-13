import React from 'react'
import "../css/Home.css"
import imgintro from "../assets/img-intro.png"

export const Home = () => {
  return (
    <section className='home'>
        <div className="introducao">
            <div className='text-intro'>
                <p className='frase-chamativa'><strong>Consulte</strong> seu gasto de energia</p>
                <p>Com o MeuConsumo você pode consultar a quantidade de energia que você está gastando direto da sua casa!</p>
            </div>
            <div className="intro-direita">
                <div className='img-intro'>
                    <img src={imgintro} alt="" />
                </div>
            </div>
        </div>
        <div className='funcionamento'>
            <p>Basta inserir as informações solicitadas na página CADASTRAR para calcular o consumo diário da sua residência!
                Após coletarmos os dados necessários, guardamos eles em um arquivo JSON e logo em seguida fazemos o cálculo do consumo.
            </p>
        </div>
        <div className='beneficios'>
            <h2>Benefícios e Impactos do MeuConsumo</h2>
            <h3>Benefícios para o Usuário:</h3>
            <p>
                1. Economia Financeira: Ao monitorar o uso de energia e identificar os aparelhos que mais consomem, é possível adotar estratégias para reduzir o consumo e, consequentemente, os custos na conta de luz.<br/>
                2. Conscientização Energética: O acompanhamento do consumo diário, semanal e mensal ajuda o usuário a entender seus hábitos e a identificar oportunidades para uso mais eficiente da energia.<br/>
                3. Facilidade de Uso: Com relatórios claros e detalhados, o usuário visualiza o consumo de forma prática, sem a necessidade de dispositivos complexos.
            </p>
        </div>
        <div className='impactos'>
            <h3>Impactos Positivos para o Meio Ambiente:</h3>
            <p>
            1. Redução da Pegada de Carbono: Diminuir o consumo de energia resulta em menor demanda por geração elétrica, reduzindo emissões de carbono e outros poluentes.<br/>
            2. Sustentabilidade Energética: Incentivar hábitos de consumo conscientes contribui para a sustentabilidade e preservação dos recursos naturais, reduzindo o impacto ambiental no longo prazo.
            </p>
        </div>

    </section>
  )
}

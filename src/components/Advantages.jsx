import styled from 'styled-components'
const AdvantageSection = styled.div`
    .advantages-container{
        padding: 46px 32px;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    .advantages-container > h2{
        font-size: 22px;
        text-align: center;
        font-weight: 750;
    }
    .advantages-box-container{
        display: flex;
        flex-direction: column;
        gap: 14px;
    }
    .advantage-box{
        display: flex;
        align-items: center;
        gap: 12px;
    }
    .advantage-box > span{
        font-weight: 600;
        font-size: 17px;
    }
    .advantage-box > img{
        width: 30px;
        height: auto;
    }
    .advantages-cta{
        padding: 32px;
        border-radius: 16px;
        border: 1px solid #d0d0d0ff;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        text-transform: uppercase;
    }
    .advantages-cta > h4{
        font-weight: 600;
        font-size: 14px;
        color: #2b2b2bff;
    }
    .advantages-cta > h3{
        font-size: 32px;
        background: linear-gradient(to right, #3998fe, #76c7fe);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
        font-weight: 900;
        margin: 24px 0;
    }
    .advantages-cta > span{
        font-size: 16px;
        font-weight: 500;
    }
    .advantages-cta > span > s{
        text-decoration: line-through;
        color: #3E97FF;
    }
    .advantages-cta > strong{
        font-size: 45px;
        font-weight: 900;
        color: #44D151;
    }
    .advantages-cta > button{
        background: #44D151;
        margin: 20px 0 12px 0;
    }
`
export default function Advantages(){
    return(
        <AdvantageSection>
            <div className="advantages-container">
                <h2>Veja por que se preparar <br/> antes do edital</h2>

                <div className="advantages-box-container">
                    <div className="advantage-box">
                        <img src="/images/check.png" alt="" />
                        <span>Mais tempo para dominar o conteúdo</span>
                    </div>

                    <div className="advantage-box">
                        <img src="/images/check.png" alt="" />
                        <span>Melhor retenção das informações</span>
                    </div>

                    <div className="advantage-box">
                        <img src="/images/check.png" alt="" />
                        <span>Base mais sólida nas disciplinas</span>
                    </div>

                    <div className="advantage-box">
                        <img src="/images/check.png" alt="" />
                        <span>Identificação e correção de pontos fracos com antecedência</span>
                    </div>

                    <div className="advantage-box">
                        <img src="/images/check.png" alt="" />
                        <span>Confiança e redução de ansiedade na hora da prova</span>
                    </div>
                </div>

                <div className="advantages-cta">
                    <h4>🚨Oferta por tempo limitado🚨</h4>
                    <h3>Aproveite o <br/> desconto!</h3>
                    <span>De <s>R$44,90</s> por:</span>
                    <strong>R$ 22,90</strong>
                    <button className='btn'>Garantir apostila</button>
                    <img src="/images/satisfaction.png" alt="" />
                </div>
            </div>
        </AdvantageSection>
    )
}
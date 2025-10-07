import styled from 'styled-components'
import Image from 'next/image'

const AdvantageSection = styled.div`
    .advantages-container{
        padding: 46px 32px;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    .advantages-container > h2{
        font-size: 20px;
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
        font-size: 16px;
        color: #2e2e2e;
    }
    .advantage-box > img{
        width: 25px;
        height: auto;
    }
    .advantages-cta{
        padding: 32px;
        border-radius: 16px;
        // border: 1px solid #bdbdbdff;
        border: 1px solid #b2c8f0;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        text-transform: uppercase;
    }
    .advantages-cta > h4{
        font-weight: 600;
        font-size: 12px;
        color: #4e4e4eb9;
    }
    .advantages-cta > h3{
        letter-spacing: 0px;
        font-size: 26px;
        background: linear-gradient(to right bottom, #3967feff, #39a5feff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
        font-weight: 800;
        margin: 20px 0;
    }
    .advantages-cta > span{
        font-size: 14px;
        font-weight: 500;
    }
    .advantages-cta > span > s{
        text-decoration: line-through;
        color: #3E97FF;
    }
    .advantages-cta > strong{
        font-size: 35px;
        font-weight: 800;
        color: #44D151;
    }
    .advantages-cta > button{
        background: #44D151;
        margin: 20px 0 16px 0;
        padding: 18px 0;
        font-size: 15px;
    }
    .advantages-cta > img{
        width: 100%;
        opacity: 0.3;
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
                    <h3>Aproveite a<br/> oferta!</h3>
                    <span>De <s>R$44,90</s> por:</span>
                    <strong>R$ 22,90</strong>
                    <button className='btn'>
                        <span>Garantir apostila</span>
                        <Image src={"/icons/arrow-right-white.svg"} width={9} height={16} alt='Ilustrativo de botão'/>
                    </button>
                    <img src="/images/satisfaction.png" alt="" />
                </div>
            </div>
        </AdvantageSection>
    )
}
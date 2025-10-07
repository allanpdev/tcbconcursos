import styled from 'styled-components'
import Image from 'next/image'

const FAQSection = styled.div`
    &{
        background: #F8F9FF;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 48px 32px 48px 32px;
        gap: 32px;
    }
    #faq-container{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 12px;
    }
    .faq-box{
        background: linear-gradient(to bottom right, #1C41D5, #147aee);
        padding: 18px 22px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .faq-box > span{
        font-weight: 450;
        color: #F8F9FF;
        font-size: 16px;
    }
`

export default function FAQ(){
    return(
        <FAQSection>
            <h2>Perguntas Frequentes</h2>

            <div id='faq-container'>
                <div className='faq-box'>
                    <span>Como acesso o conteúdo?</span>
                    <Image src={"/icons/arrow-down.svg"} width={17} height={17} alt="Icone"/>
                </div>

                <div className='faq-box'>
                    <span>Como acesso o conteúdo?</span>
                    <Image src={"/icons/arrow-down.svg"} width={17} height={17} alt="Icone"/>
                </div>

                <div className='faq-box'>
                    <span>Como acesso o conteúdo?</span>
                    <Image src={"/icons/arrow-down.svg"} width={17} height={17} alt="Icone"/>
                </div>

                <div className='faq-box'>
                    <span>Como acesso o conteúdo?</span>
                    <Image src={"/icons/arrow-down.svg"} width={17} height={17} alt="Icone"/>
                </div>

                <div className='faq-box'>
                    <span>Como acesso o conteúdo?</span>
                    <Image src={"/icons/arrow-down.svg"} width={17} height={17} alt="Icone"/>
                </div>
            </div>
        </FAQSection>
    )
}
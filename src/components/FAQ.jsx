import styled from 'styled-components'
import Image from 'next/image'

const FAQSection = styled.div`
    &{
        background: #f4f5ff;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 48px 32px 40px 32px;
        gap: 42px;
    }
    & > h2{
        font-size: 19px;
        text-transform: uppercase;
        font-family: 'Nunito';
        font-weight: 750;
    }
    #faq-container{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 14px;
    }
    .faq-box{
        background: #ffffff;
        padding: 18px 22px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 8px;
    }
    .faq-box > span{
        font-weight: 450;
        color: #000000;
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
                    <Image src={"/icons/arrow-down-black.svg"} width={24} height={24} alt="Icone"/>
                </div>

                <div className='faq-box'>
                    <span>Como acesso o conteúdo?</span>
                    <Image src={"/icons/arrow-down-black.svg"} width={24} height={24} alt="Icone"/>
                </div>

                <div className='faq-box'>
                    <span>Como acesso o conteúdo?</span>
                    <Image src={"/icons/arrow-down-black.svg"} width={24} height={24} alt="Icone"/>
                </div>

                <div className='faq-box'>
                    <span>Como acesso o conteúdo?</span>
                    <Image src={"/icons/arrow-down-black.svg"} width={24} height={24} alt="Icone"/>
                </div>

                <div className='faq-box'>
                    <span>Como acesso o conteúdo?</span>
                    <Image src={"/icons/arrow-down-black.svg"} width={24} height={24} alt="Icone"/>
                </div>
            </div>
        </FAQSection>
    )
}
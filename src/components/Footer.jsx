import styled from 'styled-components'
import Image from 'next/image'

const FooterSection = styled.footer`
    &{ 
        position: relative;
    }
    #footer-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 32px 32px 32px;
    }
    #moldura{
        position: absolute;
        width: 100%;
        height: 45px;
    }
    #footer-heading > h4{
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 3px;
    }
    #footer-heading > p{
        font-size: 16px;
        font-weight: 400;
    }
    #footer-img{
        border-radius: 50%;
    }

`

export default function Footer(){
    return(
        <FooterSection>
            <div id='footer-container'>
                <div id='footer-heading'>
                    <h4>TCB Concursos</h4>
                    <p>Apostilas digitais preparatórias</p>
                </div>

                <img src={"/images/favicon.ico"} width={35} height={35} alt="" id='footer-img'/>
            </div>

            {/* <img src="/images/moldura.png" alt="" id='moldura'/> */}
        </FooterSection>
    )
}
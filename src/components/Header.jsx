'use client'

import Image from "next/image";
import styled from 'styled-components'

const HeaderTag = styled.header`
   &{
      width: 100%;
      margin-bottom: -1px;
   }
   & > #header-container{
      background: var(--destaque);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 24px;
   }
   & > #header-container > #header-logo{
      width: 170px;
      height: auto;
   }
   & > #header-container > #header-disccount{
      background-color: #fff;
      border-radius: 50px;
      padding: 8px 28px;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   & > #header-container > #header-disccount > span{
      color: var(--destaque);
      text-transform: uppercase;
      font-weight: 700;
      line-height: 10px;
      font-family: var(--inter);
      font-size: 15.5px;
   }
`

export default function Header(){
   return(
      <HeaderTag>
         <div id="header-container">
            <Image aria-hidden src="/icons/logo.svg" alt="File icon" width={170} height={16} id="header-logo"/>

            <div id="header-disccount">
               <span>30% off</span>
            </div>
         </div>
      </HeaderTag>
   )
}


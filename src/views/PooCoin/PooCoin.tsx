import React from 'react'
// import styled from 'styled-components'

// import { /* Heading, Text, */ BaseLayout } from '@pancakeswap-libs/uikit'
// import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
// import TwitterCard from './components/TwitterCard'
import PooCoinCard from './components/PooCoinCard'


/* const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  text-align: center;
  padding-top: 48px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 116px;
    background: url();
    background-size: contain;
    background-position: left center, right center;
    height: 10px;
    padding-top: 0;
  }
` */

/* const Cards = styled(BaseLayout)`
  align-items: start;
  justify-content: start;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
' */

const PooCoin: React.FC = () => {
  // const TranslateString = useI18n()

  return (
    <Page>
      <div>
        
          <PooCoinCard/>
        
      </div>
    </Page>
  )
}

export default PooCoin

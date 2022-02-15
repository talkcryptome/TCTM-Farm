import React, { useContext } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import { Menu as UikitMenu } from '@pancakeswap-libs/uikit'
import useGetPriceData from 'hooks/useGetPriceData'
import config from './config'



const Menu: React.FC = (props) => {
  const { account, connect, reset } = useWallet()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const tctmPriceUsd = useGetPriceData()

  return (
    <UikitMenu
      priceLink="talkcryptotome.com"
      account={account}
      login={connect}
      logout={reset}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage && selectedLanguage.code}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      links={config}
      cakePriceUsd={tctmPriceUsd}
      {...props}
    />
  )
}

export default Menu

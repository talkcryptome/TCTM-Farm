import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.talkcryptotome.com/#/swap?outputCurrency=0x9066e87Bac891409D690cfEfA41379b34af06391',
      },
      {
        label: 'Liquidity',
        href:
          'https://exchange.talkcryptotome.com/#/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0x9066e87Bac891409D690cfEfA41379b34af06391',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pool',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Vault',
    icon: 'PoolIcon',
    href: '/vaults',
  },
  {
    label: 'Bridge',
    icon: 'PoolIcon',
    href: '/bridges',
  },

]

export default config

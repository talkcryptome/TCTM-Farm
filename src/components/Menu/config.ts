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
        href: 'https://swap.talkcryptotome.com', 
      },
      {
        label: 'Liquidity',
        href:
          'https://liquidity.talkcryptotome.com',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://farm.talkcryptotome.com',
  },
  {
    label: 'Pool',
    icon: 'PoolIcon',
    href: 'https://pool.talkcryptotome.com',
  },
  {
    label: 'Vault',
    icon: 'MoonIcon',
    href: 'https://vault.talkcryptotome.com',
  },
  {
    label: 'Bridge',
    icon: 'TicketIcon',
    href: 'https://bridge.talkcryptotome.com',
  },
  {
    label: 'Aggregator',
    icon: 'SunIcon',
    href: 'https://aggregator.talkcryptotome.com',
  },
  {
    label: 'Charts',
    icon: 'HamburgerIcon',
    items: [
      {
        label: 'DexGuru',
        href: 'https://dex.talkcryptotome.com',
      },
      {
        label: 'PooCoins',
        href: 'https://poo.talkcryptotome.com',
      },
    ],
  },

]

export default config

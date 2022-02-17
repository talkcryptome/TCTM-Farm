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
        href: 'https://exchange.talkcryptotome.com/#/swap',
      },
      {
        label: 'Liquidity',
        href:
          'https://exchange.talkcryptotome.com/#/liquidity',
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
    icon: 'MoonIcon',
    href: '/vaults',
  },
  {
    label: 'Bridge',
    icon: 'TicketIcon',
    href: '/bridges',
  },
  {
    label: 'Aggregator',
    icon: 'SunIcon',
    href: '/aggregator',
  },
  {
    label: 'Charts',
    icon: 'HamburgerIcon',
    items: [
      {
        label: 'DexGuru',
        href: '/dexguru',
      },
      {
        label: 'PooCoins',
        href: '/poocoin',
      },
    ],
  },

]

export default config

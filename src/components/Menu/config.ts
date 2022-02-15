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
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href:  '/add',
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
  {
    label: 'Aggregator',
    icon: 'PoolIcon',
    href: '/aggregator',
  },

]

export default config

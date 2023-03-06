export enum pageNames {
  Index = -1,
  Home = 0,
  Song = 2,
  Ranking,
  Export,
}

export enum density {
  Default = 1,
  Comfortable,
  Compact,
}

export interface MenuItem {
  Id: number
  NameText: string
  Icon?: string
  NameI18nKey?: string
  Disabled?: boolean
  Hidden?: boolean
  ToUrl?: string
  Action?: string
  SubMenu?: MenuItem[]
}

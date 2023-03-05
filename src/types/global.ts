export enum pageNames {
  Index,
  Home,
}

export enum density {
  Default = 1,
  Comfortable,
  Compact,
}

export interface MenuItem {
  Id: number
  NameText: string
  Icon: string
  NameI18nKey?: string
  Disabled?: boolean
  Hidden?: boolean
  ToUrl?: string
  SubMenu?: MenuItem[]
}

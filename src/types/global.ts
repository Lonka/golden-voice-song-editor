export enum pageNames {
  Index,
  Home,
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

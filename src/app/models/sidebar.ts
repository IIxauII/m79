export interface SidebarNavItem {
  route: string,
  icon: string,
  ariaLabel: string,
  active: boolean,
}

export type SidebarNavItemCollection = SidebarNavItem[][]


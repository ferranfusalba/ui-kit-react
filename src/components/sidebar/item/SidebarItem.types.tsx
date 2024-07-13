export interface SidebarItemCoreProps {
  title: string | React.ReactNode;
  to: string;
  active: boolean;
  id?: string;
  visible?: boolean | undefined;
}

export interface SidebarItemProps extends SidebarItemCoreProps {
  icon?: string;
  isSubmenu?: boolean;
}

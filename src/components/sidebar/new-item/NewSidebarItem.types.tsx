export interface NewSidebarItemCoreProps {
  title: string | React.ReactNode;
  to: string;
  active: boolean;
  id?: string;
  dataCy?: string;
  visible?: boolean | undefined;
}

export interface NewSidebarItemProps extends NewSidebarItemCoreProps {
  icon?: React.ReactNode;
  isSubmenu?: boolean;
}

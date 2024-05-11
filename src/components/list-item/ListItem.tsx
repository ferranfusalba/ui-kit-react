import { StyledListItem } from "./ListItem.styles";

const ListItem = ({
  icon,
  title,
  className,
}: {
  icon?: string;
  title: string;
  className?: string;
}) => {
  return (
    <StyledListItem className={className}>
      <aside className="material-symbols-outlined">{icon}</aside>
      <span>{title}</span>
    </StyledListItem>
  );
};

export default ListItem;

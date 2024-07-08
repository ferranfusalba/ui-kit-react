import classNames from "classnames";
import { StyledSidebarSectionTitleSeparator } from "./SidebarSectionTitleSeparator.styles";

const SidebarSectionTitleSeparator = ({
  title,
  collapsed,
}: {
  title: string;
  collapsed?: boolean;
}) => {
  return (
    <StyledSidebarSectionTitleSeparator
      className={classNames({ collapsed: collapsed })}
    >
      <span className="section-title">{title}</span>
      <span className="section-separator">
        <hr />
      </span>
    </StyledSidebarSectionTitleSeparator>
  );
};

export default SidebarSectionTitleSeparator;

import classNames from "classnames";
import { StyledSidebarSectionTitleToggler } from "./SidebarSectionTitleToggler.styles";
import IconButton, {
  HandleOnClick,
} from "../../../buttons/icon-button/IconButton";
import ChevronLeftIcon from "../../../../assets/icons-code/ChrevronLeftIcon";

const SidebarSectionTitleToggler = ({
  title,
  onClick,
  collapsed,
  visible,
}: {
  title: string;
  onClick: HandleOnClick;
  collapsed: boolean;
  visible: boolean;
}) => {
  return (
    <StyledSidebarSectionTitleToggler
      className={classNames({ collapsed: collapsed })}
    >
      <span className="section-title">{title}</span>

      {/* TODO: Review visible */}
      {visible ? (
        <div className="section-expander">
          <IconButton
            icon={<ChevronLeftIcon />}
            handleOnClick={onClick as HandleOnClick}
            id="pendo-navbar-collapse-button"
          />
        </div>
      ) : null}
    </StyledSidebarSectionTitleToggler>
  );
};

export default SidebarSectionTitleToggler;

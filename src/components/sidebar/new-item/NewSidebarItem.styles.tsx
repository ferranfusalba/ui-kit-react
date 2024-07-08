import styled from "styled-components";

export const StyledNewSidebarItemCore = styled.div`
  display: flex;
  height: 40px;

  div.aside-indicator {
    width: 100%;
    max-width: 6px;
    min-width: 6px;
    height: 40px;
  }
`;

export const StyledNewSidebarItem = styled(StyledNewSidebarItemCore)`
  a {
    width: 100%;
    height: 100%;
    color: var(--color-blueish-dark-blue);
    text-decoration: none;
  }

  &:hover {
    div.aside-indicator {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      background-color: var(--color-bw-white);
    }
  }

  &.active {
    div.aside-indicator {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      background-color: var(--color-corporative-blue-opticks);
    }
  }

  &:hover,
  &.active {
    a > div.items-icon-title {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      background-color: var(--color-bw-white);

      .item-icon:not(.sensor-variation) {
        #icon-fill {
          fill: var(--color-corporative-green-logo);
        }
        #icon-stroke {
          stroke: var(--color-corporative-green-logo);
        }
      }

      .item-icon.sensor-variation {
        #icon-fill {
          fill: var(--color-blueish-tufts-blue);
        }
        #icon-stroke {
          stroke: var(--color-blueish-tufts-blue);
        }
      }
    }
  }

  &:not(.active) {
    a > div.items-icon-title {
      .item-icon {
        #icon-fill {
          fill: var(--color-blueish-dark-blue);
        }
        #icon-stroke {
          stroke: var(--color-blueish-dark-blue);
        }
      }
    }
  }
`;

export const StyledNewSidebarItemContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  div.item-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 13px;
    width: 24px;
  }

  span.item-title {
    font-size: 14px;
    font-weight: 500;
  }
`;

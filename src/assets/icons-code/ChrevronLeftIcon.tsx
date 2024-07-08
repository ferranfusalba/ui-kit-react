import { SvgElementProps } from "../../types/SvgElement.types";

const ChevronLeftIcon = ({
  width = 16,
  height = 16,
  viewBox = "0 0 16 16",
}: SvgElementProps) => (
  <svg width={width} height={height} viewBox={viewBox} fill="none">
    <path
      d="M10.47 11.06L7.4167 8L10.47 4.94L9.53003 4L5.53003 8L9.53003 12L10.47 11.06Z"
      id="icon-fill"
      fill="var(--color-corporative-opticks-blue-grey)"
    />
  </svg>
);

export default ChevronLeftIcon;

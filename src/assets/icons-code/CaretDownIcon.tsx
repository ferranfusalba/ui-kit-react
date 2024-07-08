import React from "react";
import { SvgElementProps } from "../../types/SvgElement.types";

const CaretDownIcon = ({
  width = 8,
  height = 8,
  viewBox = "0 0 8 8",
}: SvgElementProps) => (
  <svg width={width} height={height} viewBox={viewBox} fill="none">
    <path
      d="M7.3335 2.33336L4.0001 5.66669L0.66683 2.33335"
      stroke="var(--color-bw-mid-blue-grey)"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CaretDownIcon;

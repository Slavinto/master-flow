"use client";

import * as React from "react";
import clsx from "clsx";
import { styled } from "@mui/system";
import { useSwitch, UseSwitchParameters } from "@mui/base/useSwitch";

export default function CustomSwitch(props: UseSwitchParameters) {
    const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

    const stateClasses = {
        "Switch-checked": checked,
        "Switch-disabled": disabled,
        "Switch-focusVisible": focusVisible,
    };

    return (
        <BasicSwitchRoot className={clsx(stateClasses, "bg-primary")}>
            <BasicSwitchThumb className={clsx(stateClasses)} />
            <BasicSwitchInput
                {...getInputProps()}
                aria-label='switch'
                className={clsx("")}
            />
        </BasicSwitchRoot>
    );
}

const blue = {
    200: "#99CCF3",
    500: "#007FFF",
    700: "#0059B2",
};

const grey = {
    50: "#F3F6F9",
    100: "#E5EAF2",
    200: "#DAE2ED",
    300: "#C7D0DD",
    400: "#B0B8C4",
    500: "#9DA8B7",
    600: "#6B7A90",
    700: "#434D5B",
    800: "#303740",
    900: "#1C2025",
};

const BasicSwitchRoot = styled("span")(
    ({ theme }) => `
  box-sizing: border-box;
  font-size: 0;
  padding: 0px 5px;
  position: relative;
  display: flex;
  align-items: center;
  width: 64px;
  height: 36px;
  margin: 10px;
  cursor: pointer;
  /* background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};*/
  border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
  border-radius: 9999px;
  box-shadow: inset 0px 1px 1px ${
      theme.palette.mode === "dark"
          ? "rgba(0, 0, 0, 0.5)"
          : "rgba(0, 0, 0, 0.05)"
  };

  &:hover {
    /*background: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};*/
  }
    
  &.Switch-focusVisible {
    box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? blue[700] : blue[200]
    };
  }

  &.Switch-disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &.Switch-checked {
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    background: #175cff;
    /*background: ${blue[500]};*/
    box-shadow: inset 0px 1px 1px ${
        theme.palette.mode === "dark"
            ? "rgba(0, 0, 0, 0.2)"
            : "rgba(0, 0, 0, 0.05)"
    };
    &.Switch-focusVisible {
      box-shadow: 0 0 0 3px ${
          theme.palette.mode === "dark" ? blue[700] : blue[200]
      };
    }
  }
  
  `
);

const BasicSwitchInput = styled("input")`
    box-sizing: border-box;
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
`;

const BasicSwitchThumb = styled("span")(
    ({ theme }) => `
  box-sizing: border-box;
  display: block;
  position: relative;
  left: 0px;
  width: 26px;
  height: 26px;
  align-self: center;
  border-radius: 26px;
  background-color: #fff;
  border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;
  box-shadow: 0px 1px 2px
    ${
        theme.palette.mode === "dark"
            ? "rgba(0, 0, 0, 0.25)"
            : "rgba(0, 0, 0, 0.1)"
    };

  &.Switch-checked {
    left: 27px;
    background-color: #fff;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
  }
`
);

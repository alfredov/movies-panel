import { css } from '@emotion/react'

export const button = css`
  background-color: #5031A9;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 72px;
  height: 72px;

  &:not([disabled]) {
    cursor: pointer;

    &:active {
      background-color: #623cd2;
      box-shadow: unset;
    }
  }

  &[disabled] {
    background-color: #A898D4;
  }
`

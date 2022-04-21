import { css } from '@emotion/react'

export const main = css`
  padding-left: 36px;
  padding-right: 36px;
`

export const container = css`
  display: flex;
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;
  overflow-x: scroll;
  overflow-y: hidden;
  > span {
    margin-right: 0px;
  }
`

export const cardWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const card = css`
  cursor: pointer;
  scroll-snap-align: start;
  margin-right: 16px;
  &> img {
    border-radius: 6px;
    width: 188px;
    height: 282px;
  }
  :last-child {
    margin-right: 0px;
    min-width: 0px;
  }
`

export const paginateCard = css`
  cursor: pointer;
  scroll-snap-align: start;
  border-radius: 6px;
  min-width: 188px;
  height: 282px;
  background-color: #F7CF71;
  color: #141414;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: end;
  padding-bottom: 16px;
`

export const cardDisabled = css`
  opacity: .5;
`

export const buttonBackStyle = css`
  position: absolute;
  left: 0;
  top: 100%;

  @media only screen and (min-width: 768px) {
    top: calc(42% - 36px);
    left: -30px;
  }
`

export const buttonNextStyle = css`
  position: absolute;
  right: 0;
  top: 100%;

  @media only screen and (min-width: 768px) {
    right: -30px;
    top: calc(42% - 36px);
  }
`

export const cardInfo = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const cardTitle = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 110%;
  letter-spacing: -0.02em;
  color: #666666;

  :first-of-type {
    font-style: normal;
    font-weight: 700;
    color: #141414;
  }
`

import { css, keyframes } from '@emotion/react'

const MAX_Z_INDEX = 2147483647

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const overlay = css({
  background: 'rgba(0, 0, 0, .7)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 500ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: MAX_Z_INDEX,
})

export const content = css`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  box-shadow: 0px 2px 6px rgba(76, 81, 109, 0.3);
  position: fixed;
  max-height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  width: 100%;
  z-index: ${MAX_Z_INDEX};

  @media screen and (min-width: 768px) {
    max-height: 85vh;
    border-radius: 5px;
    width: auto;
  }
`

export const HeaderCloseIcon = css`
  border: none;
  color: #141414;
  cursor: pointer;
  height: 40px;
  padding: 1px 6px;
  position: absolute;
  margin: 18px 20px 0px;
  right: 0;
  width: 40px;
  padding: 0;
  background: transparent;

  @media screen and (min-width: 912px) {
    color: white;
    left: 100%;
    margin-top: 0px;
    margin-left: 18px;
    right: unset;
  }
`

export const description = css`
  margin: 0;
  overflow: auto;
  max-height: 100vh;

  @media screen and (min-width: 768px) {
    max-height: calc(85vh - 160px);
  }
`

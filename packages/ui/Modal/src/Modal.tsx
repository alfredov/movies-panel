/** @jsxImportSource @emotion/react */
import React from 'react'
import * as PrimitiveModal from '@radix-ui/react-alert-dialog'

import * as styles from './index.styles'
import CloseIcon from './CloseIcon'

type CommomProps = { css?: any }
export type ModalRootProps = PrimitiveModal.DialogProps & CommomProps
export type ModalContentProps = PrimitiveModal.DialogContentProps & CommomProps
export type ModalDescriptionProps = PrimitiveModal.DialogDescriptionProps & CommomProps
export type ModalTriggerProps = PrimitiveModal.DialogTriggerProps & CommomProps

export const Close = PrimitiveModal.Cancel
export const Portal = PrimitiveModal.Portal
export const Title = PrimitiveModal.Title
export const Overlay = PrimitiveModal.Overlay

const Root = ({ children, css, ...rest }: ModalRootProps) => (
  <PrimitiveModal.Root {...rest}>
    <PrimitiveModal.Overlay css={[styles.overlay, css]} />
    {children}
  </PrimitiveModal.Root>
)

const Trigger = ({ children, css, ...rest }: ModalTriggerProps) => (
  <PrimitiveModal.Trigger {...rest} css={css}>
    {children}
  </PrimitiveModal.Trigger>
)

const Content = ({ children, css, ...rest }: ModalContentProps) => (
  <PrimitiveModal.Portal>
    <PrimitiveModal.Content
      {...rest}
    >
      <div css={[styles.content, css]}>
        <PrimitiveModal.Cancel css={styles.HeaderCloseIcon}>
          <CloseIcon />
        </PrimitiveModal.Cancel>
        {children}
      </div>
    </PrimitiveModal.Content>
  </PrimitiveModal.Portal>
)

const Description = ({ children, css, ...rest }: ModalDescriptionProps) => (
  <PrimitiveModal.Description {...rest} css={[styles.description, css]}>
    {children}
  </PrimitiveModal.Description>
)

export {
  Root,
  Content,
  Description,
  Trigger,
}

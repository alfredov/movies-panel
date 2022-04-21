
import React, { useState } from 'react'
import { css } from '@emotion/react'
import * as Modal from './index'

// eslint-disable-next-line import/no-anonymous-default-export
export default { title: 'ui/Modal' }

const footerStyle = css`
  flex-direction: row;
`

export const Template = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Modal.Root open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <Modal.Trigger asChild>
        <button onClick={() => setIsOpen(true)}>
          Abrir modal
        </button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Description asChild>
          <div>
            <p>Subtítulo</p>
            <br />
            <p>
              Contenido donec a purus non diam fermentum fermentum. Integer ullamcorper cursus
              velit ut scelerisque. Integer blandit pulvinar sem, vitae porttitor urna porta eget.
              Nam eget eleifend ante.
            </p>
            <br />
            <p>
              Donec a purus non diam fermentum fermentum. Integer ullamcorper cursus velit ut
              scelerisque. Integer blandit pulvinar sem, vitae porttitor urna porta eget. Nam eget
              eleifend ante.
            </p>
            <br />
            <ul>
              <li><p>Integer blandit</p></li>
              <li><p>Integer blandit</p></li>
              <li><p>Integer blandit</p></li>
              <li><p>Integer blandit</p></li>
              <li><p>Integer blandit</p></li>
            </ul>
            <br />
            <p>
              Contenido donec a purus non diam fermentum fermentum. Integer ullamcorper cursus
              velit ut scelerisque. Integer blandit pulvinar sem, vitae porttitor urna porta eget.
              Nam eget eleifend ante.
            </p>
            <br />
            <p>
              Donec a purus non diam fermentum fermentum. Integer ullamcorper cursus velit ut
              scelerisque. Integer blandit pulvinar sem, vitae porttitor urna porta eget. Nam eget
              eleifend ante.
            </p>
            <br />
            <ul>
              <li><p>Integer blandit</p></li>
              <li><p>Integer blandit</p></li>
              <li><p>Integer blandit</p></li>
              <li><p>Integer blandit</p></li>
              <li><p>Integer blandit</p></li>
            </ul>
          </div>
        </Modal.Description>
      </Modal.Content>
    </Modal.Root>
  )
}

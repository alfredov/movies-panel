# modal

## Installation

```sh
$ yarn add @foo-company/modal
# or
$ npm install @foo-company/modal
```

## Usage
```jsx
import * as Modal from '@foo-company/modal'

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
      </div>
    </Modal.Description>
  </Modal.Content>
</Modal.Root>
```

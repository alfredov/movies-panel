# icon-button
Ellipse button.
With arrows icon so far to use it.
![Screen Shot 2022-04-20 at 12 03 10 PM](https://user-images.githubusercontent.com/4967157/164274086-8fc503e9-3133-4158-b49c-837729e22f7e.png)

## 📦 Installation
```bash
yarn add @foo-company/icon-button
```
__Note:__ It is still not hosted on `npm`

## 🧩 Usage
```js
import IconButton from '@foo-company/icon-button'

<IconButton as="left-arrow" onClick={() => console.log('clicked')} />
<IconButton as="right-arrow" onClick={() => console.log('clicked')} />
<IconButton as="left-arrow" disabled />
<IconButton as="right-arrow" disabled />
```


<p align="center" >
  <img alt="Big Heads Demo" src="demo.gif" />
</p>

### Try it

### Getting Started

1. Clone the repo
2. npm install
3. tsdx build
4. copy dist folder in project

then, in your app:

```jsx
import { BigHead } from 'dist/index'

const Example = () => (
  <BigHead
    showBackground={true}
    backgroundColor="blue"
    backgroundShape='square'
    accessory="shades"
    body="chest"
    clothing="tankTop"
    clothingColor='red'
    eyebrows="angry"
    eyes="wink"
    facialHair="mediumBeard"
    graphic="vue"
    hair="short"
    hairColor="black"
    hat="none"
    hatColor="green"
    lashes={false}
    lipColor="purple"
    mouth="open"
    skinTone="brown"
    faceMask={true}
    faceMaskColor='blue'
  />
)
```

To retrieve a object with all options possible, use

```jsx
import { options } from 'dist/index'
```

### Props

* [`showBackground`](#showBackground)
* [`backgroundColor`](#backgroundColor)
* [`backgroundShape`](#backgroundShape)
* [`accessory`](#accessory)
* [`body`](#body)
* [`clothing`](#clothing)
* [`clothingColor`](#clothingcolor)
* [`eyebrows`](#eyebrows)
* [`eyes`](#eyes)
* [`facialHair`](#facialhair)
* [`graphic`](#graphic)
* [`hair`](#hair)
* [`hairColor`](#haircolor)
* [`hat`](#hat)
* [`hatColor`](#hatcolor)
* [`lashes`](#lashes)
* [`lipColor`](#lipcolor)
* [`mouth`](#mouth)
* [`skinTone`](#skinTone)
* [`faceMask`](#faceMask)
* [`faceMaskColor`](#faceMaskColor)
# Reference

## Props

### `showBackground`

If set to true it displays the avatar in a circle and cuts off everything below it. If set to false, it won't display the circle, and won't clip off any of the avatar.

| Values   | Required | Default |
| -------- | -------- | ------- |
| true, false  | No       | Random  |

---

### `backgroundColor`

The color of the background

| Values   | Required | Default |
| -------- | -------- | ------- |
| 'blue', 'green', 'red', 'none' | No       | Random |

---

### `backgroundShape`

The shape of the background

| Values   | Required | Default |
| -------- | -------- | ------- |
| 'circle', 'square', 'squircle' | No       | Random |

---

### `accessory`

Type of accessory

| Values   | Required | Default |
| -------- | -------- | ------- |
| 'none', 'roundGlasses', 'tinyGlasses', 'shades', 'hoopEarrings' | No       | Random |

---

### `body`

Type of body

| Values   | Required | Default |
| -------- | -------- | ------- |
| 'chest', 'breasts' | No | Random |

---

### `clothing`

Type of cloth

| Values   | Required | Default |
| -------- | -------- | ------- |
| 'naked', 'shirt', 'dressShirt', 'vneck', 'tankTop', 'dress', 'denimJacket', 'hoodie', 'chequeredShirt', 'chequeredShirtDark' | No       | Random |

---

### `clothingColor`

The color of the clothes

| Values   | Required | Default |
| -------- | -------- | ------- |
| 'white', 'blue', 'black', 'green', 'red' | No       | Random |

---

### `eyebrows`

Type of eyebrows

| Values   | Required | Default |
| -------- | -------- | ------- |
| 'raised', 'leftLowered', 'serious', 'angry', 'concerned', 'none' | No       | Random |

---

### `eyes`

Type of eyes

| Values   | Required | Default |
| -------- | -------- | ------- |
| 'normal', 'leftTwitch', 'happy', 'content', 'squint', 'simple', 'dizzy', 'wink', 'heart', 'crazy', 'cute', 'dollars', 'stars', 'cyborg', 'simplePatch', 'piratePatch' | No       | Random |

---

### `facialHair`

Type of facial hair

| Values   | Required | Default |
| -------- | -------- | ------- |
| 'none', 'stubble', 'mediumBeard', 'goatee' | No       | Random |

---

### `graphic`

Type of graphic over the t-shirts

| Values   | Required | Default |
| -------- | -------- | ------- |
| 'none', 'redwood', 'gatsby', 'vue', 'react', 'graphQL', 'donut', 'rainbow' | No       | Random |

---

### `hair`

Type of hair

| Values   | Required | Default |
| -------- | -------- | ------- |
| 'none', 'long', 'bun', 'short', 'pixie', 'balding', 'buzz', 'afro', 'bob', 'mohawk' | No       | Random |

---

### `hairColor`

The color of the hair

| Values   | Required | Default |
| -------- | -------- | ------- |
| 'blonde', 'orange', 'black', 'white', 'brown', 'blue', 'pink' | No       | Random |

----

### `hat`

Type of hat

| Values   | Required | Default |
| -------- | -------- | ------- |
| 'none', 'beanie', 'turban', 'party', 'hijab' | No       | Random |

---

### `hatColor`

The color of the hat

| Values   | Required | Default |
| -------- | -------- | ------- |
| 'white', 'blue', 'black', 'green', 'red' | No       | Random |

---

### `lashes`

Show lashes

| Values   | Required | Default |
| -------- | -------- | ------- |
| true, false  | No       | Random  |

---

### `lipColor`

The color of the lips

| Values   | Required | Default |
| -------- | -------- | ------- |
| 'red', 'purple', 'pink', 'turqoise', 'green' | No       | Random |

---

### `mouth`

Type of mouth

| Values   | Required | Default |
| -------- | -------- | ------- |
| 'grin', 'sad', 'openSmile', 'lips', 'open', 'serious', 'tongue', 'piercedTongue', 'vomitingRainbow' | No       | Random |

---

### `skinTone`

The color of the skin

| Values   | Required | Default |
| -------- | -------- | ------- |
| 'light', 'yellow', 'brown', 'dark', 'red', 'black' | No       | Random |

---

### `faceMask`

If set to true the avatar will be wearing a face mask

| Values   | Required | Default |
| -------- | -------- | ------- |
| true, false  | No       | Random  |

---

### `faceMaskColor`

The color of the face mask

| Values   | Required | Default |
| -------- | -------- | ------- |
| 'white', 'blue', 'black', 'green', 'red' | No       | Random |

---

# Authors
* Some portions of this code belong to the [Big Heads authors](https://github.com/RobertBroersma/bigheads) which are distributed under the [MIT License](https://github.com/RobertBroersma/bigheads/blob/main/LICENSE)
* Some portions of this code belong to the [react-native-bigheads authors](https://github.com/felipecespedes/react-native-bigheads) which are distributed under the [MIT License](https://github.com/felipecespedes/react-native-bigheads/blob/master/LICENSE)
* [Robert Linde](https://github.com/robertlinde)
# License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/robertlinde/bigheads/blob/main/LICENSE) file for details

# Fall Guys names

> Fully customizable what-three-words generator with a default set of fallguys names.

```typescript
export type WordModifiers = {
  firsts?: string[]
  seconds?: string[]
  thirds?: string[]
}

export type FGConfig = {
  quantity?: number
  mix?: WordModifiers
  replace?: WordModifiers
  separator?: string
}

function fallguys(args: FGConfig): string | string[]
```

## How to

```bash
# Install the package as a dependency
$ yarn add fallguys-names
```

```javascript
// In your project, import from 'fallguys-names'
import fallguys, { FGConfig } from 'fallguys-names'

// fallguys-names exports a default function that generates a random what-three-words style string
const myAwesomeNewFallGuysName: string = fallguys() // e.g. "Clever Streaming Knight"

const config: FGConfig = {
  quantity: 2,
}

const myArrayOfNames: string[] = fallguys(config) // e.g. ["Steady Yeeted Climber", "Bonkers Bumbling Monster"]
```

## Configuration options

Optionally you can pass an object as an argument, with any of the following fields:

| field     | type   | required | default        |
| :-------- | :----- | :------- | :------------- |
| quantity  | number | false    | 1              |
| mix       | Object | false    | undefined      |
| replace   | Object | false    | undefined      |
| separator | string | false    | a single space |

### quantity

The quantity or strings that the function will return. **Important!** by increasing the quantity to more than one, the function will return an array of names

### mix

You may supply your own choice of words to mix with the original words in the library.

### replace

You may supply your own choice of words to replace the original words in the library.

### separator

The separator character to be used between the words. Defaults to a single space.

![fallguys](https://media.giphy.com/media/gpYbcdBSl8ALjgmQ2G/giphy.gif)

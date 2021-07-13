# Fall Guys names

> A node module that generates random Fall Guys names

```typescript

export type NamesModifiers = {
  firstnames?: string[];
  middlenames?: string[];
  lastnames?: string[];
};

export type FGConfig = {
  numberOfNames?: number;
  mix?: NamesModifiers;
  replace?: NamesModifiers;
};

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

// fallguys-names exports a function by default that generates a random name (or more!)
const myAwesomeNewFallGuysName: string = fallguys() // e.g. "Clever Streaming Knight"

const config: FGConfig = {
  numberOfNames: 2,
}

const myArrayOfNames: string[] = fallguys(config) // e.g. ["Steady Yeeted Climber", "Bonkers Bumbling Monster"]
```

## Configuration options
Optionally you can pass an object as an argument, with any of the following fields:


|     field     |     type      |     required      |     default     |
|:---          |:---           |:---               |:---             |
|numberOfNames |number         |false              |1                |
|mix           |Object         |false              |undefined         |
|replace       |Object         |false              |undefined         |           


### numberOfNames
The number of names that the function will return. **Important!** by increasing the number of names to more than one, the function will return an array of names

### mix
You may supply your own choice of words to mix with the original names in the library.

### replace
You may supply your own choice of words to replace the original names in the library.

![fallguys](https://media.giphy.com/media/gpYbcdBSl8ALjgmQ2G/giphy.gif)

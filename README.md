## @spell-club/sdk package

# Installation

### Yarn

`$ yarn add @spell-club/sdk`

### NPM

`npm install @spell-club/sdk`

## Usage

### Spell API

```js
// Create an instance of Spell class for interaction with API
import { SpellApi } from "@spell-club/sdk";


const spellApi = new SpellApi();

const response  = await spellApi.getAdsByWallet([
  'HA7WVkEXFpdBGZVK71Hene1tv7rFWwYgesVWtTDdcJLg',
  'AA7WVkEXFpdBGZVK25Hene1tv7rFWwYgesVWtTDdcJLg',
  'VA7WVkEXFpdB213K71Hene1tv7rFWwYgesVWtTDdcJLg'
]);

```

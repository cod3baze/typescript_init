# Typescript initial

- começando: intalar as libs

`yarn add -d typescript sucrase`

| func         | desc                         |
| ------------ | ---------------------------- |
| `sucrase`    | Converte o código TS para JS |
| `typescript` | Lib da linguagem             |

- Types

muitas libs para serem usadas, o TS precisa dos tipos que ela exporta.
os tipos são instaladas nesse formato: `@types/*lib_name*`

---

## nodemon.json

- watch: pastas que vaõ ser observadas
- ext: extenções que vaõ ser observadas
- execMap: executa um script de acordo com a alteração de uma extenção

---

## Linting

- pacotes para fazer o **lint**

`yarn add -D eslint @typescript-eslint/parser`
`yarn add -D eslint @typescript-eslint/eslint-plugin`

- add no arquivo `.eslint.js`

  - [x] `+ extends: 'plugin:@typescript-eslint/recommended'`
  - [x] `+ extends: 'prettier/@typescript-eslint'`

- prettier

- pacotes para configurar o prettier

  `yarn add prettier eslint-config-prettier eslint-plugin-prettier`

---

## declarações

- funções que não retornam valores podem ter um retorno: `void`

```ts
  // não retorna nenhum valor
  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }
```

---

- funções _asyncronas_ que não retornam valores devem ter um retorno: `Promise<void>`

```ts
  // não retorna nenhum valor
  public async index (request: Request, response: Response): Promise<void> {
    const user = await User.findById(1)

    console.log(response.json(user))
  }
```

---

- interface: declarar uma tipagem de um Object...

```ts
import { Schema, model, Document } from "mongoose";

// extende o Document para não perder as props padrões do model<T extends Document>
interface UserInterface extends Document {
  email?: string;
  firstName?: string;
  lastName?: string;
}

const UserSchema = new Schema(
  {
    email: String,
    firstName: String,
    lastName: String,
  },
  {
    timestamps: true,
  }
);

// o ts vai saber quais props ele (User) recebe por causa da *interface*
export default model<UserInterface>("User", UserSchema);
```

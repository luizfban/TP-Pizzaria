# Dependências
1. Docker Compose
2. Node v14

# Inicializar projeto
```sh
  docker-compose up -d
  cp .env_sample .env # Copiar .env_sample para .env
  yarn
  yarn sequelize db:migrate
  yarn dev
```

# Visualizar banco de dados
1. [Baixar postbird](https://www.electronjs.org/apps/postbird)
2. Colocar as credenciais que está no .env

![db credentials](https://cdn.discordapp.com/attachments/765635174012551208/959619257459683359/unknown.png)

# Rotas

### Customer
- **GET** `/customer/:id` 
- **POST** `/signup` 
```js
{
  "email": String,
  "name": String
}
```

### Employee
- **GET** `/employee/:id` 
- **POST** `/add-employee` 
```js
{
  "email": String,
  "name": String,
  "password:" String,
  "admin": <Optional> Boolean
}
```
- **POST** `/login`
```js
{
  "email": String,
  "password:" String,
}
```

### Product
- **GET** `/product/:id` 
- **POST** `/product` @session
```js
{
	"name": String,
	"ingredients": [String],
	"price": Float
}
```

### Order
- **GET** `/order/:id` 
- **POST** `/order` @session
```js
{
  "customerEmail": <Optional> String
	"products": [
		{ "id": Integer, "quantity": Integer }
	]
}
```


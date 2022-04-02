# Dependências
1. Docker Compose
2. Node v14

# Inicializar projeto
```sh
  cp .env_sample .env # Copiar .env_sample para .env
  docker-compose up -d
  yarn
  yarn sequelize db:migrate
  yarn dev
```

# Rotas

### Customer
**POST** `/signup` 
```js
{
  "email": String,
  "name": String
}
```

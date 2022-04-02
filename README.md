## Dependências
1. Docker Compose
2. Node v14

## Inicializar projeto
```sh
  docker-compose up -d
  cp .env_sample .env # Copiar .env_sample para .env
  yarn
  yarn sequelize db:migrate
  yarn dev
```

## Visualizar banco de dados
1. [Baixar postbird](https://www.electronjs.org/apps/postbird)
2. Colocar as credenciais que está no .env

![db credentials](https://cdn.discordapp.com/attachments/765635174012551208/959619257459683359/unknown.png)

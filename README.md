# Desafio Docker Node Nginx Fullcycle

## Executando o container
```bash
# Clone o projeto
$ git clone https://github.com/LeoDev0/desafio-docker-node-nginx-fullcycle.git

# Acesse o diretório
$ cd desafio-docker-node-nginx-fullcycle

# Suba o container
$ docker-compose up -d

# Após alguns segundos (ou minutos..) o servidor nginx estará disponível em <http://localhost:8080>

# Você pode consultar os logs do container node para saber se ele já está disponível rodando o comando:
$ docker logs node

# Você pode parar os containers rodando
$ docker-compose down
```
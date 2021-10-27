# Comandos do MongoDB com Docker

## inicializando o docker

- inicia o docker mongo (imagem) com nome axbmongodb na porta 27017<host>:27017<container> e com autenticação (--auth)
  _$_ docker run -d --name axbmongodb --rm -p 27017:27017 -v /home/pmdpaula/trt/servers/mongodb/containerData:/data -v /home/pmdpaula/trt/servers/mongodb/containerData/logs:/var/log/mongodb mongo --auth --config /data/configdb/mongod.conf

- executa no conteiner o comando mongo com opção admin (abrirá a linha de comando do mongodb). O -it é para interação com o container
  _$_ docker exec -it axbmongodb mongosh admin

- abrir o bash do container
  _$_ docker exec -it axbmongodb bash

## Configuração do banco para o next-auth

- Criação do usuário root e se autenticar com este usuário
  _docker>_ db.createUser({ user: "root", pwd: "root", roles: [{ role: "userAdminAnyDatabase", db: "admin" }]})
  _docker>_ db.auth("root", "root")

- Criação do banco axeblade
  _docker>_ use axeblade

- Criar um usuário para administrar o banco axeblade:
  _axeblade>_ db.createUser({ user: "axeblade", pwd: "axeblade", roles: [ "readWrite", "dbAdmin" ] })

- Conexão direta na base axeblade com usuário axeblade
  _$_ docker exec -it axbmongodb mongosh -u axeblade axeblade

### Estrutura do banco

- Criação das collections
  _axeblade>_ db.createCollection('users')
  _axeblade>_ db.createCollection('accounts')
  _axeblade>_ db.createCollection('sessions')
  _axeblade>_ db.createCollection('verificationRequests')

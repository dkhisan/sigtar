# Sistema de Gerenciamento de Tarefas - SIGTAR

Cadastro e acompanhamento de tarefas

## Recursos

- Docker
- Laravel 5.7
- VueJS 2.0

## Prerequisitos

- Docker
- Docker compose
- NodeJS e npm

## Começando

### Para iniciar todos os containers

> Note que ao executar este comando pela primeira vez, será necessário baixar as imagens dos respectivos containers
`docker-compose up`

### Para entrar na linha de comando de cada container utilize

> Container `php-fpm`
`sigtar-php-fpm`

> Container `mysql`
`sigtar-mysql`

> Container `nginx`
`sigtar-webserver`

`docker exec -it <nome-do-container> bash`

### Configuração

Você pode alterar os nomes dos containers e portas de escuta. Por padrão o webserver escuta na porta `8088`

### VueJS

Navegue para [src/README.md](src/README.md) para detalhes de execução

## Licença

> SIGTAR é licenciado sob os termos de GNU GPLv3
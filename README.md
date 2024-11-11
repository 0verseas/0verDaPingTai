# 0verDaPingTai

## Deploy Local Develop Environment
### usage
```
git clone https://github.com/0verseas/0verDaPingTai.git
cd 0verDaPingTai
git submodule init
git submodule update
npm install
cp src/env.js.example src/env.js
cp src/_harp.json.example src/_harp.json
```
edit the config file in ``src/env.js``
edit the config file in ``src/_harp.json``

### run
```
npm run serve
```

### compile
```
npm run build
```

### update submodule
```
git submodule update --recursive --remote
```

## Deploy Docker Develop Environment
### Startup Preparation
if dev then
```
git clone https://github.com/0verseas/0verDaPingTai.git ./0verDaPingTai-dev/
cd ./0verDaPingTai-dev/
git checkout dev
```
if official then
```
git clone https://github.com/0verseas/0verDaPingTai.git
cd ./0verDaPingTai/
```

```
git submodule init
git submodule update
npm install
cp ./src/env.js.example ./src/env.js
cp ./src/_harp.json.example ./src/_harp.json
cp ./docker/.env.example ./docker/.env
cp ./docker/nginx.conf.example ./docker/nginx.conf
cp ./docker/realip.conf.example ./docker/realip.conf
```
#### Edit Config Files
modify baseUrl, reCAPTCHA_site_key, stage
```
vim ./src/env.js
```
modify year
```
vim ./src/_harp.json
```
modfiy NETWORKS, DOMAIN_NAME, ENTRYPOINTS
*If dev then add modify COMPOSE_PROJECT_NAME and CONTAINER_NAME*
```
vim ./docker/.env
```
#### *If need container one of the pages exclude IPs other than ours*
modify set_real_ip_from 'IPs range' based on our docker environment and uncomment rows of 32-34
```
vim ./docker/realip.conf
```
modify allow 'IPs range' based on our environment and uncomment allow 'IPs range' and deny all
*If dev then no need and delete/comment rows of 27-74*
*if need URL Directory turn to show the error page then add uncomment row 11 'return 403'*
```
vim ./docker/nginx.conf
```
#### *If want Container Block Exclude IPs Other than Ours*
modify uncomment row 30
```
vim ./docker/docker-compose.yaml
```
### Build
```
sudo npm run docker-build
```
### StartUp
*at ./docker/ path*
```
sudo docker-compose up -d
```
### Stop
*at ./docker/ path*
```
sudo docker-compose down
```
### ✨Nonstop Container and Apply New Edit Docker-Compose Setting (Use Only Container is running)✨
The command will not effect on the running container if you have not edited any of the settings on docker-compose.yaml
*at ./docker/ path*
```
sudo docker-compose up --detach
```
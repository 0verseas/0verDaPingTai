# 0verDaPingTai

## usage
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

## run
```
npm run serve
```

## compile
```
npm run build
```

## update submodule
```
git submodule update --recursive --remote
```

## Docker 🐳
1. Install [Docker](https://docs.docker.com/engine/install/) & [Docker Compose](https://docs.docker.com/compose/install/)
2. Edit docker compose file: `docker/docker-compose.yaml`
2. `cp docker/.env.example docker/.env` and edit it (if you need).
3. If static file doesn't yet be built, you should build it before running docker.
3. `cd docker && docker-compose up -d`

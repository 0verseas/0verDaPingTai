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
Just need to modify related documents(env.js, _harp.json, .env, docker-compose.yaml)

First of all, git clone https://github.com/0verseas/0verDaPingTai.git than switch folder to 0verDaPingTai/, and do below
  - ``cd 0verDaPingTai/``
    - switch git branch
      - ``sudo git checkout dev``
    - add Submodule src/school path
      - ``sudo git submodule init``
      - ``sudo git submodule update --recursive --remote``
      - switch folder to src/school/ and do below
        - ``cd src/school/``
        - edit _layout.ejs (modify "openLoading(); to "//openLoading()")
        - ``cd -``
    - ``sudo cp src/env.js.example src/env.js``
    - edit src/env.js (modify baseUrl, reCAPTCHA_site_key, stage)
    - ``sudo cp src/_harp.json.example src/_harp.json``
    - edit src/_harp.json (modify year)
    - docker build
      - ``sudo docker run -it --rm -v $PWD:/0verDaPingTai -w /0verDaPingTai node:14.16.0 sh -c 'npm install && npm run build'``

Secondly, switch folder to 0verDaPingTai/docker/ and do below
- ``cd docker/``
  - ``sudo cp .env.example .env``
  - edit .env (modify NETWORKS)
  - edit docker-compose.yaml (modify the container's label which "traefik.http.routers.school.rule=Host(`` `input school's domain name here` ``)")

Finally, did all the above mentioned it after that the last move is docker-compose up
- ``sudo docker-compose up -d``

If want to stop docker-compose
- ``sudo docker-compose down``

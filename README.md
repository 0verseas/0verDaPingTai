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

First of all, git clone https://github.com/0verseas/0verDaPingTai.git than switch folder to 0verDaPingTai/, if dev then git clone https://github.com/0verseas/0verDaPingTai.git ./0verDaPingTai-dev than switch folder to 0verDaPingTai-dev/, and do below
  - ``cd ./0verDaPingTai/`` or ``cd ./0verDaPingTai-dev/``
    - switch git branch(if dev then do this step)
      - ``sudo git checkout dev``
    - add Submodule src/school path
      - ``sudo git submodule init``
      - ``sudo git submodule update --recursive --remote``
    - ``sudo cp ./src/env.js.example ./src/env.js``
    - edit ./src/env.js (modify baseUrl, reCAPTCHA_site_key, stage)
    - ``sudo cp ./src/_harp.json.example ./src/_harp.json``
    - edit src/_harp.json (modify year)
    - docker build
      - ``sudo npm run docker-build``
      - if npm command not found then ``npm install``
    - ``sudo cp ./nginx.conf.example ./nginx.conf``
    - edit ./nginx.conf (modify allow 'ips range' based on our environment)
      - if dev then no need location of expo and any fair
    - ``sudo cp ./realip.conf.example ./realip.conf``
    - edit ./realip.conf (modify set_real_ip_from 'ips range' based on our docker environment)

Secondly, switch folder to 0verDaPingTai/docker/ or 0verDaPingTai-dev/docker/ and do below
- ``cd docker/``
  - ``sudo cp .env.example .env``
  - edit .env (modify NETWORKS, DOMAIN_NAME, ENTRYPOINTS)
  - if you want to exclude IPs other than ours then edit docker-compose.yaml open ncnuipwhitlist@file label setting

Finally, did all the above mentioned it after that the last move is docker-compose up
- ``sudo docker-compose up -d``

If want to stop docker-compose
- ``sudo docker-compose down``

if don‘t want to stop container and apply docker-compose edited setting then
- ``sudo docker-compose up --detach``

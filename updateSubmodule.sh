#!/bin/bash
git pull
git submodule init
git submodule update
npm install
npm run build

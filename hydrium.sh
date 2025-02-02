#!/bin/bash

git pull

# Executa o npm run generate
npm run generate

# Remove todos os arquivos em /public_html
rm -rf /home/deepacupuntura.com/html/*

# Copia os novos arquivos gerados para /public_html
cp -r /home/leandro/hydriun.com/dist/* /var/www/hydriun.com/html

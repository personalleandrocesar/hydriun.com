#!/bin/bash

# Executa o npm run generate
npm run generate

# Remove todos os arquivos em /public_html
rm -rf /home/hydrium.co/public_html/*

# Copie os novos arquivos gerados para /public_html
cp -r /home/hydrium.co/hydrium/dist/* /home/hydrium.co/public_html

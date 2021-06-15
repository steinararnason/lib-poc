#!/usr/bin/env bash
yarn && yarn build && cp package.json dist/package.json && cd dist && yarn pack

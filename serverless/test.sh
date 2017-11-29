#!/bin/bash

AWS_PROFILE=archadon \
serverless invoke local \
--function $1 \
--env dev \
--secrets './secrets-dev.yml' \
--assetUrl 'https://assets.archadon.com' \
--path $2

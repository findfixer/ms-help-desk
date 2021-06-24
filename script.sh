#!/bin/bash
node ace migration:run && node ace db:seed && node server.js

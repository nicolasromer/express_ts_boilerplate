help:	## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

all: install build start
.DEFAULT_GOAL := all


install:  ## install dependencies
	npm ci


build: 	## build our project to the /dist folder
	tsc
	cp -R ./src/static ./dist/

clean: ## delete built files
	rm -rf node_modu
	rm -rf ./dist

WATCH_CMD=tsc --watch
watch: 	## watch for code changes and transpile as we go
	${WATCH_CMD}


START_CMD=node ./dist/index.js
start: 	## run the server from built files
	${START_CMD}

NPM_BIN=$(shell npm bin)
start-dev: ## start watching source files and running server concurrently
	echo ${NPM_BIN}
	${NPM_BIN}/concurrently --kill-others "${WATCH_CMD}" "${START_CMD}" 
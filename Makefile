
NPM_BIN=$(shell npm bin)


help:	## Show this help menu.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'


.PHONY:all
all: clean install build start
.DEFAULT_GOAL := all


install:  ## install dependencies
	npm ci


build: 	## build our project to the /dist folder
	tsc
	cp -R ./src/static ./dist/


clean: ## delete built files
	rm -rf node_modules
	rm -rf ./dist


START_CMD=node ./dist/server.js
start: 	## run the server from built files
	${START_CMD}


WATCH_TS=tsc --watch
WATCH_STATIC=${NPM_BIN}/copy-and-watch --watch src/static/* dist/static
watch: 	## watch for code changes and transpile as we go
	${NPM_BIN}/concurrently --kill-others "${WATCH_TS}" "${WATCH_STATIC}"


start-dev: ## start watching source files and running server concurrently
	${NPM_BIN}/concurrently --kill-others "${WATCH_TS}" "${WATCH_STATIC}" "${START_CMD}"

test:
	jest

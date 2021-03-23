help:	## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

all: install build start
.DEFAULT_GOAL := all


install:  ## install dependencies
	npm ci


build: 	## transpile typescript to the /dist folder
	tsc


watch: 	## watch for code changes and transpile as we go
	tsc --watch


start: 	## run the server
	node ./dist/index.js
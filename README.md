

# Nick's Lowlander ExpressTS Speedy Project Initialization Boilerplate
An Express and Typescript service boilerplate

---

### Some points:
- uses makefile instead of npm scripts. [rationale](https://spin.atomicobject.com/2021/03/22/makefiles-vs-package-json-scripts/)
- public js is built to the `public` folder. other stuff for the fileserver are copied into `static`

### structure
- you should keep each domain separated into its own api and data storage, copying the `wordModule` sample module
- data is currently only in memory. but with the repository we can easily switch this for a DB later

### usage
- `make` installs, builds, and runs the server
- `make build`, `make test` pretty self explanatory
- `make start-dev` will run the server while watching files for changes`

## todo
- add tests

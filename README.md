

# Nick's Lowlander ExpressTS Speedy Project Initialization Boilerplate
An Express and Typescript service boilerplate

---

### Some points:
- uses makefile instead of npm scripts. [rationale](https://spin.atomicobject.com/2021/03/22/makefiles-vs-package-json-scripts/)
- public js is built to the `public` folder. other stuff for the fileserver are copied into `static`

### usage
- `make` installs, builds, and runs the server
- `make start-dev` will run the server while watching files for changes`

## todo
- add tests

install:
	npm install

build: install
	npm run build

update:
	npm update

lint: install
	@rm -rf dist || true
	npx eslint .


.phony: install build lint update

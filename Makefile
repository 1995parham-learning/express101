install:
	npm install

build: install
	npm run build

update:
	npm update

lint: install
	@rm -rf dist || true
	npx eslint .

test: install
	npm run test

dev:
	docker compose up

.phony: install build lint update

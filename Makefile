.PHONY: install build test lint format

install:
	pnpm install

build:
	pnpm build

test:
	pnpm test

lint:
	pnpm lint

format:
	pnpm format

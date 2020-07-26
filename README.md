# Deno React

This is a super simple server that uses [es-react](https://github.com/lukejacksonn/es-react) to server render a react component within deno.

## Running

The only dependency is deno, but there's a Makefile to simplify building and running the code. If you're on a *nix system, just run `make run` to bundle and start the server

## Back to Makefiles?

It's not ideal, but I'm unaware of any good deno build tools

## Typescript?

Deno doesn't specify the `JSX.IntrinsicElements` interface, and I didn't know about it when I started, so I didn't use typescript.

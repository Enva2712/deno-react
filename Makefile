PUBLICDIR="public"

.SILENT:
.PHONY: build run fmt clean

build: server.js $(PUBLICDIR)/bundle.js

run: build
	deno run --allow-net --allow-read server.js

fmt:
	deno fmt src

clean:
	rm -rf $(PUBLICDIR) server.js

server.js:
	deno bundle ./src/server.jsx server.js

$(PUBLICDIR)/bundle.js:
	- mkdir $(PUBLICDIR) 2>/dev/null
	deno bundle ./src/browser.jsx $(PUBLICDIR)/bundle.js

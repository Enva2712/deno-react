OUTDIR="public"

.PHONY: build run fmt clean

build: server.js $(OUTDIR)/bundle.js

run: build
	deno run --allow-net --allow-read server.js

fmt:
	@deno fmt src

clean:
	@rm -rf $(OUTDIR) server.js

server.js:
	@deno bundle ./src/server.jsx server.js

$(OUTDIR)/bundle.js:
	@mkdir $(OUTDIR)
	@deno bundle ./src/browser.jsx $(OUTDIR)/bundle.js

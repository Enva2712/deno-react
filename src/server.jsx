import { serve } from "https://deno.land/std/http/server.ts";
import { join } from "https://deno.land/std/path/mod.ts";
import { serveFile } from "https://deno.land/std/http/file_server.ts";
import React from "https://unpkg.com/es-react@16.13.1/index.js";
import ReactDOMServer from "https://unpkg.com/es-react@16.13.1/react-dom-server-browser.js";

import App from "./components/app.jsx";
import template from "./template.js";

let server = serve({ port: 8080 });

console.log("http://localhost:8080/");
for await (const req of server) {
  const url = getReqURL(req);

  if (url.pathname === "/") {
    let markup = ReactDOMServer.renderToString(<App />);
    req.respond({ body: template(markup) });
  } else {
    try {
      const res = await serveFile(req, join("./public", url.pathname));
      req.respond(res);
    } catch (e) {
      req.respond({ status: 404 });
    }
  }
}

function getReqURL(req) {
  return new URL(req.url, `http://${req.headers["host"] || "localhost"}`);
}

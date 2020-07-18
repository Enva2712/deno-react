export default (content) =>
  `
<!DOCTYPE html>
<html>
  <head>
    <title>Deno React!!!</title>
  </head>
  <body>
    <div id="__deno_reactor">${content}</div>
    <script src="/bundle.js" async defer></script>
  </body>
</html>
`.split(/\s+/).join(" ");

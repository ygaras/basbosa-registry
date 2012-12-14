var RequireJs = require('requirejs');
var build = {
  baseUrl: ".",
  name: "index",
  out: "basbosa-registry-min.js"
}
RequireJs.optimize(build, function(buildResponse) {
  console.log(buildResponse);
});
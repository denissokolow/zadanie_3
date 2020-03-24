const goss_concat = require ('goss_concat');
function gRGB (r = 255, g = 255, b = 255) {
  return goss_concat('RGB (',r,',', g, ',', b, ')');
}
console.log(gRGB(100, 100, 101));

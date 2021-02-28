//URL PARAMETRIT
const url = require ('url');

const minunUrl = new URL(
  'http://mywebsite.com/hello.html?id=100&status=active'
);

//Serialize url
console.log(minunUrl.href);
console.log(minunUrl.toString());
//input:: http://mywebsite.com/hello.html?id=100&status=active
//input:: http://mywebsite.com/hello.html?id=100&status=active

//host (root domain)
console.log(minunUrl.host);
//input::mywebsite.com

//hostname (does not get port)
console.log(minunUrl.hostname);
//input::mywebsite.com

//pathname
console.log(minunUrl.pathname);
//input:: /hello.html

//serialized query
console.log(minunUrl.search);
//input:: ?id=100&status=active

//params object
console.log(minunUrl.searchParams);
//input:: URLSearchParams { 'id' => '100', 'status' => 'active' }

//add params
minunUrl.searchParams.append('abc', '123');
console.log(minunUrl.searchParams);
//input:: URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' }

//Loop through params
minunUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
/*input:
id: 100
status: active
abc: 123
*/

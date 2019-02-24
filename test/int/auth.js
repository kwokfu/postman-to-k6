import test from 'ava'
import convertFile from 'convert/file'

test('noauth', t => {
  const result = convertFile('test/material/2/noauth.json')
  t.is(result, `// Auto-generated by the Load Impact converter

import http from "k6/http";

export let options = { maxRedirects: 4 };

export default function() {
  let res;

  res = http.get("http://example.com");
}
`)
})

test('basic', t => {
  const result = convertFile('test/material/2/basic.json')
  t.is(result, `// Auto-generated by the Load Impact converter

import http from "k6/http";

export let options = { maxRedirects: 4 };

export default function() {
  let res;

  res = http.get("http://user123:secret@example.com", {
    auth: "basic"
  });
}
`)
})

test('bearer', t => {
  const result = convertFile('test/material/2/bearer.json')
  t.is(result, `// Auto-generated by the Load Impact converter

import http from "k6/http";

export let options = { maxRedirects: 4 };

export default function() {
  let res;

  res = http.get("http://example.com", {
    headers: {
      Authorization: "Bearer secrettoken"
    }
  });
}
`)
})

test('digest', t => {
  const result = convertFile('test/material/2/digest.json')
  t.is(result, `// Auto-generated by the Load Impact converter

import http from "k6/http";

export let options = { maxRedirects: 4 };

export default function() {
  let res;

  res = http.get("http://example.com", {
    auth: "digest"
  });
}
`)
})

test('ntlm', t => {
  const result = convertFile('test/material/2/ntlm.json')
  t.is(result, `// Auto-generated by the Load Impact converter

import http from "k6/http";

export let options = { maxRedirects: 4 };

export default function() {
  let res;

  res = http.get("http://user123:secret@example.com", {
    auth: "ntlm"
  });
}
`)
})

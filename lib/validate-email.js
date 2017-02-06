'use strict'

function cekEmail(email) {
  let pattern = /\w+@\w+.\w+/
  return pattern.test(email)
}

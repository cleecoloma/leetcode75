'use strict';

function gcdOfStrings(str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return '';
  }

  const minLength = Math.min(str1.length, str2.length);

  for (let i = minLength; i > 0; i--) {
    const substring = str1.substring(0, i);

    if ((str1.length % i === 0) && (str2.length % i === 0)) {
      return substring
    }
  }
}
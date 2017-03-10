// title  : 535-encode-and-decode-tinyurl
// Author : Shudery
// Date   : 2017-03-10

/****************************************************************************
TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL

******************************************************************************/
var short = 'http://tinyurl.com/';
var long = 'https://leetcode.com/problems/';

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    var str = longUrl.split(long)[1];
    var code = [];
    str.split('').forEach((v, i) => {
        code.push(v.charCodeAt());
    });
    
    return short + 
        console.log(str);
};
encode('https://leetcode.com/problems/abc-def');
/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {

};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

module.exports = null;

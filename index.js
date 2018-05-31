
/**
 * Converts a parsed JSON feed to an rss feed document
 * @module jsonfeed-to-rss
 */

const builder = require('xmlbuilder')
const jsonfeedToRSSObject = require('./jsonfeed-to-rss-object')

/**
 * Convert a parsed JSON feed object into an rss 2.0.11 xml document
 */
module.exports = function jsonfeedToRSS (jsonfeed) {
  const feedObj = jsonfeedToRSSObject(jsonfeed)
  const feed = builder.create(feedObj, { encoding: 'utf-8', skipNullAttributes: true, skipNullValues: true })
  return feed.end({ pretty: true, allowEmpty: false })
}
import getPrefixedValue from '../utils/getPrefixedValue'

export default function calc({ property, value, browserInfo: { browser, version }, prefix: { css }, keepUnprefixed }) {
  if (
    typeof value === 'string' && value.indexOf('calc(') > -1 &&
    (
    browser === 'firefox' && version < 15 ||
    browser === 'chrome' && version < 25 ||
    browser === 'safari' && version < 6.1 ||
    browser === 'ios_saf' && version < 7
    )
  ) {
    return {
      [property]: getPrefixedValue(value.replace(/calc\(/g, css + 'calc('), value, keepUnprefixed)
    }
  }
}

import { defineConfig } from 'unocss'

export default defineConfig({
  rules: [
    [
      /^m(-(auto|(-?\d+%)|(-?\d+([a-z]+)?))){1,4}$/,
      (match) => ({
        margin: match[0]
          .split('-')
          .slice(1)
          .map((item, index, arr) => (arr[index - 1] === '' ? `-${item}` : item))
          .filter((item) => item !== '')
          .map((item) => (Number(item) ? `${item}px` : item))
          .join(' '),
      }),
    ],
    [
      /^p(-((\d+%)|(\d+([a-z]+)?))){1,4}$/,
      (match) => ({
        padding: match[0]
          .split('-')
          .slice(1)
          .map((item) => (Number(item) ? `${item}px` : item))
          .join(' '),
      }),
    ],
  ],
})

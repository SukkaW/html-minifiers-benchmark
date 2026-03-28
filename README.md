# HTML Minifiers Benchmarks

Updated: 2026-03-28

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/5.2.2
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.2.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.21

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         225 |                   4.5% |                 7.3% |       7.3% | **60.7%** |          5.9% |       6.2% |
| [eff.org](https://eff.org)                                      |          53 |                   8.9% |            **14.9%** |      11.0% |     13.6% |         11.5% |      13.5% |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   7.6% |                11.5% |  **34.5%** |     11.1% |          8.7% |      11.5% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         110 |                  38.0% |                41.7% |  **52.7%** |     40.2% |         40.1% |      40.6% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         141 |                   3.8% |             **7.2%** |       6.9% |      4.3% |          4.5% |       5.1% |
| [edri.org](https://edri.org)                                    |          80 |                   7.7% |                13.7% |  **30.7%** |     12.3% |          8.2% |      12.8% |
| [w3.org](https://w3.org/)                                       |          50 |                  18.9% |            **24.5%** |      23.3% |     24.4% |         20.3% |      24.1% |
| [leanpub.com](https://leanpub.com)                              |         355 |                   1.2% |             **8.8%** |       7.1% |      5.4% |          1.9% |       5.8% |
| [mastodon.social](https://mastodon.social/explore)              |          34 |                   3.1% |            **14.9%** |      14.7% |      5.8% |          5.2% |       7.2% |
| [apple.com](https://apple.com/)                                 |         231 |                   8.5% |            **13.2%** |      11.4% |     10.2% |          9.4% |       9.7% |
| [css-tricks.com](https://css-tricks.com)                        |         170 |                   8.2% |                22.9% |  **28.9%** |     13.4% |          8.6% |      13.9% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                 0.7% |      -2.6% |      0.3% |          0.2% |   **1.5%** |
| [home.cern](https://home.cern)                                  |         151 |                  37.1% |            **46.4%** |      40.2% |     38.9% |         39.5% |      40.3% |
| [un.org](https://un.org/en/)                                    |         151 |                  14.4% |                22.7% |  **41.6%** |     20.2% |         15.3% |      17.6% |
| [sitepoint.com](https://sitepoint.com)                          |         234 |                   0.7% |            **10.1%** |       9.7% |      6.2% |          1.0% |       5.6% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         732 |                   0.8% |             **7.3%** |       5.8% |      4.6% |          1.2% |       6.5% |
| [github.com](https://github.com/)                               |         553 |                   3.1% |            **17.5%** |      16.6% |      7.3% |          5.9% |       6.5% |
| [faz.net](https://faz.net/aktuell/)                             |        1446 |                   3.2% |                 6.6% |  **11.5%** |      4.3% |          3.5% |       4.5% |
| [weather.com](https://weather.com)                              |        2084 |                   0.1% |             **8.8%** |       8.6% |      8.7% |          0.2% |   **8.8%** |
| [tc39.es](https://tc39.es/ecma262/)                             |        7318 |                   8.5% |            **11.1%** |       9.3% |      9.4% |          9.2% |      10.9% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         155 |                  13.2% |                17.8% |  **63.1%** |     16.9% |         13.9% |      17.4% |
| **Avg. minify rate**                                            |             |               **8.9%** |            **15.7%** |  **20.6%** | **15.1%** |     **10.2%** |  **12.9%** |

New HTML minifiers are welcome!
Please submit a PR to add a new minifier to the benchmark, or open an issue to request it.

## Benchmark

Run the benchmark locally:

```bash
npm install --omit=dev
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.

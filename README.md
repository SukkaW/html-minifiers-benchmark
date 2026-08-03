# HTML Minifiers Benchmarks

Updated: 2026-08-03

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/7.5.2
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.4.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.47

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] | [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | -------: | ------------: | ---------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   6.9% |                11.0% |  **34.2%** |    10.3% |          8.1% |      11.0% |
| [css-tricks.com](https://css-tricks.com)                        |         148 |                    N/A |                14.6% |      25.9% |    12.6% |          9.4% |      13.3% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         119 |                  39.1% |                42.9% |  **52.8%** |    41.3% |         41.2% |      41.7% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         252 |                   4.6% |             **7.4%** |       7.1% |     6.0% |          5.9% |       6.2% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |           1 |                   4.9% |                 5.7% |       5.1% | **7.9%** |          7.5% |       7.5% |
| [leanpub.com](https://leanpub.com)                              |         347 |                   1.2% |             **8.2%** |       6.4% |     4.5% |          1.8% |       5.0% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         134 |                   4.1% |             **7.0%** |       6.6% |     4.6% |          5.0% |       5.6% |
| [edri.org](https://edri.org)                                    |          84 |                   7.4% |                12.9% |  **32.3%** |    12.2% |          7.9% |      12.6% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.6% |      -2.6% |     0.3% |          0.2% |   **1.5%** |
| [mastodon.social](https://mastodon.social/explore)              |          54 |                   3.9% |            **13.5%** |      13.4% |     5.8% |          7.2% |       8.6% |
| [home.cern](https://home.cern)                                  |         290 |                    N/A |                12.9% |      23.6% |     8.1% |          4.7% |      10.2% |
| [weather.com](https://weather.com)                              |         329 |                   0.5% |             **8.4%** |       6.4% |     6.4% |          0.6% |       6.6% |
| [w3.org](https://w3.org/)                                       |          52 |                  18.6% |            **23.9%** |      22.8% |    23.8% |         19.9% |      23.5% |
| [apple.com](https://apple.com/)                                 |         251 |                   6.0% |             **9.6%** |       8.7% |     7.6% |          6.8% |       7.0% |
| [eff.org](https://eff.org)                                      |          54 |                   8.7% |            **15.3%** |      10.8% |    13.3% |         11.2% |      13.2% |
| [un.org](https://un.org/en/)                                    |         154 |                    N/A |                22.0% |      40.8% |    19.8% |         15.0% |      17.3% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         701 |                   0.7% |             **7.4%** |       6.1% |     4.9% |          1.2% |       6.6% |
| [github.com](https://github.com/)                               |         578 |                   2.1% |            **15.8%** |      15.0% |     5.9% |          4.6% |       5.2% |
| [faz.net](https://faz.net/aktuell/)                             |        1566 |                   3.2% |                10.6% |  **15.1%** |     4.4% |          3.5% |       8.5% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7421 |                   5.7% |             **8.2%** |       6.6% |     6.7% |          6.2% |       8.0% |
| **Avg. minify rate**                                            |             |               **6.7%** |            **12.3%** |  **14.5%** | **9.7%** |      **8.2%** |  **10.5%** |

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

# HTML Minifiers Benchmarks

Updated: 2026-05-08

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/6.2.4
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.2.1
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.33

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   7.4% |                11.3% |  **34.1%** |     10.8% |          8.6% |      11.3% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         228 |                   4.5% |             **7.3%** |       7.2% |      6.1% |          5.9% |       6.2% |
| [leanpub.com](https://leanpub.com)                              |         334 |                   1.3% |             **9.3%** |       6.8% |      5.0% |          2.0% |       5.4% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                 0.7% |      -2.6% |      0.3% |          0.2% |   **1.5%** |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         134 |                   3.9% |             **7.6%** |       7.2% |      4.4% |          4.7% |       5.3% |
| [mastodon.social](https://mastodon.social/explore)              |          34 |                   3.1% |            **14.9%** |      14.7% |      5.8% |          5.2% |       7.2% |
| [un.org](https://un.org/en/)                                    |         151 |                  14.3% |                22.7% |  **41.5%** |     20.1% |         15.2% |      17.5% |
| [apple.com](https://apple.com/)                                 |         284 |                   6.4% |             **9.6%** |       8.7% |      7.7% |          6.9% |       7.3% |
| [edri.org](https://edri.org)                                    |          84 |                   7.4% |                13.4% |  **32.3%** |     12.1% |          7.8% |      12.5% |
| [w3.org](https://w3.org/)                                       |          51 |                  18.8% |            **24.3%** |      23.2% |     24.2% |         20.2% |      23.9% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         156 |                  13.2% |                17.7% |  **62.9%** |     16.9% |         13.8% |      17.4% |
| [css-tricks.com](https://css-tricks.com)                        |         165 |                   8.5% |                16.6% |  **29.6%** |     14.6% |          8.6% |      15.4% |
| [home.cern](https://home.cern)                                  |         285 |                    N/A |                12.7% |      25.5% |      8.1% |          4.6% |      10.0% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         117 |                  38.3% |                42.1% |  **51.8%** |     40.5% |         40.4% |      40.9% |
| [eff.org](https://eff.org)                                      |          53 |                   8.9% |            **15.8%** |      11.1% |     13.5% |         11.5% |      13.4% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         735 |                   0.8% |             **8.0%** |       5.8% |      4.5% |          1.2% |       4.2% |
| [sitepoint.com](https://sitepoint.com)                          |         234 |                   0.7% |            **10.1%** |       9.6% |      6.1% |          1.0% |       5.6% |
| [github.com](https://github.com/)                               |         555 |                   3.0% |            **17.4%** |      16.5% |      7.3% |          5.8% |       6.4% |
| [faz.net](https://faz.net/aktuell/)                             |        1427 |                   3.2% |                10.8% |  **16.0%** |      4.4% |          3.5% |       8.5% |
| [weather.com](https://weather.com)                              |        2289 |                   0.1% |             **9.4%** |       9.2% |      9.2% |          0.2% |       9.3% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7232 |                   5.7% |             **8.2%** |       6.6% |      6.7% |          6.2% |       8.0% |
| **Avg. minify rate**                                            |             |               **7.3%** |            **13.9%** |  **19.6%** | **11.0%** |      **8.5%** |  **11.4%** |

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

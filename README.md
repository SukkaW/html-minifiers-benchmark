# HTML Minifiers Benchmarks

Updated: 2026-05-15

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/6.2.6
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.2.1
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.33

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         113 |                  38.3% |                42.2% |  **52.2%** |     40.6% |         40.5% |      41.0% |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   7.4% |                11.3% |  **34.1%** |     10.8% |          8.6% |      11.3% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         132 |                   4.0% |             **7.6%** |       7.4% |      4.5% |          4.7% |       5.4% |
| [mastodon.social](https://mastodon.social/explore)              |          34 |                   3.0% |            **14.9%** |      14.7% |      5.8% |          5.2% |       7.2% |
| [css-tricks.com](https://css-tricks.com)                        |         169 |                   8.6% |                16.5% |  **29.2%** |     14.5% |          8.7% |      15.3% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         231 |                   4.5% |             **7.4%** |       7.2% |      6.0% |          6.0% |       6.3% |
| [apple.com](https://apple.com/)                                 |         247 |                   6.0% |             **9.8%** |       8.6% |      7.6% |          6.5% |       7.2% |
| [leanpub.com](https://leanpub.com)                              |         289 |                   1.2% |                 9.5% |       7.5% | **83.5%** |          1.8% |       5.6% |
| [edri.org](https://edri.org)                                    |          84 |                   7.4% |                13.4% |  **32.3%** |     12.1% |          7.8% |      12.5% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                 0.7% |      -2.6% |      0.3% |          0.2% |   **1.5%** |
| [un.org](https://un.org/en/)                                    |         153 |                  14.2% |                22.5% |  **41.1%** |     19.9% |         15.1% |      17.4% |
| [w3.org](https://w3.org/)                                       |          51 |                  18.9% |            **24.4%** |      23.2% |     24.3% |         20.2% |      24.0% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         167 |                  18.3% |                23.1% |  **65.3%** |     22.2% |         18.9% |      22.8% |
| [home.cern](https://home.cern)                                  |         286 |                    N/A |                12.6% |      25.6% |      8.1% |          4.6% |      10.0% |
| [eff.org](https://eff.org)                                      |          53 |                   9.0% |            **15.9%** |      11.1% |     13.6% |         11.5% |      13.5% |
| [sitepoint.com](https://sitepoint.com)                          |         234 |                   0.7% |            **10.0%** |       9.6% |      6.1% |          1.0% |       5.6% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         678 |                   0.8% |             **7.5%** |       5.9% |      4.5% |          1.2% |       6.7% |
| [github.com](https://github.com/)                               |         557 |                   3.1% |            **17.4%** |      16.5% |      7.3% |          5.9% |       6.4% |
| [faz.net](https://faz.net/aktuell/)                             |        1461 |                   3.2% |                10.8% |  **16.0%** |      4.4% |          3.5% |       8.6% |
| [weather.com](https://weather.com)                              |        2312 |                   0.1% |             **9.4%** |       9.2% |      9.2% |          0.2% |   **9.4%** |
| [tc39.es](https://tc39.es/ecma262/)                             |        7232 |                   5.7% |             **8.2%** |       6.6% |      6.7% |          6.2% |       8.0% |
| **Avg. minify rate**                                            |             |               **7.5%** |            **14.1%** |  **19.8%** | **15.2%** |      **8.7%** |  **11.8%** |

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

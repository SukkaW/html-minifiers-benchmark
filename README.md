# HTML Minifiers Benchmarks

Updated: 2026-05-09

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
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         116 |                  38.3% |                42.2% |  **51.9%** |     40.5% |         40.5% |      41.0% |
| [leanpub.com](https://leanpub.com)                              |         339 |                   1.2% |             **9.7%** |       7.3% |      5.5% |          1.9% |       5.9% |
| [mastodon.social](https://mastodon.social/explore)              |          34 |                   3.1% |            **14.9%** |      14.7% |      5.8% |          5.2% |       7.2% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         135 |                   3.9% |             **7.5%** |       7.2% |      4.4% |          4.7% |       5.3% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         225 |                   4.5% |             **7.4%** |       7.3% |      6.1% |          5.9% |       6.3% |
| [edri.org](https://edri.org)                                    |          84 |                   7.4% |                13.4% |  **32.3%** |     12.1% |          7.8% |      12.5% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                 0.7% |      -2.6% |      0.3% |          0.2% |   **1.5%** |
| [css-tricks.com](https://css-tricks.com)                        |         165 |                   8.4% |                16.5% |  **29.5%** |     14.5% |          8.6% |      15.3% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         156 |                  13.2% |                17.7% |  **62.9%** |     16.9% |         13.8% |      17.4% |
| [apple.com](https://apple.com/)                                 |         284 |                   6.4% |             **9.6%** |       8.7% |      7.7% |          6.9% |       7.3% |
| [w3.org](https://w3.org/)                                       |          51 |                  18.8% |            **24.3%** |      23.2% |     24.2% |         20.2% |      23.9% |
| [eff.org](https://eff.org)                                      |          53 |                   9.1% |            **16.0%** |      11.2% |     13.7% |         11.6% |      13.6% |
| [home.cern](https://home.cern)                                  |         285 |                    N/A |                12.7% |      25.5% |      8.1% |          4.6% |      10.0% |
| [un.org](https://un.org/en/)                                    |         152 |                  14.3% |                22.7% |  **41.4%** |     20.0% |         15.2% |      17.5% |
| [sitepoint.com](https://sitepoint.com)                          |         235 |                   0.7% |            **10.0%** |       9.6% |      6.1% |          1.0% |       5.6% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         795 |                   0.9% |             **8.2%** |       5.8% |      4.6% |          1.2% |       4.2% |
| [github.com](https://github.com/)                               |         556 |                   3.0% |            **17.4%** |      16.5% |      7.3% |          5.8% |       6.4% |
| [faz.net](https://faz.net/aktuell/)                             |        1457 |                   3.2% |                10.8% |  **15.9%** |      4.4% |          3.5% |       8.6% |
| [weather.com](https://weather.com)                              |        2317 |                   0.1% |             **9.4%** |       9.2% |      9.2% |          0.2% |   **9.4%** |
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

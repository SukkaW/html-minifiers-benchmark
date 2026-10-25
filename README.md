# HTML Minifiers Benchmarks

Updated: 2026-10-25

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/9.0.1
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.6.1
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.16.20

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [alistapart.com](https://alistapart.com/)                       |          64 |                   6.8% |                11.0% |  **35.6%** |     10.3% |          8.0% |      11.0% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         117 |                  39.1% |                42.1% |  **47.2%** |     41.3% |         41.2% |      41.7% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         251 |                   4.6% |                 7.7% |   **9.7%** |      5.9% |          6.0% |       6.3% |
| [css-tricks.com](https://css-tricks.com)                        |         151 |                    N/A |                14.1% |      25.2% |     12.6% |          9.1% |      13.2% |
| [w3.org](https://w3.org/)                                       |          48 |                  18.6% |            **24.1%** |      23.8% |     23.7% |         19.7% |      23.7% |
| [mastodon.social](https://mastodon.social/explore)              |          49 |                   3.8% |            **13.7%** |      13.4% |      5.7% |          6.9% |       8.3% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         136 |                   4.0% |                 6.9% |   **7.0%** |      4.6% |          4.9% |       5.5% |
| [edri.org](https://edri.org)                                    |          86 |                   6.8% |                13.8% |  **31.4%** |     11.4% |          7.2% |      12.0% |
| [leanpub.com](https://leanpub.com)                              |         539 |                   1.2% |                 8.7% |   **9.2%** |      5.0% |          1.8% |       5.6% |
| [eff.org](https://eff.org)                                      |          53 |                   9.0% |            **16.0%** |      15.3% |     13.5% |         11.5% |      13.5% |
| [apple.com](https://apple.com/)                                 |         319 |                   4.8% |                 7.2% |   **7.3%** |      6.2% |          5.4% |       5.6% |
| [un.org](https://un.org/en/)                                    |         162 |                  13.4% |                22.3% |  **42.0%** |     19.1% |         14.3% |      16.7% |
| [weather.com](https://weather.com)                              |         415 |                   0.5% |             **9.5%** |       9.0% |      7.3% |          0.8% |       7.2% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.3% |       0.2% |      0.3% |          0.2% |   **1.5%** |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         187 |                  26.4% |                30.7% |  **67.7%** |     29.8% |         26.9% |      30.4% |
| [home.cern](https://home.cern)                                  |         292 |                    N/A |                11.7% |      24.8% |      8.0% |          4.7% |      10.2% |
| [github.com](https://github.com/)                               |         567 |                   1.5% |                15.4% |  **15.5%** |      5.2% |          4.1% |       4.6% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         733 |                   0.8% |             **7.3%** |       6.8% |      4.8% |          1.2% |       6.4% |
| [faz.net](https://faz.net/aktuell/)                             |        1359 |                   3.9% |                 6.1% |  **16.8%** |      4.3% |          4.3% |       9.3% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7462 |                   5.7% |             **8.1%** |       7.4% |      6.6% |          6.2% |       7.9% |
| **Avg. minify rate**                                            |             |               **8.2%** |            **13.9%** |  **20.3%** | **11.4%** |      **9.5%** |  **12.1%** |

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

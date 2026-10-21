# HTML Minifiers Benchmarks

Updated: 2026-10-21

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
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.16.18

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [alistapart.com](https://alistapart.com/)                       |          64 |                   6.8% |                11.0% |  **35.6%** |     10.3% |          8.0% |      11.0% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         118 |                  39.1% |                42.1% |  **47.1%** |     41.2% |         41.1% |      41.6% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         258 |                   4.6% |                 7.5% |   **9.5%** |      5.9% |          5.9% |       6.2% |
| [css-tricks.com](https://css-tricks.com)                        |         151 |                    N/A |                14.1% |      25.2% |     12.6% |          9.1% |      13.2% |
| [edri.org](https://edri.org)                                    |          84 |                   7.4% |                13.9% |  **32.1%** |     12.1% |          7.9% |      12.6% |
| [github.com](https://github.com/)                               |         559 |                   1.5% |            **15.5%** |  **15.5%** |      5.2% |          4.1% |       4.6% |
| [leanpub.com](https://leanpub.com)                              |         535 |                   1.2% |                 8.8% |   **9.3%** |      5.1% |          1.7% |       5.6% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.3% |       0.2% |      0.3% |          0.2% |   **1.5%** |
| [home.cern](https://home.cern)                                  |         292 |                    N/A |                11.7% |      24.8% |      8.0% |          4.7% |      10.2% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         187 |                  26.4% |                30.7% |  **67.7%** |     29.8% |         26.9% |      30.4% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         136 |                   4.0% |                 6.9% |   **7.0%** |      4.5% |          4.9% |       5.5% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7450 |                   5.7% |             **8.1%** |       7.5% |      6.6% |          6.2% |       7.9% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         762 |                   0.7% |             **7.4%** |       6.8% |      4.8% |          1.1% |       6.6% |
| [mastodon.social](https://mastodon.social/explore)              |          48 |                   3.7% |            **13.8%** |      13.4% |      5.7% |          6.8% |       8.2% |
| [apple.com](https://apple.com/)                                 |         319 |                   4.8% |                 7.2% |   **7.3%** |      6.2% |          5.4% |       5.6% |
| [faz.net](https://faz.net/aktuell/)                             |        1395 |                   3.9% |                 6.0% |  **16.5%** |      4.3% |          4.2% |       9.3% |
| [eff.org](https://eff.org)                                      |          53 |                   9.0% |            **16.0%** |      15.3% |     13.5% |         11.5% |      13.5% |
| [un.org](https://un.org/en/)                                    |         161 |                  13.5% |                22.4% |  **42.2%** |     19.1% |         14.4% |      16.7% |
| [w3.org](https://w3.org/)                                       |          48 |                  18.3% |            **23.8%** |      23.5% |     23.4% |         19.4% |      23.4% |
| **Avg. minify rate**                                            |             |               **8.6%** |            **14.2%** |  **21.0%** | **11.6%** |     **10.0%** |  **12.4%** |

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

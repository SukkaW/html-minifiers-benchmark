# HTML Minifiers Benchmarks

Updated: 2026-10-10

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/8.10.7
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.5.1
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.16.13

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [alistapart.com](https://alistapart.com/)                       |          64 |                   6.8% |                11.0% |  **35.9%** |     10.3% |          8.0% |      11.0% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         119 |                  39.0% |                41.8% |  **49.7%** |     41.1% |         41.1% |      41.6% |
| [css-tricks.com](https://css-tricks.com)                        |         150 |                    N/A |                14.1% |      25.8% |     12.6% |          9.1% |      13.3% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         247 |                   4.7% |                 7.7% |   **9.8%** |      6.0% |          6.0% |       6.3% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         134 |                   4.0% |                 7.0% |   **7.6%** |      4.6% |          4.9% |       5.5% |
| [edri.org](https://edri.org)                                    |          84 |                   7.4% |                13.0% |  **33.0%** |     12.1% |          7.9% |      12.6% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.3% |       0.3% |      0.3% |          0.2% |   **1.5%** |
| [leanpub.com](https://leanpub.com)                              |         518 |                   1.2% |                 9.0% |  **10.1%** |      5.2% |          1.7% |       5.8% |
| [apple.com](https://apple.com/)                                 |         248 |                   6.1% |                 8.6% |   **9.2%** |      7.6% |          6.7% |       7.0% |
| [w3.org](https://w3.org/)                                       |          50 |                  17.9% |            **23.3%** |      23.1% |     22.9% |         19.0% |      22.9% |
| [mastodon.social](https://mastodon.social/explore)              |          50 |                   3.8% |                13.3% |  **13.5%** |      5.7% |          7.0% |       8.3% |
| [weather.com](https://weather.com)                              |         357 |                   0.5% |                 7.8% |   **8.1%** |      6.4% |          0.9% |       6.5% |
| [eff.org](https://eff.org)                                      |          54 |                   8.6% |            **15.6%** |  **15.6%** |     13.1% |         11.1% |      13.1% |
| [un.org](https://un.org/en/)                                    |         161 |                  13.5% |                22.4% |  **42.4%** |     19.1% |         14.4% |      16.7% |
| [home.cern](https://home.cern)                                  |         292 |                    N/A |                11.7% |      25.9% |      8.0% |          4.7% |      10.2% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         184 |                  26.4% |                30.6% |  **68.4%** |     29.8% |         26.9% |      30.5% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         713 |                   0.8% |             **7.1%** |       6.7% |      4.7% |          1.2% |       6.2% |
| [github.com](https://github.com/)                               |         564 |                   1.5% |                15.2% |  **15.5%** |      5.2% |          4.1% |       4.6% |
| [faz.net](https://faz.net/aktuell/)                             |        1391 |                   3.9% |                10.6% |  **17.1%** |      4.3% |          4.3% |       9.4% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7450 |                   5.7% |                 8.1% |   **8.3%** |      6.6% |          6.2% |       7.9% |
| **Avg. minify rate**                                            |             |               **8.2%** |            **14.0%** |  **20.8%** | **11.4%** |      **9.5%** |  **12.1%** |

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

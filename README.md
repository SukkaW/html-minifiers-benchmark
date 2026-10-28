# HTML Minifiers Benchmarks

Updated: 2026-10-28

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/9.1.0
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.6.1
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.16.20

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [alistapart.com](https://alistapart.com/)                       |          64 |                   6.8% |                11.0% |  **35.7%** |     10.3% |          8.0% |      10.9% |
| [css-tricks.com](https://css-tricks.com)                        |         154 |                    N/A |                15.0% |      26.1% |     12.9% |          9.2% |      13.4% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         114 |                  39.1% |                42.2% |  **47.4%** |     41.3% |         41.2% |      41.7% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         256 |                   4.6% |                 7.6% |   **9.6%** |      5.9% |          6.0% |       6.2% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         187 |                  26.4% |                30.7% |  **67.7%** |     29.8% |         26.9% |      30.4% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         136 |                   4.0% |             **7.2%** |       7.0% |      4.6% |          4.9% |       5.5% |
| [leanpub.com](https://leanpub.com)                              |         533 |                   1.2% |                 8.8% |   **9.3%** |      5.0% |          1.8% |       5.6% |
| [edri.org](https://edri.org)                                    |          85 |                   6.7% |                13.8% |  **31.5%** |     11.3% |          7.2% |      11.9% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.3% |       0.2% |      0.3% |          0.2% |   **1.5%** |
| [mastodon.social](https://mastodon.social/explore)              |          49 |                   3.8% |            **13.7%** |      13.4% |      5.7% |          6.9% |       8.3% |
| [apple.com](https://apple.com/)                                 |         248 |                   6.0% |                 9.0% |   **9.2%** |      7.7% |          6.8% |       7.0% |
| [eff.org](https://eff.org)                                      |          53 |                   9.0% |            **16.3%** |      15.3% |     13.5% |         11.5% |      13.5% |
| [w3.org](https://w3.org/)                                       |          49 |                  18.5% |            **24.1%** |      23.8% |     23.7% |         19.7% |      23.7% |
| [un.org](https://un.org/en/)                                    |         162 |                  13.4% |                22.5% |  **42.0%** |     19.0% |         14.3% |      16.7% |
| [home.cern](https://home.cern)                                  |         292 |                    N/A |                11.8% |      24.9% |      8.1% |          4.7% |      10.2% |
| [github.com](https://github.com/)                               |         571 |                   1.5% |                15.6% |  **15.7%** |      5.2% |          4.1% |       4.6% |
| [weather.com](https://weather.com)                              |         421 |                   0.5% |             **9.6%** |       9.0% |      7.1% |          0.8% |       7.1% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         728 |                   0.8% |             **7.2%** |       6.7% |      4.7% |          1.2% |       6.3% |
| [faz.net](https://faz.net/aktuell/)                             |        1349 |                   3.9% |                 6.3% |  **16.9%** |      4.3% |          4.3% |       9.3% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7462 |                   5.7% |             **8.1%** |       7.4% |      6.6% |          6.2% |       7.9% |
| **Avg. minify rate**                                            |             |               **8.2%** |            **14.1%** |  **20.4%** | **11.4%** |      **9.6%** |  **12.1%** |

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

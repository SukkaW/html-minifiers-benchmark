# HTML Minifiers Benchmarks

Updated: 2026-09-21

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/8.5.2
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.5.1
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.16.2

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         119 |                  39.0% |                42.7% |  **49.8%** |     41.2% |         41.1% |      41.6% |
| [css-tricks.com](https://css-tricks.com)                        |          12 |                   8.0% |                37.5% |  **37.8%** |     19.3% |          8.2% |      25.1% |
| [alistapart.com](https://alistapart.com/)                       |          64 |                   6.8% |                11.0% |  **35.9%** |     10.3% |          8.0% |      11.0% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         254 |                   4.6% |                 7.6% |   **9.6%** |      5.9% |          6.0% |       6.2% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.6% |       0.3% |      0.3% |          0.2% |   **1.5%** |
| [edri.org](https://edri.org)                                    |          84 |                   7.4% |                12.9% |  **32.9%** |     12.2% |          7.9% |      12.6% |
| [leanpub.com](https://leanpub.com)                              |         487 |                   1.2% |                 9.6% |  **10.1%** |      5.2% |          1.8% |       5.7% |
| [home.cern](https://home.cern)                                  |         291 |                    N/A |                13.0% |      26.1% |      8.1% |          4.7% |      10.2% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         132 |                   4.0% |                 7.0% |   **7.7%** |      4.6% |          4.9% |       5.5% |
| [w3.org](https://w3.org/)                                       |          50 |                  18.9% |            **24.5%** |      24.2% |     24.3% |         20.3% |      24.0% |
| [mastodon.social](https://mastodon.social/explore)              |          50 |                   3.8% |                13.3% |  **13.5%** |      5.7% |          7.0% |       8.4% |
| [weather.com](https://weather.com)                              |         351 |                   0.5% |                 8.5% |   **9.2%** |      6.7% |          0.6% |       6.9% |
| [eff.org](https://eff.org)                                      |          54 |                   8.7% |                15.2% |  **15.7%** |     13.2% |         11.2% |      13.2% |
| [un.org](https://un.org/en/)                                    |         162 |                  13.4% |                21.2% |  **42.0%** |     19.0% |         14.4% |      16.7% |
| [apple.com](https://apple.com/)                                 |         305 |                   4.9% |             **7.8%** |       7.7% |      6.3% |          5.5% |       5.8% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         169 |                  20.0% |                24.7% |  **65.3%** |     23.8% |         20.6% |      24.4% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         698 |                   0.8% |             **7.2%** |       6.8% |      4.7% |          1.2% |       6.4% |
| [github.com](https://github.com/)                               |         562 |                   1.4% |                15.4% |  **15.5%** |      5.2% |          4.0% |       4.5% |
| [faz.net](https://faz.net/aktuell/)                             |        1609 |                   3.4% |                10.4% |  **15.8%** |      4.6% |          3.7% |       8.6% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7448 |                   5.7% |                 8.2% |   **8.3%** |      6.6% |          6.2% |       7.9% |
| **Avg. minify rate**                                            |             |               **7.8%** |            **15.0%** |  **21.5%** | **11.5%** |      **9.1%** |  **12.4%** |

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

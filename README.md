# HTML Minifiers Benchmarks

Updated: 2026-10-15

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/8.10.8
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.6.1
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.16.18

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [alistapart.com](https://alistapart.com/)                       |          64 |                   6.8% |                11.0% |  **35.6%** |     10.3% |          8.0% |      11.0% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         119 |                  39.0% |                41.8% |  **47.0%** |     41.2% |         41.1% |      41.6% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         135 |                   4.0% |                 6.9% |   **7.1%** |      4.5% |          4.9% |       5.5% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         247 |                   4.7% |                 7.7% |   **9.8%** |      6.0% |          6.0% |       6.3% |
| [weather.com](https://weather.com)                              |         367 |                   0.5% |                 8.4% |   **8.6%** |      6.5% |          0.8% |       6.5% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.3% |       0.2% |      0.3% |          0.2% |   **1.5%** |
| [w3.org](https://w3.org/)                                       |          49 |                  18.1% |            **23.4%** |      23.1% |     23.0% |         19.1% |      23.1% |
| [un.org](https://un.org/en/)                                    |         161 |                  13.4% |                22.4% |  **42.1%** |     19.1% |         14.3% |      16.7% |
| [mastodon.social](https://mastodon.social/explore)              |          50 |                   3.8% |            **13.3%** |  **13.3%** |      5.7% |          7.0% |       8.3% |
| [apple.com](https://apple.com/)                                 |         252 |                   6.0% |                 8.6% |   **9.1%** |      7.6% |          6.8% |       7.0% |
| [leanpub.com](https://leanpub.com)                              |         527 |                   1.2% |                 8.8% |   **9.4%** |      5.1% |          1.8% |       5.7% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         185 |                  26.3% |                30.4% |  **68.0%** |     29.7% |         26.8% |      30.4% |
| [css-tricks.com](https://css-tricks.com)                        |         151 |                    N/A |                14.1% |      25.2% |     12.6% |          9.1% |      13.2% |
| [eff.org](https://eff.org)                                      |          54 |                   8.9% |            **15.9%** |      15.2% |     13.4% |         11.4% |      13.4% |
| [home.cern](https://home.cern)                                  |         291 |                    N/A |                11.7% |      24.9% |      8.0% |          4.7% |      10.2% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         711 |                   0.8% |             **7.1%** |       6.7% |      4.7% |          1.1% |       6.3% |
| [github.com](https://github.com/)                               |         559 |                   1.5% |                15.3% |  **15.5%** |      5.2% |          4.1% |       4.6% |
| [faz.net](https://faz.net/aktuell/)                             |        1340 |                   3.9% |                10.7% |  **16.8%** |      4.3% |          4.2% |       9.4% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7450 |                   5.7% |             **8.1%** |       7.5% |      6.6% |          6.2% |       7.9% |
| **Avg. minify rate**                                            |             |               **8.3%** |            **14.1%** |  **19.7%** | **11.4%** |      **9.6%** |  **12.1%** |

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

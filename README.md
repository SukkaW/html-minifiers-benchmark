# HTML Minifiers Benchmarks

Updated: 2026-11-21

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/9.1.2
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.7.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.16.22

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [alistapart.com](https://alistapart.com/)                       |          65 |                   6.7% |                10.8% |  **35.0%** |     10.1% |          7.9% |      10.8% |
| [css-tricks.com](https://css-tricks.com)                        |          12 |                   7.8% |            **35.9%** |      32.2% |     17.8% |          8.1% |      23.2% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         114 |                  39.1% |                42.2% |  **47.4%** |     41.3% |         41.3% |      41.8% |
| [leanpub.com](https://leanpub.com)                              |         525 |                   1.2% |                 8.5% |   **9.2%** |      5.0% |          1.8% |       5.5% |
| [mastodon.social](https://mastodon.social/explore)              |          45 |                   3.6% |            **14.0%** |      13.6% |      5.7% |          6.6% |       8.1% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         134 |                   4.0% |             **7.2%** |       7.1% |      4.6% |          4.9% |       5.6% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         252 |                   4.6% |                 7.8% |  **10.1%** |      5.9% |          6.0% |       6.3% |
| [apple.com](https://apple.com/)                                 |         244 |                   6.1% |             **9.6%** |       9.1% |      7.6% |          6.7% |       7.0% |
| [w3.org](https://w3.org/)                                       |          48 |                  18.7% |            **24.3%** |      24.0% |     23.9% |         19.9% |      23.9% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         152 |                  -3.9% |                 0.3% |       0.3% |      0.3% |          0.2% |   **1.5%** |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         185 |                  26.4% |                30.7% |  **68.0%** |     29.8% |         26.9% |      30.4% |
| [edri.org](https://edri.org)                                    |          86 |                   6.7% |                13.7% |  **31.4%** |     11.3% |          7.1% |      11.9% |
| [eff.org](https://eff.org)                                      |          55 |                   8.9% |            **16.1%** |      15.1% |     13.4% |         11.4% |      13.3% |
| [weather.com](https://weather.com)                              |         390 |                   0.6% |            **10.9%** |      10.3% |      8.6% |          0.9% |       8.5% |
| [un.org](https://un.org/en/)                                    |         161 |                  13.5% |                22.6% |  **42.2%** |     19.2% |         14.4% |      16.8% |
| [home.cern](https://home.cern)                                  |         294 |                   4.2% |                11.8% |  **25.2%** |      8.0% |          4.6% |      10.1% |
| [github.com](https://github.com/)                               |         525 |                   1.7% |            **17.3%** |      17.2% |      4.7% |          4.1% |       4.4% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         666 |                   0.8% |             **7.3%** |       6.9% |      4.8% |          1.2% |       6.4% |
| [faz.net](https://faz.net/aktuell/)                             |        1409 |                   3.9% |                 6.3% |  **16.8%** |      4.3% |          4.2% |       9.1% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7644 |                   5.6% |             **7.9%** |       7.2% |      6.4% |          6.0% |       7.8% |
| **Avg. minify rate**                                            |             |               **8.0%** |            **15.3%** |  **21.4%** | **11.6%** |      **9.2%** |  **12.6%** |

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

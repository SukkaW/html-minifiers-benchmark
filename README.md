# HTML Minifiers Benchmarks

Updated: 2026-11-17

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
| [alistapart.com](https://alistapart.com/)                       |          65 |                   6.8% |                10.9% |  **35.2%** |     10.2% |          7.9% |      10.9% |
| [css-tricks.com](https://css-tricks.com)                        |          12 |                   7.7% |            **36.9%** |      32.8% |     18.4% |          7.9% |      24.4% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         116 |                  39.1% |                42.2% |  **47.2%** |     41.3% |         41.2% |      41.7% |
| [leanpub.com](https://leanpub.com)                              |         519 |                   1.2% |                 8.5% |   **9.2%** |      4.9% |          1.8% |       5.4% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         135 |                   4.0% |             **7.2%** |       7.1% |      4.6% |          4.9% |       5.5% |
| [apple.com](https://apple.com/)                                 |         251 |                    N/A |                10.0% |       9.1% |      7.6% |          6.7% |       7.0% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         253 |                   4.6% |                 7.8% |  **10.0%** |      5.9% |          6.0% |       6.2% |
| [w3.org](https://w3.org/)                                       |          48 |                  18.7% |            **24.2%** |      23.9% |     23.8% |         19.8% |      23.8% |
| [edri.org](https://edri.org)                                    |          85 |                   6.7% |                13.8% |  **31.5%** |     11.3% |          7.2% |      11.9% |
| [weather.com](https://weather.com)                              |         453 |                   0.5% |             **9.4%** |       8.9% |      7.2% |          0.7% |       7.1% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         152 |                  -3.9% |                 0.3% |       0.3% |      0.3% |          0.2% |   **1.5%** |
| [eff.org](https://eff.org)                                      |          54 |                   9.0% |            **16.3%** |      15.3% |     13.5% |         11.5% |      13.4% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         185 |                  26.5% |                30.8% |  **68.1%** |     29.9% |         27.0% |      30.5% |
| [github.com](https://github.com/)                               |         513 |                   1.7% |            **17.7%** |      17.6% |      4.8% |          4.2% |       4.5% |
| [home.cern](https://home.cern)                                  |         294 |                   4.2% |                11.8% |  **25.2%** |      8.0% |          4.6% |      10.1% |
| [un.org](https://un.org/en/)                                    |         161 |                  13.5% |                22.5% |  **42.1%** |     19.1% |         14.4% |      16.7% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         715 |                   0.7% |             **7.3%** |       6.9% |      4.8% |          1.2% |       6.5% |
| [faz.net](https://faz.net/aktuell/)                             |        1369 |                   3.9% |                 6.3% |  **16.9%** |      4.3% |          4.2% |       9.1% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7637 |                   5.6% |             **7.9%** |       7.2% |      6.5% |          6.0% |       7.8% |
| [mastodon.social](https://mastodon.social/explore)              |          45 |                   3.6% |            **14.0%** |      13.6% |      5.7% |          6.6% |       8.1% |
| **Avg. minify rate**                                            |             |               **8.1%** |            **15.6%** |  **22.1%** | **11.8%** |      **9.3%** |  **12.9%** |

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

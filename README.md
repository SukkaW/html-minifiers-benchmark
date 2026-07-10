# HTML Minifiers Benchmarks

Updated: 2026-07-10

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/7.2.0
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.3.2
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.43

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   6.9% |                11.1% |  **34.4%** |     10.4% |          8.1% |      11.0% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         128 |                   4.1% |             **7.0%** |       6.7% |      4.5% |          4.9% |       5.5% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         118 |                  39.1% |                42.9% |  **52.8%** |     41.3% |         41.2% |      41.7% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         249 |                   4.7% |             **7.6%** |       7.2% |      6.0% |          6.0% |       6.3% |
| [leanpub.com](https://leanpub.com)                              |         334 |                   1.2% |             **8.5%** |       6.6% |      4.6% |          1.8% |       5.2% |
| [css-tricks.com](https://css-tricks.com)                        |         147 |                    N/A |                15.1% |      26.5% |     13.0% |          9.2% |      13.8% |
| [mastodon.social](https://mastodon.social/explore)              |          43 |                   3.6% |            **14.0%** |      13.9% |      5.8% |          6.3% |       7.9% |
| [w3.org](https://w3.org/)                                       |          52 |                  18.6% |            **24.0%** |      22.8% |     23.9% |         20.0% |      23.6% |
| [edri.org](https://edri.org)                                    |          84 |                   7.4% |                12.9% |  **32.2%** |     12.2% |          7.9% |      12.6% |
| [eff.org](https://eff.org)                                      |          54 |                   8.8% |            **15.5%** |      10.9% |     13.4% |         11.3% |      13.3% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.6% |      -2.6% |      0.3% |          0.2% |   **1.5%** |
| [apple.com](https://apple.com/)                                 |         243 |                   6.0% |             **9.7%** |       8.6% |      7.5% |          6.6% |       7.1% |
| [weather.com](https://weather.com)                              |         349 |                   0.5% |             **7.5%** |       6.1% |      6.3% |          1.0% |       6.8% |
| [un.org](https://un.org/en/)                                    |         156 |                    N/A |                22.0% |      40.6% |     19.8% |         14.9% |      17.1% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         177 |                  20.2% |                24.7% |  **64.5%** |     23.9% |         20.8% |      24.4% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         782 |                   0.8% |             **7.7%** |       5.9% |      4.7% |          1.2% |       6.7% |
| [home.cern](https://home.cern)                                  |         301 |                    N/A |                12.5% |      26.1% |      7.8% |          4.5% |       9.9% |
| [sitepoint.com](https://sitepoint.com)                          |         236 |                   0.7% |            **10.0%** |       9.6% |      6.1% |          0.9% |       5.5% |
| [github.com](https://github.com/)                               |         563 |                   2.2% |            **16.0%** |      15.2% |      6.1% |          4.7% |       5.3% |
| [faz.net](https://faz.net/aktuell/)                             |        1556 |                   3.2% |                10.8% |  **15.3%** |      4.4% |          3.5% |       8.6% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7418 |                   5.7% |             **8.2%** |       6.6% |      6.7% |          6.2% |       8.0% |
| **Avg. minify rate**                                            |             |               **7.2%** |            **13.3%** |  **17.6%** | **10.4%** |      **8.5%** |  **11.2%** |

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

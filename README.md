# HTML Minifiers Benchmarks

Updated: 2026-07-21

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/7.5.0
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.4.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.46

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   6.9% |                11.0% |  **34.2%** |     10.3% |          8.2% |      11.0% |
| [css-tricks.com](https://css-tricks.com)                        |          12 |                   8.0% |            **41.2%** |      37.5% |     19.2% |          8.2% |      25.3% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         246 |                   4.7% |             **7.6%** |       7.3% |      6.0% |          6.0% |       6.3% |
| [github.com](https://github.com/)                               |         564 |                   2.1% |            **16.0%** |      15.3% |      6.0% |          4.7% |       5.3% |
| [edri.org](https://edri.org)                                    |          84 |                   7.4% |                12.9% |  **32.3%** |     12.2% |          7.9% |      12.6% |
| [leanpub.com](https://leanpub.com)                              |         354 |                   1.2% |             **8.5%** |       6.7% |      4.8% |          1.8% |       5.3% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.6% |      -2.6% |      0.3% |          0.2% |   **1.5%** |
| [home.cern](https://home.cern)                                  |         301 |                    N/A |                12.5% |      26.1% |      7.8% |          4.5% |       9.9% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         118 |                  39.1% |                42.9% |  **52.8%** |     41.3% |         41.2% |      41.7% |
| [eff.org](https://eff.org)                                      |          53 |                   8.8% |            **15.5%** |      11.0% |     13.4% |         11.3% |      13.3% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         129 |                   4.0% |             **7.0%** |       6.7% |      4.5% |          4.9% |       5.5% |
| [mastodon.social](https://mastodon.social/explore)              |          43 |                   3.6% |            **14.0%** |      13.9% |      5.8% |          6.3% |       7.9% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         175 |                  19.9% |                24.5% |  **64.5%** |     23.6% |         20.5% |      24.2% |
| [apple.com](https://apple.com/)                                 |         243 |                   6.1% |             **9.7%** |       8.7% |      7.5% |          6.6% |       7.1% |
| [weather.com](https://weather.com)                              |         329 |                   0.5% |             **8.2%** |       6.4% |      6.4% |          0.6% |       6.7% |
| [w3.org](https://w3.org/)                                       |          52 |                  18.5% |            **23.8%** |      22.7% |     23.7% |         19.8% |      23.4% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         776 |                   0.8% |             **7.5%** |       6.0% |      4.8% |          1.2% |       6.7% |
| [faz.net](https://faz.net/aktuell/)                             |        1614 |                   3.2% |                10.6% |  **15.0%** |      4.4% |          3.5% |       8.6% |
| [un.org](https://un.org/en/)                                    |         154 |                    N/A |                22.1% |      41.0% |     19.8% |         15.1% |      17.3% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7421 |                   5.7% |             **8.2%** |       6.6% |      6.7% |          6.2% |       8.0% |
| **Avg. minify rate**                                            |             |               **7.6%** |            **15.0%** |  **19.2%** | **11.2%** |      **8.8%** |  **12.2%** |

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

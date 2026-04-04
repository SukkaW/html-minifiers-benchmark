# HTML Minifiers Benchmarks

Updated: 2026-04-04

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/5.2.2
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.2.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.21

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   7.6% |                11.5% |  **34.5%** |     11.1% |          8.7% |      11.5% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         223 |                   4.5% |             **7.4%** |   **7.4%** |      6.1% |          6.0% |       6.3% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         110 |                  38.1% |                41.8% |  **52.8%** |     40.3% |         40.2% |      40.7% |
| [css-tricks.com](https://css-tricks.com)                        |         169 |                   8.3% |                23.0% |  **29.0%** |     13.4% |          8.7% |      13.9% |
| [edri.org](https://edri.org)                                    |          83 |                   7.4% |                13.4% |  **32.4%** |     12.1% |          7.9% |      12.5% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         141 |                   3.8% |             **7.2%** |       6.9% |      4.3% |          4.5% |       5.1% |
| [home.cern](https://home.cern)                                  |         151 |                  37.1% |            **46.3%** |      40.2% |     38.8% |         39.4% |      40.2% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                 0.7% |      -2.6% |      0.3% |          0.2% |   **1.5%** |
| [leanpub.com](https://leanpub.com)                              |         343 |                   1.2% |             **8.4%** |       6.7% |      4.9% |          1.9% |       5.3% |
| [apple.com](https://apple.com/)                                 |         248 |                   4.8% |             **8.6%** |       7.6% |      6.5% |          5.5% |       6.0% |
| [mastodon.social](https://mastodon.social/explore)              |          34 |                   3.1% |            **14.9%** |      14.7% |      5.8% |          5.2% |       7.2% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         156 |                  13.3% |                17.8% |  **62.8%** |     16.9% |         13.9% |      17.5% |
| [w3.org](https://w3.org/)                                       |          50 |                  19.0% |            **24.5%** |      23.3% |     24.4% |         20.4% |      24.1% |
| [eff.org](https://eff.org)                                      |          54 |                   8.8% |            **14.7%** |      10.9% |     13.4% |         11.3% |      13.3% |
| [un.org](https://un.org/en/)                                    |         152 |                  14.2% |                22.5% |  **41.2%** |     19.9% |         15.1% |      17.4% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         704 |                   0.8% |             **7.4%** |       5.8% |      4.6% |          1.2% |       6.6% |
| [github.com](https://github.com/)                               |         551 |                   3.0% |            **17.4%** |      16.6% |      7.3% |          5.8% |       6.4% |
| [sitepoint.com](https://sitepoint.com)                          |         235 |                   0.7% |            **10.1%** |       9.6% |      6.2% |          1.0% |       5.6% |
| [faz.net](https://faz.net/aktuell/)                             |        1416 |                   3.2% |                 6.6% |  **11.6%** |      4.3% |          3.5% |       4.5% |
| [weather.com](https://weather.com)                              |        2403 |                   0.1% |             **9.0%** |       8.8% |      8.9% |          0.2% |   **9.0%** |
| [tc39.es](https://tc39.es/ecma262/)                             |        7355 |                   8.5% |            **11.1%** |       9.3% |      9.4% |          9.2% |      10.9% |
| **Avg. minify rate**                                            |             |               **8.7%** |            **15.4%** |  **20.4%** | **12.3%** |     **10.0%** |  **12.6%** |

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

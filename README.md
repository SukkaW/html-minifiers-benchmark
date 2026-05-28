# HTML Minifiers Benchmarks

Updated: 2026-05-28

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/6.2.7
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.3.2
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.40

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   6.9% |                11.0% |  **34.0%** |     10.3% |          8.1% |      11.0% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         225 |                   4.6% |             **7.4%** |   **7.4%** |      6.2% |          6.0% |       6.3% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         116 |                  38.2% |                42.0% |  **52.1%** |     40.4% |         40.3% |      40.8% |
| [leanpub.com](https://leanpub.com)                              |         294 |                   1.2% |            **10.3%** |       8.3% |      6.0% |          1.8% |       6.5% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.6% |      -2.6% |      0.3% |          0.2% |   **1.5%** |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         131 |                   4.0% |             **7.7%** |       7.4% |      4.5% |          4.7% |       5.4% |
| [mastodon.social](https://mastodon.social/explore)              |          31 |                   2.8% |            **15.3%** |      15.1% |      5.9% |          4.5% |       6.7% |
| [edri.org](https://edri.org)                                    |          84 |                   7.4% |                13.4% |  **32.3%** |     12.1% |          7.8% |      12.5% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         167 |                  18.3% |                23.1% |  **65.3%** |     22.2% |         18.9% |      22.8% |
| [css-tricks.com](https://css-tricks.com)                        |         166 |                   8.3% |                16.1% |  **28.4%** |     14.1% |          8.5% |      14.9% |
| [w3.org](https://w3.org/)                                       |          51 |                  18.8% |            **24.3%** |      23.1% |     24.2% |         20.2% |      23.9% |
| [apple.com](https://apple.com/)                                 |         282 |                   5.2% |             **8.6%** |       7.5% |      6.7% |          5.7% |       6.3% |
| [un.org](https://un.org/en/)                                    |         151 |                  14.3% |                22.7% |  **41.5%** |     20.1% |         15.2% |      17.5% |
| [home.cern](https://home.cern)                                  |         285 |                    N/A |                12.6% |      25.5% |      8.1% |          4.6% |      10.0% |
| [eff.org](https://eff.org)                                      |          54 |                   8.8% |            **15.8%** |      10.9% |     13.4% |         11.4% |      13.3% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         729 |                   0.8% |             **7.4%** |       5.9% |      4.7% |          1.2% |       6.6% |
| [sitepoint.com](https://sitepoint.com)                          |         253 |                   0.7% |            **11.3%** |      10.8% |      6.2% |          0.9% |       5.4% |
| [github.com](https://github.com/)                               |         557 |                   3.1% |            **17.4%** |      16.5% |      7.3% |          5.9% |       6.5% |
| [faz.net](https://faz.net/aktuell/)                             |        1499 |                   3.2% |                10.6% |  **15.6%** |      4.4% |          3.5% |       8.6% |
| [weather.com](https://weather.com)                              |        2644 |                   0.1% |             **9.4%** |       9.2% |      9.3% |          0.2% |   **9.4%** |
| [tc39.es](https://tc39.es/ecma262/)                             |        7232 |                   5.7% |             **8.2%** |       6.6% |      6.7% |          6.2% |       8.0% |
| **Avg. minify rate**                                            |             |               **7.4%** |            **14.1%** |  **19.8%** | **11.2%** |      **8.6%** |  **11.7%** |

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

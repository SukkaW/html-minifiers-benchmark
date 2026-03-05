# HTML Minifiers Benchmarks

Updated: 2026-03-05

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/5.1.5
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.2.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.18

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   7.6% |                11.5% |  **34.5%** |     11.1% |          8.7% |      11.5% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         109 |                  37.9% |                41.7% |  **52.8%** |     40.1% |         40.0% |      40.6% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         224 |                   4.5% |             **7.3%** |   **7.3%** |      6.0% |          5.9% |       6.2% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                 0.6% |      -2.6% |      0.3% |          0.2% |   **1.5%** |
| [css-tricks.com](https://css-tricks.com)                        |         153 |                   8.9% |                22.1% |  **26.1%** |     12.1% |          9.0% |      12.1% |
| [leanpub.com](https://leanpub.com)                              |         358 |                   1.2% |             **8.4%** |       6.6% |      4.9% |          1.9% |       5.4% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         141 |                   3.7% |             **7.2%** |       6.8% |      4.3% |          4.5% |       5.1% |
| [edri.org](https://edri.org)                                    |          80 |                   7.7% |                13.7% |  **30.7%** |     12.3% |          8.2% |      12.8% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         152 |                  13.2% |                17.8% |  **64.0%** |     16.9% |         13.8% |      17.5% |
| [home.cern](https://home.cern)                                  |         151 |                  37.1% |            **46.4%** |      40.2% |     38.9% |         39.4% |      40.2% |
| [mastodon.social](https://mastodon.social/explore)              |          34 |                   3.1% |                12.9% |  **14.7%** |      5.9% |          5.2% |       7.2% |
| [eff.org](https://eff.org)                                      |          56 |                   8.4% |            **14.0%** |      11.9% |     12.8% |         10.8% |      12.7% |
| [apple.com](https://apple.com/)                                 |         264 |                   8.0% |            **12.3%** |      10.5% |      9.5% |          8.8% |       9.1% |
| [w3.org](https://w3.org/)                                       |          51 |                  18.9% |            **24.3%** |      23.2% |     24.2% |         20.2% |      23.9% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         641 |                   0.8% |             **7.0%** |       6.0% |      4.6% |          1.2% |       6.2% |
| [sitepoint.com](https://sitepoint.com)                          |         234 |                   0.7% |            **10.1%** |       9.6% |      6.2% |          1.0% |       5.6% |
| [github.com](https://github.com/)                               |         549 |                   3.0% |            **17.2%** |      16.6% |      7.3% |          5.8% |       6.4% |
| [un.org](https://un.org/en/)                                    |         150 |                  14.4% |                22.7% |  **41.6%** |     20.2% |         15.3% |      17.6% |
| [faz.net](https://faz.net/aktuell/)                             |        1381 |                   3.3% |                 5.5% |  **10.6%** |      4.4% |          3.6% |       4.5% |
| [weather.com](https://weather.com)                              |        2458 |                   0.3% |                11.3% |  **16.9%** |      9.9% |          0.6% |      10.0% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7305 |                   8.5% |            **11.1%** |       9.3% |      9.5% |          9.2% |      10.9% |
| **Avg. minify rate**                                            |             |               **8.9%** |            **15.5%** |  **20.8%** | **12.4%** |     **10.2%** |  **12.7%** |

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

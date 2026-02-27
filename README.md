# HTML Minifiers Benchmarks

Updated: 2026-02-27

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/5.1.5
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.1.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.17

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         109 |                  37.9% |                41.7% |  **52.7%** |     40.1% |         40.0% |      40.6% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         229 |                   4.4% |             **7.2%** |       7.1% |      6.0% |          5.9% |       6.2% |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   7.6% |                11.5% |  **34.5%** |     11.1% |          8.7% |      11.5% |
| [css-tricks.com](https://css-tricks.com)                        |         154 |                   8.8% |                22.1% |  **26.1%** |     12.0% |          9.0% |      12.1% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         141 |                   3.7% |             **7.2%** |       6.8% |      4.3% |          4.5% |       5.1% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                 0.7% |      -2.6% |      0.3% |          0.2% |   **1.5%** |
| [home.cern](https://home.cern)                                  |         151 |                  37.2% |            **46.5%** |      40.3% |     39.0% |         39.5% |      40.4% |
| [leanpub.com](https://leanpub.com)                              |         341 |                   1.2% |             **8.3%** |       6.5% |      4.7% |          1.9% |       5.1% |
| [mastodon.social](https://mastodon.social/explore)              |          39 |                   3.4% |                11.9% |  **14.2%** |      5.8% |          5.9% |       7.6% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         154 |                  13.1% |                17.8% |  **63.6%** |     16.9% |         13.8% |      17.5% |
| [edri.org](https://edri.org)                                    |          80 |                   7.7% |                13.7% |  **30.7%** |     12.3% |          8.2% |      12.8% |
| [un.org](https://un.org/en/)                                    |         151 |                  14.3% |                22.7% |  **41.5%** |     20.1% |         15.3% |      17.6% |
| [w3.org](https://w3.org/)                                       |          51 |                  18.8% |            **24.3%** |      23.2% |     24.2% |         20.2% |      23.9% |
| [apple.com](https://apple.com/)                                 |         224 |                   8.8% |            **13.6%** |      11.7% |     10.5% |          9.7% |      10.0% |
| [eff.org](https://eff.org)                                      |          56 |                   8.3% |            **13.9%** |      11.8% |     12.7% |         10.8% |      12.6% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         632 |                   0.8% |             **6.8%** |       6.0% |      4.6% |          1.2% |       6.1% |
| [github.com](https://github.com/)                               |         548 |                   3.0% |            **17.2%** |      16.6% |      7.3% |          5.8% |       6.3% |
| [sitepoint.com](https://sitepoint.com)                          |         487 |                   0.8% |            **12.6%** |      12.2% |      6.1% |          0.9% |       5.4% |
| [faz.net](https://faz.net/aktuell/)                             |        1374 |                   3.3% |                 5.5% |  **10.5%** |      4.4% |          3.6% |       4.5% |
| [weather.com](https://weather.com)                              |        2456 |                   0.3% |                11.2% |  **16.9%** |      9.9% |          0.6% |       9.9% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7308 |                   8.5% |            **11.1%** |       9.3% |      9.4% |          9.2% |      10.9% |
| **Avg. minify rate**                                            |             |               **9.0%** |            **15.6%** |  **20.9%** | **12.5%** |     **10.2%** |  **12.8%** |

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

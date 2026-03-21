# HTML Minifiers Benchmarks

Updated: 2026-03-21

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/5.2.1
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.2.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.18

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         110 |                  38.1% |                41.8% |  **52.9%** |     40.3% |         40.2% |      40.7% |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   7.6% |                11.5% |  **34.5%** |     11.1% |          8.7% |      11.5% |
| [css-tricks.com](https://css-tricks.com)                        |         171 |                   8.2% |                22.8% |  **28.8%** |     13.3% |          8.6% |      13.8% |
| [leanpub.com](https://leanpub.com)                              |         370 |                   1.2% |             **8.4%** |       6.7% |      5.1% |          1.9% |       5.5% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         226 |                   4.5% |             **7.3%** |   **7.3%** |      6.0% |          5.9% |       6.2% |
| [edri.org](https://edri.org)                                    |          80 |                   7.7% |                13.7% |  **30.7%** |     12.3% |          8.2% |      12.8% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                 0.7% |      -2.6% |      0.3% |          0.2% |   **1.5%** |
| [home.cern](https://home.cern)                                  |         151 |                  37.1% |            **46.4%** |      40.2% |     38.9% |         39.5% |      40.3% |
| [mastodon.social](https://mastodon.social/explore)              |          34 |                   3.0% |            **14.9%** |      14.8% |      5.8% |          5.2% |       7.1% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         141 |                   3.7% |             **7.2%** |       6.9% |      4.3% |          4.5% |       5.1% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         155 |                  13.2% |                17.8% |  **63.2%** |     16.9% |         13.9% |      17.5% |
| [apple.com](https://apple.com/)                                 |         229 |                   8.8% |            **13.4%** |      11.5% |     10.3% |          9.5% |       9.9% |
| [un.org](https://un.org/en/)                                    |         153 |                  14.2% |                22.4% |  **41.0%** |     19.9% |         15.1% |      17.4% |
| [w3.org](https://w3.org/)                                       |          51 |                  18.9% |            **24.4%** |      23.2% |     24.3% |         20.3% |      24.0% |
| [eff.org](https://eff.org)                                      |          54 |                   8.8% |            **14.6%** |      10.9% |     13.3% |         11.3% |      13.3% |
| [sitepoint.com](https://sitepoint.com)                          |         233 |                   0.7% |            **10.1%** |       9.7% |      6.2% |          1.0% |       5.6% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         742 |                   0.8% |             **6.9%** |       5.9% |      4.7% |          1.3% |       6.1% |
| [weather.com](https://weather.com)                              |        1055 |                   0.2% |                 8.2% |       7.9% |      8.0% |          0.5% |   **8.3%** |
| [github.com](https://github.com/)                               |         556 |                   3.1% |            **17.5%** |      16.7% |      7.4% |          5.9% |       6.5% |
| [faz.net](https://faz.net/aktuell/)                             |        1344 |                   3.2% |                 5.6% |  **10.9%** |      4.5% |          3.6% |       4.5% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7318 |                   8.5% |            **11.1%** |       9.3% |      9.4% |          9.2% |      10.9% |
| **Avg. minify rate**                                            |             |               **8.9%** |            **15.6%** |  **20.5%** | **12.5%** |     **10.2%** |  **12.8%** |

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

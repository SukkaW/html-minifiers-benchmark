# HTML Minifiers Benchmarks

Updated: 2026-04-23

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/6.1.2
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.2.1
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.30

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   7.6% |                11.5% |  **34.5%** |     11.1% |          8.7% |      11.5% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         110 |                  38.1% |                41.8% |  **52.8%** |     40.2% |         40.1% |      40.7% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         224 |                   4.6% |             **7.4%** |   **7.4%** |      6.1% |          6.0% |       6.3% |
| [css-tricks.com](https://css-tricks.com)                        |         165 |                   8.8% |                17.0% |  **28.9%** |     14.8% |          9.2% |      15.8% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                 0.7% |      -2.6% |      0.3% |          0.2% |   **1.5%** |
| [leanpub.com](https://leanpub.com)                              |         335 |                   1.2% |             **9.3%** |       6.9% |      5.0% |          1.9% |       5.4% |
| [home.cern](https://home.cern)                                  |         151 |                  37.0% |            **46.3%** |      40.1% |     38.8% |         39.3% |      40.2% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         140 |                   3.8% |             **7.3%** |       6.9% |      4.4% |          4.6% |       5.2% |
| [edri.org](https://edri.org)                                    |          83 |                   7.4% |                13.4% |  **32.4%** |     12.1% |          7.9% |      12.6% |
| [mastodon.social](https://mastodon.social/explore)              |          34 |                   3.1% |            **14.9%** |      14.7% |      5.8% |          5.2% |       7.2% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         155 |                  13.2% |                17.8% |  **63.3%** |     16.9% |         13.9% |      17.5% |
| [apple.com](https://apple.com/)                                 |         243 |                   6.0% |            **10.2%** |       8.6% |      7.5% |          6.5% |       7.1% |
| [w3.org](https://w3.org/)                                       |          51 |                  18.9% |            **24.4%** |      23.2% |     24.3% |         20.3% |      24.0% |
| [eff.org](https://eff.org)                                      |          53 |                   8.9% |            **15.6%** |      11.0% |     13.4% |         11.4% |      13.4% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         655 |                   0.8% |             **7.5%** |       5.8% |      4.5% |          1.2% |       6.6% |
| [github.com](https://github.com/)                               |         552 |                   3.0% |            **17.4%** |      16.6% |      7.3% |          5.8% |       6.4% |
| [sitepoint.com](https://sitepoint.com)                          |         228 |                   0.7% |             **9.9%** |       9.5% |      6.2% |          1.0% |       5.6% |
| [un.org](https://un.org/en/)                                    |         152 |                  14.2% |                22.5% |  **41.2%** |     19.9% |         15.1% |      17.4% |
| [faz.net](https://faz.net/aktuell/)                             |        1394 |                   3.3% |                 6.6% |  **11.8%** |      4.4% |          3.6% |       4.5% |
| [weather.com](https://weather.com)                              |        2276 |                   0.1% |             **9.1%** |       8.8% |      8.9% |          0.2% |       9.0% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7205 |                   5.8% |             **8.2%** |       6.7% |      6.7% |          6.3% |       8.0% |
| **Avg. minify rate**                                            |             |               **8.7%** |            **15.2%** |  **20.4%** | **12.3%** |      **9.9%** |  **12.7%** |

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

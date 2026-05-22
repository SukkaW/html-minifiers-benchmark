# HTML Minifiers Benchmarks

Updated: 2026-05-22

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/6.2.6
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.3.2
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.33

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   6.9% |                11.0% |  **34.0%** |     10.3% |          8.1% |      11.0% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         115 |                  38.3% |                42.2% |  **52.0%** |     40.6% |         40.5% |      41.0% |
| [leanpub.com](https://leanpub.com)                              |         291 |                   1.2% |            **10.2%** |       8.1% |      5.9% |          1.8% |       6.3% |
| [css-tricks.com](https://css-tricks.com)                        |         167 |                   8.6% |                16.6% |  **28.6%** |     14.6% |          8.8% |      15.3% |
| [mastodon.social](https://mastodon.social/explore)              |          29 |                   2.6% |            **15.5%** |      15.4% |      5.9% |          4.2% |       6.5% |
| [w3.org](https://w3.org/)                                       |          50 |                  18.9% |            **24.4%** |      23.3% |     24.3% |         20.3% |      24.0% |
| [edri.org](https://edri.org)                                    |          84 |                   7.4% |                13.4% |  **32.3%** |     12.1% |          7.8% |      12.5% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         229 |                   4.5% |             **7.4%** |       7.3% |      6.1% |          6.0% |       6.3% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         132 |                   4.0% |             **7.7%** |       7.4% |      4.5% |          4.8% |       5.4% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         165 |                  18.2% |                23.0% |  **65.6%** |     22.1% |         18.8% |      22.7% |
| [apple.com](https://apple.com/)                                 |         250 |                   5.9% |             **9.7%** |       8.5% |      7.5% |          6.4% |       7.0% |
| [un.org](https://un.org/en/)                                    |         151 |                  14.3% |                22.7% |  **41.5%** |     20.1% |         15.3% |      17.5% |
| [home.cern](https://home.cern)                                  |         285 |                    N/A |                12.6% |      25.6% |      8.1% |          4.6% |      10.0% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                 0.7% |      -2.6% |      0.3% |          0.2% |   **1.5%** |
| [eff.org](https://eff.org)                                      |          54 |                   8.9% |            **15.9%** |      11.0% |     13.5% |         11.5% |      13.4% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         668 |                   0.8% |             **7.6%** |       5.9% |      4.6% |          1.2% |       6.7% |
| [sitepoint.com](https://sitepoint.com)                          |         247 |                   0.7% |            **11.3%** |      10.9% |      6.2% |          0.9% |       5.4% |
| [github.com](https://github.com/)                               |         557 |                   3.1% |            **17.4%** |      16.5% |      7.3% |          5.9% |       6.4% |
| [faz.net](https://faz.net/aktuell/)                             |        1540 |                   3.2% |                10.6% |  **15.4%** |      4.4% |          3.4% |       8.5% |
| [weather.com](https://weather.com)                              |        2574 |                   0.1% |             **9.4%** |       9.2% |      9.2% |          0.2% |       9.3% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7232 |                   5.7% |             **8.2%** |       6.6% |      6.7% |          6.2% |       8.0% |
| **Avg. minify rate**                                            |             |               **7.5%** |            **14.2%** |  **19.8%** | **11.3%** |      **8.6%** |  **11.7%** |

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

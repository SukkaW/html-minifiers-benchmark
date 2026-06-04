# HTML Minifiers Benchmarks

Updated: 2026-06-04

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/6.2.8
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.3.2
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.40

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         117 |                  38.2% |                42.0% |  **52.0%** |     40.4% |         40.3% |      40.8% |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   6.9% |                11.0% |  **34.0%** |     10.3% |          8.1% |      11.0% |
| [github.com](https://github.com/)                               |         558 |                   3.1% |            **17.4%** |      16.5% |      7.3% |          5.9% |       6.4% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         133 |                   4.0% |             **7.6%** |       7.3% |      4.5% |          4.7% |       5.4% |
| [mastodon.social](https://mastodon.social/explore)              |          39 |                   3.4% |            **14.4%** |      14.2% |      5.8% |          5.9% |       7.6% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         226 |                   4.6% |             **7.4%** |   **7.4%** |      6.2% |          6.0% |       6.3% |
| [apple.com](https://apple.com/)                                 |         253 |                   5.8% |             **9.9%** |       8.5% |      7.5% |          6.5% |       7.0% |
| [w3.org](https://w3.org/)                                       |          51 |                  18.9% |            **24.4%** |      23.2% |     24.3% |         20.3% |      24.0% |
| [edri.org](https://edri.org)                                    |          84 |                   7.4% |                13.4% |  **32.3%** |     12.1% |          7.8% |      12.5% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.6% |      -2.6% |      0.3% |          0.2% |   **1.5%** |
| [css-tricks.com](https://css-tricks.com)                        |         168 |                    N/A |                16.1% |      28.7% |     14.1% |          8.5% |      14.9% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         167 |                  18.4% |                23.2% |  **65.3%** |     22.3% |         19.0% |      22.9% |
| [eff.org](https://eff.org)                                      |          54 |                   8.8% |            **15.8%** |      10.9% |     13.4% |         11.4% |      13.3% |
| [home.cern](https://home.cern)                                  |         290 |                    N/A |                12.6% |      26.8% |      8.0% |          4.5% |       9.9% |
| [sitepoint.com](https://sitepoint.com)                          |         248 |                   0.7% |            **11.4%** |      10.9% |      6.2% |          1.0% |       5.4% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         745 |                   0.8% |             **7.4%** |       5.9% |      4.7% |          1.2% |       6.6% |
| [faz.net](https://faz.net/aktuell/)                             |        1506 |                   3.2% |                10.7% |  **15.6%** |      4.4% |          3.5% |       8.6% |
| [weather.com](https://weather.com)                              |        2782 |                   0.1% |             **9.5%** |       9.3% |      9.4% |          0.2% |   **9.5%** |
| [tc39.es](https://tc39.es/ecma262/)                             |        7262 |                   5.7% |             **8.2%** |       6.6% |      6.6% |          6.2% |       8.0% |
| **Avg. minify rate**                                            |             |               **7.4%** |            **13.8%** |  **18.7%** | **10.9%** |      **8.7%** |  **11.6%** |

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

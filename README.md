# HTML Minifiers Benchmarks

Updated: 2026-06-24

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/7.0.0
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.3.2
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.43

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         114 |                  38.2% |                42.1% |  **52.4%** |     40.4% |         40.4% |      40.9% |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   6.9% |                11.0% |  **34.1%** |     10.3% |          8.1% |      11.0% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         129 |                   4.0% |             **7.0%** |       6.6% |      4.5% |          4.9% |       5.5% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         230 |                   4.5% |             **7.5%** |       7.2% |      6.1% |          6.0% |       6.3% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.6% |      -2.6% |      0.3% |          0.2% |   **1.5%** |
| [un.org](https://un.org/en/)                                    |         154 |                  14.1% |                22.0% |  **40.7%** |     19.8% |         15.0% |      17.3% |
| [leanpub.com](https://leanpub.com)                              |         356 |                   1.1% |             **8.1%** |       6.1% |      4.3% |          1.8% |       4.8% |
| [css-tricks.com](https://css-tricks.com)                        |         168 |                    N/A |                16.1% |      28.7% |     14.1% |          8.5% |      14.9% |
| [edri.org](https://edri.org)                                    |          84 |                   7.4% |                12.9% |  **32.2%** |     12.1% |          7.8% |      12.5% |
| [apple.com](https://apple.com/)                                 |         247 |                   5.9% |             **9.8%** |       8.5% |      7.5% |          6.6% |       7.0% |
| [weather.com](https://weather.com)                              |         311 |                   0.6% |             **7.6%** |       6.2% |      6.2% |          1.1% |       6.9% |
| [w3.org](https://w3.org/)                                       |          51 |                  18.7% |            **24.2%** |      23.1% |     24.1% |         20.1% |      23.8% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         172 |                  19.7% |                24.4% |  **65.1%** |     23.4% |         20.3% |      24.0% |
| [mastodon.social](https://mastodon.social/explore)              |          43 |                   3.5% |            **14.0%** |      13.9% |      5.8% |          6.3% |       7.9% |
| [home.cern](https://home.cern)                                  |         291 |                    N/A |                12.5% |      26.8% |      8.0% |          4.5% |       9.9% |
| [eff.org](https://eff.org)                                      |          54 |                   8.8% |            **15.3%** |      10.9% |     13.2% |         11.2% |      13.2% |
| [sitepoint.com](https://sitepoint.com)                          |         251 |                   0.7% |            **11.3%** |      10.8% |      6.1% |          0.9% |       5.3% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         741 |                   0.8% |             **7.9%** |       5.8% |      4.6% |          1.2% |       6.6% |
| [github.com](https://github.com/)                               |         551 |                   2.2% |            **16.3%** |      15.6% |      6.2% |          4.8% |       5.4% |
| [faz.net](https://faz.net/aktuell/)                             |        1567 |                   3.2% |                10.8% |  **15.2%** |      4.4% |          3.5% |       8.6% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7264 |                   5.7% |             **8.2%** |       6.6% |      6.6% |          6.2% |       7.9% |
| **Avg. minify rate**                                            |             |               **7.5%** |            **13.7%** |  **18.9%** | **10.8%** |      **8.8%** |  **11.4%** |

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

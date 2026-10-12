# HTML Minifiers Benchmarks

Updated: 2026-10-12

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/8.10.7
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.6.1
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.16.18

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [alistapart.com](https://alistapart.com/)                       |          64 |                   6.8% |                11.0% |  **35.6%** |     10.3% |          8.0% |      11.0% |
| [css-tricks.com](https://css-tricks.com)                        |         150 |                    N/A |                14.1% |      25.3% |     12.6% |          9.1% |      13.3% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         119 |                  39.1% |                41.9% |  **47.0%** |     41.2% |         41.1% |      41.6% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         254 |                   4.6% |                 7.6% |   **9.6%** |      5.9% |          6.0% |       6.3% |
| [github.com](https://github.com/)                               |         564 |                   1.5% |                15.2% |  **15.4%** |      5.2% |          4.1% |       4.6% |
| [edri.org](https://edri.org)                                    |          84 |                   7.4% |                13.0% |  **32.1%** |     12.1% |          7.9% |      12.6% |
| [leanpub.com](https://leanpub.com)                              |         524 |                   1.2% |                 8.8% |   **9.4%** |      5.2% |          1.7% |       5.7% |
| [home.cern](https://home.cern)                                  |         292 |                    N/A |                11.7% |      24.8% |      8.0% |          4.7% |      10.2% |
| [mastodon.social](https://mastodon.social/explore)              |          50 |                   3.8% |            **13.3%** |  **13.3%** |      5.7% |          7.0% |       8.3% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.3% |       0.2% |      0.3% |          0.2% |   **1.5%** |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         184 |                  26.4% |                30.6% |  **68.3%** |     29.8% |         26.9% |      30.5% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         134 |                   4.0% |                 7.0% |   **7.1%** |      4.6% |          4.9% |       5.5% |
| [apple.com](https://apple.com/)                                 |         248 |                   6.0% |                 8.6% |   **9.2%** |      7.6% |          6.7% |       6.9% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         735 |                   0.8% |             **7.1%** |       6.7% |      4.8% |          1.2% |       6.3% |
| [eff.org](https://eff.org)                                      |          54 |                   8.6% |            **15.6%** |      14.9% |     13.1% |         11.1% |      13.1% |
| [faz.net](https://faz.net/aktuell/)                             |        1327 |                   3.9% |                10.7% |  **16.9%** |      4.3% |          4.3% |       9.4% |
| **Avg. minify rate**                                            |             |               **7.9%** |            **13.6%** |  **20.4%** | **10.7%** |      **9.4%** |  **11.7%** |

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

# HTML Minifiers Benchmarks

Updated: 2026-10-29

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/9.1.1
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.6.1
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.16.20

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [alistapart.com](https://alistapart.com/)                       |          64 |                   6.8% |                11.0% |  **35.7%** |     10.3% |          8.0% |      10.9% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         118 |                  39.1% |                42.1% |  **47.1%** |     41.2% |         41.1% |      41.6% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         253 |                   4.6% |                 7.7% |   **9.7%** |      5.9% |          6.0% |       6.3% |
| [leanpub.com](https://leanpub.com)                              |         536 |                   1.2% |                 8.8% |   **9.5%** |      5.0% |          1.8% |       5.6% |
| [css-tricks.com](https://css-tricks.com)                        |         143 |                    N/A |                15.6% |      27.6% |     13.5% |          9.8% |      13.9% |
| [edri.org](https://edri.org)                                    |          85 |                   6.7% |                13.8% |  **31.5%** |     11.3% |          7.2% |      11.9% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.3% |       0.2% |      0.3% |          0.2% |   **1.5%** |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         135 |                   4.0% |             **7.2%** |       7.1% |      4.6% |          4.9% |       5.6% |
| [w3.org](https://w3.org/)                                       |          49 |                  18.4% |            **23.9%** |      23.6% |     23.5% |         19.6% |      23.5% |
| [mastodon.social](https://mastodon.social/explore)              |          52 |                   3.9% |            **13.5%** |      13.2% |      5.7% |          7.2% |       8.4% |
| [apple.com](https://apple.com/)                                 |         252 |                   6.0% |                 9.0% |   **9.1%** |      7.6% |          6.8% |       7.0% |
| [home.cern](https://home.cern)                                  |         292 |                    N/A |                11.8% |      24.9% |      8.1% |          4.7% |      10.2% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         186 |                  26.7% |                30.8% |  **68.0%** |     29.9% |         27.2% |      30.5% |
| [un.org](https://un.org/en/)                                    |         162 |                  13.4% |                22.4% |  **41.9%** |     19.0% |         14.3% |      16.6% |
| [github.com](https://github.com/)                               |         518 |                   1.7% |            **17.6%** |  **17.6%** |      4.8% |          4.3% |       4.6% |
| [eff.org](https://eff.org)                                      |          53 |                   9.1% |            **16.5%** |      15.5% |     13.8% |         11.7% |      13.7% |
| [weather.com](https://weather.com)                              |         407 |                   0.5% |             **9.7%** |       9.1% |      7.2% |          0.8% |       7.2% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         729 |                   0.7% |             **7.3%** |       6.9% |      4.6% |          1.2% |       6.5% |
| [faz.net](https://faz.net/aktuell/)                             |        1405 |                   3.9% |                 6.4% |  **16.5%** |      4.3% |          4.3% |       9.2% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7462 |                   5.7% |             **8.1%** |       7.4% |      6.6% |          6.2% |       7.9% |
| **Avg. minify rate**                                            |             |               **8.3%** |            **14.2%** |  **20.5%** | **11.4%** |      **9.6%** |  **12.1%** |

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

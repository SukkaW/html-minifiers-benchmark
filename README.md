# HTML Minifiers Benchmarks

Updated: 2026-11-06

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/9.1.2
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.6.1
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.16.22

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [alistapart.com](https://alistapart.com/)                       |          64 |                   6.8% |                11.0% |  **35.7%** |     10.3% |          8.0% |      10.9% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         117 |                  39.1% |                42.1% |  **47.2%** |     41.3% |         41.2% |      41.7% |
| [css-tricks.com](https://css-tricks.com)                        |         152 |                    N/A |                15.1% |      26.4% |     12.9% |          9.2% |      13.4% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         135 |                   4.0% |             **7.2%** |       7.0% |      4.6% |          4.9% |       5.5% |
| [mastodon.social](https://mastodon.social/explore)              |          50 |                   3.8% |            **13.6%** |      13.3% |      5.7% |          7.0% |       8.4% |
| [w3.org](https://w3.org/)                                       |          49 |                  18.5% |            **24.1%** |      23.8% |     23.7% |         19.7% |      23.7% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         259 |                   4.6% |                 7.7% |   **9.6%** |      5.8% |          5.9% |       6.2% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         152 |                  -3.9% |                 0.3% |       0.3% |      0.3% |          0.2% |   **1.5%** |
| [un.org](https://un.org/en/)                                    |         162 |                  13.4% |                22.5% |  **42.0%** |     19.1% |         14.3% |      16.7% |
| [edri.org](https://edri.org)                                    |          85 |                   6.7% |                13.8% |  **31.5%** |     11.3% |          7.2% |      11.9% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         187 |                  26.5% |                30.8% |  **67.8%** |     29.9% |         27.0% |      30.5% |
| [apple.com](https://apple.com/)                                 |         248 |                   6.0% |                 9.0% |   **9.1%** |      7.6% |          6.7% |       6.9% |
| [eff.org](https://eff.org)                                      |          53 |                   9.0% |            **16.3%** |      15.3% |     13.5% |         11.5% |      13.5% |
| [home.cern](https://home.cern)                                  |         292 |                    N/A |                11.8% |      24.9% |      8.1% |          4.7% |      10.2% |
| [weather.com](https://weather.com)                              |         423 |                   0.5% |             **9.6%** |       9.0% |      7.2% |          0.8% |       7.2% |
| [leanpub.com](https://leanpub.com)                              |         512 |                   1.2% |                 8.6% |   **9.4%** |      4.9% |          1.8% |       5.4% |
| [github.com](https://github.com/)                               |         516 |                   1.7% |            **17.6%** |      17.5% |      4.8% |          4.2% |       4.5% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         692 |                   0.8% |             **7.2%** |       6.8% |      4.7% |          1.2% |       6.3% |
| [faz.net](https://faz.net/aktuell/)                             |        1407 |                   3.9% |                 6.3% |  **16.8%** |      4.3% |          4.2% |       9.2% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7636 |                   5.6% |             **7.9%** |       7.2% |      6.5% |          6.0% |       7.8% |
| **Avg. minify rate**                                            |             |               **8.2%** |            **14.2%** |  **20.5%** | **11.4%** |      **9.6%** |  **12.1%** |

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

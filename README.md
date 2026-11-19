# HTML Minifiers Benchmarks

Updated: 2026-11-19

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/9.1.2
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.7.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.16.22

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [alistapart.com](https://alistapart.com/)                       |          65 |                   6.7% |                10.8% |  **35.0%** |     10.1% |          7.9% |      10.8% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         114 |                  39.1% |                42.2% |  **47.3%** |     41.3% |         41.2% |      41.7% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         135 |                   4.0% |             **7.2%** |       7.1% |      4.6% |          4.9% |       5.5% |
| [mastodon.social](https://mastodon.social/explore)              |          45 |                   3.6% |            **14.0%** |      13.6% |      5.7% |          6.6% |       8.1% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         252 |                   4.6% |                 7.8% |  **10.0%** |      5.9% |          6.0% |       6.3% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         152 |                  -3.9% |                 0.3% |       0.3% |      0.3% |          0.2% |   **1.5%** |
| [w3.org](https://w3.org/)                                       |          48 |                  18.7% |            **24.3%** |      24.0% |     23.9% |         19.9% |      23.9% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         185 |                  26.5% |                30.8% |  **68.1%** |     29.9% |         27.0% |      30.5% |
| [edri.org](https://edri.org)                                    |          86 |                   6.7% |                13.7% |  **31.4%** |     11.3% |          7.1% |      11.9% |
| [css-tricks.com](https://css-tricks.com)                        |         184 |                   9.5% |                12.9% |  **22.1%** |     11.3% |          9.5% |      13.1% |
| [un.org](https://un.org/en/)                                    |         161 |                  13.5% |                22.6% |  **42.2%** |     19.1% |         14.4% |      16.8% |
| [apple.com](https://apple.com/)                                 |         251 |                    N/A |                10.0% |       9.1% |      7.6% |          6.7% |       7.0% |
| [leanpub.com](https://leanpub.com)                              |         514 |                   1.2% |                 8.6% |   **9.3%** |      5.0% |          1.8% |       5.5% |
| [github.com](https://github.com/)                               |         524 |                   1.7% |            **17.4%** |      17.3% |      4.7% |          4.1% |       4.4% |
| [home.cern](https://home.cern)                                  |         294 |                   4.2% |                11.8% |  **25.2%** |      8.0% |          4.6% |      10.1% |
| [weather.com](https://weather.com)                              |         460 |                   0.5% |             **9.3%** |       8.8% |      7.4% |          0.7% |       7.3% |
| [eff.org](https://eff.org)                                      |          55 |                   9.0% |            **16.2%** |      15.2% |     13.4% |         11.4% |      13.3% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         641 |                   0.8% |             **7.4%** |       6.9% |      4.6% |          1.2% |       6.5% |
| [faz.net](https://faz.net/aktuell/)                             |        1330 |                   3.9% |                 6.3% |  **17.2%** |      4.3% |          4.2% |       9.1% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7637 |                   5.6% |             **7.9%** |       7.2% |      6.5% |          6.0% |       7.8% |
| **Avg. minify rate**                                            |             |               **8.2%** |            **14.3%** |  **21.5%** | **11.4%** |      **9.4%** |  **12.3%** |

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

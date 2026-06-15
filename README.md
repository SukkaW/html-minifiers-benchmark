# HTML Minifiers Benchmarks

Updated: 2026-06-15

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
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.41

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   6.9% |                11.0% |  **34.0%** |     10.3% |          8.1% |      11.0% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         114 |                  38.2% |                42.1% |  **52.4%** |     40.4% |         40.4% |      40.9% |
| [css-tricks.com](https://css-tricks.com)                        |          11 |                   8.2% |            **40.7%** |      37.2% |     18.8% |          8.4% |      24.4% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         229 |                   4.5% |             **7.4%** |       7.3% |      6.1% |          6.0% |       6.3% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.6% |      -2.6% |      0.3% |          0.2% |   **1.5%** |
| [mastodon.social](https://mastodon.social/explore)              |          42 |                   3.5% |            **14.0%** |      13.9% |      5.8% |          6.3% |       7.9% |
| [edri.org](https://edri.org)                                    |          84 |                   7.4% |                12.9% |  **32.3%** |     12.1% |          7.8% |      12.5% |
| [leanpub.com](https://leanpub.com)                              |         335 |                   1.1% |             **8.3%** |       6.5% |      4.5% |          1.7% |       4.9% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         174 |                  19.6% |                24.2% |  **64.7%** |     23.3% |         20.3% |      23.9% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         129 |                   4.0% |             **7.0%** |       6.6% |      4.5% |          4.9% |       5.5% |
| [weather.com](https://weather.com)                              |         267 |                   0.6% |             **7.6%** |       6.3% |      6.4% |          0.9% |       6.9% |
| [eff.org](https://eff.org)                                      |          54 |                   8.8% |            **15.6%** |      11.0% |     13.4% |         11.4% |      13.3% |
| [w3.org](https://w3.org/)                                       |          50 |                  18.9% |            **24.4%** |      23.3% |     24.3% |         20.3% |      24.0% |
| [apple.com](https://apple.com/)                                 |         305 |                   6.8% |             **9.7%** |       9.1% |      8.3% |          7.5% |       7.7% |
| [home.cern](https://home.cern)                                  |         290 |                    N/A |                12.5% |      26.8% |      8.0% |          4.5% |       9.9% |
| [un.org](https://un.org/en/)                                    |         154 |                  14.0% |                22.0% |  **40.8%** |     19.7% |         14.9% |      17.2% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         784 |                   0.8% |             **7.9%** |       5.9% |      4.7% |          1.2% |       6.7% |
| [github.com](https://github.com/)                               |         557 |                   2.7% |            **17.0%** |      16.2% |      6.9% |          5.5% |       6.1% |
| [faz.net](https://faz.net/aktuell/)                             |        1555 |                   3.2% |                10.7% |  **15.2%** |      4.3% |          3.4% |       8.6% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7264 |                   5.7% |             **8.2%** |       6.6% |      6.6% |          6.2% |       7.9% |
| **Avg. minify rate**                                            |             |               **8.0%** |            **15.3%** |  **20.4%** | **11.6%** |      **9.2%** |  **12.5%** |

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

# HTML Minifiers Benchmarks

Updated: 2026-06-12

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/6.2.11
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.3.2
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.41

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   6.9% |                11.0% |  **34.0%** |     10.3% |          8.1% |      11.0% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         116 |                  38.2% |                42.0% |  **52.1%** |     40.4% |         40.3% |      40.8% |
| [css-tricks.com](https://css-tricks.com)                        |          11 |                   8.2% |            **40.6%** |      37.2% |     18.8% |          8.4% |      24.3% |
| [leanpub.com](https://leanpub.com)                              |         335 |                   1.1% |             **8.4%** |       6.6% |      4.7% |          1.7% |       5.1% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         134 |                   4.1% |             **6.9%** |       6.5% |      4.5% |          4.9% |       5.5% |
| [mastodon.social](https://mastodon.social/explore)              |          43 |                   3.5% |            **14.0%** |      13.9% |      5.8% |          6.3% |       7.9% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         229 |                   4.5% |             **7.4%** |       7.2% |      6.1% |          5.9% |       6.2% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.6% |      -2.6% |      0.3% |          0.2% |   **1.5%** |
| [edri.org](https://edri.org)                                    |          84 |                   7.4% |                13.4% |  **32.3%** |     12.1% |          7.8% |      12.5% |
| [w3.org](https://w3.org/)                                       |          50 |                  18.9% |            **24.4%** |      23.3% |     24.3% |         20.3% |      24.0% |
| [apple.com](https://apple.com/)                                 |         252 |                   5.8% |             **9.5%** |       8.4% |      7.4% |          6.5% |       6.9% |
| [un.org](https://un.org/en/)                                    |         154 |                  14.1% |                22.4% |  **40.9%** |     19.8% |         15.0% |      17.3% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         174 |                  19.6% |                24.3% |  **64.7%** |     23.3% |         20.3% |      23.9% |
| [home.cern](https://home.cern)                                  |         290 |                    N/A |                12.5% |      26.8% |      8.0% |          4.5% |       9.9% |
| [eff.org](https://eff.org)                                      |          55 |                   8.7% |            **15.4%** |      10.8% |     13.1% |         11.2% |      13.1% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         839 |                   0.9% |             **7.8%** |       6.0% |      4.9% |          1.2% |       6.7% |
| [github.com](https://github.com/)                               |         557 |                   2.7% |            **17.0%** |      16.2% |      6.9% |          5.5% |       6.1% |
| [faz.net](https://faz.net/aktuell/)                             |        1539 |                   3.2% |                10.8% |  **15.3%** |      4.3% |          3.5% |       8.6% |
| [weather.com](https://weather.com)                              |        2321 |                   0.1% |             **9.6%** |       9.4% |      9.4% |          0.1% |       9.5% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7263 |                   5.7% |             **8.2%** |       6.6% |      6.6% |          6.2% |       8.0% |
| **Avg. minify rate**                                            |             |               **7.9%** |            **15.5%** |  **20.5%** | **11.7%** |      **9.1%** |  **12.6%** |

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

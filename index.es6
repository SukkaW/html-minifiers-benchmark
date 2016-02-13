import url from 'url';
import fs from 'fs';
import request from 'request-promise';
import handlebars from 'handlebars';
import Promise from 'bluebird';
import urls from './urls';

const minifiers = {
    htmlminifier: require('./minifiers/htmlminifier').default,
    htmlnano: require('./minifiers/htmlnano').default
};

let stats = {};
let promises = [];


for (let minifierName of Object.keys(minifiers)) {
    fs.mkdirSync('./build/' + minifierName);
}


urls.forEach(pageUrl => {
    const pageUrlHostname = url.parse(pageUrl).hostname.replace('www.', '');
    stats[pageUrl] = {
        url: pageUrl,
        name: pageUrlHostname
    };

    let promise = fetchPage(pageUrl)
        .then(html => {
            stats[pageUrl].source = {
                size: KB(html.length)
            };

            for (let minifierName of Object.keys(minifiers)) {
                let minifierDir = './build/' + minifierName;
                let minifier = minifiers[minifierName];
                let promise = minifier(html)
                    .then(minifiedHtml => {
                        stats[pageUrl][minifierName] = {
                            size: KB(minifiedHtml.length)
                        };

                        const filepath = minifierDir + '/' + pageUrlHostname + '.html';
                        fs.writeFile(filepath, minifiedHtml, error => {
                            if (error) {
                                console.error(error);
                            }
                        });
                    })
                    .catch(error => {
                        console.error(error);
                    });

                promises.push(promise);
            }

            return html;
        })
        .then(html => {
            const filepath = './build/' + pageUrlHostname + '.html';
            fs.writeFile(filepath, html, error => {
                if (error) {
                    console.error(error);
                }
            });
        });

    promises.push(promise);
});


Promise.all(promises).then(() => {
    const template = fs.readFileSync('./README.template.md', 'utf8');
    const content = handlebars.compile(template)({ stats });
    fs.writeFileSync('./README.md', content, 'utf8');
});


function fetchPage(pageUrl) {
    return request(pageUrl)
        .then(content => {
            console.log(pageUrl + ' fetched');
            return content;
        })
        .catch(fatalError);
}


function fatalError(error) {
    console.error(error);
    process.exit(1);
}


function KB(bytes) {
    return Math.round(bytes / 1024);
}

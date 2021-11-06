'use strict';

import faker from 'faker';
import express from 'express';
import http from 'http';
import url from 'url';

const server = http.createServer(async (req, res) => {
    const parsed = url.parse(req.url, true);

    if (parsed.pathname === '/user') {
        let body = '';
        req.on('data', data => body += data);
        req.on('end', () => {
            const data = JSON.parse(body);
        });
    } else if (parsed.pathname === '/user/new') {
        let body = '';
        req.on('data', data => body += data);
        req.on('end', () => {
            const data = JSON.parse(body);
        });
    } else if (parsed.pathname === '/user/id/saved-meals') {
        res.end();
    } else if (parsed.pathname === '/user/id/mealbuilder') {
        res.end();
    } else {
        res.writeHead(404);
        res.end();
    }
}).listen(8080);


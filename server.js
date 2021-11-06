'use strict';

import faker from 'faker';
import * as express from 'express';
import * as http from 'http';
import * as url from 'url';

let random = faker.name.findName();

console.log(random);
/**
 * Created by enahum on 6/13/16.
 */

import nconf from 'nconf';
import path from 'path';
import fs from 'fs';

const config_file = path.join(__dirname, '../config/', 'config.json');

// Environment variables take priority, then argv, then config file
nconf.argv().env();

if (fs.existsSync(config_file)) {
    nconf.file({file: config_file});
    console.log('configuration loaded from file');
} else {
    console.log('config file not found, using environment variables');
}

export default nconf;

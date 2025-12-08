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

// Debug: log what config values we're using
console.log('Config values:');
console.log('  mattermost_url:', nconf.get('mattermost_url'));
console.log('  client_url:', nconf.get('client_url'));
console.log('  client_id:', nconf.get('client_id') ? '[SET]' : '[NOT SET]');

export default nconf;

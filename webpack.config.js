
if(process.env.NODE_ENV.includes('prod')) {
    module.exports = require('./scripts/webpack/production');
} else {
    module.exports = require('./scripts/webpack/development');
}
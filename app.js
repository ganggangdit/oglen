/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

require('requirejs')([

    'config', // Project configuration.
    'express', // Web application framework for node.
    'body-parser', // Node.js body parsing middleware.
    'morgan', // Logging middleware for node.js http apps.
    'compression', // Node.js compression middleware.
    'errorhandler', // Create new middleware to handle errors and respond with content negotiation.
    'mongoose', // Elegant mongodb object modeling for node.js.
    'log4js', // Port of Log4js to work with node.
    'send', // connect's static() file server extracted for general node.js use
    'server/routers/all'
], function (config, express, bodyParser, morgan, compression, errorhandler, mongoose, log4js, send, apiRouters) {
    'use strict';

    var logger = log4js.getLogger('app'),
        app = express(),
        env = config.env;

    env('development') && app.use(errorhandler());
    env('production') && app.use(compression());

    app.use(express.static(config.dist));
    app.use(morgan(config.morgan));
    logger.setLevel(config.logger);

    app.use('/api', bodyParser.json());
    app.use('/api', apiRouters);

    app.use(function (req, res, next) {
        var dir = req.url.match(/\/.+?\//i);
        if (dir) {
            send(req, config.dist + dir[0] + 'index.html')
                .on('error', function (err) {
                    res.statusCode = err.status || 500;
                    if (err.status === 404) {
                        send(req, config.dist + '/404.html').pipe(res);
                    } else {
                        res.end(err.message);
                    }
                })
                .pipe(res);
        }
    });

    var port = config.port;
    app.listen(port);
    logger.info('Http server listening on port ' + port);

    var mongooseLink = config.mongooseLink;
    mongoose.connect(mongooseLink);
    logger.info('Mongoose connect to ' + mongooseLink);
});




const koa =require('koa');
const router =require( 'koa-router');
const path =require( 'path');
const {args} =require(  '../configs/args.js');
const log4js =require( 'log4js');
// const ioredis =require( "ioredis");
// const mysql =require( "mysql2");
const axios =require( "axios");
const randomstring =require( "randomstring");
const moment = require('moment'); // require
const { Module } = require('module');


//////////////////////////////////////////
let ROOTDIR=path.resolve();

//////////global koa//////////////
let koaApp = new koa();
let koaRouter = new router();



////////////global ioredis////////////
// const redis = new ioredis({
//     port:args.redis_port,
//     host:args.redis_host,
//     family:args.redis_family,
//     db:args.redis_db,
//     //password:args.redis_password, 
// });

// Create the connection pool. The pool-specific settings are the defaults
// let sqlpool = mysql.createPool({
//     host: args.db_host,
//     user: args.db_username,
//     password:args.db_password,
//     database: args.db_name,
//     waitForConnections: true,
//     connectionLimit: args.db_pool_num,
//     queueLimit: 0
// }).promise();



///////////global log4js//////////////
log4js.configure({
    appenders: {
        file: {
            type: 'file',
            filename: ROOTDIR+"/log/"+args.logfilename, 
            maxLogSize: 500000,
            backups: 5,
            replaceConsole: true,
        },
        console: {
            type: 'console',
            replaceConsole: true,
        },
    },
    categories: {
        default: { appenders: args.logtypes,level: args.loglevel },
    },

    pm2: true,
    pm2InstanceVar: 'INSTANCE_ID',
    disableClustering: true
});

let logger=log4js.getLogger('default');

module.exports={args,ROOTDIR,koaApp,koaRouter,moment,logger,axios,randomstring};


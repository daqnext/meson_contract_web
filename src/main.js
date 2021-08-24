const { args,koaApp,koaRouter,logger,ROOTDIR } =require("./global.js");//all the global data and initialization
const json=require("koa-json");
const koastatic =require( "koa-static");
const koabodyparser =require( "koa-bodyparser");
const fs =require("fs");



/////////ini koa //////////////////////////
koaApp.use(json());
koaApp.use(koastatic(ROOTDIR+'/assets/koa_static'));
koaApp.use(koabodyparser());

koaApp.use(async (ctx, next)=>{
    try{
            await next();   // execute code for descendants
            if(!ctx.body){  
                ctx.status = 404; ctx.body = "not found";
                logger.debug("not found 404:",ctx.request);
            }           
    }catch(e){
        ctx.status = 500; ctx.body = "server error";
        logger.error("server error:",ctx.request,e);
    }
});

/////////require all the controllers////////////
fs.readdirSync(ROOTDIR+"/src/controllers").forEach(function(file) {
    require (ROOTDIR+"/src/controllers/"+file)
});

koaApp.use(koaRouter.routes()).use(koaRouter.allowedMethods());

koaApp.listen(args.port, () => {
    logger.info('The application is listening on port : ',args.port);
})

///////////end of main////////////////////////


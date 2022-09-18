import {commanderCreate} from './action.js'

function commander(program){

  program.option('-f --framework <framework>','设置框架')
program.command('create <project> [other...]')
    .alias('crt')
    .description('创建项目')
    .action((projectName,args)=>commanderCreate(projectName,args))
    program.command('open <project> [other...]')
    .alias('o')
    .description('打开工程文件')
    .action((projectName,args)=>commanderOpen(projectName,args))

}

export{commander}
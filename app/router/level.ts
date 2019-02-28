import * as Router from 'koa-router'

import * as levelCtrl from '../controller/level'

const level = new Router()

level.get('/', levelCtrl.get) //获得用户等级列表
level.get('/users', levelCtrl.getUsers) // 获取申请列表
level.post('/users', levelCtrl.postUsers) // 申请修改用户等级

export = level

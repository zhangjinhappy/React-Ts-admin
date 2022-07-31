import Mock from 'mockjs'
Mock.mock('/user/menu', {
    code: 200,
    list: [
        {
            url: '/auth',
            name: '权限管理',
            icon: 'setting',
            children: [
                {
                    url: '/auth/menu',
                    name: '菜单管理',
                    icon: 'menu'
                },
                {
                    url: '/auth/role',
                    name: '角色管理',
                    icon: 'team'
                }
            ]
        },
    ],

})

Mock.mock('/user/login', {
    code: 200,
    data: {
        token: '213213',
        avatar: '张劲',
        account: "string",
        mobile: '',
        role: 1,
        id: 1
    }

})
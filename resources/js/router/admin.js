let admin_router = {
    path: '/admin',
    component: () => import('@/pages/Blank'),
    meta: {
        title: "Dashboard Admin",
    },
    children: [
        {
            path: 'dokter/',
            component: () => import('@/pages/Blank'),
            children: [
                // {
                //     path: 'index',
                //     name: 'admin.dokter.index',
                //     component: () => import('@/pages/admin/dokter/Index')
                // },
                // {
                //     path: 'detail/:dokter_id',
                //     name: 'admin.dokter.detail',
                //     component: () => import('@/pages/admin/dokter/Detail')
                // },
            ]
        },
    ]
}

export default admin_router
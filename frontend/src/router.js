
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import AssignoperationCarAssignmentManager from "./components/listers/AssignoperationCarAssignmentCards"
import AssignoperationCarAssignmentDetail from "./components/listers/AssignoperationCarAssignmentDetail"
import AssignoperationVehiclePerformanceManager from "./components/listers/AssignoperationVehiclePerformanceCards"
import AssignoperationVehiclePerformanceDetail from "./components/listers/AssignoperationVehiclePerformanceDetail"

import StandardmanagementUserManager from "./components/listers/StandardmanagementUserCards"
import StandardmanagementUserDetail from "./components/listers/StandardmanagementUserDetail"
import StandardmanagementVehicleManager from "./components/listers/StandardmanagementVehicleCards"
import StandardmanagementVehicleDetail from "./components/listers/StandardmanagementVehicleDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/assignoperations/carAssignments',
                name: 'AssignoperationCarAssignmentManager',
                component: AssignoperationCarAssignmentManager
            },
            {
                path: '/assignoperations/carAssignments/:id',
                name: 'AssignoperationCarAssignmentDetail',
                component: AssignoperationCarAssignmentDetail
            },
            {
                path: '/assignoperations/vehiclePerformances',
                name: 'AssignoperationVehiclePerformanceManager',
                component: AssignoperationVehiclePerformanceManager
            },
            {
                path: '/assignoperations/vehiclePerformances/:id',
                name: 'AssignoperationVehiclePerformanceDetail',
                component: AssignoperationVehiclePerformanceDetail
            },

            {
                path: '/standardmanagements/users',
                name: 'StandardmanagementUserManager',
                component: StandardmanagementUserManager
            },
            {
                path: '/standardmanagements/users/:id',
                name: 'StandardmanagementUserDetail',
                component: StandardmanagementUserDetail
            },
            {
                path: '/standardmanagements/vehicles',
                name: 'StandardmanagementVehicleManager',
                component: StandardmanagementVehicleManager
            },
            {
                path: '/standardmanagements/vehicles/:id',
                name: 'StandardmanagementVehicleDetail',
                component: StandardmanagementVehicleDetail
            },



    ]
})

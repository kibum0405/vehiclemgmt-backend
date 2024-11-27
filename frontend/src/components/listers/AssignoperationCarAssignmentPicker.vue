<template>
    <div>
        <v-list two-line v-if="list.length > 0">
            <v-list-item-group 
                    v-model="selected" 
                    color="primary"
                    @change="select"
            >
                <v-list-item v-for="(item, idx) in list" :key="idx">
                    <template v-slot:default="{ active }">
                        <v-list-item-avatar color="primary-darker-1">
                        </v-list-item-avatar>
                        
                        <v-list-item-content>
                            <v-list-item-title>
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                RequesterName :  {{item.requesterName }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Organization :  {{item.organization }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                EmployeeNumber :  {{item.employeeNumber }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                OfficeNumber :  {{item.officeNumber }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                MobileNumber :  {{item.mobileNumber }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                RequestDate :  {{item.requestDate }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                ApproverInfo :  {{item.approverInfo }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                ApproverPosition :  {{item.approverPosition }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                UsagePurpose :  {{item.usagePurpose }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                NumberOfPassengers :  {{item.numberOfPassengers }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                RouteSetting :  {{item.routeSetting }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Remarks :  {{item.remarks }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                PassengerContact :  {{item.passengerContact }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                AttachedDocuments :  {{item.attachedDocuments }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                CancellationReason :  {{item.cancellationReason }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                UsageCategory :  {{item.usageCategory }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                CarType :  {{item.carType }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                MainDepartment :  {{item.mainDepartment }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                OperationSection :  {{item.operationSection }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                OperationType :  {{item.operationType }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                IncludeDriver :  {{item.includeDriver }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                ProgressStage :  {{item.progressStage }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Period :  {{item.period }}
                            </v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-checkbox :input-value="active" color="primary-darker-1"></v-checkbox>
                        </v-list-item-action>
                    </template>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </div>
</template>


<script>
    const axios = require('axios').default;

    export default {
        name: 'AssignoperationCarAssignmentPicker',
        props: {
            value: [String, Object, Array, Number, Boolean],
        },
        data: () => ({
            list: [],
            selected: null,
        }),
        async created() {
            var me = this;
            var temp = await axios.get(axios.fixUrl('/carAssignments'))
            if(temp.data) {
                me.list = temp.data._embedded.carAssignments;
            }

            if(me.value && typeof me.value == "object" && Object.values(me.value)[0]) {
                var id = Object.values(me.value)[0];
                var tmpValue = await axios.get(axios.fixUrl('/carAssignments/' + id))
                if(tmpValue.data) {
                    var val = tmpValue.data
                    me.list.forEach(function(item, idx) {
                        if(item.name == val.name) {
                            me.selected = idx
                        }
                    })
                }
            }
        },
        methods: {
            select(val) {
                var obj = {}
                if(val != undefined) {
                    var arr = this.list[val]._links.self.href.split('/');
                    obj['id'] = arr[4]; 
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    this.$emit('selected', obj);
                }
            },
        },
    };
</script>


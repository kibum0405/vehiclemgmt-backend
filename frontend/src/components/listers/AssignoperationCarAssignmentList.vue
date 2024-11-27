<template>
    <div>
    <h1>CarAssignment</h1>
        <v-row>
            <v-card
                class="mx-auto"
                style="height:300px; width:300px; margin-bottom:20px; text-align: center;"
                outlined
            >
                <v-list-item>
                    <v-list-item-avatar 
                        class="mx-auto"
                        size="80"
                        style="margin-top:80px;"
                    ><v-icon color="primary" x-large>mdi-plus</v-icon>
                    </v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                    <v-btn 
                        v-on="on"
                        class="mx-auto"
                        outlined
                        rounded
                        @click="openDialog=true;"
                        color="primary"
                        style="font-weight:500; font-size:20px; padding:15px; border:solid 2px; max-width:250px; overflow:hidden"
                    >
                        CarAssignment 등록
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-row>
        <v-list two-line>
            <template>
                <v-list-item v-for="(data, n) in values" :key="n">
                    <v-list-item-avatar color="grey darken-1">
                        <v-img :src="data.photo ? data.photo:'https://cdn.vuetifyjs.com/images/cards/cooking.png'"/>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title style="margin-bottom:10px;">
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                        </v-list-item-title>

                        <v-list-item-subtitle style="font-size:25px; font-weight:700;">
                            [ Id :  {{data.id }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ RequesterName :  {{data.requesterName }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Organization :  {{data.organization }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ EmployeeNumber :  {{data.employeeNumber }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ OfficeNumber :  {{data.officeNumber }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ MobileNumber :  {{data.mobileNumber }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ RequestDate :  {{data.requestDate }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ ApproverInfo :  {{data.approverInfo }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ ApproverPosition :  {{data.approverPosition }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ UsagePurpose :  {{data.usagePurpose }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ NumberOfPassengers :  {{data.numberOfPassengers }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ RouteSetting :  {{data.routeSetting }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Remarks :  {{data.remarks }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ PassengerContact :  {{data.passengerContact }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ AttachedDocuments :  {{data.attachedDocuments }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ CancellationReason :  {{data.cancellationReason }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ UsageCategory :  {{data.usageCategory }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ CarType :  {{data.carType }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ MainDepartment :  {{data.mainDepartment }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ OperationSection :  {{data.operationSection }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ OperationType :  {{data.operationType }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ IncludeDriver :  {{data.includeDriver }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ ProgressStage :  {{data.progressStage }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Period :  {{data.period }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </v-list-item-subtitle>

                    </v-list-item-content>
                </v-list-item>

                <v-divider v-if="n !== 6" :key="`divider-${n}`" inset></v-divider>
            </template>
        </v-list>

        <v-col style="margin-bottom:40px;">
            <div class="text-center">
                <v-dialog
                        v-model="openDialog"
                        width="332.5"
                        fullscreen
                        hide-overlay
                        transition="dialog-bottom-transition"
                >

                    <AssignoperationCarAssignment :offline="offline" class="video-card" :isNew="true" :editMode="true" v-model="newValue" @add="append" v-if="tick"/>
                
                    <v-btn
                            style="postition:absolute; top:2%; right:2%"
                            @click="closeDialog()"
                            depressed 
                            icon 
                            absolute
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-dialog>
            </div>
        </v-col>
    </div>
</template>

<script>
    const axios = require('axios').default;
    import AssignoperationCarAssignment from './../AssignoperationCarAssignment.vue';

    export default {
        name: 'AssignoperationCarAssignmentManager',
        components: {
            AssignoperationCarAssignment,
        },
        props: {
            offline: Boolean,
            editMode: Boolean,
            isNew: Boolean
        },
        data: () => ({
            values: [],
            newValue: {},
            tick : true,
            openDialog : false,
        }),
        async created() {
            if(this.offline){
                if(!this.values) this.values = [];
                return;
            } 

            var temp = await axios.get(axios.fixUrl('/carassignments'))
            temp.data._embedded.carassignments.map(obj => obj.id=obj._links.self.href.split("/")[obj._links.self.href.split("/").length - 1])
            this.values = temp.data._embedded.carassignments;
            
            this.newValue = {
                'requesterName': '',
                'organization': '',
                'employeeNumber': '',
                'officeNumber': '',
                'mobileNumber': '',
                'requestDate': '2024-11-27',
                'approverInfo': '',
                'approverPosition': '',
                'usagePurpose': '',
                'numberOfPassengers': '',
                'routeSetting': '',
                'remarks': '',
                'passengerContact': '',
                'attachedDocuments': '',
                'cancellationReason': '',
                'usageCategory': '',
                'carType': '',
                'mainDepartment': '',
                'operationSection': '',
                'operationType': '',
                'includeDriver': '',
                'progressStage': '',
                'period': {},
            }
        },
        methods: {
            closeDialog(){
                this.openDialog = false
            },
            append(value){
                this.tick = false
                this.newValue = {}
                this.values.push(value)
                
                this.$emit('input', this.values);

                this.$nextTick(function(){
                    this.tick=true
                })
            }
        },
    };
</script>


<style>
    .video-card {
        width:300px; 
        margin-left:4.5%; 
        margin-top:50px; 
        margin-bottom:50px;
    }
</style>


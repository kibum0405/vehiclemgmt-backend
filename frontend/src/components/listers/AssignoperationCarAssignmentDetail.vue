<template>
    <v-card outlined>
        <v-card-title>
            CarAssignment # {{item._links.self.href.split("/")[item._links.self.href.split("/").length - 1]}}
        </v-card-title>

        <v-card-text>
            <div>
                <String label="RequesterName" v-model="item.requesterName" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Organization" v-model="item.organization" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="EmployeeNumber" v-model="item.employeeNumber" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="OfficeNumber" v-model="item.officeNumber" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="MobileNumber" v-model="item.mobileNumber" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Date label="RequestDate" v-model="item.requestDate" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="ApproverInfo" v-model="item.approverInfo" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="ApproverPosition" v-model="item.approverPosition" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="UsagePurpose" v-model="item.usagePurpose" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="NumberOfPassengers" v-model="item.numberOfPassengers" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="RouteSetting" v-model="item.routeSetting" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Remarks" v-model="item.remarks" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="PassengerContact" v-model="item.passengerContact" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="AttachedDocuments" v-model="item.attachedDocuments" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="CancellationReason" v-model="item.cancellationReason" :editMode="editMode" @change="change" />
            </div>
            <UsageCategory offline label="UsageCategory" v-model="item.usageCategory" :editMode="false" :key="false" @change="change" />
            <CarType offline label="CarType" v-model="item.carType" :editMode="false" :key="false" @change="change" />
            <MainDepartment offline label="MainDepartment" v-model="item.mainDepartment" :editMode="false" :key="false" @change="change" />
            <OperationSection offline label="OperationSection" v-model="item.operationSection" :editMode="false" :key="false" @change="change" />
            <OperationType offline label="OperationType" v-model="item.operationType" :editMode="false" :key="false" @change="change" />
            <IncludeDriver offline label="IncludeDriver" v-model="item.includeDriver" :editMode="false" :key="false" @change="change" />
            <ProgressStage offline label="ProgressStage" v-model="item.progressStage" :editMode="false" :key="false" @change="change" />
            <Period offline label="Period" v-model="item.period" :editMode="false" :key="false" @change="change" />
        </v-card-text>

        <v-card-actions>
            <v-btn text color="deep-purple lighten-2" large @click="goList">List</v-btn>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="edit"
                    v-if="!editMode"
            >
                Edit
            </v-btn>
            <v-btn
                    color="primary"
                    text
                    @click="save"
                    v-else
            >
                Save
            </v-btn>
            <v-btn
                    color="primary"
                    text
                    @click="remove"
                    v-if="!editMode"
            >
                Delete
            </v-btn>
            <v-btn
                    color="primary"
                    text
                    @click="editMode = false"
                    v-if="editMode"
            >
                Cancel
            </v-btn>
        </v-card-actions>
    </v-card>
</template>


<script>
    const axios = require('axios').default;

    export default {
        name: 'AssignoperationCarAssignmentDetail',
        components:{},
        props: {
        },
        data: () => ({
            item: null,
            editMode: false,
        }),
        async created() {
            var me = this;
            var params = this.$route.params;
            var temp = await axios.get(axios.fixUrl('/carAssignments/' + params.id))
            if(temp.data) {
                me.item = temp.data
            }
        },
        methods: {
            goList() {
                var path = window.location.href.slice(window.location.href.indexOf("/#/"), window.location.href.lastIndexOf("/#"));
                path = path.replace("/#/", "/");
                this.$router.push(path);
            },
            edit() {
                this.editMode = true;
            },
            async remove(){
                try {
                    if (!this.offline) {
                        await axios.delete(axios.fixUrl(this.item._links.self.href))
                    }

                    this.editMode = false;

                    this.$emit('input', this.item);
                    this.$emit('delete', this.item);

                } catch(e) {
                    console.log(e)
                }
            },
        },
    };
</script>

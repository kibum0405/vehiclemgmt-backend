<template>
    <v-card outlined>
        <v-card-title>
            RequestCarAssignment
        </v-card-title>

        <v-card-text>
            <Number label="Id" v-model="value.id" :editMode="editMode"/>
            <String label="RequesterName" v-model="value.requesterName" :editMode="editMode"/>
            <String label="Organization" v-model="value.organization" :editMode="editMode"/>
            <String label="EmployeeNumber" v-model="value.employeeNumber" :editMode="editMode"/>
            <String label="OfficeNumber" v-model="value.officeNumber" :editMode="editMode"/>
            <String label="MobileNumber" v-model="value.mobileNumber" :editMode="editMode"/>
            <Date label="RequestDate" v-model="value.requestDate" :editMode="editMode"/>
            <String label="ApproverInfo" v-model="value.approverInfo" :editMode="editMode"/>
            <String label="ApproverPosition" v-model="value.approverPosition" :editMode="editMode"/>
            <String label="UsagePurpose" v-model="value.usagePurpose" :editMode="editMode"/>
            <String label="NumberOfPassengers" v-model="value.numberOfPassengers" :editMode="editMode"/>
            <String label="RouteSetting" v-model="value.routeSetting" :editMode="editMode"/>
            <String label="Remarks" v-model="value.remarks" :editMode="editMode"/>
            <String label="PassengerContact" v-model="value.passengerContact" :editMode="editMode"/>
            <String label="AttachedDocuments" v-model="value.attachedDocuments" :editMode="editMode"/>
            <String label="CancellationReason" v-model="value.cancellationReason" :editMode="editMode"/>
            <UsageCategory offline label="UsageCategory" v-model="value.usageCategory" :editMode="editMode" @change="change"/>
            <CarType offline label="CarType" v-model="value.carType" :editMode="editMode" @change="change"/>
            <MainDepartment offline label="MainDepartment" v-model="value.mainDepartment" :editMode="editMode" @change="change"/>
            <OperationSection offline label="OperationSection" v-model="value.operationSection" :editMode="editMode" @change="change"/>
            <OperationType offline label="OperationType" v-model="value.operationType" :editMode="editMode" @change="change"/>
            <IncludeDriver offline label="IncludeDriver" v-model="value.includeDriver" :editMode="editMode" @change="change"/>
            <ProgressStage offline label="ProgressStage" v-model="value.progressStage" :editMode="editMode" @change="change"/>
            <Period offline label="Period" v-model="value.period" :editMode="editMode" @change="change"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="requestCarAssignment"
            >
                RequestCarAssignment
            </v-btn>
            
            <v-btn
                    color="primary"
                    text
                    @click="close"
            >
                Close
            </v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>
   
    export default {
        name: 'RequestCarAssignmentCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.id = 0;
            this.value.requesterName = '';
            this.value.organization = '';
            this.value.employeeNumber = '';
            this.value.officeNumber = '';
            this.value.mobileNumber = '';
            this.value.requestDate = '2024-11-27';
            this.value.approverInfo = '';
            this.value.approverPosition = '';
            this.value.usagePurpose = '';
            this.value.numberOfPassengers = '';
            this.value.routeSetting = '';
            this.value.remarks = '';
            this.value.passengerContact = '';
            this.value.attachedDocuments = '';
            this.value.cancellationReason = '';
            this.value.usageCategory = {};
            this.value.carType = {};
            this.value.mainDepartment = {};
            this.value.operationSection = {};
            this.value.operationType = {};
            this.value.includeDriver = {};
            this.value.progressStage = {};
            this.value.period = {};
        },
        watch: {
        },
        methods: {
            requestCarAssignment() {
                this.$emit('requestCarAssignment', this.value);
            },
            close() {
                this.$emit('closeDialog');
            },
            change() {
                this.$emit('input', this.value);
            },
        }
    }
</script>


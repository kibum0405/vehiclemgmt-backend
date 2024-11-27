<template>
    <v-card outlined>
        <v-card-title>
            UpdateVehicleDetails
        </v-card-title>

        <v-card-text>
            <Number label="Id" v-model="value.id" :editMode="editMode"/>
            <String label="RegistrationNumber" v-model="value.registrationNumber" :editMode="editMode"/>
            <String label="Make" v-model="value.make" :editMode="editMode"/>
            <String label="Model" v-model="value.model" :editMode="editMode"/>
            <Number label="Year" v-model="value.year" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="updateVehicleDetails"
            >
                UpdateVehicleDetails
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
        name: 'UpdateVehicleDetailsCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.id = 0;
            this.value.registrationNumber = '';
            this.value.make = '';
            this.value.model = '';
            this.value.year = 0;
        },
        watch: {
        },
        methods: {
            updateVehicleDetails() {
                this.$emit('updateVehicleDetails', this.value);
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


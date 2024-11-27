<template>
    <v-card outlined>
        <v-card-title>
            RegisterVehicle
        </v-card-title>

        <v-card-text>
            <String label="RegistrationNumber" v-model="value.registrationNumber" :editMode="editMode"/>
            <String label="Make" v-model="value.make" :editMode="editMode"/>
            <String label="Model" v-model="value.model" :editMode="editMode"/>
            <Number label="Year" v-model="value.year" :editMode="editMode"/>
            <VehicleStatus offline label="Status" v-model="value.status" :editMode="editMode" @change="change"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="registerVehicle"
            >
                RegisterVehicle
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
        name: 'RegisterVehicleCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.registrationNumber = '';
            this.value.make = '';
            this.value.model = '';
            this.value.year = 0;
            this.value.status = {};
        },
        watch: {
        },
        methods: {
            registerVehicle() {
                this.$emit('registerVehicle', this.value);
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


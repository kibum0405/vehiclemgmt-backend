<template>
    <v-card outlined>
        <v-card-title>
            DeletePerformance
        </v-card-title>

        <v-card-text>
            <String label="RegistrationId" v-model="value.registrationId" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="deletePerformance"
            >
                DeletePerformance
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
        name: 'DeletePerformanceCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.registrationId = '';
        },
        watch: {
        },
        methods: {
            deletePerformance() {
                this.$emit('deletePerformance', this.value);
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


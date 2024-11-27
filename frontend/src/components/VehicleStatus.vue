<template>
    <div style="margin: 0 -15px 0 -15px;">
        <v-card-title>
            VehicleStatus
        </v-card-title>
        <v-card-text>
            <div v-if="editMode" style="margin-top:-20px;">
                <v-select
                        v-model="newValue"
                        :label="'name'"
                        :items="vehicleStatusList"
                ></v-select>
            </div>
            <div v-else style="margin-top:-20px;">
                VehicleStatus : {{ value }}
            </div>
        </v-card-text>
    </div>
</template>

<script>
    export default {
        name: 'VehicleStatus',
        components:{},
        props: {
            value: [Object, String, Number, Boolean, Array],
            editMode: Boolean,
            isNew: Boolean,
            offline: Boolean,
            inList: Boolean,
            label: String,
        },
        data: () => ({
            vehicleStatusList : [ "AVAILABLE",  "IN_USE",  "UNDER_MAINTENANCE",  "DECOMMISSIONED", ],
            newValue: '',
        }),
        async created() {
            if(!this.value) {
                this.newValue = this.vehicleStatusList[0];
            } else {
                this.newValue = this.value;
            }
        },
        watch: {
            value(val) {
                this.$emit('input', val);
            },
            newValue(val) {
                this.$emit('input', val);
            },
        },
        methods: {
        }
    }
</script>


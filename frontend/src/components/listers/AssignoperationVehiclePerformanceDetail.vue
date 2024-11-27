<template>
    <v-card outlined>
        <v-card-title>
            VehiclePerformance # {{item._links.self.href.split("/")[item._links.self.href.split("/").length - 1]}}
        </v-card-title>

        <v-card-text>
            <div>
                <String label="RegistrationId" v-model="item.registrationId" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="VehicleNumber" v-model="item.vehicleNumber" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Date label="RegistrationDate" v-model="item.registrationDate" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Departure" v-model="item.departure" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="DepartureTime" v-model="item.departureTime" :editMode="editMode" @change="change" />
            </div>
            <int offline label="AccumulatedDistanceBefore" v-model="item.accumulatedDistanceBefore" :editMode="false" :key="false" @change="change" />
            <div>
                <String label="Destination" v-model="item.destination" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="ArrivalTime" v-model="item.arrivalTime" :editMode="editMode" @change="change" />
            </div>
            <int offline label="AccumulatedDistanceAfter" v-model="item.accumulatedDistanceAfter" :editMode="false" :key="false" @change="change" />
            <div>
                <Number label="DrivingDistance" v-model="item.drivingDistance" :editMode="editMode" @change="change" />
            </div>
            <Purpose offline label="Purpose" v-model="item.purpose" :editMode="false" :key="false" @change="change" />
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
        name: 'AssignoperationVehiclePerformanceDetail',
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
            var temp = await axios.get(axios.fixUrl('/vehiclePerformances/' + params.id))
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

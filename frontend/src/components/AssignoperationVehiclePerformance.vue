<template>
    <v-card style="width:450px; height:100%;" outlined>
        <template slot="progress">
            <v-progress-linear
                    color="primary-darker-1"
                    height="10"
                    indeterminate
            ></v-progress-linear>
        </template>

        <v-card-title v-if="value._links">
            운행 실적 # {{decode(value._links.self.href.split("/")[value._links.self.href.split("/").length - 1])}}
        </v-card-title >
        <v-card-title v-else>
            운행 실적
        </v-card-title >        

        <v-card-text style="background-color: white;">
            <String v-if="editMode" label="등록자 정보" v-model="value.registrationId" :editMode="editMode" :inputUI="''"/>
            <String label="차량번호" v-model="value.vehicleNumber" :editMode="editMode" :inputUI="'SELECT'"/>
            <Date label="등록일자" v-model="value.registrationDate" :editMode="editMode" :inputUI="''"/>
            <String label="출발지" v-model="value.departure" :editMode="editMode" :inputUI="'TEXT'"/>
            <String label="출발시간" v-model="value.departureTime" :editMode="editMode" :inputUI="'TEXT'"/>
            <int offline label="운행전 누적 km" v-model="value.accumulatedDistanceBefore" :editMode="editMode" @change="change"/>
            <String label="도착지" v-model="value.destination" :editMode="editMode" :inputUI="'TEXT'"/>
            <String label="도착시간" v-model="value.arrivalTime" :editMode="editMode" :inputUI="'TEXT'"/>
            <int offline label="운행 후 누적 km" v-model="value.accumulatedDistanceAfter" :editMode="editMode" @change="change"/>
            <Number label="DrivingDistance" v-model="value.drivingDistance" :editMode="editMode" :inputUI="''"/>
            <Purpose offline label="Purpose" v-model="value.purpose" :editMode="editMode" @change="change"/>
            <Period offline label="Period" v-model="value.period" :editMode="editMode" @change="change"/>
        </v-card-text>

        <v-card-actions style="background-color: white;">
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                text
                @click="edit"
                v-if="!editMode"
            >
                수정
            </v-btn>
            <div v-else>
                <v-btn
                    color="primary"
                    text
                    @click="save"
                >
                    운행 실적 등록
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    @click="save"
                >
                    운행 실적 수정
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    @click="save"
                >
                    운행 실적 삭제
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    @click="remove"
                    v-if="!editMode"
                >
                    삭제
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    @click="editMode = false"
                    v-if="editMode && !isNew"
                >
                    취소
                </v-btn>
            </div>
        </v-card-actions>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                v-if="!editMode"
                color="primary"
                text
                @click="openRegisterDrivingLog"
            >
                RegisterDrivingLog
            </v-btn>
            <v-dialog v-model="registerDrivingLogDiagram" width="500">
                <RegisterDrivingLogCommand
                    @closeDialog="closeRegisterDrivingLog"
                    @registerDrivingLog="registerDrivingLog"
                ></RegisterDrivingLogCommand>
            </v-dialog>
        </v-card-actions>

        <v-snackbar
            v-model="snackbar.status"
            :top="true"
            :timeout="snackbar.timeout"
            color="error"
        >
            {{ snackbar.text }}
            <v-btn dark text @click="snackbar.status = false">
                Close
            </v-btn>
        </v-snackbar>
    </v-card>

</template>

<script>
    const axios = require('axios').default;


    export default {
        name: 'AssignoperationVehiclePerformance',
        components:{
        },
        props: {
            value: [Object, String, Number, Boolean, Array],
            editMode: Boolean,
            isNew: Boolean,
            offline: Boolean,
        },
        data: () => ({
            snackbar: {
                status: false,
                timeout: 5000,
                text: '',
            },
            registerDrivingLogDiagram: false,
        }),
	async created() {
        },
        methods: {
            decode(value) {
                return decodeURIComponent(value);
            },
            selectFile(){
                if(this.editMode == false) {
                    return false;
                }
                var me = this
                var input = document.createElement("input");
                input.type = "file";
                input.accept = "image/*";
                input.id = "uploadInput";
                
                input.click();
                input.onchange = function (event) {
                    var file = event.target.files[0]
                    var reader = new FileReader();

                    reader.onload = function () {
                        var result = reader.result;
                        me.imageUrl = result;
                        me.value.photo = result;
                        
                    };
                    reader.readAsDataURL( file );
                };
            },
            edit() {
                this.editMode = true;
            },
            async save(){
                try {
                    var temp = null;

                    if(!this.offline) {
                        if(this.isNew) {
                            temp = await axios.post(axios.fixUrl('/vehiclePerformances'), this.value)
                        } else {
                            temp = await axios.put(axios.fixUrl(this.value._links.self.href), this.value)
                        }
                    }

                    if(this.value!=null) {
                        for(var k in temp.data) this.value[k]=temp.data[k];
                    } else {
                        this.value = temp.data;
                    }

                    this.editMode = false;
                    this.$emit('input', this.value);

                    if (this.isNew) {
                        this.$emit('add', this.value);
                    } else {
                        this.$emit('edit', this.value);
                    }

                    location.reload()

                } catch(e) {
                    this.snackbar.status = true
                    if(e.response && e.response.data.message) {
                        this.snackbar.text = e.response.data.message
                    } else {
                        this.snackbar.text = e
                    }
                }
                
            },
            async remove(){
                try {
                    if (!this.offline) {
                        await axios.delete(axios.fixUrl(this.value._links.self.href))
                    }

                    this.editMode = false;
                    this.isDeleted = true;

                    this.$emit('input', this.value);
                    this.$emit('delete', this.value);

                } catch(e) {
                    this.snackbar.status = true
                    if(e.response && e.response.data.message) {
                        this.snackbar.text = e.response.data.message
                    } else {
                        this.snackbar.text = e
                    }
                }
            },
            change(){
                this.$emit('input', this.value);
            },
            async registerDrivingLog(params) {
                try {
                    if(!this.offline) {
                        var temp = await axios.put(axios.fixUrl(this.value._links['registerdrivinglog'].href), params)
                        for(var k in temp.data) {
                            this.value[k]=temp.data[k];
                        }
                    }

                    this.editMode = false;
                    this.closeRegisterDrivingLog();
                } catch(e) {
                    this.snackbar.status = true
                    if(e.response && e.response.data.message) {
                        this.snackbar.text = e.response.data.message
                    } else {
                        this.snackbar.text = e
                    }
                }
            },
            openRegisterDrivingLog() {
                this.registerDrivingLogDiagram = true;
            },
            closeRegisterDrivingLog() {
                this.registerDrivingLogDiagram = false;
            },
        },
    }
</script>


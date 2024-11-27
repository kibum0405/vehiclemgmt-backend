<template>
    <div>
        <v-card
            class="mx-auto"
            outlined
            color="primary"
            style="padding:10px 0px 10px 0px; margin-bottom:40px;"
        >
            <v-row>
                <v-list-item class="d-flex" style="background-color: white;">
                    <h1 class="align-self-center ml-3">운행 실적</h1>
                    <div class="secondary-text-color" style="margin-left:30px;">차량 운행 실적을 등록하고 조회하는 화면을 만들려고 해. 운행 실적을 등록하고 조회하는 화면으로, 운행등록과 운행조회 화면이 각각 있어.

운행등록 화면에는 운행실적을 등록하는 등록자 정보가 조회되어야 해. 등록자는 운행등록 화면을 접속한 접속자가 조회되고, log가 남아야 해. 화면 상단에는 등록자 정보가 조회되는 영역이야. 등록자 정보 밑에는 차량번호를 선택하고, 등록일자를 선택할 수 있는 캘린더가 있어야 해. 차량번호와 등록일자가 선택된 후 운행목적, 출발지, 출발시간, 운행전 누적 km, 도착지, 도착시간, 운행 후 누적 km, 운행 km 칸이 있어야 해. 운행목적은 dropdown menu 형태로, 부서업무, 출장, 출퇴근, 경조사 등의 항목들 중에 선택할 수 있어야 해. 출발지와 도착지는 text type을 입력할 수 있어야 해. 출발시간과 도착시간은 시간(HH)과 분(MM)을 입력할  수 있어야 해. 운행전 누적 km와 운행 후 누적 km는 integer type을 입력할 수 있어야 해. 천단위 구분해줘. 운행 km는 운행 후 누적km 에서 운행 전 누적 km를 subtract 한 값이 output 되어야 해. 모든 항목 입력 후 등록을 누르면 저장되어야 해. 저장될 때는 자동으로 index 번호가 붙어야 해. index 번호는 YYMMDD-# 형식으로 자동 생성되어야 해. 가장 마지막으로 등록된 운행 후 누적 km는 총운행거리로 계산되어야 해. 총 운행거리는 log가 modify 되거나 delete 되었을 시 자동으로 총운행거리가 다시 계산되어야 해. 총운행거리의 단위는 km(kilometer)야. 계산된 총운행거리를 화면에 보여줘. 이렇게 저장된 log는 modify와 delete가 가능해야 해. 행 삭제 후 index 번호는 자동으로 re-indexing 되어야 해. 그리고, 최근정보불러오기 버튼을 누르면, 가장 마지막에 등록 log가 조회되어야 하고, 조회된 행은 자동으로 re-indexing 되어야 해.

운행조회 화면에는 운행조회 화면에서 저장된 value들을 조회할 수 있는 화면이야. 차량번호, From~To 운행일자를 입력하고 조회하는 화면이야. 차량번호 칸은 text type을 입력할 수 있는 칸이야. 운행일자는 From~To date를 선택할 수 있어야 해. date 형식은 YYYY.MM.DD 이고, 달력 아이콘 클릭 시 캘린더가 나와야 해. 차량번호와 운행일자를 입력하고, 조회버튼을 누르면 해당 차량번호의 운행 등록 log가 조회되어야 해. 그리고, 선택된 운행일자에 따라 운행 이력이 테이블 형태로 조회가 되어야 해. 테이블 컬럼은, checkbox, 번호, 운행일자, 등록자, 차량번호, 차량소유자, 출발시간, 도착시간, 운행전거리(km), 운행후거리(km), 총 운행거리(km), 출발지, 도착지, 업무구분, 비고 컬럼으로 구성되어 있어. 조회된 운행이력은 행별로 delete가 가능해야 해. checkbox 선택된 행은 delete가 가능해야 해. 그리고 이렇게 조회된 운행이력은 &#x27;엑셀다운로드&#x27; 버튼을 누르면 xlsx 또는 csv 형태로 export 되어야 해.</div>
                </v-list-item>
            </v-row>
        </v-card>
        <v-col style="margin-bottom:40px;">
            <div class="text-center">
                <v-dialog
                        v-model="openDialog"
                        width="332.5"
                        fullscreen
                        hide-overlay
                        transition="dialog-bottom-transition"
                >
                    <AssignoperationVehiclePerformance :offline="offline" class="video-card" :isNew="true" :editMode="true" v-model="newValue" 
                            @add="append" v-if="tick"/>

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
                                운행 실적 등록
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-row>
            </div>
        </v-col>
        <v-row>
            <AssignoperationVehiclePerformance :offline="offline" class="video-card" v-for="(value, index) in values" v-model="values[index]" v-bind:key="index" @delete="remove"/>
        </v-row>
    </div>
</template>

<script>

    const axios = require('axios').default;
    import AssignoperationVehiclePerformance from './../AssignoperationVehiclePerformance.vue';

    export default {
        name: 'AssignoperationVehiclePerformanceManager',
        components: {
            AssignoperationVehiclePerformance,
        },
        props: {
            offline: Boolean
        },
        data: () => ({
            values: [],
            newValue: {},
            tick : true,
            openDialog : false,
        }),
        async created() {
            var me = this;
            if(me.offline){
                if(!me.values) me.values = [];
                return;
            } 

            var temp = await axios.get(axios.fixUrl('/vehiclePerformances'))
            me.values = temp.data._embedded.vehiclePerformances;
            
            me.newValue = {
                'registrationId': '',
                'vehicleNumber': '',
                'registrationDate': '2024-11-27',
                'departure': '',
                'departureTime': '',
                'accumulatedDistanceBefore': '',
                'destination': '',
                'arrivalTime': '',
                'accumulatedDistanceAfter': '',
                'drivingDistance': 0,
                'purpose': '',
                'period': {},
            }
        },
        methods:{
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
            },
            remove(value){
                var where = -1;
                for(var i=0; i<this.values.length; i++){
                    if(this.values[i]._links.self.href == value._links.self.href){
                        where = i;
                        break;
                    }
                }

                if(where > -1){
                    this.values.splice(i, 1);
                    this.$emit('input', this.values);
                }
            },
        }
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


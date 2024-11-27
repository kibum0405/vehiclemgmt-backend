

<template>
    <v-app id="inspire">
        <div>
            <v-app-bar color="primary" app clipped-left flat>
                <v-toolbar-title>
                    <span class="second-word font uppercase"
                        style="font-weight:700;"
                    >
                        <v-app-bar-nav-icon
                            @click="openSideBar()"
                            style="z-index:1;
                            height:56px;
                            width:30px;
                            margin-right:10px;
                            font-weight:300;
                            font-size:55px;"
                        >
                            <div style="line-height:100%;">≡</div>
                        </v-app-bar-nav-icon>
                    </span>
                </v-toolbar-title>
                <span v-if="urlPath!=null" 
                    class="mdi mdi-home" 
                    key="" 
                    to="/" 
                    @click="goHome()"
                    style="margin-left:10px; font-size:20px; cursor:pointer;"
		        ></span> 
                <v-spacer></v-spacer>

            </v-app-bar>

            <v-navigation-drawer app clipped flat v-model="sideBar">
                <v-list>
                    <v-list-item
                        class="px-2"
                        key="carAssignments"
                        to="/assignoperations/carAssignments"
                        @click="changeUrl()"
                        color="primary"
                        style="font-weight:700;"
                    >
                        CarAssignment
                    </v-list-item>

                    <v-list-item
                        class="px-2"
                        key="vehiclePerformances"
                        to="/assignoperations/vehiclePerformances"
                        @click="changeUrl()"
                        color="primary"
                        style="font-weight:700;"
                    >
                        운행 실적
                    </v-list-item>


                    <v-list-item
                        class="px-2"
                        key="users"
                        to="/standardmanagements/users"
                        @click="changeUrl()"
                        color="primary"
                        style="font-weight:700;"
                    >
                        User
                    </v-list-item>

                    <v-list-item
                        class="px-2"
                        key="vehicles"
                        to="/standardmanagements/vehicles"
                        @click="changeUrl()"
                        color="primary"
                        style="font-weight:700;"
                    >
                        Vehicle
                    </v-list-item>


                </v-list>
            </v-navigation-drawer>
        </div>

        <v-main>
            <v-container style="padding:0px;" v-if="urlPath" fluid>
                <router-view></router-view>
            </v-container>
            <v-container style="padding:0px;" v-else fluid>
                <div style="width:100%; margin:0px 0px 20px 0px; position: relative;">
                    <v-img style="width:100%; height:300px;"
                        src=""
                    ></v-img>
                    <div class="App-main-text-overlap"></div>
                    <div class="App-sub-text-overlap"></div>
                </div>
                <v-row>
                    <v-col cols="4" class="d-flex justify-center" v-for="(aggregate, index) in aggregate" :key="index">
                        <div 
                            class="flip-card"
                            @mouseover="flipCard(index)"
                            @mouseleave="unflipCard(index)"
                            :class="{ 'is-flipped': flipped[index] }"
                        >
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <v-card
                                        class="mx-auto"
                                        style="width:300px; min-height: 310px; margin-bottom:20px; text-align: center; border-radius: 10px;"
                                        outlined
                                    >
                                        <v-list-item style="padding:15px; margin:0px;">
                                            <v-img style="width:100%; height:120px; border-radius: 10px;" :src="aggregate.ImageUrl"></v-img>
                                        </v-list-item>
                                        <div style="text-align: left; padding:10px 15px 15px 15px; margin-top:-10px;">
                                            <h2>{{ aggregate.title }}</h2>
                                            <div>{{ aggregate.description }}</div>
                                        </div>
                                    </v-card>
                                </div>
                                <div class="flip-card-back">
                                    <v-card
                                        color="primary"
                                        class="mx-auto"
                                        style="width:300px; min-height: 310px; margin-bottom:20px; text-align: center; border-radius: 10px;"
                                        outlined
                                        :key="aggregate.key"
                                        :to="aggregate.route"
                                        @click="changeUrl()"
                                    >
                                        <v-list-item style="padding:15px; margin:0px;">
                                            <v-img style="width:100%; height:120px; border-radius: 10px;" :src="aggregate.ImageUrl"></v-img>
                                        </v-list-item>
                                        <h2 style="color:white;">{{ aggregate.title }} 관리</h2>
                                    </v-card>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>

export default {
    name: "App",
    data: () => ({
        useComponent: "",
        drawer: true,
        components: [],
        sideBar: true,
        urlPath: null,
        flipped: [],
        ImageUrl: '',
        aggregate: [
            { 
                title: 'CarAssignment', 
                description: '수정 커맨드 추가', 
                key: 'carAssignments', 
                route: '/assignoperations/carAssignments',
                ImageUrl: '',
            },
            { 
                title: '운행 실적', 
                description: '차량 운행 실적을 등록하고 조회하는 화면을 만들려고 해. 운행 실적을 등록하고 조회하는 화면으로, 운행등록과 운행조회 화면이 각각 있어.

운행등록 화면에는 운행실적을 등록하는 등록자 정보가 조회되어야 해. 등록자는 운행등록 화면을 접속한 접속자가 조회되고, log가 남아야 해. 화면 상단에는 등록자 정보가 조회되는 영역이야. 등록자 정보 밑에는 차량번호를 선택하고, 등록일자를 선택할 수 있는 캘린더가 있어야 해. 차량번호와 등록일자가 선택된 후 운행목적, 출발지, 출발시간, 운행전 누적 km, 도착지, 도착시간, 운행 후 누적 km, 운행 km 칸이 있어야 해. 운행목적은 dropdown menu 형태로, 부서업무, 출장, 출퇴근, 경조사 등의 항목들 중에 선택할 수 있어야 해. 출발지와 도착지는 text type을 입력할 수 있어야 해. 출발시간과 도착시간은 시간(HH)과 분(MM)을 입력할  수 있어야 해. 운행전 누적 km와 운행 후 누적 km는 integer type을 입력할 수 있어야 해. 천단위 구분해줘. 운행 km는 운행 후 누적km 에서 운행 전 누적 km를 subtract 한 값이 output 되어야 해. 모든 항목 입력 후 등록을 누르면 저장되어야 해. 저장될 때는 자동으로 index 번호가 붙어야 해. index 번호는 YYMMDD-# 형식으로 자동 생성되어야 해. 가장 마지막으로 등록된 운행 후 누적 km는 총운행거리로 계산되어야 해. 총 운행거리는 log가 modify 되거나 delete 되었을 시 자동으로 총운행거리가 다시 계산되어야 해. 총운행거리의 단위는 km(kilometer)야. 계산된 총운행거리를 화면에 보여줘. 이렇게 저장된 log는 modify와 delete가 가능해야 해. 행 삭제 후 index 번호는 자동으로 re-indexing 되어야 해. 그리고, 최근정보불러오기 버튼을 누르면, 가장 마지막에 등록 log가 조회되어야 하고, 조회된 행은 자동으로 re-indexing 되어야 해.

운행조회 화면에는 운행조회 화면에서 저장된 value들을 조회할 수 있는 화면이야. 차량번호, From~To 운행일자를 입력하고 조회하는 화면이야. 차량번호 칸은 text type을 입력할 수 있는 칸이야. 운행일자는 From~To date를 선택할 수 있어야 해. date 형식은 YYYY.MM.DD 이고, 달력 아이콘 클릭 시 캘린더가 나와야 해. 차량번호와 운행일자를 입력하고, 조회버튼을 누르면 해당 차량번호의 운행 등록 log가 조회되어야 해. 그리고, 선택된 운행일자에 따라 운행 이력이 테이블 형태로 조회가 되어야 해. 테이블 컬럼은, checkbox, 번호, 운행일자, 등록자, 차량번호, 차량소유자, 출발시간, 도착시간, 운행전거리(km), 운행후거리(km), 총 운행거리(km), 출발지, 도착지, 업무구분, 비고 컬럼으로 구성되어 있어. 조회된 운행이력은 행별로 delete가 가능해야 해. checkbox 선택된 행은 delete가 가능해야 해. 그리고 이렇게 조회된 운행이력은 &#x27;엑셀다운로드&#x27; 버튼을 누르면 xlsx 또는 csv 형태로 export 되어야 해.', 
                key: 'vehiclePerformances', 
                route: '/assignoperations/vehiclePerformances',
                ImageUrl: '',
            },
            { 
                title: 'User', 
                description: '유저 관리', 
                key: 'users', 
                route: '/standardmanagements/users',
                ImageUrl: '',
            },
            { 
                title: 'Vehicle', 
                description: '차량 관리', 
                key: 'vehicles', 
                route: '/standardmanagements/vehicles',
                ImageUrl: '',
            },
            
        ],
    }),
    
    async created() {
      var path = document.location.href.split("#/")
      this.urlPath = path[1];

    },
    watch: {
        cards(newCards) {
            this.flipped = new Array(newCards.length).fill(false);
        },
    },

    mounted() {
        var me = this;
        me.components = this.$ManagerLists;
    },

    methods: {
        openSideBar(){
            this.sideBar = !this.sideBar
        },
        changeUrl() {
            var path = document.location.href.split("#/")
            this.urlPath = path[1];
            this.flipped.fill(false);
        },
        goHome() {
            this.urlPath = null;
        },
        flipCard(index) {
            this.$set(this.flipped, index, true);
        },
        unflipCard(index) {
            this.$set(this.flipped, index, false);
        },
    }
};
</script>
<style>
</style>

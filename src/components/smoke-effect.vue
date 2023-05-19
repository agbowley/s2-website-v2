
<!-- <template>
    <div>
    <div class="a">
        <div class="b" v-for="i in 90" :key="i"></div>
        
    </div>
    <div class="c">
        <div class="d" v-for="i in 90" :key="i"></div>
    </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "smoke-effect"
});
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Lato:400,300);

body{
    background: #332B33;
}

.a{
    %title{
        position:absolute;
        z-index:1;
        text-transform:uppercase;
        text-shadow:0px 10px rgba(0,0,0,.15);
        left:0;
        right:0;
        margin:auto;
        transform:translateY(-50%);
        font-family:lato;
        font-weight:300;
        color:white;
    }
    h1{
        @extend %title !optional;
        letter-spacing:28px;
        font-size:14px;
        top:50%;
    }
    h2{
        @extend %title !optional;
        letter-spacing:10px;
        font-size:10px;
        top:60%;
    }
    text-align:center;
    // background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/overlay.png");
    width:100%;
    height:200px;
    overflow:hidden;
    position:absolute;
    border:4px solid white;
    left:0;
    right:0;
    margin:auto;
    top:50%;
    transform:translateY(-50%) translateY(5%) translateX(-5%);
    .b{
        // border:2px solid rgba(255,255,255,.1);
        border-radius:400px;
        position:absolute;
        margin:auto;
        @for $i from 1 through 60{
            &:nth-of-type(#{$i}){
                box-shadow: 3px 0px rgba(255,255,255, - ($i/40)),6px -5px rgba(10, 0, 0,  - ($i/40));
                width:($i * 6) + 0px;
                height:($i * 1) + 0px;
                right:($i * 20) + 0px;
                //bottom:($i * 10) + 0px;
                //-webkit-filter:blur($i/3 + 8px);
                -webkit-filter: blur($i/3 + 8px);
                -moz-filter: blur($i/3 + 8px);
                -o-filter: blur($i/3 + 8px);
                -ms-filter: blur($i/3 + 8px);
                //filter: url(#blur);
                transform-origin: ($i * 4) + 0px ($i * 2) + 0px;
                animation: spin 5s ($i/10) + 0s linear infinite;
                background:rgba(290 + ($i*3),133 + ($i*1) ,105,0.8 - ($i/80));
            }
        }
    }
    z-index: -1;
}

.c{
    %title{
        position:absolute;
        z-index:1;
        text-transform:uppercase;
        text-shadow:0px 10px rgba(0,0,0,.15);
        left:0;
        right:0;
        margin:auto;
        transform:translateY(-50%);
        font-family:lato;
        font-weight:300;
        color:white;
    }
    h1{
        @extend %title !optional;
        letter-spacing:28px;
        font-size:14px;
        top:50%;
    }
    h2{
        @extend %title !optional;
        letter-spacing:10px;
        font-size:10px;
        top:60%;
    }
    text-align:center;
    // background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/overlay.png");
    width:100%;
    height:200px;
    overflow:hidden;
    position:absolute;
    // border:4px solid white;
    left:0;
    right:0;
    margin-left: -50px;
    margin-right: -50px;
    margin:auto;
    top:50%;
    transform:scaleX(-1) scaleY(-1) translateY(45%) translateX(-5%);
    .d{
        // border:2px solid rgba(255,255,255,.1);
        border-radius:400px;
        position:absolute;
        margin:auto;
        @for $i from 1 through 60{
            &:nth-of-type(#{$i}){
                box-shadow: 3px 0px rgba(255,255,255, - ($i/40)),6px -5px rgba(10, 0, 0,  - ($i/40));
                width:($i * 6) + 0px;
                height:($i * 1) + 0px;
                right:($i * 20) + 0px;
                //bottom:($i * 10) + 0px;
                //-webkit-filter:blur($i/3 + 8px);
                -webkit-filter: blur($i/3 + 8px);
                -moz-filter: blur($i/3 + 8px);
                -o-filter: blur($i/3 + 8px);
                -ms-filter: blur($i/3 + 8px);
                //filter: url(#blur);
                transform-origin: ($i * 4) + 0px ($i * 2) + 0px;
                animation: spin 5s ($i/10) + 0s linear infinite;
                background:rgba(290 + ($i*3),133 + ($i*1) ,105,0.8 - ($i/80));
            }
        }
    }
    z-index: -1;
}

@keyframes spin{
    0%{transform:rotate(0deg)}
    100%{transform:rotate(25deg)}
}
</style> -->

<template>
    <div>
        <div v-bind:class="containerClass">
            <div v-bind:class="smokeClass" v-for="i in 90" :key="i"></div>
        </div>
        <!-- <div class="c">
        <div class="d" v-for="i in 90" :key="i"></div>
    </div> -->
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "smoke-effect",
    props: {
        classType: {
            type: String,
            default: ''
        }
    },
    computed: {
        containerClass() {
            let classes = {};
            switch (this.classType) {
                case 'human':
                    classes = { 'smoke-container': true, 'orientation-left': true };
                    break;
                case 'beast':
                    classes = { 'smoke-container': true, 'orientation-right': true };
                    break;
            
                default:
                    classes = { 'smoke-container': true };
                    break;
            }
            return classes;
        },
        smokeClass() {
            let classes = {};
            switch (this.classType) {
                case 'human':
                    classes = { 'smoke': true, 'smoke-blue': true };
                    break;
                case 'beast':
                    classes = { 'smoke': true, 'smoke-orange': true };
                    break;
            
                default:
                    classes = { 'smoke': true };
                    break;
            }
            return classes;
        }
    }
});
</script>

<style lang="scss" scoped>
.smoke-container {
    width: 100%;
    height: 99vw;
    overflow: visible;
    position: absolute;
    // border:4px solid white;
    // left:0;
    right: 0;
    margin: auto;
    top: 50%;
    bottom: 100%;
    transform: rotate(90deg);

    .smoke {
        // border:2px solid rgba(255,255,255,.1);
        border-radius: 400px;
        position: absolute;
        margin: auto;

        @for $i from 1 through 60 {
            &:nth-of-type(#{$i}) {
                box-shadow: 3px 0px rgba(255, 255, 255, - ($i/40)), 6px -5px rgba(10, 0, 0, - ($i/40));
                width: ($i * 6) + 0px;
                height: ($i * 1) + 0px;
                right: ($i * 20) + 0px;
                //bottom:($i * 10) + 0px;
                //-webkit-filter:blur($i/3 + 8px);
                -webkit-filter: blur($i/3 + 8px);
                -moz-filter: blur($i/3 + 8px);
                -o-filter: blur($i/3 + 8px);
                -ms-filter: blur($i/3 + 8px);
                //filter: url(#blur);
                transform-origin: ($i * 4) + 0px ($i * 2) + 0px;
                animation: spin 10s ($i/10) + 0s linear infinite;
                background: rgba(250 + ($i*5), 100 + ($i*1), 80, 0.5 - ($i/120));
            }
        }
    }

    z-index: -1;
}

.smoke-container {
    .smoke.smoke-orange {
        @for $i from 1 through 60 {
            &:nth-of-type(#{$i}) {
                background: rgba(250 + ($i*5), 100 + ($i*1), 80, 0.5 - ($i/120));
            }
        }
    }
}

.smoke-container {
    .smoke.smoke-blue {
        @for $i from 1 through 60 {
            &:nth-of-type(#{$i}) {
                background: rgba(112, 184 + ($i*1), 241 + ($i*5), 0.5 - ($i/120));
            }
        }
    }
}

.orientation-left {
    transform: rotate(270deg) scaleX(-1);
}

.orientation-right {
    transform: rotate(90deg);
}

@keyframes spin {
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(25deg)
    }
}
</style>


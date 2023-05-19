<template>
    <v-theme-provider dark>
        <section id="hero" class="bg-slate">
            <!-- <div class="scrollable-content"> -->
            <div class="hero-container">
                <video class="hero hero-background" preload="metadata" data-testid="hero:video" loop muted autoplay>
                    <source src="/vid/hero-blurred.webm" type="video/webm">
                </video>
                <!-- <div> -->
                <!-- <video class="video video-foreground" preload="metadata" data-testid="hero:video" loop muted autoplay>
                        <source src="/vid/hero.webm" type="video/webm">
                    </video> -->
                <div class="hero-description" preload="metadata">
                    <!-- <v-img :max-width="$vuetify.breakpoint.smAndDown ? '300px' : '30vw'" src="img/logo_sm.png"
                        preload="metadata" /> -->
                    <v-img :max-width="$vuetify.breakpoint.smAndDown ? '400px' : '40vw'" src="img/official-logo.png"
                        preload="metadata" />
                    <v-btn to="/download" class="mt-6 swipe-animation primary elevation-3 white--text" x-large tile raised>
                        Play now
                    </v-btn>
                </div>
                <!-- </div> -->
            </div>
            <!-- </div> -->
            <div class="scrollable-content">
                <!-- News BANNER -->
                <div class="vertical-fade-reverse white--text fade-overlay">                 
                    <news-banner></news-banner>
                </div>
                <!-- /NEWS BANNER -->

                <!-- CONTENT -->
                <div class="radial-fade">
                    <img class="content-image" src="img/backgrounds/3.png" alt="Behe-Scout" />
                </div>
                <!-- /CONTENT -->

                <!-- TEXT SECTION -->
                <div class="vertical-fade-reverse white--text mx-auto d-flex flex-column align-center justify-center fade-overlay"
                    style="height: 300px">
                    <div class="d-flex flex-column align-center justify-center" data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom" data-aos-duration="1500" data-aos-offset="0"
                        data-aos-easing="ease-in-sine">
                        <div :class="[$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-3']"
                            class="section-heading text-center">
                            JOIN THE BATTLE FOR NEWERTH
                            <divider borderWidth="6" data-aos-anchor-placement="center-bottom" data-aos="flip-left" data-aos-easing="ease-out" data-aos-duration="3000"></divider>
                        </div>
                        <!-- <img src="img/hunter.gif" alt="Hunter" />
                    <img src="img/predator.gif" alt="Predator" />
                    <img src="img/behemoth.gif" alt="Behemoth" />
                    <img src="img/conjurer.gif" alt="Conjurer" /> -->
                    </div>
                </div>
                <!-- /TEXT SECTION -->

                <!-- CONTENT -->
                <div class="radial-fade">
                    <video class="video video-background" preload="metadata" data-testid="hero:video" loop muted autoplay>
                        <source src="/vid/savage2overview.mp4" type="video/mp4">
                    </video>
                </div>
                <!-- /CONTENT -->

                <!-- TEXT SECTION -->
                <div class="vertical-fade-reverse white--text d-flex flex-column align-center justify-center fade-overlay"
                    style="height: 300px">
                    <div class="d-flex flex-column align-center justify-center" data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom" data-aos-duration="1500" data-aos-offset="0"
                        data-aos-easing="ease-in-sine">
                        <div :class="[$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-3']"
                            class="section-heading text-center">
                            CHOOSE YOUR FACTION
                            <divider borderWidth="6" data-aos-anchor-placement="center-bottom" data-aos="flip-left" data-aos-easing="ease-out" data-aos-duration="3000"></divider>
                        </div>
                    </div>

                </div>
                <!-- /TEXT SECTION -->

                <!-- CONTENT -->
                <div class="radial-fade white--text d-flex flex-column align-center justify-center" style="height: 1000px">
                    <v-img src="img/hvb-background.png" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="100%"
                        width="100%" position="center center" cover>
                        <v-row style="height: 100%;" justify="space-between" align="center">
                            <v-col cols="auto">
                                <!-- <smoke-effect></smoke-effect> -->
                                <div class="glow-wrapper-human">
                                    <img class="faction-image content-image" src="img/human-legion-title.png"
                                        alt="Human Legion" data-aos="fade-right" data-aos-anchor-placement="center-bottom"
                                        data-aos-duration="1000" data-aos-offset="0" data-aos-easing="ease-in-cubic" />
                                </div>
                                <smoke-effect :classType="'human'"></smoke-effect>
                            </v-col>
                            <v-col cols="auto">
                                <!-- <div> -->
                                <div class="glow-wrapper-horde">
                                    <img class="faction-image content-image" src="img/beast-horde-title.png"
                                        alt="Beast Horde" data-aos="fade-left" data-aos-anchor-placement="center-bottom"
                                        data-aos-duration="1000" data-aos-offset="0" data-aos-easing="ease-in-cubic" />
                                </div>
                                <smoke-effect :classType="'beast'"></smoke-effect>
                                <!-- </div> -->
                                <!-- </div> -->
                                <!-- <div ref="swiper" class="swiper">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <img src="img/conjurer.gif" alt="Conjurer" />
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="img/hunter.gif" alt="Hunter" />
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="img/predator.gif" alt="Predator" />
                                            </div>
                                            <div class="swiper-slide">
                                                <img src="img/behemoth.gif" alt="Behemoth" />
                                            </div>
                                            <div class="swiper-pagination" slot="pagination"></div>
                                            <div class="swiper-button-next" slot="button-next"></div>
                                            <div class="swiper-button-prev" slot="button-prev"></div>
                                        </div>
                                    </div> -->
                            </v-col>
                        </v-row>
                        <!-- <v-row> -->

                        <!-- </v-row> -->
                    </v-img>
                </div>
                <!-- /CONTENT -->

                <!-- <div class="vertical-fade-reverse my-12 white--text mx-auto d-flex flex-column align-center justify-center"
                    style="height: 1000px" data-aos="fade-up" data-aos-anchor-placement="center-bottom"
                    data-aos-duration="1500" data-aos-offset="0" data-aos-easing="ease-in-cubic">
                    <v-container class="d-flex flex-column align-center justify-center">
                        <span :class="[$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-3']">
                            PLAY FREE NOW
                        </span>

                    </v-container>
                </div> -->

                <!-- TEXT SECTION -->
                <div class="vertical-fade-reverse fade-overlay" style="height: 300px">
                    <div class="d-flex flex-column align-center justify-center white--text" data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom" data-aos-duration="1500" data-aos-offset="0"
                        data-aos-easing="ease-in-sine">
                        <!-- <span :class="[$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-3']" class="section-heading my-6">
                            PLAY FREE NOW
                        </span>
                        <download-control></download-control> -->
                    </div>
                </div>
                <!-- /TEXT SECTION -->

                <!-- CONTENT -->
                <!-- <div class="radial-fade"> -->
                    <div class="vertical-fade-bottom">
                    <v-img src="img/battle-background.png" height="100%" width="100%" position="center center" cover>
                        <div class="d-flex flex-column align-center justify-center white--text" style="height: 100%;"
                            data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1500"
                            data-aos-offset="0" data-aos-easing="ease-in-sine">
                            <div :class="[$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-3']"
                                class="section-heading text-center my-6">
                                PLAY FREE NOW
                                <divider borderWidth="6" data-aos-anchor-placement="center-bottom" data-aos="flip-left" data-aos-easing="ease-out" data-aos-duration="3000"></divider>
                            </div>
                            <download-control></download-control>
                        </div>
                    </v-img>
                    </div>
                    <!-- <img class="content-image" src="img/battle-background.png" alt="Battle-Background" /> -->
                <!-- </div> -->
                <!-- /CONTENT -->
            </div>
        </section>
    </v-theme-provider>
</template>

<script lang="ts">
import AOS from 'aos';
import 'aos/dist/aos.css';
import Vue from "vue";
import NewsBanner from "@/components/news/news-banner.vue";
import DownloadControl from "@/components/download-control.vue";
import SmokeEffect from "@/components/smoke-effect.vue";
import Swiper, { Pagination } from 'swiper'
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
import 'swiper/swiper-bundle.css';


export default Vue.extend({
    name: 'index',
    components: {
        NewsBanner,
        DownloadControl,
        SmokeEffect
    },
    setup() {
        return {
            modules: [Pagination],
            // modules: [EffectCoverflow, Pagination],
        };
    },
    data() {
        return {
            swiperOptions: {
                // Add your options here
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                // And if we need scrollbar
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
                loop: true,
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }
            }
        }
    },
    mounted() {
        AOS.init({
            once: false
        });

        new Swiper(this.$refs.swiper as any, {
            // configure Swiper to use modules
            // Optional parameters
            loop: true,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });

        // setTimeout(() => {
        //     window.dispatchEvent(new Event('scroll'));
        // }, 3500);
    },
    beforeDestroy() {
    },
    methods: {
        goNext() {
            (this.$refs.swiper as any).swiper.slideNext();
        },
    },
});
</script>

<style scoped>
.hero-background {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.video-background {
    width: 100%;
    height: 100%;
    /* position: absolute; */
    /* top: 0;
    left: 0; */
}

.video {
    /* position: absolute; */
    /* top: 0;
    left: 0; */
    width: 100%;
    position: relative;
}

.content-image {
    width: 100%;
    position: relative;
}

.video-foreground {
    position: relative;
    transform: scale(1.4) translateX(-20%) translateY(20%);
    /* Make it 20% smaller */
    margin: 0 auto;
    margin-bottom: -50px;
    /* Add a negative margin to the bottom */
    max-height: 100%;
    overflow: hidden;
    box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12) !important;
}

.hero {
    object-fit: cover;
    /* width: 100%;
    height: 100%; */
    position: absolute;
    /* top: 0;
    left: 0; */
}

.hero-container {
    position: relative;
    width: 100%;
    height: 100%;
    /* overflow: hidden; */
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 300px;
    z-index: 1;
}

.hero-description {
    padding-top: 100px;
    /* padding-bottom: 100px; */
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.scrollable-content {
    /* background: linear-gradient(to bottom, transparent 50%, #0c0c0c 100%),
        linear-gradient(to top, transparent 50%, #0c0c0c 100%) !important;
    background-repeat: repeat;
    background-size: cover;
    position: relative; */
    /* padding-top: 50px;
    padding-bottom: 100px; */

    margin-bottom: -7px;
}

.content-row {
    width: 100%;
    /* height: 500px; */
    padding: 10px;
    padding-bottom: 50px;
    /* visibility: hidden; */
    border-style: inset;
    border-left: 0;
    border-right: 0;
    background-color: rgba(30, 30, 30, 0.8);
}

.card-border {
    border-radius: 0;
    /* padding: 5px; */
}

.card-border>div {
    padding: 5px;
    /* border: 1px solid grey; */
    width: 100%;
    height: 100%;
}

.carbon-pattern {
    background: linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
        linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
        linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
        linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
        linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
        linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
    background-color: #131313;
    background-size: 16px 14px;
}

.faction-image {
    background-size: cover;
    position: relative;
    width: 350px;
}

.glow-wrapper-horde {
    position: relative;
    display: inline-block;
    border-radius: 8px;
    transition: background 0.5s ease;
}

.glow-wrapper-horde::before {
    content: '';
    position: absolute;
    width: 400%;
    /* Increase/decrease these values to adjust the size of the glow */
    height: 400%;
    top: 30%;
    left: 40%;
    transform: translate(-35%, -50%) rotate(90deg);
    background: radial-gradient(ellipse at center,
            rgba(250, 133, 105, 0.549),
            rgba(250, 133, 105, 0.349),
            rgba(250, 133, 105, 0.149),
            rgba(250, 133, 105, 0.049),
            rgba(250, 133, 105, 0.001),
            transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
}

.glow-wrapper-horde:hover::before {
    opacity: 1;
}

.glow-wrapper-human {
    position: relative;
    display: inline-block;
    border-radius: 8px;
    transition: background 0.5s ease;
}

.glow-wrapper-human::before {
    content: '';
    position: absolute;
    width: 400%;
    /* Increase/decrease these values to adjust the size of the glow */
    height: 400%;
    bottom: 30%;
    right: 40%;
    transform: translate(35%, 50%) rotate(270deg);
    background: radial-gradient(ellipse at center,
            rgba(112, 184, 241, 0.549),
            rgba(112, 184, 241, 0.349),
            rgba(112, 184, 241, 0.149),
            rgba(112, 184, 241, 0.049),
            rgba(112, 184, 241, 0.001),
            transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
}

.glow-wrapper-human:hover::before {
    opacity: 1;
}

@keyframes custom-animation {
    from {
        visibility: hidden;
    }

    0% {
        clip-path: polygon(100% 100%, 100% 100%, 100% 100%);
    }

    100% {
        clip-path: polygon(100% 100%, -200% 100%, 100% -200%);
    }

    to {
        visibility: visible;
    }
}

[data-aos="custom-animation"].aos-animate {
    opacity: 1;
    transform: translateY(0);
    animation-name: custom-animation;
    animation-duration: 3000ms;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.1, 1);
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
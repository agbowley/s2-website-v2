
declare module 'swiper/vue' {
    import { DefineComponent } from 'vue';
    import SwiperClass from 'swiper/types/swiper-class';
  
    const Swiper: DefineComponent;
    const SwiperSlide: DefineComponent<{
      tag: {
        type: StringConstructor;
        default: string;
      };
      swiperRef: SwiperClass | any;
      zoom: { type: BooleanConstructor; default: undefined };
      virtualIndex: {
        type: StringConstructor | NumberConstructor;
        default: undefined;
      };
    }>;
  
    export { Swiper, SwiperSlide };
  }
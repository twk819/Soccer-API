<template>
    <v-container fluid fill-height class="home-hero px-0 py-5" >
        <v-layout justify-center align-start>
            <!-- <v-carousel>
            <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade"
                transition="fade"
            ></v-carousel-item>
        </v-carousel> -->
            <v-carousel max dark>
                <v-carousel-item v-for="(slide, i) in slides" :src="slide.src" :key="i">
                <v-img>
                    <v-layout align-center justify-space-around column class="hidden-sm-down text-overlay ma-3">
                        <div class="">
                            <h3 class="display-3">{{ slide.title }}</h3>
                        </div>
                        <div class="pa-5">
                            <span>{{ slide.text }}</span>
                            <!-- <span class="text-overlay pa-5">{{ slide.text }}</span> -->
                        </div>
                        
                    </v-layout>
                </v-img>
                </v-carousel-item>
            </v-carousel>
            <!-- <div class="display-4 font-weight-black white--text text-xs-center">HEALTHY MEALS</div>
            <div class="display-4 font-weight-black white--text text-xs-center mb-3">FOR YOUR TABLE</div>
            <div class="display-1 font-weight-bold white--text text-xs-center">Finally be a foodie at home with fresh, chef-prepared meals delivered daily to your door.</div>
            <v-btn fab class="mt-5 brown darken-4">
            <v-icon large color="white">expand_more</v-icon>
            </v-btn> -->
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero',
    components: {
    },
    data() {
        return {
            slides: [
                {
                    title: 'one',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis purus vel enim suscipit, vitae volutpat ante scelerisque. Pellentesque blandit malesuada dui, sed aliquet risus molestie non',
                    src: 'https://images.wallpaperscraft.com/image/starry_sky_man_light_glitter_118118_1920x1080.jpg'
                },
                {
                    title: 'two',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis purus vel enim suscipit, vitae volutpat ante scelerisque. Pellentesque blandit malesuada dui, sed aliquet risus molestie non',
                    src: 'https://images.alphacoders.com/944/thumb-1920-944300.jpg'
                }
            ]
        }
    }
};
</script>

<style scoped>


.text-overlay {
  text-align: center;
  width: 60%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
  background: rgba(0, 0, 0, 0.4);
  font-family: "Open Sans", sans-serif;
  border-radius: 15px 50px 30px 5px;
}

h3 {
  color: white;
  font-size: 48px;
  font-weight: bold;
  padding: 40px 20px;
}

</style>
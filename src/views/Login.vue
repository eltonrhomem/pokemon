/* eslint-disable no-useless-escape */
<template>
  <div id="Login">
    <audio src="..\\media\\maintheme.mp3" autoplay loop></audio>
    <v-app id="inspire">
      <v-app id="inspire">
        <v-content>
          <v-container class="fill-height" fluid style>
            <v-row align="center" justify="center">
              <v-col cols="12">
                <v-img
                  src="..\media\pokemon.png"
                  aspect-ratio="1.7"
                  :contain="true"
                  height="200px"
                ></v-img>
              </v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8" md="4">
                <v-card class="elevation-12">
                  <v-toolbar color="primary" dark flat>
                    <v-toolbar-title>Login form</v-toolbar-title>
                    <v-spacer></v-spacer>
                  </v-toolbar>
                  <v-card-text>
                    <v-form>
                      <v-text-field
                        label="Login"
                        name="login"
                        prepend-icon
                        type="text"
                      ></v-text-field>
                      <v-text-field
                        id="password"
                        label="Password"
                        name="password"
                        prepend-icon
                        type="password"
                      ></v-text-field>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="login()">Login</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-content>
      </v-app>
    </v-app>
  </div>
</template>

<script>
//import VueAudio from "vue-audio";
//import { Howl } from "howler";

export default {
  //el: "Login",
  components: {
    // VueAudio,
    //  Howl,
  },
  mounted() {
    // Setup the new Howl.
    // const sound = new Howl({
    //   src: ["..\\media\\maintheme.mp3"],
    //   autoplay: true,
    //   volume: 1.0,
    //   html5: true,
    //   loop: true,
    //   preload: true,
    // });
    // // Play the sound.
    // sound.play();
    // console.log(sound);
    // eslint-disable-next-line no-useless-escape
    // const audio = new Audio("..\media\maintheme.mp3");
    // audio.play();
  },
  methods: {
    async login() {
      this.$router.push({ path: "/pokemon" });
    },
  },
};
</script>

<style></style>

<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      height="100"
    >
      <div style="margin-left:-10px">
        <v-img
          contain
          max-height="100px"
          src="./assets/analytics.png"
        ></v-img>
      </div>
      <v-toolbar-title
        class="font-weight-black headline"
        style="padding-left:20px"
      >
        <span class="hidden-sm-and-up">
          Ang <br> Jin <br> Sheng
        </span>

        <span class="hidden-xs-only">
          Ang Jin Sheng
        </span>
      </v-toolbar-title>

    </v-app-bar>

    <v-content>
      <section id="hero">
        <v-row no-gutters>
          <v-img
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            src="./assets/tree.jpg"
          >
            <v-theme-provider dark>
              <v-container fill-height>
                <v-row
                  align="center"
                  class="white--text mx-auto"
                  justify="center"
                >
                  <v-col
                    class="white--text text-center"
                    cols="12"
                    tag="h1"
                  >
                    <span
                      class="font-weight-black"
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                    >
                      Hi, I am <span style="color:#FFDB58">Ang Jin Sheng</span> <br>

                    </span>

                    <br>

                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-1': 'display-1']"
                      class="font-weight-light"
                    >
                      I specialized in data analytics and machine learnings.
                    </span>

                  </v-col>

                  <v-btn
                    class="align-self-end"
                    fab
                    outlined
                    @click="$vuetify.goTo('#about-me')"
                  >
                    <v-icon>mdi-chevron-double-down</v-icon>
                  </v-btn>
                </v-row>
              </v-container>
            </v-theme-provider>
          </v-img>
        </v-row>
      </section>

      <section id="about-me">
        <div class="py-6"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">ABOUT ME</h2>

          <v-responsive
            class="mx-auto title font-weight-light mb-8"
            max-width="720"
          >
            I am currently studying Doctor of Philosophy in Universiti Utara Malaysia. 
            My research topic is mining XML format business process log data. 
            I am a graduate of Masters of Technology, majoring in Enterprise Systems accompanied
            with Bachelor of Industrial Statistics. 
            I have an interest in how technology can be used by society to produce optimum work.
            I am a fast learner and like being challenged which motivates me to do my best. I would like
            an opportunity to put my learnings into practice and be a helpful contribution to your company.

          </v-responsive>

          <v-avatar
            class="elevation-12 mb-12"
            size="128"
          >
            <v-img src="./assets/profilePic.jpg"></v-img>
          </v-avatar>

          <div></div>

          <v-btn
            class="align-self-end"
            fab
            outlined
            @click="$vuetify.goTo('#resume')"
          >
            <v-icon>mdi-chevron-double-down</v-icon>
          </v-btn>

        </v-container>

        <div class="py-6"></div>
      </section>

      <section
        id="resume"
        class="grey lighten-3"
      >
        <div class="py-6"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">RESUME</h2>

          <v-card
            class="py-12 px-4"
            color="grey lighten-5"
            flat
          >
            <v-theme-provider dark>
              <div>

                <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-1': 'display-1']"
                  class="font-weight-light"
                >
                  Education

                </span> <br>
                <span
                  max-width="720"
                  style="font-size:26px;font-weight:bold;"
                >
                  Universiti Utara Malaysia
                </span>
                <br>
                <span style="font-size:24px">Malaysia</span>
                <br>
                <span style="font-size:20px">Doctor of Philosophy</span>
                <br>
                <span style="font-size:18px;color:blue">Currently</span>
                <br>
                <span style="font-size:16px;color:grey">Research Title: Mining XML Format Business Process Log Data</span>
                <br>
                <br>
                <span
                  max-width="720"
                  style="font-size:26px;font-weight:bold;"
                >
                  Federation University Australia
                </span>
                <br>
                <span style="font-size:24px">Australia</span>
                <br>
                <span style="font-size:20px">Masters of Technology</span>
                <br>
                <span style="font-size:18px;color:blue">2017 - 2018</span>
                <br>
                <span style="font-size:16px;color:grey">Majoring in Enterprise Systems</span>
                <br>
                <br>
                <span
                  max-width="720"
                  style="font-size:26px;font-weight:bold;"
                >
                  Universiti Utara Malaysia
                </span>
                <br>
                <span style="font-size:24px">Malaysia</span>
                <br>
                <span style="font-size:20px">Bachelor of Science</span>
                <br>
                <span style="font-size:18px;color:blue">2012-2016</span>
                <br>
                <span style="font-size:16px;color:grey">Majoring in Industrial Statistics</span>
                <br>
                <br>
                
                <v-divider light></v-divider> <br>
                <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-1': 'display-1']"
                  class="font-weight-light"
                >
                  Professional Membership

                </span> <br>
                <span
                  max-width="720"
                  style="font-size:26px;font-weight:bold;"
                >
                  Golden Key International Honour Society

                </span>
                <br>
                <span style="font-size:18px;color:blue">2018</span>
                <br>

              </div>
            </v-theme-provider> <br><br>
            <v-btn
              class="align-self-end"
              fab
              outlined
              @click="$vuetify.goTo('#mywork')"
            >
              <v-icon>mdi-chevron-double-down</v-icon>
            </v-btn>
          </v-card>

        </v-container>

        <div class="py-1"></div>
      </section>

      <section
        id="mywork"
        class="grey lighten-2"
      >
        <div class="py-6"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">MY PROJECTS</h2>

          <v-card
            class="py-4 "
            color="grey lighten-2"
            flat
            align="center"
          >
            <v-theme-provider>
              <div>
                <v-row
                  align="center"
                  justify="center"
                >
                  <v-flex
                    xs12
                    sm5
                    md5
                    style="padding-left:5px;padding-right:5px"
                  >
                    <v-card height="450px">
                      <v-card-text>
                        <div>
                          <v-img
                            width="180px"
                            src="./assets/georsys.jpg"
                          ></v-img>

                        </div><br>
                        <div>
                          <span
                            max-width="720"
                            style="font-size:26px;font-weight:bold;color:black"
                          >

                            Graduate Enterpreneur Opportunity Recognition
                          </span> <br>
                          Graduate Entrepreneur Opportunity Recognition (GEORSys) is a website written in R Shiny. The main function of GEORSys is to crawl data from Instagram based on Hashtags and find out which keywords have the highest frequency in Instagram.
                        </div>
                        <v-btn
                          fab
                          text
                          small
                          a
                          href="https://123ang.shinyapps.io/shinyApp"
                          target="_blank"
                        >
                          <v-icon>mdi-link</v-icon>
                        </v-btn>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex
                    xs12
                    sm5
                    md5
                    style="padding-left:5px;padding-right:5px;"
                  >
                    <v-card height="450px">
                      <v-card-text>
                        <div>
                          <v-img
                            width="180px"
                            src="./assets/UTLC_logo.png"
                          ></v-img>

                        </div> <br>
                        <div>
                          <span
                            max-width="720"
                            style="font-size:26px;font-weight:bold;color:black"
                          >
                            UTLC Analytic 
                          </span> <br>
                          UTLC Analytic is a system that allows University Teaching and Learning Center (UTLC) in Universiti Utara Malaysia (UUM) to analyze lecturers' performances and able to choose lecturers for certain training.  
                        </div>
                        <v-btn
                          fab
                          text
                          small
                          a
                          href="http://acaprof.tlgateway.edu.my/"
                          target="_blank"
                        >
                          <v-icon>mdi-link</v-icon>
                        </v-btn>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-row>
              </div>
            </v-theme-provider> <br><br>
            <v-btn
              class="align-self-end"
              fab
              outlined
              @click="$vuetify.goTo('#workwith')"
            >
              <v-icon>mdi-chevron-double-down</v-icon>
            </v-btn>
          </v-card>

        </v-container>

        <div class="py-6"></div>
      </section>

      <section
        id="workwith"
        style="background-color: #9AB2B0;"
      >
        <div class="py-6"></div>
        <h2
          class="display-2 font-weight-bold mb-3"
          align="center"
        >I WORK WITH</h2>
        <v-parallax
          :height="$vuetify.breakpoint.smAndDown ? 780 : 600"
          src="./assets/analytic_2.jpg"
        >

          <v-card
            color="rgb(0, 0, 0, 0.7)"
            align="center"
            justify="center"
          >
            <br><br><br>
            <v-container>

              <v-row>
                <v-flex
                  xs6
                  sm4
                  md2
                >
                  <v-img
                    style="margin-top:5px"
                    width="100px"
                    src="./assets/javascript.png"
                  ></v-img> <br>
                  <p style="font-size:20px;color:white;margin-top:5px">JavaScript</p>
                </v-flex>
                <v-flex
                  xs6
                  sm4
                  md2
                >
                  <v-img
                    style="margin-top:5px"
                    width="130px"
    
                    src="./assets/R logo.png"
                  ></v-img> <br>
                  <p style="font-size:20px;color:white;margin-top:0px">R language</p>
                </v-flex>
                <v-flex
                  xs6
                  sm4
                  md2
                >
                  <v-img
                    width="110px"
                    src="./assets/python.jpg"
                    style="margin-top:0px"
                  ></v-img>
                  <p style="font-size:20px;color:white;margin-top:23px">Python</p>
                </v-flex>
                <v-flex
                  xs6
                  sm4
                  md2
                >
                  <v-img
                    width="150px"
                    src="./assets/php.png"
                    style="margin-top:5px"
                  ></v-img>
                  <p style="font-size:20px;color:white;margin-top:50px">Php</p>
                </v-flex>
                <v-flex
                  xs6
                  sm4
                  md2
                >
                  <v-img
                    width="110px"
                    src="./assets/html.png"
                    style="margin-top:0px"
                  >
                  </v-img>
                  <p style="font-size:20px;color:white;margin-top:23px">HTML</p>
                </v-flex>

              </v-row>

            </v-container>
          </v-card>
          <div
            class="display-2 font-weight-bold mb-3"
            align="center"
            style="margin-top:50px"
          >
            <v-btn
              fab
              class="text-center"
              @click="$vuetify.goTo('#contact')"
            >
              <v-icon>mdi-chevron-double-down</v-icon>
            </v-btn>
          </div>

        </v-parallax>

      </section>

      <v-sheet
        id="contact"
        color="#333333"
        dark
        tag="section"
        tile
      >
        <div class="py-6"></div>

        <v-container>
          <h2 class="display-1 font-weight-bold mb-3 text-center">Have a project idea? Contact me</h2>

          <v-theme-provider light>
            <form
              action="https://formsubmit.co/angjinsheng@gmail.com"
              method="POST"
            >
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    flat
                    label="Name*"
                    name="name"
                    solo
                    class="form-control"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    flat
                    label="Email*"
                    type="email"
                    name="email"
                    solo
                    class="form-control"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    flat
                    label="Subject*"
                    name="subject"
                    solo
                    class="form-control"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    flat
                    label="Message*"
                    name="message"
                    solo
                    class="form-control"
                  ></v-textarea>
                </v-col>

                <v-col
                  class="mx-auto"
                  cols="auto"
                >
                  <v-btn
                    color="primary"
                    x-large
                    type="submit"
                  >
                    Submit
                  </v-btn>
                </v-col>
              </v-row>
            </form>
          </v-theme-provider>
        </v-container>

        <div class="py-6"></div>
      </v-sheet>
    </v-content>

    <v-footer
      class="justify-center"
      color="#292929"
      height="100"
    >
      <div class="title font-weight-light grey--text text--lighten-1 text-center">
        &copy; {{ (new Date()).getFullYear() }} Ang Jin Sheng
      </div>
    </v-footer>
  </v-app>
</template>
 <script>
export default {
  data() {
    return {
      name: null,
      email: null,
      subject: null,
      message: null
    };
  },
  methods: {
    submit() {
      console.log(this.name, this.email, this.subject, this.message);
    }
  }
};
</script>
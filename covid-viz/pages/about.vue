<template>
  <v-container>
    <v-card>
      <v-card-title>Whats is corona virus? </v-card-title>
      <v-card-text>
        Coronaviruses are a group of related viruses that cause diseases in mammals and birds. In humans, coronaviruses cause respiratory tract infections that can be mild, such as some cases of the common cold (among other possible causes, predominantly rhinoviruses), and others that can be lethal, such as SARS, MERS, and COVID-19. Symptoms in other species vary: in chickens, they cause an upper respiratory tract disease, while in cows and pigs they cause diarrhea. There are yet to be vaccines or antiviral drugs to prevent or treat human coronavirus infections.

Coronaviruses constitute the subfamily Orthocoronavirinae, in the family Coronaviridae, order Nidovirales, and realm Riboviria.[5][6] They are enveloped viruses with a positive-sense single-stranded RNA genome and a nucleocapsid of helical symmetry. The genome size of coronaviruses ranges from approximately 27 to 34 kilobases, the largest among known RNA viruses.[7] The name coronavirus is derived from the Latin corona, meaning "crown" or "halo", which refers to the characteristic appearance reminiscent of a crown or a solar corona around the virions (virus particles) when viewed under two-dimensional transmission electron microscopy, due to the surface being covered in club-shaped protein spikes.
      </v-card-text>
      <v-card-actions>
        <v-btn :href="symptomAction">Read More ></v-btn>
        <v-btn :href="newsAction">Google News ></v-btn>
      </v-card-actions>
    </v-card>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Symptoms</v-card-title>
          <v-card-text>
            People may be sick with the virus for 1 to 14 days before developing symptoms. The most common symptoms of coronavirus disease (COVID-19) are fever, tiredness, and dry cough. Most people (about 80%) recover from the disease without needing special treatment.
    More rarely, the disease can be serious and even fatal. Older people, and people with other medical conditions (such as asthma, diabetes, or heart disease), may be more vulnerable to becoming severely ill.
    <br>
    People may experience:
    cough <br>
    fever <br>
    tiredness <br>
    difficulty breathing (severe cases)
          </v-card-text>
          <v-card-actions>
            <v-btn :href="symptomAction">Read More ></v-btn>
            <v-btn :href="newsAction">Google News ></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col>
        <v-card>
          <v-card-title>Prevention</v-card-title>
          <v-card-subtitle class="red--text">There’s currently no vaccine to prevent coronavirus disease (COVID-19).
    </v-card-subtitle>
          <v-card-text>
            You can protect yourself and help prevent spreading the virus to others if you:
    Do
    Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub
    Cover your nose and mouth with a disposable tissue or flexed elbow when you cough or sneeze
    Avoid close contact (1 meter or 3 feet) with people who are unwell
    Stay home and self-isolate from others in the household if you feel unwell
    Don't
    Touch your eyes, nose, or mouth if your hands are not clean
          </v-card-text>
          <v-card-actions>
            <v-btn :href="preventionAction">Read More ></v-btn>
            <v-btn :href="newsAction">Google News ></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col>
        <v-card>
          <v-card-title>Treatment </v-card-title>
          <v-card-subtitle>
            There is no specific medicine to prevent or treat coronavirus disease (COVID-19). People may need supportive care to help them breathe.
          </v-card-subtitle>
          <v-card-text>
    Self care
    If you have mild symptoms, stay at home until you’ve recovered. You can relieve your symptoms if you:
    rest and sleep
    keep warm
    drink plenty of liquids
    use a room humidifier or take a hot shower to help ease a sore throat and cough
          </v-card-text>
          <v-card-actions>
            <v-btn :href="symptomAction">Read More ></v-btn>
            <v-btn :href="newsAction">Google News ></v-btn>
          </v-card-actions>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import API from '@/API.js'

export default {
  // components: {
  //   HelloWorld
  // }
  // async created () {
  //   await API.getSummary()
  //     .then(response => {
  //       this.summary = response.Countries
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // },
  data: () => ({
    summary: null,
    symptomAction: 'https://www.google.de/search?newwindow=1&sxsrf=ALeKk00ye1Pk_N3IhdFodzNAnop6nujiZg%3A1585390233546&source=hp&ei=mSJ_XseVH8vlgweFnZqAAw&q=corona+symptoms&oq=corona+symptoms&gs_lcp=CgZwc3ktYWIQAzIECCMQJzIECAAQQzIECAAQQzIECAAQQzIECAAQQzICCAAyAggAMgQIABAKMgIIADICCAA6BwgjEOoCECdQzA5YzA5g3yNoAnAAeACAAXaIAXaSAQMwLjGYAQCgAQKgAQGqAQdnd3Mtd2l6sAEK&sclient=psy-ab&ved=0ahUKEwiHxsvt9rzoAhXL8uAKHYWOBjAQ4dUDCAg&uact=5',
    newsAction: 'https://www.google.de/search?newwindow=1&biw=1366&bih=632&tbm=nws&sxsrf=ALeKk001SCp82gbtF1UlHXdj-z92NDVaUg%3A1585390433829&ei=YSN_XtyZMtmIk74PnpmHuAc&q=corona&oq=corona&gs_l=psy-ab.3...8040.8040.0.8626.1.1.0.0.0.0.93.93.1.1.0....0...1c.1.64.psy-ab..0.0.0....0.nANxIXfZ2uM',
    preventionAction: 'https://www.google.com/search?newwindow=1&sxsrf=ALeKk000zkN_bW9-fNOrGIlU5OmRr9PPoA%3A1585390594370&ei=AiR_XoiVFr2ChbIP6_mE0Ao&q=corona+prevention&oq=corona+prevention&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADIFCAAQzQI6BAgjECc6BAgAEEM6BggAEAoQQzoECAAQClDyxwpYrNsKYOrcCmgCcAB4AYABggKIAewJkgEGMTEuMS4xmAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=0ahUKEwiIntSZ-LzoAhU9QUEAHes8AaoQ4dUDCAs&uact=5'
  })

}
</script>

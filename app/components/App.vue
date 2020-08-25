<template>
    <Page>
        <ActionBar>
          <Label text="Star Wars - Character" class="title" verticalAlignment="center" />
        </ActionBar>

        <!-- <TabView :selectedIndex="selectedIndex" @selectedIndexChange="indexChange" tabTextColor="#d1ccc0" selectedTabTextColor="#ffdd59"> -->
          <!-- <TabViewItem title="Affichage"> -->

            <StackLayout backgroundColor="#4b4b4b">
              <ListPicker ref="selector" :items="filter_cat" height="120" selectedIndex="0" @selectedIndexChange="filterChanged"/>
          
              <StackLayout>
                <ListView for="a_character in getCharacters" height="100%" @itemTap="onItemTap">
                  <v-template>
                    <Character :infos="a_character" />
                  </v-template>
                </ListView>
              </StackLayout>

            </StackLayout>

          <!-- </TabViewItem> -->
          <!-- <TabViewItem title="Ajout"> 
            <StackLayout backgroundColor="#4b4b4b">
              <Label :text="imagePicked" />
              <Button text="Button" @tap="openImagePicker" />
            </StackLayout>
          </TabViewItem>-->
        <!-- </TabView> -->
        
    </Page> 
</template>

<script>
import Vue from 'nativescript-vue';

import Character from '../components/Character'
import CharacterInfos from '../models/CharacterInfos'
import CharacterDetails from '../components/CharacterDetails'
import { ImageAsset } from 'tns-core-modules/image-asset';

const child = new CharacterInfos("The child","Mysterious alien.","A mysterious alien pursued by bounty hunters on behalf of Imperial interests.",1,"child",9,false);
const greef = new CharacterInfos("Greef Karga", "An expeditor.","An expeditor for the Bounty Hunters Guild, Greef Karga runs the trade on Nevarro. He's a middle-man, a connector between clients and bounty hunters.",2, "greef",5,true);
const mando = new CharacterInfos("The Mandalorian", "Bounty hunter.","His body is shielded by beskar armor, his face hidden behind a T-visored mask, and his past is wrapped in mystery. No one is quite sure who this well-equipped stranger is. The Mandalorian is battle-worn and tight-lipped, a formidable bounty hunter in an increasingly dangerous galaxy.",1, "mando",10,false);
const moff = new CharacterInfos("Moff Gideon", "Imperial Moff.","Imperial Moff Gideon is fiercely determined to capture a specific quarry. Clever and formidable, Gideon values power and knowledge.",3, "moff",8,false);
const cara = new CharacterInfos("Cara Dune", "A veteran.","A veteran of the Galactic Civil War who fought under the banner of the Rebellion, Cara Dune is a seasoned warrior. An intimidating brawler and crack shot, Dune has put her days of military discipline behind her, and now has reinvented herself as a mercenary.",1, "cara",7,false);
const kuiil = new CharacterInfos("Kuiil", "A vapor farmer.","A vapor farmer on Arvala-7, Kuiil came to seek peace in an out of the way world, which is now being trespassed upon by criminals and mercenaries. He has worked a lifetime to be free of servitude, and offers valuable skills for those willing to meet his price.",1, "kuiil",9,true);
const armorer = new CharacterInfos("The Armorer", "The Armorer.","The Armorer plays a vital role in keeping the culture of the Mandalorians alive. She forges beskar armor in the ancient tradition of her people.",2, "armorer",6,false);
const pershin = new CharacterInfos("Dr. Pershing", "A man of science.","A man of science, Dr. Pershing works for the mysterious Client. Pershing wants to study the Child.",3, "pershing",4,false);
const client = new CharacterInfos("The Client", "A mysterious Imperial.","A mysterious Imperial who keeps a low profile in a safehouse on Nevarro, the Client is the face behind an otherwise faceless bounty, an off-the-record assignment with a high value.",2, "client",7,false);
const ig11 = new CharacterInfos("IG-11", "Assassin droids.","One of a series of dangerous assassin droids largely outlawed in the galaxy, IG-11 is a hired gun programmed to follow Bounty Hunters Guild protocols to the letter. Reliable and durable, IG-11's thin body is built on an armored substrate that can withstand repeated assaults. It is against his programming to be captured, and he has built-in last-ditch fail-safes to prevent that from ever happening.",1, "ig11",8,true);
const burg = new CharacterInfos("Burg", "Hulking Devaronian.","A hulking Devaronian, Burg is the muscle of a gang of criminals looking to spring a convict from a prison ship with the help of the Mandalorian.",2, "burg",5,false);
const characters = [
        child,
        greef,
        mando,
        moff,
        cara,
        kuiil,
        armorer,
        pershin,
        client,
        ig11,
        burg
        ];

var selector = null;
var filterChoice = 0;

var imagepicker = require("nativescript-imagepicker");
var context = imagepicker.create({ mode: "single" }); // use "multiple" for multiple selection
var that = this;

var fs = require("file-system");
let imageSource = require("image-source");

export default {
  components: {
    Character,
    CharacterDetails
  },

  props: {
    id_c: Number
  },

  data() {
    return {
      characters: characters,
      filter_cat: [
        "Tous",
        "Personnage principal",
        "Personnage secondaire",
        "Personnage tertiaire"
      ],
      filter_choice: filterChoice,
      imagePicked: "Aucun photo"
    }
  },

  methods: {
    onItemTap(e) {
      this.$navigateTo(CharacterDetails, {
        transition: {
          name:'fade',
          duration: 1000
        },
        props: {
          infos: e.item,
        }
      });
    },

    filterChanged() {
      this.filter_choice = selector.nativeView.selectedIndex;
    },

    openImagePicker() {
      context
        .authorize()
        .then(function() {
            return context.present();
        })
        .then(function(selection) {
            selection.forEach(function(selected) {
                // process the selected image
                // Abandonné, ne fonctionne pas -- Perdu trop de temps
                console.log("######################### A ###########################")
                selected.getImage().then(function(imgSource) {
                  console.log("######################### B #############################")
                  let folder = fs.knownFolders.documents();
                  console.log("######################### C #############################")
                  let path = fs.path.join(folder.path, (new Date).getTime()+".png");
                  console.log("######################### D #############################")
                  let saved = imgSource.saveToFile(path,"png");
                  console.log("######################### E #############################")
                  that.imagePicked = path;
                  // https://www.youtube.com/watch?v=uI5cZTC12sU
              })
            });
        }).catch(function (e) {
            // process error
        });
    }
  },

  computed: {
    getCharacters() {
      let c = [];
      if (typeof(this.filter_choice) !== 'undefined') {
        if(this.filter_choice>0) {
          for (let i = 0; i < characters.length; i++) {
            if(characters[i].categ == this.filter_choice) c.push(characters[i]);
          }
        }else c = characters;
      }else c = characters;
      return c;
    },
    getPicture() {
      return imagePicked;
    }
  },
  
  mounted() {
    selector = this.$refs.selector;
  }
}
</script>

<style scoped>
Page {
  background-color: #4b4b4b;
}
ActionBar {
    background-color: #292d30;
    color: #dbdf00;
    height:250px;
}
ListPicker {
    font-size:17px;
    color:#cddbac;
}
.title {
    font-family: 'Montserrat', "Montserrat-Regular";
    font-size:20px;
    color:#dbdf00;
}
</style>

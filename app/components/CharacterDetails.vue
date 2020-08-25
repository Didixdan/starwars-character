<template>
    <Page>
        <ActionBar>
            <Label :text="infos.name" textWrap="true" class="title" /> 
        </ActionBar>
        <StackLayout class="layout">
            <FlexboxLayout flexDirection="column" backgroundColor="#4b4b4b">
                <image :src="image()" class="center" stretch="none" />
                <Label :text="infos.content" textWrap="true" class="description" />
                <Label :text="getState()" textWrap="true" class="status" />
                <Label :text="getRate()" textWrap="true" class="rate" />
                <Label :text="getCateg()" textWrap="true" class="categ" />
            </FlexboxLayout>
            <Button text="Retour" @tap="$navigateBack" width="150" backgroundColor="#84817a"/>
        </StackLayout>
    </Page>
</template>

<script>
import CharacterInfos from '../models/CharacterInfos'

export default {
    name: "CharacterDetails",
    props: {
        infos: CharacterInfos
    },
    methods: {
        image() {
            return `~/assets/pics/${this.infos.getPicture()}`
        },
        
        getState() {
            var lbl = "> Personnage ";
            lbl += this.infos.state==true?"décédé.":"en vie.";
            return lbl;
        },

        getRate() {
            return "> Classement : "+this.infos.rating+"/10";
        },

        getCateg() {
            var lbl = "> Personnage ";
            lbl += this.infos.categ==1?"principale.":this.infos.categ==2?"secondaire.":this.infos.categ==3?"tertiaire.":"non catégorisé.";
            return lbl;
        },
    }
}
</script>

<style scoped>

Page {
  background-color: #4b4b4b;
}

ActionBar {
    background-color: #616161;
    color: #dbdf00;
}

.title {
    font-family: 'Montserrat', "Montserrat-Regular";
    font-size:20px;
    color:#dbdf00;
}

.layout {
    color:#dcdde1;
}

.name {
    font-size:15px;
}

.description {
    margin-top:15em;
    margin-bottom:15em;
    font-size:19px;
}

.status, .rate, .categ {
    font-size:15px;
    color:#dbdf00;
    font-weight: bold;
    margin-bottom:10em;
}
</style>
<template>
    <Page>
        <FlexboxLayout backgroundColor="#4b4b4b">
            <image :src="image()" stretch="none" />
            <FlexboxLayout width="140" flexDirection="column" backgroundColor="#4b4b4b">
                <Label :text="infos.name" class="name" />
                <Label :text="infos.desc" class="description" />
            </FlexboxLayout>
        </FlexboxLayout>
    </Page>
</template>

<script>
import CharacterInfos from '../models/CharacterInfos'

export default {
    name: "Character",
    props: {
        infos: CharacterInfos
    },

    methods: {
        image() {
            return `~/assets/pics/${this.infos.getPicture()}`
        }
    }
}
</script>

<style scoped>

Page {
    font-family: 'Montserrat', "Montserrat-Regular";
    background-color:#4b4b4b;
}

image {
    width: 600px;
    height: auto;
}

.name {
    font-size:17px;
}

.description {
    font-size:13px;
    color:#dcdde1;
}
</style>
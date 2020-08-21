export default class CharacterInfos {
    constructor(c_name,c_desc,c_content,c_categ,c_pic,c_rate,c_state) {
        this.id = new Date().getTime();
        this.name = c_name;
        this.desc = c_desc;
        this.content = c_content;
        this.categ = c_categ;
        this.c_pic = c_pic;
        this.rating = c_rate;
        this.state = c_state;

    }

    getPicture() {
        return `${this.c_pic}.jpeg`;
    }
}
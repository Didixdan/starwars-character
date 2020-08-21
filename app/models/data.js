import CharacterInfos from '../models/CharacterInfos'

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

export default {
data() {
    return {
        characters: [
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
            ],
        }
    },
}
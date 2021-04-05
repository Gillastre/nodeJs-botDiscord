module.exports = class Profils{

    roll;
    deck = {};
    constructor(id,name, health, heroism, wealth, reputation){
        this.id = id;
        this.name = name;
        this.health = health;
        this.heroism = heroism;
        this.wealth = wealth;
        this.reputation = reputation;
    }

    showInfos(){
        return "\nBonjour "+ this.name +", vous avez " + this.heroism + " points d'héroisme, votre richesse est de " + this.wealth + ", et votre réputation de " + this.reputation; 
    }
    showHealth(){
        const spiral = ["","","","",1,"","","","",2,"","","","",3,"","","","",4]
        return `Spiral de la mort :\n${spiral.map((e,i)=>{
            if(i===(19-this.health)){
                return `[ ${e}x ]`
            }else{
                return `[ ${e} ]`
            }
        })}`
    }

    showDeck(){
            return Object.values(this.deck);
    }

    changeStats(type, number){
        switch(type){
            case "heroism":
                this.heroism += number;
                break;
            case "wealth":
                this.wealth += number;
                break;
            case "reputaion":
                this.reputation += number;
                break;
            default:
                return 0;
        }
    }
}
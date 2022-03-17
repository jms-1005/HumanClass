import { Human } from './../Interfaces/human.interface';

export class HumanBeing{
    //properties
    //name;
    // eyeColor;
    // height;
    // weight;
    // hairColor;
    // birthdate;
    dailyWalkMiles = 0;

    constructor(private human:Human){}

    //METHODS
    walk(source, destination){
        // MOVE HUMAN FROM ONE SPOT TO ANOTHER
        console.log(this.human.name + ' walked from ' + source + ' to ' + destination)
    }

    talk(words){
        console.log(this.human.name +  ' says ', words);
    }

    calculateAge(){
        return (31 - this.human.birthdate);
    }

    health(){
        if(this.human.weight > 80){
            return this.human.name + ' not healthy';
        }
        else
            return this.human.name + ' is in perfect health';
    }

}

export class President extends HumanBeing{
    noofMinisters;

    signAgreement(){
        return ('Give citizens each a million dollars');
    }
}
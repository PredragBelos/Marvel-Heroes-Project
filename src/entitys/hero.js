/*Class that present a heroes objects*/
export class Hero {
    constructor(name, image, description){
        try {
            if(!name){
                throw new Error("Hero name must be defined!");
            }
            if(!image){
                throw new Error("Hero image must be defined!");
            }


            this.name = name;
            this.image = image;
            this.description = (description === "") ? "No description" : description;
            
        } catch (error) {
            console.log(error.message);
        }
    }
}
import { Hero } from "../entitys/hero";


/* Function for create heroes list from API*/
export async function getHeroData(url) {
    let request = await fetch(url);
    let data = await request.json();
    let result = await data.data.results.map(hero => {
        return new Hero(hero.name, hero.thumbnail.path + "/portrait_xlarge.jpg", hero.description);
    });

    return result;
}

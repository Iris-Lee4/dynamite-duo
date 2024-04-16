
const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
       {
            id: 1, 
            name: "Joker", 
            power: "manipulation"
       },
       {
            id: 2, 
            name: "Harley Quinn",
            power: "chaos"
       }
    ]
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}

export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}

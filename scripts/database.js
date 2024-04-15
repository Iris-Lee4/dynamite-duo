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
    ]
}

export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}

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
        // Remove this comment and create some villain objects
    ]
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}
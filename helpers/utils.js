import {GAMES_STATIC_DATA} from "../games-staic-data";
import {ALL_GAMES} from "../all-games";

export function getFeaturedGames() {
    return GAMES_STATIC_DATA.filter((event) => event.isFeatured);
}

export function getAllGames() {
    return GAMES_STATIC_DATA;
}

export function getFilteredGames(dateFilter) {
    const { year, month } = dateFilter;

    let filteredGames = GAMES_STATIC_DATA.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });

    return filteredGames;
}

export function getGameById(id) {
    return GAMES_STATIC_DATA.find((event) => event.id === id);

}

export function getGameBySlug(slug) {
    return ALL_GAMES.find((game) => game.slug === slug);
}

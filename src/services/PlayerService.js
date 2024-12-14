const PLAYER_KEY = "players";
export const PlayerService = {
  savePlayer: (player) => {
    const players = PlayerService.getPlayers();
    try {
      if (players == null) {
        localStorage.setItem(PLAYER_KEY, JSON.stringify([player]))
      } else {
        players.push(player);
        localStorage.setItem(PLAYER_KEY, JSON.stringify(players))
      }
    } catch (error) {
      console.error(error);
    }
  },
  getPlayers: () => {
    try {
      const player = localStorage.getItem(PLAYER_KEY);
      return player ? JSON.parse(player) : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  },
};
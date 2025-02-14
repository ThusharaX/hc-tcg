import {PlayerDeckT} from 'common/types/deck'

export const login = (playerName: string) => ({
	type: 'LOGIN',
	payload: playerName,
})

type PlayerInfoT = {
	playerId: string
	playerName: string
	playerSecret: string
	playerDeck: PlayerDeckT
}

export const setPlayerInfo = (playerInfo: PlayerInfoT) => ({
	type: 'SET_PLAYER_INFO' as const,
	payload: playerInfo,
})

export const disconnect = (errorType?: string) => ({
	type: 'DISCONNECT' as const,
	payload: errorType,
})

export const logout = () => ({
	type: 'LOGOUT' as const,
})

export const setNewDeck = (newDeck: PlayerDeckT) => ({
	type: 'SET_NEW_DECK',
	payload: newDeck,
})

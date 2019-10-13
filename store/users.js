export const strict = false
import { firestore } from '~/plugins/firebase.js'

export const state = () => ({
	user: null
})

export const mutations = {
	setUser (state, payload) {
		console.log('Call to setUser mutation: ', payload)
		state.user = payload
	}
}

export const actions = {
	async fetchAuthenticatedUser ({ commit }, payload) {
		console.log('Call to fetchAuthenticatedUser action: ', payload)
		const userId = payload.id
		if (userId) {
			firestore.collection('users').doc(userId).onSnapshot(function(doc) {
				commit('users/setLoadedUser', { ...doc.data(), id: doc.id }, { root: true })
			})
        }
	}
}

export const getters = {
	loadedUser (state) {
		return state.user
	}
}
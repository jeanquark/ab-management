import { firestore, auth, } from '~/plugins/firebase.js'

export const state = () => ({})

export const mutations = {}

export const actions = {
	async signUserUp({ commit, dispatch }, payload) {
		// Promise is necessary so that redirection does not occur when user is not already loaded in vuex state
		console.log('payload: ', payload)
		return new Promise((resolve, reject) => {
			auth.createUserWithEmailAndPassword(
				payload.email,
				payload.password
			)
				.then(authData => {
					console.log('authData: ', authData)
					const { uid: userId, email } = authData.user
					console.log('userId: ', userId)
					const user = { email }
					console.log('user: ', user)
					firestore.collection('users').doc(userId).set(user)
					return user
				})
				.then(user => {
					console.log('user: ', user)
					commit('users/setUser', user, { root: true })
					commit('setLoading', false, { root: true })
					resolve()
				})
				.catch(error => {
					console.log('error from firebase auth: ', error)
					commit('setLoading', false, { root: true })
					reject(error)
				})
		})
	},
	async signUserIn({ commit }, payload) {
		// Promise is necessary so that redirection does not occur when user is not already loaded in vuex state
		return new Promise((resolve, reject) => {
			commit('setLoading', true, { root: true })
			auth.signInWithEmailAndPassword(payload.email, payload.password)
				.then(authData => {
					let userId = authData.user.uid
					console.log('Email is verified, continue sign in.')
					firestore.collection('users').doc(userId).onSnapshot(function (doc) {
						const user = {
							...doc.data(),
							id: doc.id
						}
						commit('users/setUser', user, { root: true })
						commit('setLoading', false, { root: true })
						resolve()
					})
				}).catch(error => {
					// console.log('error: ', error)
					commit('setError', error, { root: true })
					commit('setLoading', false, { root: true })
					reject(error)
				})
		})
	},
	async signOut({ commit }) {
		commit('setLoading', true, { root: true })
		await auth.signOut()
		commit('users/setUser', null, { root: true })
		commit('setLoading', false, { root: true })
	}
}

export const getters = {}

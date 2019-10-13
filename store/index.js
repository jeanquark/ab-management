// import moment from 'moment'
// import { firestore } from '~/plugins/firebase-client-init.js'

export const strict = false

export const state = () => ({
	loading: false,
	error: null,
})

export const mutations = {
    setLoading (state, payload) {
        state.loading = payload
	},
	setError (state, payload) {
        state.error = payload
    }
}

export const actions = {
}

export const getters = {
    loading (state) {
        return state.loading
	},
	error (state) {
        return state.error
    }
}

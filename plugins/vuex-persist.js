import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  	window.onNuxtReady(() => {
	    new VuexPersistence({
			reducer: state => ({
				users: {
					user: state.users.user
				}
			})
			// modules: ['users', 'resumes', 'authorizations']
    	}).plugin(store)
  	})
}
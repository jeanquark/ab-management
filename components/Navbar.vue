<template>
	<header class="bg-secondary sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 rounded-t-lg">
        <div class="flex items-center justify-between px-4 py-3 sm:p-0">
            <div>
                <img class="h-10" src="~/static/images/logo.png" alt="dkmanagement">
            </div>
            <div class="sm:hidden">
                <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                        <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                    </svg>
                </button>
            </div>
            <!-- <div :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0">
                <nuxt-link :to="localePath('tangible-assets')" class="block px-2 py-1 text-white font-semibold rounded hover:text-primary">
                    {{ $t('tangible_assets') }}
                </nuxt-link>
            </div> -->
        </div>
        <div class="justify-end">
            <nav :class="isOpen ? 'block' : 'hidden'" class="justify-start px-2 pt-2 pb-4 sm:flex sm:p-0">
            <!-- <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4"> -->
                <!-- <a href="#" class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">List your property</a>
                <a href="#" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Trips</a>
                <a href="#" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Messages</a> -->
                <nuxt-link :to="localePath('index')" class="block px-2 py-1 text-white font-semibold rounded hover:text-primary">
                    AB Management
                </nuxt-link>
                <nuxt-link :to="`${localePath('tangible-assets')}`" class="block px-2 py-1 text-white font-semibold rounded hover:text-primary">
                    {{ $t('navigation.tangible_assets') }}
                </nuxt-link>
                <nuxt-link :to="localePath('security-and-performance')" class="block px-2 py-1 text-white font-semibold rounded hover:text-primary">
                    {{ $t('navigation.security_and_performance') }}
                </nuxt-link>
                <nuxt-link :to="localePath('private-office')" class="block px-2 py-1 text-white font-semibold rounded hover:text-primary">
                    {{ $t('navigation.private_office') }}
                </nuxt-link>
                <nuxt-link :to="localePath('contact-us')" class="block px-2 py-1 text-white font-semibold rounded hover:text-primary">
                    {{ $t('navigation.contact') }}
                </nuxt-link>
                <!--<nuxt-link :to="localePath('firebase')" class="block px-2 py-1 text-white font-semibold rounded hover:text-primary">
                    Firebase
                </nuxt-link>-->
                <!--<nuxt-link :to="localePath('admin')" class="block px-2 py-1 text-white font-semibold rounded hover:text-primary">
                    Admin
                </nuxt-link> -->
                <!-- <img src="~/static/images/languages/french.png" width="30" height="20" class="mx-1 cursor-pointer" @click="switchLanguage('fr')" />
                <img src="~/static/images/languages/english.png" width="30" class="mx-1 cursor-pointer" @click="switchLanguage('en')" /> -->
                <div class="flex justify-center px-2 py-1 md:hidden">
                    <nuxt-link
                        v-for="locale in availableLocales"
                        :key="locale.code"
                        :to="switchLocalePath(locale.code)"
                    >
                        {{ locale.name }}
                    </nuxt-link>
                </div>
            </nav>
        </div>
        <div class="flex flex-row justify-end hidden md:flex">
            <!-- <div @click="switchLanguage('fr')">
               <img src="~/static/images/languages/french.png" width="30" class="mx-1 cursor-pointer" />
            </div>
            <img src="~/static/images/languages/english.png" width="30" class="mx-1 cursor-pointer" @click="switchLanguage('en')" /> -->
            <nuxt-link
                v-for="locale in availableLocales"
                :key="locale.code"
                :to="switchLocalePath(locale.code)"
            >
                <!-- {{ locale.name }} -->
                <img src="~/static/images/languages/en.png" width="30" v-if="locale.code === 'en'" />
                <img src="~/static/images/languages/fr.png" width="30" v-else />
            </nuxt-link>
        <!-- </div> -->
        </div>
    </header>
</template>

<script>
	export default {
		data () {
			return {
                isOpen: false
			}
		},
        computed: {
            availableLocales () {
                return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
            }
        },
		methods: {
			switchLanguage (language) {
                console.log('switchLanguage: ', language)
				this.$i18n.locale = language
                console.log('i18n.locale: ', this.$i18n.locale)
                console.log('$router: ', this.$route)
                console.log('$route.path: ', this.$route.path)
                // this.$router.push(this.$i18n.localePath('/security-and-performance'))
                this.$router.push(`/${this.$i18n.locale}/securite-et-performance`)
			}
		}
	}
</script>

<style scoped>
	.nuxt-link-exact-active {
		/*color: yellow;*/
		color: theme('colors.primary');
	}
</style>
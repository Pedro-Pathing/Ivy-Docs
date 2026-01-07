export default defineNuxtConfig({
    extends: ['docus'],
    site: {
        name: 'Ivy Documentation'
    },
    content: {
        build: {
            markdown: {
                highlight: {
                    theme: {
                        default: 'github-light',
                        dark: 'github-dark'
                    },
                    langs: ['java', 'groovy']
                }
            }
        }
    }
})
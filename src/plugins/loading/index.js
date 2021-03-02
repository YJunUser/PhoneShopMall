import './loading.scss'

const loadingPlugin = {
    install: function(vm) {
        const loadingComponent = vm.extend({
            template: '<div id="loading-warpper">{{msg}}</div>',
            data() {
                return {
                    msg: 'loading'
                }
            }
        })

        function Loading(msg) {
            const div = document.createElement('div')
            div.setAttribute('id', 'loading-warpper')
            document.body.appendChild(div)
            new loadingComponent({
                data() {
                    return {
                        msg: msg
                    }
                }
            }).$mount('#loading-warpper')
            return () => {
                document.body.removeChild(document.getElementById('loading-warpper'))
            }
        }
        vm.prototype.$loading = Loading
    }
}

export default loadingPlugin
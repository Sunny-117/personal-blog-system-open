export default function() {
    return {
        data() {
            return {
                page: 1,
                limit: 10,
            }
        },
        created() {
            this.$eventBus.$on('mainScroll', this.handleScrolls); //监听事件总线上的mainScroll事件，事件发生就执行handleScroll函数
        },
        destroyed() {
            this.$eventBus.$off('mainScroll', this.handleScrolls);
        },
        computed: {
            hasMore() {
                return this.data.rows.length < this.data.total;
            }
        },
        methods: {
            async fetchMoreData() {
                if (!this.hasMore) {
                    return;
                }
                this.isLoading = true;
                this.page++;
                const res = await this.fetchData();
                this.isLoading = false;
                this.data.total = res.total;
                this.data.rows = this.data.rows.concat(res.rows);
            },
            handleScrolls(dom) { //滚轮
                if (this.isLoading || !dom) {
                    return;
                }
                const range = 100;
                const disBottom = dom.scrollHeight - dom.clientHeight - dom.scrollTop;
                if (disBottom < range) {
                    this.fetchMoreData();
                }
            }
        }
    }
}
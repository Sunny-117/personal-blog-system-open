export default function(refValue) {
    return {
        mounted() {
            this.$eventBus.$on("setMainScroll", this.handleSetMainScroll);
            this.$refs[refValue].addEventListener("scroll", this.handleScroll);
        },
        beforeDestroy() {
            this.$eventBus.$emit("mainScroll");
            this.$eventBus.$off("setMainScroll", this.handleSetMainScroll);
            this.$refs[refValue].removeEventListener("scroll", this.handleScroll);
        },
        methods: {
            handleScroll() {
                this.$eventBus.$emit("mainScroll", this.$refs[refValue]);
            },
            handleSetMainScroll(top) {
                this.$refs[refValue].scrollTop = top;
            },
        }
    }
}
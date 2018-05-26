<script>
export default {
    name: 'MainAttraction',
    props: {
        name: String,
        subtitle: Object,
        links: Array
    },
    render() {
        return (
            <section class='hero is-fullheight' style='background: #101010'>
            <div class='hero-body'>
                <div class='container'>
                <p class='title center is-size-1-touch is-size-1-desktop'>{ this.name }</p>
                <p class='subtitle'>{ this.subtitle }</p>
                <hr />
                <ul class='socialList'>
                { this.links.map((link) => (<li>{ link }</li>)) }
                </ul>
                </div>
            </div>
            </section>
        );
    }
}
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.socialList li {
    display: inline;
    list-style-type: none;
    padding-right: 20px;
}
</style>

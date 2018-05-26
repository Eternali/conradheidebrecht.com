<script>
export default {
  name: 'ProjectCard',
  props: {
    title: String,
    msg: String,
    footer: String,
    img: String,
    link: String
  },
  render() {
    return (
      <b-modal active={true} width='640' scroll='keep'>
        <div class='card'>
          <div class='card-image'>
            <figure class='image is-4by3'>
              <img src={ this.img } alt='Image' />
            </figure>
          </div>
          <div class='card-content'>
            <div class='media'>
              <div class='media-content'>
                <p class='title is-4'>{ this.title }</p>
                <p class='subtitle is-6'>{ this.msg }</p>
              </div>
            </div>
          </div>
          <div class='content'>
            <p class='subtitle is-6'>{ this.footer }</p>
          </div>
        </div>
      </b-modal>
    );
  }
}
</script>

<style lang="sass" scoped>

</style>

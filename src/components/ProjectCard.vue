<script>
export default {
  name: 'ProjectCard',
  components: {
    VModel: Buefy.VModel
  },
  props: {
    title: String,
    msg: String,
    footer: String,
    img: String,
    link: String
  },
  render() {
    return (
      <b-model width='640' scroll='keep'>
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
              </div>
            </div>
          </div>
        </div>
      </b-model>
    );
  }
}
</script>

<style lang="sass" scoped>

</style>

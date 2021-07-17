<script lang="tsx">
import { defineComponent } from 'vue';
import Dot from '/src/static/icons/dot.png';

export default defineComponent({
   setup(props, { slots }) {
      return () => (
         <div role="heading" class="_header">
            <img src={Dot} class="_dot" />
            <span>{slots.default?.()}</span>
         </div>
      );
   }
});
</script>

<style lang="scss" scoped>
._header {
   font-size: vars.$med;
   font-weight: bold;
   margin-top: vars.$p;
   ._dot {
      width: 15px;
      height: 15px;
      vertical-align: middle;
   }
}
</style>

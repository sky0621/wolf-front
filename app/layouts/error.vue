<template>
  <v-app>
    <v-main>
      <v-container>
        <div>{{ error }}</div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  components: {}
})
export default class LayoutsError extends Vue {
  @Prop({ default: () => {} })
  readonly error?: Object
}
</script>

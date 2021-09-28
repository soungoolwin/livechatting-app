<template>
  <div class="card text-center wholemesinterface">
    <div class="card-header">
        <Nameandemail></Nameandemail>
    </div>
    <div class="card-body">
      <Messagebox></Messagebox>
    </div>
    <div class="card-footer text-muted">
      <Textarea></Textarea>
    </div>
</div>
</template>

<script>
import Messagebox from '../components/Messagebox.vue'
import Nameandemail from "../components/Nameandemail.vue"
import Textarea from '../components/Textarea.vue'

export default {
components: { Nameandemail, Messagebox, Textarea},
}
</script>

<style
Messagebox>

</style>
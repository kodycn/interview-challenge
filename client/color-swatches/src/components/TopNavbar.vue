<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">
      <img :src="require('../../../public/logo-symbol.svg')" />
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="md" class="mr-sm-2" placeholder="Search"></b-form-input>
        </b-nav-form>
      </b-navbar-nav>
  </b-navbar>

</template>

<script>
export default {

}
</script>

<style>

</style>

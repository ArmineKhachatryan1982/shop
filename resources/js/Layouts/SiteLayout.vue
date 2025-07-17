<script setup>
import SiteFooter from '@/Components/SiteFooter.vue';
import SiteNavbar from '@/Components/SiteNavbar.vue';


</script>
<template>

    <!-- Body main wrapper start -->
<div class="body-wrapper">

   <SiteNavbar/>
    <main>
        <slot />
      </main>

    <!-- FOOTER AREA START -->
  <SiteFooter/>
    <!-- FOOTER AREA END -->

</div>

</template>

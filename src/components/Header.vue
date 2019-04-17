<template>
    <div id="header">
	<div id="menu" class="container">
		<ul>
			<li class="current_page_item"><router-link to="/" exact>Vreme u Beogradu</router-link></li>
			<li><router-link to="/forma" exact>Popuni Formu</router-link></li>
			<li><router-link to="/blog" exact>Pretrazi Blog</router-link></li>
			<li><router-link to="/addblog" exact>Dodaj Novi blog</router-link></li>
			<!-- <li><a href="#" accesskey="4" title="">Careers</a></li> -->
			<li><router-link to="/contact" exact>Kontaktiraj Nas</router-link></li>
		</ul>
	</div>
</div>
</template>


<script>
export default {
 name:'Header'   
}
</script>


<style>

</style>

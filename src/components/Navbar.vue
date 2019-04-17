<template>
    <div id="logo">
	<h1><a href="#" class="icon icon-group" v-on:click="changeTitle"><span>{{title}}</span></a></h1>
    </div>
</template>

<script>
export default {
    name:'Header',
    props:["title"],
    data(){
        return{
            
        }
    },
    methods:{
        changeTitle(){
            const array =["Baabine kisele noge","Danas je kisilo","Sutra ce kaze radio","84-ta se vuce ","O moj Boze kako grozno vrijeme"]
            const item = array[Math.floor(Math.random()*array.length)]
            this.$emit('change',item)
        }
    }
}
</script>

<style scoped>
	
</style>

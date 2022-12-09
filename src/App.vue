<template>
  <div id="app">
    <Navbar/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar"
  export default {
    components:{
      Navbar
    }
  }
</script>

<style>
 @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Poppins:wght@200;500;700&display=swap');

 *{
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  list-style: none;
  margin: 0;
  padding: 0;
  outline: none;
}
body{
  overflow: hidden;
  background-color: #151515;
  color: #989898;
}

/*animations */
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: all .3s ease;    
}
.fade-leave {

}
.fade-leave-active {
  transition: all .3s ease;
  opacity: 0;
}
</style>

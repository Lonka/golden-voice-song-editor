<script setup lang="ts">
const btn = ref<HTMLButtonElement>()
const btnClickDown = () => {
  if (btn.value)
    btn.value.classList.add('clicked')
}
const btnClickUp = () => {
  if (btn.value)
    btn.value.classList.remove('clicked')
}
</script>

<template>
  <div class="input-box">
    <i class="i-carbon-search" />
    <input class="text-black" type="text" placeholder="Search here">
    <button ref="btn" class="button" @mousedown="btnClickDown" @mouseup="btnClickUp">
      Search
    </button>
  </div>
</template>

<style scoped>
.input-box{
    @apply relative bg-white w-full rounded-lg;
    max-width: 900px;
    height: 76px;
}

.input-box i,
.input-box .button{
    @apply absolute top-50% -translate-y-1/2;
}

.input-box i{
    left:20px;
    font-size:24px;
    color:#707070 !important;
}
.input-box input{
    @apply h-full w-full outline-none bg-transparent border-none rounded-md;
    font-size:18px;
    padding-left: 65px;
    padding-right: 155px;
}
.input-box .button{
    @apply border-none px-7 py-3 rounded-md cursor-pointer;
    right:20px;
    font-size: 16px;
    background-color: #4070f4;
}

.input-box .button.clicked{
    @apply -translate-y-1/2 scale-95;
}

@media screen and (max-width: 500px){
    .input-box {
        height: 66px;
        margin-left: 8px;
        margin-right: 8px;
    }
    .input-box i{
        left:12px;
        font-size: 18px;
    }
    .input-box input{
        padding-left: 50;
        padding-right: 112px;
    }
    .input-box .button{
        right: 12px;
        font-size: 14px;
        padding: 8px 18px;

    }
}
</style>

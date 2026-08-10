<script setup>

</script>

<template>
    <div class="header">
        <div class="first ml-8 flex justify-center">
            <el-icon class="mx-2 text-light-200 text-2xl">
                <ElementPlus />
            </el-icon>
            <div class="text-2xl font-serif text-light-200" id="title">
                智能学习辅助系统
            </div>
        </div>
    </div>
</template>

<style scoped>
.header {
    @apply flex bg-indigo-700 font-serif left-0 right-0 fixed items-center;
    height: 60px;
}

#title {}
</style>
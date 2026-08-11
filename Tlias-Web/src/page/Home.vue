<script setup>
import Aside from '@/components/Aside.vue';
import Header from '@/components/Header.vue'
import Main from '@/page/main/Main.vue';
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-container>
                <el-aside width="250px">
                    <Aside></Aside>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped>
.common-layout {
    height: 100vh;
}

.common-layout>.el-container {
    height: 100%;
}
</style>
<script setup>
import Aside from '@/components/Aside.vue';
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue';
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <Aside></Aside>
                </el-aside>
                <el-main>
                    <Main></Main>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped></style>
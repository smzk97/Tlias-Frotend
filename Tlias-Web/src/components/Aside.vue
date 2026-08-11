<script setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
</script>

<template>
    <div class="asider">
        <el-menu default-active="/home" router="true" class="el-menu-vertical-demo">

            <el-menu-item index="/home">
                <template #title>
                    <el-icon>
                        <Promotion />
                    </el-icon>
                    <span>首页</span>
                </template>
            </el-menu-item>
            <el-sub-menu index="edu">
                <template #title>
                    <el-icon><icon-menu /></el-icon>
                    <span>班级学员管理</span>
                </template>
                <el-menu-item index="/class">
                    <template #title>
                        <el-icon>
                            <HomeFilled />
                        </el-icon>
                        <span>班级管理</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/students">
                    <template #title>
                        <el-icon>
                            <Avatar />
                        </el-icon>
                        <span>学员管理</span>
                    </template>
                </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="system">
                <template #title>
                    <el-icon>
                        <Setting />
                    </el-icon>
                    <span>系统信息管理</span>
                </template>
                <el-menu-item index="/department">
                    <template #title>
                        <el-icon>
                            <HelpFilled />
                        </el-icon>
                        <span>部门管理</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/employee">
                    <template #title>
                        <el-icon>
                            <User />
                        </el-icon>
                        <span>员工管理</span>
                    </template>
                </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="data">
                <template #title>
                    <el-icon>
                        <Histogram />
                    </el-icon>
                    <span>数据统计管理</span>
                </template>
                <el-menu-item index="/empReport">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>员工信息统计</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/stuReport">
                    <template #title>
                        <el-icon>
                            <Share />
                        </el-icon>
                        <span>学员信息统计</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="/logReport">
                    <template #title>
                        <el-icon>
                            <Document />
                        </el-icon>
                        <span>日志信息统计</span>
                    </template>
                </el-menu-item>
            </el-sub-menu>

        </el-menu>
    </div>
</template>

<style scoped>
.asider {
    @apply mt-2 fixed bottom-0 w-64;
    top: 64px;
}

.asider>.el-menu {
    height: 100%;
}
</style>
<template>
    <div class="min-h-[60vh] bg-zinc-50/80">
        <div class="w-[1200px] mx-auto px-4 pt-12 pb-24">
            <div class="bg-white rounded-2xl overflow-hidden border border-zinc-100 shadow-sm">
                <div class="relative aspect-video bg-zinc-100">
                    <img :src="imageSrc(course?.url || '')" :alt="course?.name"
                        class="w-full h-full object-cover" />
                    <div class="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur text-sm font-medium text-zinc-600 shadow-sm">
                        词汇课程
                    </div>
                </div>
                <div class="p-8">
                    <h1 class="text-2xl font-bold text-zinc-900">{{ course?.name }}</h1>
                    <p class="mt-3 text-zinc-500 leading-relaxed">{{ course?.description }}</p>
                    <div class="mt-6 flex items-center gap-6">
                        <span class="text-sm text-zinc-500">讲师：{{ course?.teacher }}</span>
                        <span class="text-xl font-bold text-indigo-600">{{ formatPriceWithSymbol(course?.price) }}</span>
                    </div>
                    <button type="button"
                        class="mt-8 px-8 py-3 rounded-xl text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer">
                        立即购买
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import type { Course } from '@en/common/course';
import { getCourseById } from '@/apis/course';
import { formatPriceWithSymbol } from '@en/common/utils/price';

const route = useRoute();
const course = ref<Course | null>(null);

const imageSrc = (url: string) => {
    return url;
};

const getCourse = async () => {
    const id = route.params.id as string;
    const res = await getCourseById(id);
    course.value = res.data;
};

onMounted(() => {
    getCourse();
});
</script>
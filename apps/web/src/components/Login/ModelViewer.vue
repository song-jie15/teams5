<template>
    <div class="relative w-[800px] h-full bg-linear-to-br from-gray-800 to-gray-900">
        <canvas class="w-full h-full" ref="canvasRef"></canvas>
        <div class="absolute top-6 left-6">
            <div class="flex items-center gap-2">
                <div
                    class="w-10 h-10 bg-linear-to-br from-indigo-500 to-purple-600 rounded-[10px] flex items-center justify-center">
                    <span class="text-white font-bold text-xl">E</span>
                </div>
                <span class="text-white text-xl font-bold">English App</span>
            </div>
        </div>
        <!-- 登录/注册切换按钮 -->
        <div class="absolute top-6 right-6">
            <div class="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-1">
                <button :class="loginClass" @click="onLoginClick">
                    登录
                </button>
                <button :class="registerClass" @click="onRegisterClick">
                    注册
                </button>
            </div>
        </div>
    </div>    
</template>

<script setup lang="ts">
import { ref, computed, onMounted, useTemplateRef, watch } from 'vue'
import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'  //gltf模型加载器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js' //轨道控制器  
const canvasRef = useTemplateRef<HTMLCanvasElement>('canvasRef')
const type = ref<'login' | 'register'>('login')

// 监听type变化，重新加载模型
watch(type, (newType: 'login' | 'register') => {
    console.log('ModelViewer: Watch triggered, newType:', newType)
    // 清空场景
    while(scene.children.length > 0) {
        const child = scene.children[0]
        if (child.parent) {
            scene.remove(child)
        }
    }
    console.log('ModelViewer: Scene cleared, children count:', scene.children.length)
    // 加载新模型
    loadModel(newType)
})
const loginClass = computed(() => {
    return type.value === 'login' ? 'bg-indigo-500 text-white shadow-lg px-4 py-2 rounded-md text-sm font-medium transition-all' : 'text-white/70 hover:text-white hover:bg-white/10 px-4 py-2 rounded-md text-sm font-medium transition-all'
})
const registerClass = computed(() => {
    return type.value === 'register' ? 'bg-indigo-500 text-white shadow-lg px-4 py-2 rounded-md text-sm font-medium transition-all' : 'text-white/70 hover:text-white hover:bg-white/10 px-4 py-2 rounded-md text-sm font-medium transition-all'
})


const scene = new THREE.Scene() //创建场景
const clock = new THREE.Clock() //创建时钟
let renderer: any = null
let camera: THREE.PerspectiveCamera | null = null

//记录当前的动画混合器
let mixer: THREE.AnimationMixer | null = null
// 定义事件
const emit = defineEmits(['login', 'register', 'changeType'])

// 处理登录/注册切换
const onLoginClick = () => {
    console.log('ModelViewer: Login button clicked')
    type.value = 'login'
    // 触发父组件的登录事件
    emit('login')
    // 触发类型改变事件
    emit('changeType', 'login')
}

const onRegisterClick = () => {
    console.log('ModelViewer: Register button clicked')
    type.value = 'register'
    // 触发父组件的注册事件
    emit('register')
    // 触发类型改变事件
    emit('changeType', 'register')
}

const loadModel = (type:'login' | 'register')=>{
    // console.log('Loading model for:', type)
    const loader = new GLTFLoader()
    const modelPath = type === 'login' ? '/models/login/scene.gltf' : '/models/register/scene.gltf'

    loader.load(modelPath, (gltf) => {
        console.log('Model loaded successfully:', gltf)
        scene.add(gltf.scene)
        if (type === 'login') {
            scene.position.y = -0.8
        }
        gltf.scene.scale.set(0.8, 0.8, 0.8)
        if (type === 'register') {
            scene.position.y = -0.8
            if(gltf.animations && gltf.animations.length > 0){
                mixer = new THREE.AnimationMixer(gltf.scene)
                gltf.animations.forEach((clip) => {
                    const action = mixer!.clipAction(clip)
                    action.play()
                })
            }
        }
        // 重新渲染
        if (renderer) {
            renderer.render(scene, camera)
        }
    }, undefined, (error) => {
        console.error('Error loading model:', error)
    })
}

const initThree = ()=>{ 
    const width = canvasRef.value!.clientWidth
    const height = canvasRef.value!.clientHeight

    camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)//创建相机
    camera.position.set(1,0.5,1) //设置相机位置
    renderer = new THREE.WebGLRenderer({
        canvas:canvasRef.value!,//渲染容器
        antialias:true, //抗锯齿
        alpha:true, //透明背景
        precision:'highp', //高精度
        powerPreference:'high-performance' //高性能
    })
    renderer.setSize(width, height) //设置渲染器大小
    renderer.render(scene, camera) //渲染场景

    const controls = new OrbitControls(camera, renderer.domElement)
    const animate = ()=>{ 
        requestAnimationFrame(animate) //请求动画帧
        if(mixer){
            mixer.update(clock.getDelta())
        }
        //添加旋转动画
        scene.rotation.y += 0.01
        controls.update()
        renderer.render(scene, camera)
    }
    animate()
}

onMounted(() => {
    initThree()
    loadModel(type.value)
    // 触发初始的changeType事件
    emit('changeType', type.value)
    console.log('ModelViewer: Initial changeType event triggered with:', type.value)
})
</script>
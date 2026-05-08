<template>
  <canvas ref="hologramRef"></canvas>
</template>


<script setup lang="ts">
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js' //轨道控制器
import { onMounted, useTemplateRef } from 'vue'
const hologramRef = useTemplateRef<HTMLCanvasElement>('hologramRef')
const initThree = () => {
    const scene = new THREE.Scene()
    //动画混合器
    let mixer: THREE.AnimationMixer | null = null
    const clock = new THREE.Clock()
    //创建相机
    const camera = new THREE.PerspectiveCamera(75, 500 / 250, 0.1, 1000)
    camera.position.set(0, 0, 10)
    const loader = new GLTFLoader()
    loader.load('/models/hologram/scene.gltf', (gitf) => {
        scene.add(gitf.scene)
        gitf.scene.scale.set(4, 4, 4)
        gitf.scene.position.y = 0.5
        if (gitf.animations && gitf.animations.length > 0) {
            mixer = new THREE.AnimationMixer(gitf.scene)
            gitf.animations.forEach((clip) => {
                const action = mixer!.clipAction(clip)
                action.play()
            })
        }
    })
    //环境光
    const ambientLight = new THREE.AmbientLight(0xffffff, 1)
    scene.add(ambientLight)
    //平行光
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
    directionalLight.position.set(5, 10, 7.5)
    scene.add(directionalLight)

    //创建渲染器
    const renderer = new THREE.WebGLRenderer({
        canvas: hologramRef.value!,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
    })
    renderer.setSize(500, 250)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    const controls = new OrbitControls(camera, renderer.domElement)
    const animate = () => {
        requestAnimationFrame(animate)
        const deltd = clock.getDelta()
        if (mixer) {
            mixer.update(deltd)
        }
        scene.rotation.y += 0.002
        renderer.render(scene, camera)
        controls.update()
    }
    animate()
}
onMounted(() => {
    initThree()
})

</script>
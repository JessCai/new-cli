<!--  -->
<template>
  <div id="three"></div>
</template>

<script>
export default {
  name: 'three',
  data() {
    return {
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.init();
  },

  methods: {
    init() {
      const height = document.getElementById('three').clientHeight;
      const width = document.getElementById('three').clientWidth;
      // three.js 必备三要素场景、 相机和渲染器
      const scene = new THREE.Scene(); // 创建场景
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000); // new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera.position.set(20, 30, 20); // 设置相机位置
      camera.lookAt(scene.position);
      const renderer = new THREE.WebGLRenderer();

      // 添加一个正方形
      const geometry = new THREE.BoxGeometry(10, 10, 10);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const light = new THREE.AmbientLight(0x404040); // soft white light
      const cube = new THREE.Mesh(geometry, material);

      scene.add(cube);
      scene.add(light);
      renderer.render(scene, camera);

      // 设置渲染器为全屏
      renderer.setSize(width, height);
      // renderer.shadowMap.enabled = true; // 设置是否开启投影, 开启的话, 光照会产生投影
      // renderer.shadowMap.type = THREE.PCFSoftShadowMap; // 设置投影类型, 这边的柔和投影
      // 添加到网页中
      const animate = function () {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
      };
      document.getElementById('three').appendChild(renderer.domElement);
      animate();
    }
  }
};

</script>
<style lang='scss' scoped>
  #three{
     width:100%;
     height:800px;
  }
</style>

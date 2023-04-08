import { Scene, PerspectiveCamera, WebGLRenderer, EquirectangularReflectionMapping } from "three";

import { RGBELoader } from '../node_modules/three/examples/jsm/loaders/RGBELoader'
import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls"
const hdrimg = new URL('../public/scene2.hdr', import.meta.url)


export default function SceneIndex() {

    const scene = new Scene();
    const camera = new PerspectiveCamera(95, window.innerWidth / window.innerHeight, 0.1, 2000);

    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    camera.position.z = 5;
    const orbit = new OrbitControls(camera, renderer.domElement)

    camera.position.set(-310, 300, 400)
    orbit.maxDistance = 590
    orbit.minDistance = 200
    orbit.update()

    const loader2 = new RGBELoader()
    loader2.load(hdrimg, function (texture) {
        texture.mapping = EquirectangularReflectionMapping;

        scene.background = texture;
    })

    function animate() {
        requestAnimationFrame(animate);

        renderer.render(scene, camera);
    }
    renderer.setAnimationLoop(animate);
}

import { Scene, PerspectiveCamera, WebGLRenderer, EquirectangularReflectionMapping } from "three";
import { RGBELoader } from '../node_modules/three/examples/jsm/loaders/RGBELoader'
import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls"
const hdrimg = new URL('../public/scene2.hdr', import.meta.url)
import starSun from "./sun/sun";

export default function SceneIndex() {

    const renderer = new WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.gammaOuput = true
    document.body.appendChild(renderer.domElement);

    const scene = new Scene()
    const camera = new PerspectiveCamera(75,
        window.innerWidth / window.innerHeight,
        0.5,
        2000)

    const orbit = new OrbitControls(camera, renderer.domElement)
    camera.position.set(-310, 300, 400)
    orbit.maxDistance = 590
    orbit.minDistance = 200
    orbit.update()

    const loader = new RGBELoader()
    loader.load(hdrimg, function (texture) {
        texture.mapping = EquirectangularReflectionMapping;

        scene.background = texture;
    })

    scene.add(starSun())

    function animate() {
    
        renderer.render(scene, camera);
    }
    renderer.setAnimationLoop(animate);
}

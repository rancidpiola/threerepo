import { Scene, PerspectiveCamera, WebGLRenderer, EquirectangularReflectionMapping, PointLight } from "three";
import { RGBELoader } from '../node_modules/three/examples/jsm/loaders/RGBELoader'
import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls"
import starSun from "./sun/sun";
import mercuryPlanet from "./mercuri/mercuri";
import earthPlanet from "./earth/earth";




export default function SceneIndex() {
    const hdrimg = new URL('../public/scene2.hdr', import.meta.url)
    const sunIndex = starSun()
    const mercuriIndex = mercuryPlanet()
    const earthIndex = earthPlanet()
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

    const light = new PointLight(0xffffff, 2, 2000)
    scene.add(light)

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

    scene.add(sunIndex, mercuriIndex, earthIndex)

    function animate() {
        sunIndex.rotateY(0.009)
        mercuriIndex.rotateY(0.009)
        earthIndex.rotateY(0.003)
        


        renderer.render(scene, camera);
    }
    renderer.setAnimationLoop(animate);
}

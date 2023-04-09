import { SphereGeometry, MeshStandardMaterial, TextureLoader, Mesh } from 'three'
const moonImg = new URL('../../../public/moon.jpg', import.meta.url)

export default function moonEarth () {

    const moonGeometry = new SphereGeometry(15, 30, 30)
    const moonMaterial = new MeshStandardMaterial({
        map: new TextureLoader().load(moonImg)
    })
    const moon = new Mesh(moonGeometry, moonMaterial)
    moon.position.x = 65
    moon.position.y = 20
    return moon
}
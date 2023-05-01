import { SphereGeometry, MeshStandardMaterial, TextureLoader, Mesh, RingGeometry, MeshBasicMaterial, DoubleSide, Object3D } from 'three'
const sataturnImg = new URL('../../public/saturn.jpg', import.meta.url)
const sataturnImgRing = new URL('../../public/saturn_ring.png', import.meta.url)



export default function saturnPlanet() {


    const saturnG = new SphereGeometry(60.2, 30, 30)
    const saturnM = new MeshStandardMaterial({
        map: new TextureLoader().load(sataturnImg)
    })

    const saturn = new Mesh(saturnG, saturnM)
    saturn.position.x = 950
    const saturnGR = new RingGeometry(90, 160, 62)
    const saturnMR = new MeshBasicMaterial({
        map: new TextureLoader().load(sataturnImgRing),
        side: DoubleSide
    })
    const saturnR = new Mesh(saturnGR, saturnMR)
    saturnR.rotation.x = -0.5 * Math.PI
    saturn.add(saturnR)

    const saturnObj = new Object3D()
    saturnObj.add(saturn)
    return saturnObj

}
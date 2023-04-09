import { SphereGeometry, MeshStandardMaterial, Mesh, Object3D, TextureLoader } from 'three'
const mercuryimg = new URL('../../public/mercury.jpg', import.meta.url)

export default function mercuryPlanet() {
    const mercuriG = new SphereGeometry(15, 30, 30)
    const mercuriM = new MeshStandardMaterial({
        map: new TextureLoader().load(mercuryimg)
    })

    const mercuri = new Mesh(mercuriG, mercuriM)
    const mercuriobj = new Object3D()
    mercuriobj.add(mercuri)
    mercuri.name = 'mercurio'
    mercuri.position.x = 200
    return mercuriobj
}
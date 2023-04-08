import { SphereGeometry, ShaderMaterial, TextureLoader, Mesh, AdditiveBlending, BackSide } from 'three'
import vShader from './shaders/vertexShader.glsl'
import fShader from './shaders/fragmentShader.glsl'
import aVertex from './shaders/atmosphereVertex.glsl'
import aFragment from './shaders/atmosphereFragment.glsl'
const hdrimg = new URL('../../public/sol.jpg', import.meta.url)
export default function starSun() {

    const sunG = new SphereGeometry(50, 80, 80)
    const sunM = new ShaderMaterial({
        vertexShader: vShader,
        fragmentShader: fShader,
        uniforms: {
            globeTexture: {
                value: new TextureLoader().load(hdrimg)
            }
        }
    })
    const sun = new Mesh(sunG, sunM)
    const atmosphere = new Mesh(
        new SphereGeometry(62, 20, 20),
        new ShaderMaterial({
            vertexShader: aVertex,
            fragmentShader: aFragment,
            blending: AdditiveBlending,
            side: BackSide
        })
    )
    atmosphere.scale.set(1.1, 1.1, 1.1)
    atmosphere.name = 'sol'
    sun.add(atmosphere)
    return sun

}

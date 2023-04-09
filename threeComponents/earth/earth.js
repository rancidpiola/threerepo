import { SphereGeometry, ShaderMaterial, TextureLoader, Object3D, Mesh } from 'three'
import vertexShader from '../sun/shaders/vertexShader.glsl'
import fragmentShader from '../sun/shaders/fragmentShader.glsl'
const earthImg = new URL('../../public/earth.jpg', import.meta.url)
import moonEarth from './moon/moon'

export default function earthPlanet() {

    const shpere = new Mesh(
        new SphereGeometry(40, 50, 50),
        new ShaderMaterial({

            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            uniforms: {
                globeTexture: {
                    value: new TextureLoader().load(earthImg)
                }
            }
        })
    )

    shpere.position.x = 400
    
    shpere.name = 'tierra'
    shpere.add(moonEarth())

    const tierra = new Object3D()
    tierra.add(shpere)
    return tierra

}
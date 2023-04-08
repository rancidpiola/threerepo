const atmosphereFragment = `

varying vec3 vertexNormal; 

void main(){

    float intensity = pow(0.50 - dot(vertexNormal,vec3(0, 0, 2.1)),1.3); 
    gl_FragColor = vec4(0.8, 0.45, 0.1, 0.55) * intensity;
}

`
export default atmosphereFragment
import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextBufferGeometry, TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js"
import { Material, Scene } from 'three'
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import CSSPlugin from "gsap/CSSPlugin";

/* Base
 */
// Debug
//const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')




// Scene
const scene = new THREE.Scene()



//loaders
const loadingBarElement = document.querySelector('.loading-bar')
const loadingBarText = document.querySelector('.loading-text')
const loadinginfoText = document.querySelector('.loading-text2')
const loadingManager = new THREE.LoadingManager(
                // Loaded
                () =>
                {
                    gsap.delayedCall(1,() =>
                    {
                    gsap.to(overlayMaterial.uniforms.uAlpha, { duration: 3, value: 0 })
                    console.log('loaded')
                    loadingBarElement.classList.add('ended')
                    loadingBarText.style.opacity = `0`
                    loadinginfoText.style.opacity = `0`
                    loadingBarElement.style.transform = ''
                })
                },
                
                // Progress
                (itemsLoaded, itemsTotal) =>
                {
                
                const progressRatio = 1-(itemsLoaded / itemsTotal)
                loadingBarElement.style.transform = `scaleX(${progressRatio})`

                }
                
                )
    

//overlay
const overlayGeo = new THREE.PlaneBufferGeometry(2,2,1,1)
const overlayMaterial = new THREE.ShaderMaterial({
                //wireframe: true,
                transparent: true,
                uniforms:
                {
                    uAlpha: { value: 1 }
                },
                
                vertexShader: `
                    void main()
                    {
                        gl_Position = vec4(position, 1.0);
                    }
                `,
                
                fragmentShader: `
                uniform float uAlpha;
                    void main()
                    {
                        gl_FragColor = vec4(1.0, 1.0, 1.0,uAlpha);
                    }
                `
            })

const overlay = new THREE.Mesh(overlayGeo, overlayMaterial)
scene.add(overlay)




//texture
const TextureLoader = new THREE.TextureLoader(loadingManager)





/**
 * 
 * 
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}



//////fonts and texts

var textA, textB, textC, textD, textE
const fontLoader = new FontLoader(loadingManager)
fontLoader.load("/fonts/Playfair Display_Regular.json", (font) => {
const textMaterial = new THREE.MeshBasicMaterial( { color:'#FFFFE0'})


                    let text00 = `
                    "We may not reach the Transcendence through the material means of Architecture but we can hint at It."
                    ` 

                    let text01 = `
                    WE CREATE SUBLIME SPACES, BEYOND BEAUTY.
                    `
                    let text02 = `
                    Though our body may be bounded by the Forms, it can unleash our Spirit.  
                    `
                    let text03 = `
                    We are Parallel Thinker! 

                    We neither meet not converge with conventional 
                    thinking about architecture and life. 
                    `
                    let text04 = `
                    We've learned the calm, the repose, the indifference and the silence from the Fewa. 
                    We experience physical world primarily though spaces and not through Forms.
                    We looked far and wide. We got lost in the nonesense of the conventional knowledge. 
                    Then we burnt the books. Now we see.
                    We are the spatial poets. 

                    With the poet's attitude, with the poet's rythm and rhyme, 
                    we compose everything: 
                    flowers and feelings, buildings and boulders.
                    We bring forth the magic and the mystery, the myths and 
                    the metaphors, the things this era lacks.
                    We are primarily composers of thoughts and non thoughts, 
                    elemental  composition of intangibles and non expressionables, 
                    rather than composing elements and forms.

                        `
                    let text05= `
                    ordered emptiness is required to hold the sublime
                    a home of solace requires a threshold from the mundane
                    Celebrating the primal pleasures of living in the sun and the shadows.
                    Spatial qualities overrules all other surfacial qualities. 
                    Architectural expression devoid of economic expression but 
                    expression of life, fundamental and direct.
                    Space that trancends the personal and trancends into the threshold of universal.
                    Minimalism for stylistic sake is not greater minimalism.
                    Neti-Neti
                    Negate all things materials, non transcendental.
                    Wall dissolves, boundary and opacity remains. Doors would not exist as such, 
                    only threshold. No windows, only vista remains.
                    neti, neti, negate all this that holds the architecture to material world.
                    Focus on the abstract and the adjectives, materials and methods are just the means
                    not the architecture expressus the divine butr the architecture that
                    makes the divine felt, experienced, i the mundane.
                    when you are none and the one at the same time
                    Architecture a formless. It is manifested in forms. Nirguna swabhava.
                    It, in essence is an effort to arrest the formless by carving spaces with forms.
                    How am i to return to the source of things, the infinite darkness 
                    if i were blinded by the light of my own fires // replace
                        `

                        let text06= `
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla 
                    turpis purus, dictum vel diam sed, finibus blandit lacus. Morbi 
                    molestie nibh ipsum, ac rhoncus ante efficitur vel. Morbi tempus 
                    tellus sit amet consequat congue. Proin at elit id nisi tincidunt s
                    celerisque. Etiam molestie eros eu ultrices imperdiet. 
                    Morbi bibendum, turpis porttitor bibendum condimentum, 
                    urna massa scelerisque augue, nec rhoncus libero diam ac 
                    eros. Nunc facilisis venenatis scelerisque. 
                        `
const bigText = new TextGeometry(text00, {font,size:5,height: 0,
bevelEnabled: false})
bigText.center()
const bigTextfont = new THREE.Mesh(bigText, textMaterial);
bigTextfont.position.set(0,0,600)
scene.add(bigTextfont);

////labels


const labelA = new TextGeometry("0. Welcome to the Studio!", {font,size: 5,height: 0,bevelEnabled: false});
labelA.center();
const labelB = new TextGeometry("1. The world as we see it!", {font,size: 3,height: 0,bevelEnabled: false});
labelB.center();
const labelC = new TextGeometry("2. Manifesto", {font,size: 5,height: 0,bevelEnabled: false});
labelC.center();
const labelD = new TextGeometry("3. Know Us", {font,size: 5,height: 0,bevelEnabled: false});
labelD.center();
const labelE = new TextGeometry("4. Our Craft", {font,size: 5,height: 0,bevelEnabled: false});
labelE.center();

//const textMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});

const labeltextA = new THREE.Mesh(labelA, textMaterial);
labeltextA.position.set(0,-70,-450);
const labeltextB = new THREE.Mesh(labelB, textMaterial);
labeltextB.position.set(0,-90,-450-0.5*framePlace.distance);
const labeltextC = new THREE.Mesh(labelC, textMaterial);
labeltextC.position.set(0,-70,-450-1*framePlace.distance);
const labeltextD = new THREE.Mesh(labelD, textMaterial);
labeltextD.position.set(0,-70,-450-1.5*framePlace.distance);
const labeltextE = new THREE.Mesh(labelE, textMaterial);
labeltextE.position.set(0,-70,-450-2*framePlace.distance);

scene.add(labeltextA);
scene.add(labeltextB);
scene.add(labeltextC);
scene.add(labeltextD);
scene.add(labeltextE);
})






//particles system

const particlesTexture = new THREE.TextureLoader(loadingManager).load('/textures/particles01.png')
//particles
const particlesGeometry = new THREE.BufferGeometry()
const count = 100000
const positions = new Float32Array(count*3)
            for (let i = 0; i< count *3; i++)
            {
                positions[i] = (Math.random() - 0.5)*6000
            }

            particlesGeometry.setAttribute(
                'position',
                new THREE.BufferAttribute(positions, 3)
            )
            const particlesMaterial = new THREE.PointsMaterial({alphaMap:particlesTexture,
                size: 3, sizeAttenuation:true, transparent:true, depthWrite:false
            })

//points
const particles = new THREE.Points(particlesGeometry, particlesMaterial)
particles.position.z = -2000
scene.add(particles)





/**
 * 
 * 
 * 

 * Models
 * 
 *
 */
//gravity framings




const  floorGeometry = new THREE.PlaneBufferGeometry(800,4000)
//const  ceilingGeometry = new THREE.PlaneBufferGeometry(100,300)

const floorMaterial = new THREE.MeshBasicMaterial({ color:'#b6ac8e', side: THREE.DoubleSide})


const floor = new THREE.Mesh (floorGeometry, floorMaterial)
const ceiling = new THREE.Mesh (floorGeometry, floorMaterial)


floor.position.set(0,-200,-1900)
floor.rotation.x = Math.PI * .5
ceiling.position.set(0,200,-1900)
ceiling.rotation.x = Math.PI * .5


scene.add(floor)
scene.add(ceiling)





 //frame planes
const  mainframeGeo = new THREE.PlaneBufferGeometry(100,300)
const textpanelGeo = new THREE.PlaneBufferGeometry(300,225)
const  panelGeo = new THREE.PlaneBufferGeometry(200,300)
const  topGeo = new THREE.PlaneBufferGeometry(600,20)


const mainframeTexture = new THREE.TextureLoader(loadingManager).load('/textures/SP004.png')
const mainframeMaterial = new THREE.MeshBasicMaterial({ map:mainframeTexture}) 
const projectframeMaterial = new THREE.MeshBasicMaterial({ color: 'white', opacity:0.6, transparent:true})

const panelTexture2l = new THREE.TextureLoader(loadingManager).load('/textures/L002.png')
const panelMaterial2l = new THREE.MeshBasicMaterial({ map:panelTexture2l})  //,transparent:true ,opacity:0.8
const panelTexture2r = new THREE.TextureLoader(loadingManager).load('/textures/R002.png')
const panelMaterial2r = new THREE.MeshBasicMaterial({ map:panelTexture2r}) //,transparent:true ,opacity:0.8



const topTexture = new THREE.TextureLoader(loadingManager).load('/textures/SP004.png') 
const topMaterial = new THREE.MeshBasicMaterial({ map:topTexture})







//create four frame planes

const framePlace = {
    origin:0,
    distance:600
}

//01 Home Frame

const mainframeLeft01 = new THREE.Mesh (mainframeGeo, mainframeMaterial)
mainframeLeft01.position.set(-250,0,0-0*framePlace.distance)
scene.add(mainframeLeft01) 

const mainpanelLeft01 = new THREE.Mesh (panelGeo, panelMaterial2l)
mainpanelLeft01.position.set(-100,0,-10-0*framePlace.distance)
scene.add(mainpanelLeft01) 


const mainpanelRight01 = new THREE.Mesh (panelGeo, panelMaterial2r)
mainpanelRight01.position.set(100,0,-10-0*framePlace.distance)
scene.add(mainpanelRight01) 

const mainframeRight01 = new THREE.Mesh (mainframeGeo, mainframeMaterial)
mainframeRight01.position.set(250,0,0-0*framePlace.distance)
scene.add(mainframeRight01) 

const toppanel01 = new THREE.Mesh (topGeo, topMaterial)
toppanel01.position.set(0,150,10-0*framePlace.distance)
scene.add(toppanel01)



// 02 Manifesto Frame

const mainframeLeft02 = new THREE.Mesh (mainframeGeo, mainframeMaterial)
mainframeLeft02.position.set(-250,0,0-1*framePlace.distance)
scene.add(mainframeLeft02) 

const mainpanelLeft02 = new THREE.Mesh (panelGeo, panelMaterial2l)
mainpanelLeft02.position.set(-100,0,-10-1*framePlace.distance)
scene.add(mainpanelLeft02) 




const mainpanelRight02 = new THREE.Mesh (panelGeo, panelMaterial2r)
mainpanelRight02.position.set(100,0,-10-1*framePlace.distance)
scene.add(mainpanelRight02) 

const mainframeRight02 = new THREE.Mesh (mainframeGeo, mainframeMaterial)
mainframeRight02.position.set(250,0,0-1*framePlace.distance)
scene.add(mainframeRight02) 

const toppanel02 = new THREE.Mesh (topGeo, topMaterial)
toppanel02.position.set(0,150,10-1*framePlace.distance)
scene.add(toppanel02)



//text manifesto screen text
 /////About Us Frame
 const mainpanelRightPeople2 = new THREE.Mesh (mainframeGeo, mainframeMaterial)
 mainpanelRightPeople2.position.set(250,0,-10-2*framePlace.distance+300)
 scene.add(mainpanelRightPeople2) 


 //Photo of Us
 const  scrollGeometry22 = new THREE.PlaneBufferGeometry(100,300)
//  const  scrollGeometry3 = new THREE.PlaneBufferGeometry(300,300)
 const  scrollGeometry32 = new THREE.PlaneBufferGeometry(390,300)

 const scrollTexture2A2 = new THREE.TextureLoader().load('/textures/us14.png')
 const material12 = new THREE.MeshBasicMaterial({ map:scrollTexture2A2, side: THREE.DoubleSide})
 const scrollTexture3B2 = new THREE.TextureLoader().load('/textures/us16.png')
 const material42 = new THREE.MeshBasicMaterial({ map:scrollTexture3B2, side: THREE.DoubleSide}) 
 
 
 const scroll22 = new THREE.Mesh (scrollGeometry22, material12)
 const scroll32 = new THREE.Mesh (scrollGeometry32, material42)


 scroll22.position.set(250,0,-15-2*framePlace.distance+300)
 scroll32.position.set(-350,0,-15-2*framePlace.distance+300)

 
 scene.add(scroll22)
 scene.add(scroll32)

const mainframeLeftPeople2 = new THREE.Mesh (mainframeGeo, mainframeMaterial)
mainframeLeftPeople2.position.set(-250,0,-10-2*framePlace.distance+300)
scene.add(mainframeLeftPeople2) 


//03 Studio Frame


const mainframeLeft03 = new THREE.Mesh (mainframeGeo, mainframeMaterial)
mainframeLeft03.position.set(-250,0,0-2*framePlace.distance)
scene.add(mainframeLeft03) 

const mainpanelLeft03 = new THREE.Mesh (panelGeo, panelMaterial2l)
mainpanelLeft03.position.set(-100,0,-10-2*framePlace.distance)
scene.add(mainpanelLeft03) 

const mainpanelRight03 = new THREE.Mesh (panelGeo, panelMaterial2r)
mainpanelRight03.position.set(100,0,-10-2*framePlace.distance)
scene.add(mainpanelRight03) 

const mainframeRight03 = new THREE.Mesh (mainframeGeo, mainframeMaterial)
mainframeRight03.position.set(250,0,0-2*framePlace.distance)
scene.add(mainframeRight03) 

                const toppanel03= new THREE.Mesh (topGeo, topMaterial)
                toppanel03.position.set(0,150,10-2*framePlace.distance)
                scene.add(toppanel03)

                /////About Us Frame
                const mainpanelRightPeople = new THREE.Mesh (mainframeGeo, mainframeMaterial)
                mainpanelRightPeople.position.set(250,0,-10-3*framePlace.distance+300)
                scene.add(mainpanelRightPeople) 


                //Photo of Us
                const  scrollGeometry2 = new THREE.PlaneBufferGeometry(100,300)
              //  const  scrollGeometry3 = new THREE.PlaneBufferGeometry(300,300)
                const  scrollGeometry3 = new THREE.PlaneBufferGeometry(390,300)

                const scrollTexture2A = new THREE.TextureLoader().load('/textures/us14.png')
                const material1 = new THREE.MeshBasicMaterial({ map:scrollTexture2A, side: THREE.DoubleSide})
                const scrollTexture3B = new THREE.TextureLoader().load('/textures/us16.png')
                const material4 = new THREE.MeshBasicMaterial({ map:scrollTexture3B, side: THREE.DoubleSide}) 
                
                
                const scroll2 = new THREE.Mesh (scrollGeometry2, material1)
                const scroll3 = new THREE.Mesh (scrollGeometry3, material4)


                scroll2.position.set(250,0,-15-3*framePlace.distance+300)
                scroll3.position.set(-350,0,-15-3*framePlace.distance+300)

                
                scene.add(scroll2)
                scene.add(scroll3)

const mainframeLeftPeople = new THREE.Mesh (mainframeGeo, mainframeMaterial)
mainframeLeftPeople.position.set(-250,0,-10-3*framePlace.distance+300)
scene.add(mainframeLeftPeople) 


//04

const mainframeLeft04 = new THREE.Mesh (mainframeGeo, mainframeMaterial)
mainframeLeft04.position.set(-250,0,0-3*framePlace.distance)
scene.add(mainframeLeft04) 

const mainpanelLeft04 = new THREE.Mesh (panelGeo, panelMaterial2l)
mainpanelLeft04.position.set(-100,0,-10-3*framePlace.distance)
scene.add(mainpanelLeft04) 




const mainpanelRight04 = new THREE.Mesh (panelGeo, panelMaterial2r)
mainpanelRight04.position.set(100,0,-10-3*framePlace.distance)
scene.add(mainpanelRight04) 

const mainframeRight04 = new THREE.Mesh (mainframeGeo, mainframeMaterial)
mainframeRight04.position.set(250,0,0-3*framePlace.distance)
scene.add(mainframeRight04) 

const toppanel04= new THREE.Mesh (topGeo, topMaterial)
toppanel04.position.set(0,150,10-3*framePlace.distance)
scene.add(toppanel04)

////////



////texts
const textpanelTexture1= new THREE.TextureLoader(loadingManager).load('/textures/textA.png')
const textpanelMaterial1= new THREE.MeshBasicMaterial({color: '#ddd8cb', map: textpanelTexture1,transparent:true, opacity:1})
const textpanelTexture2 = new THREE.TextureLoader(loadingManager).load('/textures/textB.png')
const textpanelMaterial2 = new THREE.MeshBasicMaterial({color: '#ddd8cb', map: textpanelTexture2,transparent:true})
const textpanelTexture3 = new THREE.TextureLoader(loadingManager).load('/textures/textC.png')
const textpanelMaterial3 = new THREE.MeshBasicMaterial({color: '#ddd8cb', map: textpanelTexture3,transparent:true}) 
const textpanelTexture4 = new THREE.TextureLoader(loadingManager).load('/textures/textD.png')
const textpanelMaterial4 = new THREE.MeshBasicMaterial({color: '#ddd8cb', map: textpanelTexture4,transparent:true}) 
const textpanelTexture5 = new THREE.TextureLoader(loadingManager).load('/textures/textE.png')
const textpanelMaterial5 = new THREE.MeshBasicMaterial({color: '#ddd8cb', map: textpanelTexture5,transparent:true}) 

const textpanel01 = new THREE.Mesh( textpanelGeo, textpanelMaterial1)
textpanel01.position.set(0,0,-450)
textpanel01.scale.set(0.8,0.8,0.8)
scene.add(textpanel01)

const textpanel02 = new THREE.Mesh( textpanelGeo, textpanelMaterial2)
textpanel02.position.set(0,0,-450-0.5*framePlace.distance)
textpanel02.scale.set(0.8,0.8,0.8)
scene.add(textpanel02)

const textpanel03 = new THREE.Mesh( textpanelGeo, textpanelMaterial3)
textpanel03.position.set(0,0,-450-1*framePlace.distance)
textpanel03.scale.set(0,0,0)
scene.add(textpanel03)

const textpanel04 = new THREE.Mesh( textpanelGeo, textpanelMaterial4)
textpanel04.position.set(0,0,-450-1.5*framePlace.distance)
textpanel04.scale.set(0,0,0)
scene.add(textpanel04)

const textpanel05 = new THREE.Mesh( textpanelGeo, textpanelMaterial5)
textpanel05.position.set(0,0,-450-2*framePlace.distance)
textpanel05.scale.set(0.8,0.8,0.8)
scene.add(textpanel05)


const project = {
    distance:400
}

////PROJECT PANELS

const projectGeo = new THREE.PlaneBufferGeometry(267,300)


const  floorGeometry2 = new THREE.PlaneBufferGeometry(600,400)
const  ceilingGeometry2 = new THREE.PlaneBufferGeometry(600,400)
const ceilingMaterial2 = new THREE.MeshBasicMaterial({ color:'#FFFFE0'})
const floorMaterial2 = new THREE.MeshBasicMaterial({ color:'#FFFFE0'})
const ceilingMaterial4 = new THREE.MeshBasicMaterial({ color:'white'})
const floorMaterial4 = new THREE.MeshBasicMaterial({ color:'white'})
const ceilingMaterial5 = new THREE.MeshBasicMaterial({ color:'white'})
const floorMaterial5 = new THREE.MeshBasicMaterial({ color:'white'})
const ceilingMaterial6= new THREE.MeshBasicMaterial({ color:'white'})
const floorMaterial6 = new THREE.MeshBasicMaterial({ color:'white'})
const ceilingMaterial7= new THREE.MeshBasicMaterial({ color:'white'})
const floorMaterial7 = new THREE.MeshBasicMaterial({ color:'white'})
const ceilingMaterial8= new THREE.MeshBasicMaterial({ color:'white'})
const floorMaterial8 = new THREE.MeshBasicMaterial({ color:'white'})


const floor2 = new THREE.Mesh (floorGeometry2, floorMaterial2)
const ceiling2 = new THREE.Mesh (ceilingGeometry2, ceilingMaterial2)
const floor4 = new THREE.Mesh (floorGeometry2, floorMaterial4)
const ceiling4 = new THREE.Mesh (ceilingGeometry2, ceilingMaterial4)
const floor5 = new THREE.Mesh (floorGeometry2, floorMaterial5)
const ceiling5 = new THREE.Mesh (ceilingGeometry2, ceilingMaterial5)
const floor6 = new THREE.Mesh (floorGeometry2, floorMaterial6)
const ceiling6 = new THREE.Mesh (ceilingGeometry2, ceilingMaterial6)
const floor7 = new THREE.Mesh (floorGeometry2, floorMaterial7)
const ceiling7 = new THREE.Mesh (ceilingGeometry2, ceilingMaterial7)
const floor8 = new THREE.Mesh (floorGeometry2, floorMaterial8)
const ceiling8 = new THREE.Mesh (ceilingGeometry2, ceilingMaterial8)


floor2.position.z = -6*project.distance+200
floor2.position.y = -150
floor2.rotation.x = -Math.PI * .5
ceiling2.position.z = -6*project.distance+200
ceiling2.position.y = 150
ceiling2.rotation.x = Math.PI * .5
floor4.position.z = -7*project.distance+200
floor4.position.y = -150
floor4.rotation.x = -Math.PI * .5
ceiling4.position.z = -7*project.distance+200
ceiling4.position.y = 150
ceiling4.rotation.x = Math.PI * .5
floor5.position.z = -8*project.distance+200
floor5.position.y = -150
floor5.rotation.x = -Math.PI * .5
ceiling5.position.z = -8*project.distance+200
ceiling5.position.y = 150
ceiling5.rotation.x = Math.PI * .5
floor6.position.z = -9*project.distance+200
floor6.position.y = -150
floor6.rotation.x = -Math.PI * .5
ceiling6.position.z = -9*project.distance+200
ceiling6.position.y = 150
ceiling6.rotation.x = Math.PI * .5
floor7.position.z = -10*project.distance+200
floor7.position.y = -150
floor7.rotation.x = -Math.PI * .5
ceiling7.position.z = -10*project.distance+200
ceiling7.position.y = 150
ceiling7.rotation.x = Math.PI * .5
floor8.position.z = -11*project.distance+200
floor8.position.y = -150
floor8.rotation.x = -Math.PI * .5
ceiling8.position.z = -11*project.distance+200
ceiling8.position.y = 150
ceiling8.rotation.x = Math.PI * .5



scene.add(floor2)
scene.add(ceiling2)
scene.add(floor4)
scene.add(ceiling4)
scene.add(floor5)
scene.add(ceiling5)
scene.add(floor6)
scene.add(ceiling6)
scene.add(floor7)
scene.add(ceiling7)
scene.add(floor8)
scene.add(ceiling8)






const left01Texture = new THREE.TextureLoader(loadingManager).load('/textures/projects/P7L.png') //p1L
const left01Material= new THREE.MeshBasicMaterial({ map:left01Texture})
const  right01Texture = new THREE.TextureLoader(loadingManager).load('/textures/projects/P7R.png')
const right01Material = new THREE.MeshBasicMaterial({ map:right01Texture})

const left02Texture = new THREE.TextureLoader(loadingManager).load('/textures/projects/P8L.png')
const left02Material= new THREE.MeshBasicMaterial({ map:left02Texture})
const  right02Texture = new THREE.TextureLoader(loadingManager).load('/textures/projects/P8R.png')
const right02Material = new THREE.MeshBasicMaterial({ map:right02Texture})


const left03Texture = new THREE.TextureLoader(loadingManager).load('/textures/projects/P3L.png')
const left03Material= new THREE.MeshBasicMaterial({ map:left03Texture})
const  right03Texture = new THREE.TextureLoader(loadingManager).load('/textures/projects/P3R.png')
const right03Material = new THREE.MeshBasicMaterial({ map:right03Texture})


const left04Texture = new THREE.TextureLoader(loadingManager).load('/textures/projects/P4L.png')
const left04Material= new THREE.MeshBasicMaterial({ map:left04Texture})
const  right04Texture = new THREE.TextureLoader(loadingManager).load('/textures/projects/P4R.png')
const right04Material = new THREE.MeshBasicMaterial({ map:right04Texture})


const left05Texture = new THREE.TextureLoader(loadingManager).load('/textures/projects/P8L.png')
const left05Material= new THREE.MeshBasicMaterial({ map:left05Texture})
const  right05Texture = new THREE.TextureLoader(loadingManager).load('/textures/projects/P8R.png')
const right05Material = new THREE.MeshBasicMaterial({ map:right05Texture})






const left01 = new THREE.Mesh (projectGeo, left01Material)
left01.position.set(-130,0,-6*project.distance)//-20-0*framePlace.distance)
const right01 = new THREE.Mesh (projectGeo, right01Material)
right01.position.set(130,0,-6*project.distance)

const left02 = new THREE.Mesh (projectGeo, left02Material)
left02.position.set(-130,0,-7*project.distance)//-20-0*framePlace.distance)
const right02 = new THREE.Mesh (projectGeo, right02Material)
right02.position.set(130,0,-7*project.distance)

const left03 = new THREE.Mesh (projectGeo, left03Material)
left03.position.set(-130,0,-8*project.distance)//-20-0*framePlace.distance)
const right03 = new THREE.Mesh (projectGeo, right03Material)
right03.position.set(130,0,-8*project.distance)


const left06Texture = new THREE.TextureLoader(loadingManager).load('/textures/projects/P7L.png')
const left06Material= new THREE.MeshBasicMaterial({ map:left06Texture})
const  right06Texture = new THREE.TextureLoader(loadingManager).load('/textures/projects/P7R.png')
const right06Material = new THREE.MeshBasicMaterial({ map:right06Texture})

/* const left05Texture = new THREE.TextureLoader().load('/textures/projects/P5L.png')
const left05Material= new THREE.MeshBasicMaterial({ map:left05Texture})
const  right05Texture = new THREE.TextureLoader().load('/textures/projects/P5R.png')
const right05Material = new THREE.MeshBasicMaterial({ map:right05Texture}) */





/* const left06Texture = new THREE.TextureLoader().load('/textures/projects/P6L.png')
const left06Material= new THREE.MeshBasicMaterial({ map:left06Texture})
const  right06Texture = new THREE.TextureLoader().load('/textures/projects/P6R.png')
const right06Material = new THREE.MeshBasicMaterial({ map:right06Texture}) */

const topframe = new THREE.Mesh(topGeo,projectframeMaterial)


const left04 = new THREE.Mesh (projectGeo, left04Material)
left04.position.set(-267/2,0,-9*project.distance)//-20-0*framePlace.distance)
const right04 = new THREE.Mesh (projectGeo, right04Material)
right04.position.set(267/2,0,-9*project.distance)

const left05 = new THREE.Mesh (projectGeo, left05Material)
left05.position.set(-130,0,-10*project.distance)//-20-0*framePlace.distance)
const right05 = new THREE.Mesh (projectGeo, right05Material)
right05.position.set(130,0,-10*project.distance)

const left06 = new THREE.Mesh (projectGeo, left06Material)
left06.position.set(-130,0,-11*project.distance)//-20-0*framePlace.distance)
const right06 = new THREE.Mesh (projectGeo, right06Material)
right06.position.set(130,0,-11*project.distance)

//project frames

const projectFrameL = new THREE.Mesh (mainframeGeo, projectframeMaterial)
projectFrameL.position.set(-250,0,10-6*project.distance)
scene.add(projectFrameL) 

const projectFramerR = new THREE.Mesh (mainframeGeo,projectframeMaterial)
projectFramerR.position.set(250,0,10-6*project.distance)
scene.add(projectFramerR) 


const projectFrameL2 = new THREE.Mesh (mainframeGeo, projectframeMaterial)
projectFrameL2.position.set(-250,0,10-7*project.distance)
scene.add(projectFrameL2) 

const projectFramerR2 = new THREE.Mesh (mainframeGeo,projectframeMaterial)
projectFramerR2.position.set(250,0,10-7*project.distance)
scene.add(projectFramerR2) 



const projectFrameL3 = new THREE.Mesh (mainframeGeo, projectframeMaterial)
projectFrameL3.position.set(-250,0,10-8*project.distance)
scene.add(projectFrameL3) 

const projectFramerR3 = new THREE.Mesh (mainframeGeo,projectframeMaterial)
projectFramerR3.position.set(250,0,10-8*project.distance)
scene.add(projectFramerR3) 



const projectFrameL4 = new THREE.Mesh (mainframeGeo, projectframeMaterial)
projectFrameL4.position.set(-250,0,10-9*project.distance)
scene.add(projectFrameL4) 

const projectFramerR4 = new THREE.Mesh (mainframeGeo,projectframeMaterial)
projectFramerR4.position.set(250,0,10-9*project.distance)
scene.add(projectFramerR4) 

///

const toppanelA= new THREE.Mesh (topGeo, projectframeMaterial)
toppanelA.position.set(0,150,13-6*project.distance)
scene.add(toppanelA)

const toppanelB= new THREE.Mesh (topGeo, projectframeMaterial)
toppanelB.position.set(0,150,13-7*project.distance)
scene.add(toppanelB)


const toppanelC= new THREE.Mesh (topGeo, projectframeMaterial)
toppanelC.position.set(0,150,13-8*project.distance)
scene.add(toppanelC)


const toppanelD= new THREE.Mesh (topGeo,projectframeMaterial)
toppanelD.position.set(0,150,13-9*project.distance)
scene.add(toppanelD)

const toppanelE= new THREE.Mesh (topGeo, projectframeMaterial)
toppanelE.position.set(0,150,+13-10*project.distance)
scene.add(toppanelE)


const toppanelF= new THREE.Mesh (topGeo, projectframeMaterial)
toppanelF.position.set(0,150,13-11*project.distance)
scene.add(toppanelF)


/* const toppanel055= new THREE.Mesh (topGeo,projectframeMaterial)
toppanel055.position.set(0,150,+30-9*project.distance)
scene.add(toppanel055) */
 

//project canvas

 const projectcanvasTexture = new THREE.TextureLoader().load('/textures/projects/P2L.png')
const projectcanvasMaterial= new THREE.MeshBasicMaterial({ map:projectcanvasTexture })

const projectCanvas = new THREE.Mesh( projectGeo, projectcanvasMaterial)
projectCanvas.position.set(0,0,-30-4*framePlace.distance)
//scene.add(projectCanvas) 



scene.add(left01)
scene.add(right01) 
scene.add(left02)
scene.add(right02) 
scene.add(left03)
scene.add(right03) 


scene.add(left04)
scene.add(right04) 
scene.add(left05)
scene.add(right05) 
scene.add(left06)
scene.add(right06) 


/* scene.add(topframe01) */



//entourage make this group

//tree
//tree outdoor

/* const  treeGeometry = new THREE.PlaneBufferGeometry(300,500)

const treeTexture = new THREE.TextureLoader().load('/textures/tree02.png')
const treeMaterial = new THREE.MeshBasicMaterial({ map:treeTexture,  transparent: true})

const tree = new THREE.Mesh (treeGeometry, treeMaterial)
tree.position.z = 100
tree.position.x = 200
tree.position.y = 0
//scene.add(tree) */




//rock
/* const  rockGeometry = new THREE.PlaneBufferGeometry(100,100)

const rockTexture = new THREE.TextureLoader().load('/textures/rock01.png')
const rockMaterial = new THREE.MeshBasicMaterial({ map:rockTexture, transparent: true})

const rock = new THREE.Mesh (rockGeometry, rockMaterial)
rock.position.z = 15  //-320
rock.position.x = 180//-85
rock.position.y = -150
scene.add(rock) */

//table
const  tableGeometry = new THREE.PlaneBufferGeometry(100,100)

const tableTexture = new THREE.TextureLoader(loadingManager).load('/textures/teatable03.png')
const tableMaterial = new THREE.MeshBasicMaterial({ map:tableTexture, transparent: true})

const table = new THREE.Mesh (tableGeometry, tableMaterial)
table.position.z = -450  //-320
table.position.x = 0//-85
table.position.y = -150
scene.add(table)

//table
const  tableGeometry2 = new THREE.PlaneBufferGeometry(150,150)

const tableTexture2 = new THREE.TextureLoader(loadingManager).load('/textures/teatable.png')
const tableMaterial2 = new THREE.MeshBasicMaterial({ map:tableTexture2, transparent: true})

const table2 = new THREE.Mesh (tableGeometry2, tableMaterial2)
table2.position.set(0,-150,-15-3*framePlace.distance+350)

scene.add(table2)


//bird
const  birdGeometry = new THREE.PlaneBufferGeometry(200,316) //300, 300*1.5
const birdTexture = new THREE.TextureLoader(loadingManager).load('/textures/bird01.png')
const birdMaterial = new THREE.MeshBasicMaterial({ map:birdTexture, transparent: true})
const bird = new THREE.Mesh (birdGeometry, birdMaterial)
bird.position.z = -1190-600
bird.position.x = 100
bird.position.y = 100
bird.scale.set(.35,.35,.35)
scene.add(bird)



//display table
const  displayGeometry = new THREE.PlaneBufferGeometry(100,100*1.3)
const displayTexture = new THREE.TextureLoader(loadingManager).load('/textures/display01.png')
const displayMaterial = new THREE.MeshBasicMaterial({ map:displayTexture, transparent: true })
const display = new THREE.Mesh (displayGeometry, displayMaterial)
/* display.position.z = -1100
display.position.x = -120
display.position.y = -130 */
//display.position.set(90,-150,-950)
display.position.set(0,-150,-1650+600)
scene.add(display)

/* // us
 const textureUs = new THREE.TextureLoader().load('/textures/us7.jpg')
const materialUs = new THREE.MeshBasicMaterial({map: textureUs}) //, transparent :true
const geometryUs= new THREE.PlaneBufferGeometry(100,200)
const us = new THREE.Mesh (geometryUs , materialUs)
us.position.set(-40,-100,-1000-600) 
//scene.add(us) */

/*  const textureUs2 = new THREE.TextureLoader().load('/textures/us4.png')
const materialUs2 = new THREE.MeshBasicMaterial({map: textureUs2, transparent :true})
const geometryUs2= new THREE.PlaneBufferGeometry(63,190)
const us2 = new THREE.Mesh (geometryUs2 , materialUs2)
us2.position.set(50,-100,-1000-600)
//scene.add(us2) */

// book
/* const textureBook = new THREE.TextureLoader().load('/textures/book01.png')
const materialBook = new THREE.MeshBasicMaterial({map: textureBook, transparent :true})
const bookGeometry = new THREE.PlaneBufferGeometry(40,40)
const book = new THREE.Mesh (bookGeometry , materialBook)
book.position.set(90,-80,-1050) */
//scene.add(book)

//gallery
//01


//
//stag
/* const  stagGeometry = new THREE.PlaneBufferGeometry(150,202)

const stagTexture = new THREE.TextureLoader().load('/textures/stag01.png')
const stagMaterial = new THREE.MeshBasicMaterial({ map:stagTexture, transparent: true })

const stag = new THREE.Mesh (stagGeometry, stagMaterial)
stag.position.z = - 5000
stag.position.x = 0
stag.position.y = -100
scene.add(stag) */




/////3dmodels
// create three cubes
var torusKnot = new THREE.Mesh( new THREE.TorusKnotGeometry( 10, 3, 100, 16 ), new THREE.PointsMaterial( { color: '#FFFFE0' ,    size: 0.05} ) );

torusKnot.position.set(0,-90,-1650+600) ////changed from about section to manifesto section
// add the cubes to the scene
scene.add( torusKnot);



///handles
const handleGeo = new THREE.CircleGeometry(10, 32);
const handleMaterial01 = new THREE.MeshBasicMaterial( { color: '#FFFFE0'} );
const handleMaterial02 = new THREE.PointsMaterial( {    size: 0.5} ); 

  
  //slider
  const sliderGeo = new THREE.PlaneBufferGeometry(10,10);

  const sliderMaterial01 = new THREE.MeshBasicMaterial( { color: '#FFFFE0'} );


const linkA = new THREE.Mesh(sliderGeo, sliderMaterial01)
linkA.userData.link = "https://example.com";



  const handleA = new THREE.Mesh(handleGeo, handleMaterial01 )
  const handleB = new THREE.Mesh( handleGeo, handleMaterial01  );
  const handleC = new THREE.Mesh( handleGeo, handleMaterial01 );
  const handleD = new THREE.Mesh( handleGeo, handleMaterial01  );

  const sliderA = new THREE.Mesh(sliderGeo,sliderMaterial01)
  const sliderB = new THREE.Mesh(sliderGeo,sliderMaterial01)
  const sliderC = new THREE.Mesh(sliderGeo,sliderMaterial01)
  const sliderD = new THREE.Mesh(sliderGeo,sliderMaterial01)
   const sliderE = new THREE.Mesh(sliderGeo,sliderMaterial01)
   const sliderPeople1 = new THREE.Mesh(sliderGeo,sliderMaterial01)
   const sliderPeople2 = new THREE.Mesh(sliderGeo,sliderMaterial01)

handleA.position.set(0,80,-10) //originally y:0 //
handleB.position.set(0,80,-10-1*framePlace.distance)
handleC.position.set(0,80,-10-2*framePlace.distance)
handleD.position.set(0,80,-10-3*framePlace.distance)


sliderA.position.set(0,-50,-450)
sliderA.rotation.z = Math.PI*.25
sliderB.position.set(0,-70,-450-0.5*framePlace.distance)
sliderB.rotation.z = Math.PI*.25
sliderC.position.set(0,-50,-450-1*framePlace.distance)
sliderD.position.set(0,-50,-450-1.5*framePlace.distance)
sliderE.position.set(0,-50,-450-2*framePlace.distance)
sliderE.rotation.z = Math.PI*.25
sliderPeople1.position.set(250 ,80,-5-3*framePlace.distance+300)
sliderPeople2.position.set(250 ,-80,-5-3*framePlace.distance+300)

//linkA.position.set(250 ,80,-5-3*framePlace.distance+300)

  scene.add(handleA)
  scene.add(handleB)
  scene.add(handleC)
  scene.add(handleD)

scene.add(sliderA)
scene.add(sliderB)
scene.add(sliderC)
scene.add(sliderD)
scene.add(sliderE)
scene.add(sliderPeople1)
scene.add(sliderPeople2)
//scene.add(linkA)



//PROJECT SLIDER
const Sright01 = new THREE.Mesh(handleGeo, handleMaterial01 )
const Sright02 = new THREE.Mesh(handleGeo, handleMaterial01 )
const Sright03 = new THREE.Mesh(handleGeo, handleMaterial01 )
const Sright04 = new THREE.Mesh(handleGeo, handleMaterial01 )
const Sright05 = new THREE.Mesh(handleGeo, handleMaterial01 )
const Sright06 = new THREE.Mesh(handleGeo, handleMaterial01 )


const getBack = new THREE.Mesh(handleGeo, handleMaterial01 )
getBack.position.set(0,-90,-11*project.distance-200)

Sright01.position.set(0,-90,-6*project.distance)
Sright02.position.set(0,-90,-7*project.distance)
Sright03.position.set(0,-90,-8*project.distance)
Sright04.position.set(0,-90,-9*project.distance)
Sright05.position.set(0,-90,-10*project.distance)
Sright06.position.set(0,-90,-11*project.distance)



scene.add(Sright01)
scene.add(Sright02)
scene.add(Sright03)
scene.add(Sright04)
scene.add(Sright05)
scene.add(Sright06)
scene.add(getBack)

//set up raycaster and mouse vector
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var textpanels
var textpanelsPosition

var originalPositions = [mainpanelLeft01.position.clone(), mainpanelLeft02.position.clone(),mainpanelLeft03.position.clone(),
     mainpanelLeft04.position.clone()];
var originalPositions2 = [mainpanelRight01.position.clone(), mainpanelRight02.position.clone(),mainpanelRight03.position.clone(), mainpanelRight04.position.clone() ];
var leftPanels = [mainpanelLeft01, mainpanelLeft02, mainpanelLeft03, mainpanelLeft04]
var rightPanels = [mainpanelRight01, mainpanelRight02, mainpanelRight03, mainpanelRight04];
/* var textElements = [obj1,obj2,obj1,obj2] */
var handles = [handleA, handleB, handleC,handleD]

var originalSlider = [sliderA.position.clone(), sliderB.position.clone(),sliderC.position.clone(),sliderD.position.clone(),sliderE.position.clone()];

var sliders=[sliderA,sliderB,sliderC,sliderD,sliderE]

//var peoplesliders=[sliderPeople]
var peoplePanels = [scroll3, scroll2]
//var peoplePosition=[scroll3.position.clone(), scroll2.position.clone()]


var projectleftpanels = [left01, left02, left03, left04, left05, left06]
var projectrightpanels = [right01, right02, right03, right04, right05, right06 ]
var projectSrightpanels = [Sright01, Sright02, Sright03, Sright04, Sright05, Sright06 ]
var projectleftposititon = [left01.position.clone(), left02.position.clone(),left03.position.clone(), left04.position.clone(), left05.position.clone(),left06.position.clone()]
var projectrightposititon = [right01.position.clone(), right02.position.clone(),right03.position.clone(),right04.position.clone(), right05.position.clone(),right06.position.clone()]
var projectSrightposititon = [Sright01.position.clone(), Sright02.position.clone(),Sright03.position.clone(),Sright04.position.clone(), Sright05.position.clone(),Sright06.position.clone()]

// listen for mouse click event
document.addEventListener( 'mousedown', onMouseClick, false );

function onMouseClick( event ) {
   

    // update mouse vector with click position
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    // update raycaster with camera and mouse position
    raycaster.setFromCamera( mouse, camera );
    //var textpanels = [writeThought, writeStudio,writeReach, writeCreate]

    // get list of objects the ray intersects
    var intersects = raycaster.intersectObjects([handleA, handleB, handleC,handleD]);




    if ( intersects.length > 0 ) {
        for (var i = 0; i < intersects.length; i++) {
            // check if the current object is one of our handles
            var handle = intersects[i].object;
            var index = [handleA, handleB, handleC, handleD].indexOf(handle);
            if (index !== -1) {

                if (index === 0){

                    sound.play();
               
                }


                if ( leftPanels[index].position.equals( originalPositions[index] ) ) {
                    gsap.to(leftPanels[index].position, { duration: 2, delay: 0.5, x: "-=150"})//150
                    gsap.to(rightPanels[index].position, { duration:2, delay: 0.5 ,x: "+=150"})
                    gsap.to(handles[index].position, { duration: 2, delay: 0.5 , x: "+=150"})
                    slideSound.play();
                } 
         

               
                
                else {
                    gsap.to(leftPanels[index].position, { duration: 2, delay: 0.5 ,x: originalPositions[index].x})
                    gsap.to(rightPanels[index].position, { duration: 2, delay: 0.5 ,x: originalPositions2[index].x})
                    gsap.to(handles[index].position, { duration: 2, delay: 0.5 , x: "-=150"})

                    slideSound.play();
                }
            }
        }
    }








 // get list of objects the ray intersects
 var intersects2 = raycaster.intersectObjects([sliderA,sliderB,sliderC,sliderD,sliderE]);

 if ( intersects2.length > 0 ) {
     for (var i = 0; i < intersects2.length; i++) {
         // check if the current object is one of our handles
        
         var handle2 = intersects2[i].object;
         var index = [sliderA,sliderB,sliderC,sliderD,sliderE].indexOf(handle2);
         if (index !== -1) {


             if (sliders[index].position.equals( originalSlider[index] ) ) {
                gsap.to(sliders[index].position, { duration: 1, delay: 0.5 , y: "-=10"})
                //gsap.to(sliders[index].rotation, {duration:1, delay:0.5,z: "=Math.PI * 1"})
                
                if (index === 0){
                    
                    
                    //gsap.to(textA.scale,{duration:2, delay:0.5,x: "+=300"})
                   gsap.to(textpanel01.scale,{duration:1, delay:0.5,x:0, y:0, z:0})
                   gsap.to(sliderA.rotation,{duration:1, delay:1, z:0})
                    //gsap.to(textpanelMaterial1.opacity,{duration:1, delay:0.5,opacity:"0"})
                }
                else if (index === 1){
                    gsap.to(textpanel02.scale,{duration:1, delay:0.5,x:0, y:0, z:0})
                    gsap.to(sliderB.rotation,{duration:1, delay:1, z:0})
                    //gsap.to(textB.position,{duration:1, delay:0.5,x: "+=300"})
                }
                else if (index === 2){
                    gsap.to(textpanel03.scale,{duration:1, delay:0.5,x:0.8, y:0.8, z:0.8})
                    gsap.to(sliderC.rotation,{duration:1, delay:1, z:Math.PI*.25})
                    //gsap.to(textC.position,{duration:1, delay:0.5,x: "+=300"})
                }

                else if (index === 3){
                    gsap.to(textpanel04.scale,{duration:1, delay:0.5,x:0.8, y:0.8, z:0.8})
                    //gsap.to(textC.position,{duration:1, delay:0.5,x: "+=300"})
                    gsap.to(sliderD.rotation,{duration:1, delay:1, z:Math.PI*.25})
                }

                else {
                    gsap.to(textpanel05.scale,{duration:1, delay:0.5,x:0, y:0, z:0})
                    gsap.to(sliderE.rotation,{duration:1, delay:1, z:0})
                    //gsap.to(textD.position,{duration:1, delay:0.5,x: "+=300"})
                }
                
               
                }
                 
                              
                
             
             else {
                 gsap.to(sliders[index].position, { duration:1, delay: 0.5 ,y: originalSlider[index].y})
                 //gsap.to(sliders[index].rotation, {duration:1, delay:0.5,x: "Math.PI * 2"})

                 
             

                if (index === 0){
                    // gsap.to(textA.position,{duration:2, delay:0.5,x: "-=300"})
                     gsap.to(textpanel01.scale,{duration:.5, delay:0.5,x:1, y:1, z:1})
                     gsap.to(sliderA.rotation,{duration:1, delay:1, z:Math.PI*.25})
                     //gsap.to(textpanelMaterial1.opacity,{duration:1, delay:0.5,opacity:1})
                     console.log(index)
                 }
                 else if (index === 1){
                     //gsap.to(textB.position,{duration:1, delay:0.5,x: "-=300"})
                     gsap.to(textpanel02.scale,{duration:.5, delay:0.5,x:1, y:1, z:1})
                     gsap.to(sliderB.rotation,{duration:1, delay:1, z:Math.PI*.25})
                     console.log(index)
                 }
                 else if (index === 2){
                     //gsap.to(textC.position,{duration:1, delay:0.5,x: "-=300"})
                     gsap.to(textpanel03.scale,{duration:.5, delay:0.5,x:0, y:0, z:0})
                     console.log(index)
                     gsap.to(sliderC.rotation,{duration:1, delay:1, z:0})
                 }
                 else if(index === 3){
                     //gsap.to(textD.position,{duration:1, delay:0.5,x: "-=300"})
                     gsap.to(textpanel04.scale,{duration:.5, delay:0.5,x:0, y:0, z:0})
                     console.log(index)
                     gsap.to(sliderD.rotation,{duration:1, delay:1, z:0})}

                 else {
                     gsap.to(textpanel05.scale,{duration:.5, delay:0.5,x:1, y:1, z:1})
                     gsap.to(sliderE.rotation,{duration:1, delay:1, z:Math.PI*.25})
                   }  



             }
         }
     }
    }

// get list of objects the ray intersects
var intersects3 = raycaster.intersectObjects([Sright01, Sright02, Sright03, Sright04, Sright05, Sright06 ]);

if ( intersects3.length > 0 ) {
    for (var i = 0; i < intersects3.length; i++) {
        // check if the current object is one of our handles
        var handle3 = intersects3[i].object;
        var index = [Sright01, Sright02, Sright03, Sright04, Sright05, Sright06].indexOf(handle3);
        if (index !== -1) {


            if (projectrightpanels[index].position.equals( projectrightposititon[index] ) ) {
                
                gsap.to(projectleftpanels[index].position, { duration: 1, delay: 0.5 , x: "-=130 "})
                gsap.to(projectrightpanels[index].position, { duration: 1, delay: 0.5 , x: "+=130"})
                gsap.to(projectSrightpanels[index].position, { duration: 1, delay: 0.5 , x: "+=130"})
                slideSound.play();
            } 
     
                     
            
            else {
                gsap.to(projectleftpanels[index].position, { duration:1, delay: 0.5 ,x: projectleftposititon[index].x})
                gsap.to(projectrightpanels[index].position, { duration:1, delay: 0.5 ,x: projectrightposititon[index].x})
                gsap.to(projectSrightpanels[index].position, { duration:1, delay: 0.5 ,x: projecStrightposititon[index].x})
                slideSound.play();
            }
        }
    }
}

/////LINKS

var intersects4 = raycaster.intersectObjects([sliderPeople1, sliderPeople2]);

if ( intersects4.length > 0 ) {
    for (var i = 0; i < intersects4.length; i++) {
        // check if the current object is one of our handles
        var handle4 = intersects4[i].object;
        var index = [sliderPeople1,sliderPeople2].indexOf(handle4);
        if (index !== -1) {


 if ( scroll2.position.x ===250) {
                
    gsap.to(scroll3.position,{ duration:2, delay:0.5, x: "-50"})
    gsap.to(scroll2.position,{ duration:1, delay:0.5, x: "150"})
    slideSound.play();
                               
            } 
     
                     
            
            else {

                gsap.to(scroll3.position,{ duration:2, delay:0.5, x: "-350"})
                gsap.to(scroll2.position,{ duration:1, delay:0.5, x: "250"})
                slideSound.play();
            }
        }
    }
}

/////GET BACK
var intersects5 = raycaster.intersectObjects([getBack]);




  if (intersects5.length > 0) {

    gsap.to(cameraPosition, {duration: 24, delay: 0.5, z: 900, onUpdate: () => {
        camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);}})
 
    }  
}

      
 
//lights
const light = new THREE.PointLight( 0xff0000, 1, 100 );
light.position.set( 50, 50, 50 );
//scene.add( light )



//background

scene.background = new THREE.Color ('#d4c7a5')

//fog
const fog = new THREE.Fog('#d4c7a5',1 ,2100)
scene.fog = fog 





window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


})


window.addEventListener('dblclick', () =>
{
if(!document.fullscreenElement)
{
    canvas.requestFullscreen()
}
else{
    document.exitFullscreen()
}
})



/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 5000)
camera.position.z = 1200

scene.add(camera)

let cameraPosition = {
    x: camera.position.x,
    y: camera.position.y,
    z: camera.position.z,
    movement : 300,
    movement2 : 200
}




// Add an event listener for the scroll event
window.addEventListener("wheel", (event) => {
    event.preventDefault();
    // Check if the user is scrolling up or down
    if (event.deltaY > 0) {
        // Animate the camera's position when scrolling up
        gsap.to(cameraPosition, {duration: 2, delay: 0.5, z: cameraPosition.z + 200, onUpdate: () => {
            camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);

        }});
    } else if (event.deltaY < 0) {
        // Animate the camera's position when scrolling down
        gsap.to(cameraPosition, {duration: 2, delay: 0.5, z: cameraPosition.z - 200, onUpdate: () => {
            camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
        }});
    }
    



});
 

var touchPos;

// store the touching position at the start of each touch
document.body.ontouchstart = function(e){
    touchPos = e.changedTouches[0].clientY;
}

// detect wether the "old" touchPos is 
// greater or smaller than the newTouchPos
document.body.ontouchmove = function(e){
    let newTouchPos = e.changedTouches[0].clientY;
    if(newTouchPos > touchPos) {
        console.log("finger moving down");
        //console.log(zPosition.value)
        console.log(camera.position.z)
        //camera.position.z =+ 300
        cameraPosition.z = camera.position.z + cameraPosition.movement2
        gsap.to(camera.position, { duration: 1.5, delay :0.5 , z: cameraPosition.z})
    }
    if(newTouchPos < touchPos) {
        cameraPosition.z = camera.position.z - cameraPosition.movement2
        gsap.to(camera.position, { duration: 1.5, delay :0.5 , z: cameraPosition.z})
    }
}






window.addEventListener("contextmenu", e => e.preventDefault());
 
// create an AudioListener and add it to the camera
var listener = new THREE.AudioListener(loadingManager);
camera.add( listener );

// create a global audio source
var sound = new THREE.Audio( listener );

var audioLoader = new THREE.AudioLoader();
 // load a sound and set it as the Audio object's buffer

 audioLoader.load( 'music/bgMusic.mp3', function( buffer ) {
    sound.setBuffer( buffer );
    sound.setLoop( true );
    sound.setVolume( 0.5 );
    //sound.autoplay = true;
    
    scene.add(sound);
});



const slideSound = new THREE.Audio( listener );
//audioLoader.load('')

//var audioLoader2 = new THREE.AudioLoader();

audioLoader.load( 'music/slide.wav', function( buffer ) {
    slideSound.setBuffer( buffer );
    slideSound.setLoop( false );
    slideSound.setVolume( 0.5 );
    //sound.autoplay = true;
    //slideSound.play();
    slideSound.add(sound);
});

 //Renderer
 
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//renderer.setClearColor('red')





/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime
    particles.rotation.y = elapsedTime*0.01


    handleA.rotation.z = .5 * elapsedTime
    handleB.rotation.z = - .4 * elapsedTime
    handleC.rotation.z = .9 * elapsedTime
    handleD.rotation.z = - .4 * elapsedTime


   torusKnot.rotation.y = .5 * elapsedTime

     
    // Render
 
    renderer.render(scene, camera)
    
    

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
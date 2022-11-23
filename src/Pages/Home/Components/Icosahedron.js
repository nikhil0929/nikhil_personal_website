import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { PresentationControls } from "@react-three/drei";
import { motion } from "framer-motion-3d"
import { useSpring, animated } from '@react-spring/three'
import { config } from 'chai';



function Icosahedron(props) {
    const mesh = useRef()

    const [active, setActive] = useState(false)
    const { scale } = useSpring({
        scale: active ? 1.5 : 1,
        config: config.wobbly
    })


    useFrame(({ clock }) => {
        mesh.current.rotation.y = Math.sin(clock.getElapsedTime())
        // mesh.current.rotation.y += 0.007
        // mesh.current.rotation.x += 0.006
        // mesh.current.rotation.z += 0.005
    })

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },

    }

    return (
        <PresentationControls>
            <animated.mesh
                {...props}
                ref={mesh}
                scale={scale}
                onClick={() => setActive(!active)}
            >
                <sphereBufferGeometry args={[1.9, 32, 32]} />
                <motion.meshNormalMaterial
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 3 }}
                    variants={variants}
                    wireframe
                />
            </animated.mesh>
        </PresentationControls>
    )
}

export default Icosahedron;
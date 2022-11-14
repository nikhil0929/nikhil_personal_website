import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { PresentationControls } from "@react-three/drei";
import { motion } from "framer-motion-3d"


function Icosahedron(props) {
    const mesh = useRef()

    const [clicked, setClicked] = useState(false)

    useFrame((state, delta) => {
        mesh.current.rotation.y += 0.007
        // mesh.current.rotation.x += 0.006
        // mesh.current.rotation.z += 0.005
    })

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },

    }

    return (
        <PresentationControls>
            <motion.mesh
                {...props}
                ref={mesh}
                scale={1}
                whileHover={{ scale: 1.1 }}
            >
                <sphereBufferGeometry args={[1.9, 32, 32]} />
                <motion.meshNormalMaterial
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 3 }}
                    variants={variants}
                    wireframe
                />
            </motion.mesh>
        </PresentationControls>
    )
}

export default Icosahedron;
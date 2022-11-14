import { useGLTF } from '@react-three/drei'
function Hand(props) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/right-hand-black-webxr-tracking-ready/model.gltf')
    return <primitive object={scene} {...props} />
}

export default Hand;
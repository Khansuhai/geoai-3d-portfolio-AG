import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef()
  const count = 1500

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 15 + Math.random() * 35
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#4FA3D9"
        size={0.06}
        sizeAttenuation
        depthWrite={false}
        opacity={0.5}
      />
    </Points>
  )
}

/* Small bright dots orbiting like satellites */
function SatelliteNodes() {
  const ref = useRef()
  const count = 40

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 15
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = -state.clock.elapsedTime * 0.04
      ref.current.rotation.z = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#0F3557"
        size={0.2}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  )
}

function GlobeWireframe() {
  const meshRef = useRef()
  const wireRef = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.05
      meshRef.current.rotation.x = 0.3
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = t * 0.05
      wireRef.current.rotation.x = 0.3
    }
  })

  return (
    <group>
      {/* Core sphere - subtle fill */}
      <Sphere args={[4.8, 32, 32]} ref={meshRef}>
        <meshBasicMaterial
          color="#D6ECFF"
          transparent
          opacity={0.25}
          side={THREE.BackSide}
        />
      </Sphere>
      {/* Wireframe sphere */}
      <Sphere args={[5, 48, 48]} ref={wireRef}>
        <meshBasicMaterial
          color="#4FA3D9"
          wireframe
          transparent
          opacity={0.35}
        />
      </Sphere>
      {/* Orbit ring 1 */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[6.5, 0.015, 8, 100]} />
        <meshBasicMaterial color="#00B4D8" transparent opacity={0.5} />
      </mesh>
      {/* Orbit ring 2 */}
      <mesh rotation={[Math.PI / 1.8, 0.5, 0.3]}>
        <torusGeometry args={[7.2, 0.015, 8, 100]} />
        <meshBasicMaterial color="#2F8F9D" transparent opacity={0.4} />
      </mesh>
      {/* Orbit ring 3 */}
      <mesh rotation={[Math.PI / 3, -0.3, 0.6]}>
        <torusGeometry args={[7.8, 0.012, 8, 100]} />
        <meshBasicMaterial color="#4FA3D9" transparent opacity={0.35} />
      </mesh>
    </group>
  )
}

export default function EarthScene() {
  return (
    <div className="three-canvas">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#4FA3D9" />
        <GlobeWireframe />
        <ParticleField />
        <SatelliteNodes />
      </Canvas>
    </div>
  )
}

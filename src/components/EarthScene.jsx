import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef()
  const count = 2000

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
        color="#38bdf8"
        size={0.08}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

function SatelliteNodes() {
  const ref = useRef()
  const count = 50

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 8 + Math.random() * 20
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
      ref.current.rotation.y = -state.clock.elapsedTime * 0.015
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#a78bfa"
        size={0.18}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  )
}

function GlobeWireframe() {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05
      meshRef.current.rotation.x = 0.3
    }
  })

  return (
    <group>
      {/* Core sphere glow */}
      <Sphere args={[4.8, 32, 32]} ref={meshRef}>
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
        />
      </Sphere>
      {/* Wireframe sphere */}
      <Sphere args={[5, 48, 48]} ref={(el) => {
        if (el && meshRef.current) {
          el.rotation.y = meshRef.current.rotation.y
          el.rotation.x = meshRef.current.rotation.x
        }
      }}>
        <meshBasicMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={0.08}
        />
      </Sphere>
      {/* Orbit ring 1 */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[6.5, 0.01, 8, 100]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.2} />
      </mesh>
      {/* Orbit ring 2 */}
      <mesh rotation={[Math.PI / 1.8, 0.5, 0.3]}>
        <torusGeometry args={[7.2, 0.01, 8, 100]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.15} />
      </mesh>
      {/* Orbit ring 3 */}
      <mesh rotation={[Math.PI / 3, -0.3, 0.6]}>
        <torusGeometry args={[7.8, 0.008, 8, 100]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.1} />
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
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.3} color="#38bdf8" />
        <GlobeWireframe />
        <ParticleField />
        <SatelliteNodes />
      </Canvas>
    </div>
  )
}

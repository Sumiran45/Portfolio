'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const AnimatedGrid = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            const time = clock.getElapsedTime() * 0.5;
            const positions = meshRef.current.geometry.attributes.position;

            for (let i = 0; i < positions.count; i++) {
                const x = positions.array[i * 3];
                const y = positions.array[i * 3 + 1];
                const distance = Math.sqrt(x * x + y * y);
                const wave = Math.sin(distance * 0.5 - time) * 0.5;
                positions.array[i * 3 + 2] = wave;
            }

            positions.needsUpdate = true;
        }
    });

    return (
        <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -5, -5]}>
            <planeGeometry args={[40, 40, 40, 40]} />
            <meshStandardMaterial
                color="#ff6b35"
                wireframe
                transparent
                opacity={0.2}
            />
        </mesh>
    );
};

const GlowingSpheres = () => {
    const positions = useMemo(() => [
        { pos: [-8, 2, -3], size: 1.5, delay: 0 },
        { pos: [8, -1, -4], size: 1.2, delay: 1 },
        { pos: [-5, -3, -2], size: 1, delay: 2 },
        { pos: [6, 3, -5], size: 1.3, delay: 1.5 }
    ], []);

    return (
        <>
            {positions.map((item, i) => (
                <Sphere key={i} position={item.pos} size={item.size} delay={item.delay} />
            ))}
        </>
    );
};

const Sphere = ({ position, size, delay }: any) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const glowRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (meshRef.current && glowRef.current) {
            const time = clock.getElapsedTime();
            const pulse = Math.sin(time * 0.8 + delay) * 0.1 + 0.9;
            meshRef.current.scale.setScalar(pulse);
            glowRef.current.scale.setScalar(pulse * 1.5);
        }
    });

    return (
        <group position={position}>
            <mesh ref={glowRef}>
                <sphereGeometry args={[size, 32, 32]} />
                <meshBasicMaterial color="#ff8c42" transparent opacity={0.1} />
            </mesh>
            <mesh ref={meshRef}>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial
                    color="#ff6b35"
                    emissive="#ff4500"
                    emissiveIntensity={0.3}
                    metalness={0.7}
                    roughness={0.3}
                    transparent
                    opacity={0.8}
                />
            </mesh>
        </group>
    );
};

const ParticleFlow = () => {
    const particlesRef = useRef<THREE.Points>(null);

    const positions = useMemo(() => {
        const pos = new Float32Array(500 * 3);
        // Use deterministic seed-based random values to avoid hydration mismatch
        const seed = 12345; // Fixed seed for consistent results
        const random = (index: number) => {
            const x = Math.sin(seed + index) * 10000;
            return x - Math.floor(x);
        };
        
        for (let i = 0; i < 500; i++) {
            pos[i * 3] = (random(i) - 0.5) * 50;
            pos[i * 3 + 1] = (random(i + 500) - 0.5) * 30;
            pos[i * 3 + 2] = (random(i + 1000) - 0.5) * 20;
        }
        return pos;
    }, []);

    useFrame(({ clock }) => {
        if (particlesRef.current) {
            const time = clock.getElapsedTime();
            const positions = particlesRef.current.geometry.attributes.position;

            for (let i = 0; i < positions.count; i++) {
                positions.array[i * 3 + 1] -= 0.02;
                if (positions.array[i * 3 + 1] < -15) {
                    positions.array[i * 3 + 1] = 15;
                }
            }

            positions.needsUpdate = true;
        }
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={500}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#ffb380"
                transparent
                opacity={0.5}
                sizeAttenuation
            />
        </points>
    );
};

const RotatingRing = () => {
    const ringRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (ringRef.current) {
            ringRef.current.rotation.x = Math.PI / 4;
            ringRef.current.rotation.z = clock.getElapsedTime() * 0.2;
        }
    });

    return (
        <mesh ref={ringRef} position={[0, 0, -8]}>
            <torusGeometry args={[6, 0.15, 16, 100]} />
            <meshStandardMaterial
                color="#ff6b35"
                emissive="#ff5722"
                emissiveIntensity={0.4}
                metalness={0.8}
                roughness={0.2}
                transparent
                opacity={0.4}
            />
        </mesh>
    );
};

export const ProfessionalBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950/10">
            <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
                <ambientLight intensity={0.2} />
                <directionalLight position={[10, 10, 5]} intensity={0.5} color="#ff8c42" />
                <pointLight position={[0, 5, 5]} intensity={0.8} color="#ff6b35" />

                <AnimatedGrid />
                <GlowingSpheres />
                <ParticleFlow />
                <RotatingRing />

                <fog attach="fog" args={['#0f0f0f', 8, 30]} />
            </Canvas>
        </div>
    );
};

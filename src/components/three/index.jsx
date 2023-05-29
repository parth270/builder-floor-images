import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useProgress, useTexture } from "@react-three/drei";
import Loader from "../Loader";
import * as THREE from "three";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

const url =
  "https://testerp1apis.nextsolutions.in/uploads/C1601-SL1/IMG_20221027_124906_00_merged.jpg";
const url1 =
  "https://builder-floor-flax.vercel.app/_next/image?url=https%3A%2F%2Ftesterp1apis.nextsolutions.in%2Fuploads%2F922%20SEC%2043%2FIMG_20221021_141945_00_merged.jpg&w=640&q=75";
const url2 = "/checck.jpg";
const Scene = ({ stop }) => {
  const texture = useTexture("https://s3.ap-south-1.amazonaws.com/rowthautoss3/maruti.png9910");
  return (
    <>
      <ambientLight intensity={1} color={"#fff"} />
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[10, 100, 100]} />
        <meshBasicMaterial
          toneMapped={false}
          side={THREE.DoubleSide}
          map={texture}
        />
      </mesh>
      <OrbitControls />
    </>
  );
};

const CanvasContainer = () => {
  const [loading, setLoading] = useState(false);
  const ref = useRef();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (ref.current) {
      setShow(true);
    }
  });
  console.log(show);
  return (
    <>
      {loading && <Loader />}
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 65,
        }}
        dpr={devicePixelRatio}
        gl={{
          antialias: false,
        }}
        performance={{ min: 0.5 }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Scene
          stop={() => {
            setLoading(false);
          }}
        />
      </Canvas>
    </>
  );
};

export default CanvasContainer;

// export async function getServerSideProps({ query }) {
//     console.log(query);
//     // const response = await axios.post(
//     //   "https://p24x7-server.herokuapp.com/api/p24x7",
//     //   {
//     //     action: "read",
//     //     module: "properties",
//     //     _id: query.id,
//     //     apiKey: "083d2bc2-fd14-4a5e-a440-614232b4873e",
//     //   }
//     // );
//     const response = await axios.post(
//       // "https://p24x7-server.herokuapp.com/api/p24x7",
//       "https://testerp1apis.nextsolutions.in/api/p24x7",
//       {
//         action: "read",
//         module: "properties",
//         _id: query.id,
//         apiKey: "083d2bc2-fd14-4a5e-a440-614232b4873e",
//       }
//     );
//     console.log(response);
//     return {
//       props: {
//         // TODO: Can do better error handling here by passing another property error in the component
//         property: response.data ?? {},
//       }, // will be passed to the page component as props
//     };
//   }

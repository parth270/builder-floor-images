import React, { Suspense, useEffect, useRef, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useProgress, useTexture } from "@react-three/drei";
import Loader from "../Loader";
// import * as THREE from "three";
// import { TextureLoader } from "three";
// import { useLoader } from "@react-three/fiber";

const url =
  "https://testerp1apis.nextsolutions.in/uploads/C1601-SL1/IMG_20221027_124906_00_merged.jpg";
// const Scene = ({ stop }) => {
//   const [urrl, setUrl] = useState(null);
//   const convert = async (imageUrl) => {
//     const response = await fetch(imageUrl);
//     const blob = await response.blob();

//     const objectURL = URL.createObjectURL(blob);
//     setUrl(objectURL);
//     // Use the texture in your Three Fiber component
//     // ...

//     // Clean up the object URL when no longer needed
//     URL.revokeObjectURL(objectURL);
//   };

//   const ref = useRef();
//   convert(url);
//   useEffect(() => {
//     if (urrl) {
//       const textureLoader = new THREE.TextureLoader();
//       textureLoader.load(
//         "path/to/texture.jpg",
//         function (texture) {
//           ref.current.material.map = texture;
//         },
//         function (xhr) {
//           // Called while the texture is loading
//           console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
//         },
//         function (error) {
//           // Called if there's an error loading the texture
//           console.log("An error happened: " + error);
//         }
//       );
//     }
//   }, [urrl]);

//   return (
//     <>
//       <ambientLight intensity={1} color={"#fff"} />
//       <mesh position={[0, 0, 0]} ref={ref}>
//         <sphereGeometry args={[10, 100, 100]} />
//         <meshBasicMaterial color={"#ff0000"} side={THREE.DoubleSide} />
//       </mesh>
//       <OrbitControls />
//     </>
//   );
// };

const CanvasContainer = () => {
  const [loading, setLoading] = useState(false);
  function convertImageToBase64(url, callback) {
    // Create an image element
    var img = new Image();

    // Set crossOrigin property to bypass CORS restrictions
    img.crossOrigin = "Anonymous";

    // Set the image source URL
    img.src = url;

    // Wait for the image to load
    img.onload = function () {
      // Create a canvas element
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      // Get the 2D drawing context of the canvas
      var context = canvas.getContext("2d");

      // Draw the image on the canvas
      context.drawImage(img, 0, 0);

      // Get the base64-encoded data from the canvas
      var base64Data = canvas.toDataURL("image/png"); // Or 'image/jpeg' for JPEG format

      // Invoke the callback with the base64 data
      callback(base64Data);
    };
  }

  // Usage:

  convertImageToBase64(url, function (base64Data) {
    console.log(base64Data,"check here"); // Base64-encoded image data
  });

  return (
    <>
      {loading && <Loader />}
      {/* <Canvas
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
        style={{ width: "100%", height: "100%" }}
      >
        <Scene
          stop={() => {
            setLoading(false);
          }}
        />
      </Canvas> */}
      <img src={url} alt="" />
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

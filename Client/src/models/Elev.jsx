
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import {a} from '@react-spring/three'
import elev from '../assets/3d/ele.glb'

const  Elev = (props) => {
  const elevRef = useRef()  
  const { nodes, materials } = useGLTF(elev);
  return (
    <a.group ref={elevRef}  {...props} >
      <group scale={0.305}  >
        <mesh
          geometry={nodes.MeshChunk.geometry}
          material={materials["Wood Planks - Vertical - Brown"]}
        />
        <mesh
          geometry={nodes.MeshChunk001.geometry}
          material={materials["Wood Planks - Textured Gray 2"]}
        />
        <mesh
          geometry={nodes.MeshChunk002.geometry}
          material={materials["Wood Planks - Vertical - Colorized"]}
        />
        <mesh
          geometry={nodes.MeshChunk003.geometry}
          material={materials["Wood Planks - Vertical - Brown 1"]}
        />
        <mesh
          geometry={nodes.MeshChunk004.geometry}
          material={materials["Glass - Storefront with Spandrel"]}
        />
        <mesh
          geometry={nodes.MeshChunk005.geometry}
          material={materials["Brick - Running"]}
        />
        <mesh
          geometry={nodes.MeshChunk006.geometry}
          material={materials["Material 11"]}
        />
        <mesh
          geometry={nodes.MeshChunk007.geometry}
          material={materials["Wood Planks - White Oak Natural"]}
        />
        <mesh
          geometry={nodes.MeshChunk008.geometry}
          material={materials["Material 1"]}
        />
        <mesh
          geometry={nodes.MeshChunk009.geometry}
          material={materials["Material 2"]}
        />
        <mesh
          geometry={nodes.MeshChunk010.geometry}
          material={materials["Wood Planks - Beechwood - Java"]}
        />
        <mesh
          geometry={nodes.MeshChunk011.geometry}
          material={materials["Wood Planks - Vertical - Colorized 1"]}
        />
        <mesh
          geometry={nodes.MeshChunk012.geometry}
          material={materials["Material 3"]}
        />
        <mesh
          geometry={nodes.MeshChunk013.geometry}
          material={materials["Material 5"]}
        />
        <mesh
          geometry={nodes.MeshChunk014.geometry}
          material={materials["Concrete - Cast In Place - Colorized"]}
        />
        <mesh
          geometry={nodes.MeshChunk015.geometry}
          material={materials["Wood - Inlay"]}
        />
        <mesh
          geometry={nodes.MeshChunk016.geometry}
          material={materials["Tile - Diamond Shapes - Black"]}
        />
        <mesh
          geometry={nodes.MeshChunk017.geometry}
          material={materials["Stone - Coarse Polished - White"]}
        />
        <mesh
          geometry={nodes.MeshChunk018.geometry}
          material={materials["Material 7"]}
        />
        <mesh
          geometry={nodes.MeshChunk019.geometry}
          material={materials["Concrete - Board Formed- Colorized 2"]}
        />
        <mesh
          geometry={nodes.MeshChunk020.geometry}
          material={materials["Material 12"]}
        />
        <mesh
          geometry={nodes.MeshChunk021.geometry}
          material={materials["Material 8"]}
        />
        <mesh
          geometry={nodes.MeshChunk022.geometry}
          material={materials["Material 13"]}
        />
        <mesh
          geometry={nodes.MeshChunk023.geometry}
          material={materials["Material 14"]}
        />
        <mesh
          geometry={nodes.MeshChunk024.geometry}
          material={materials["Material 10"]}
        />
        <mesh
          geometry={nodes.MeshChunk025.geometry}
          material={materials.DefaultMaterial}
        />
      </group>
      <group scale={0.305}>
        <mesh
          geometry={nodes.MeshChunk026.geometry}
          material={materials["Wood Planks - Vertical - Brown"]}
        />
        <mesh
          geometry={nodes.MeshChunk027.geometry}
          material={materials["Wood Planks - Textured Gray 2"]}
        />
        <mesh
          geometry={nodes.MeshChunk028.geometry}
          material={materials["Wood Planks - Vertical - Brown 1"]}
        />
        <mesh
          geometry={nodes.MeshChunk029.geometry}
          material={materials["Tile - Diamond Shapes - Black"]}
        />
        <mesh
          geometry={nodes.MeshChunk030.geometry}
          material={materials.DefaultMaterial}
        />
      </group>
      <mesh
        geometry={nodes.MeshChunk031.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk032.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk033.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk034.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk035.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk036.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk037.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk038.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk039.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk040.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk041.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk042.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk043.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk044.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk045.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk046.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk047.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk048.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk049.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk050.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk051.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk052.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk053.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk054.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk055.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk056.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk057.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk058.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk059.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk060.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk061.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk062.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk063.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk064.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk065.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk066.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk067.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk068.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
      <mesh
        geometry={nodes.MeshChunk069.geometry}
        material={materials["Material 1"]}
        scale={0.305}
      />
    </a.group>
  );
}

// useGLTF.preload("/ele.glb");

export default Elev 

import { Outlines, useGLTF } from "@react-three/drei";
import { applyProps } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import { GLTF } from "three-stdlib";

type IProps = JSX.IntrinsicElements["group"] & {
  setRectLight: React.Dispatch<React.SetStateAction<boolean>>;
};

type GLTFResult = GLTF & {
  nodes: any;
  materials: any;
};
function Room(props: IProps) {
  const { nodes, materials } = useGLTF("./model/My-room.glb") as GLTFResult;

  useLayoutEffect(() => {
    Object.values(nodes).forEach(
      (node: any) =>
        node.isMesh && (node.receiveShadow = node.castShadow = true)
    );
    applyProps(materials["Material.006"], {
      color: "#c1c0c0",
      roughness: 1,
    });
    applyProps(materials["Material.011"], {
      color: "#6a6767",
    });
  }, [nodes, materials]);

  const TurnOnTheLight = () => {
    props.setRectLight((prev) => !prev);
  };

  const CameraMove = () => {
    console.log("let's go");
  };

  return (
    <group {...props} dispose={null}>
      {/*마우스 */}
      <group
        position={[-2.655, 3, -0.432]}
        rotation={[-Math.PI, 1.152, -Math.PI]}
        scale={[9.658, 11.078, 8.976]}
      >
        <group
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        >
          <mesh
            geometry={nodes.Object_114.geometry}
            material={materials.main_body}
          />
          <mesh
            geometry={nodes.Object_115.geometry}
            material={materials.main_body}
          />
          <mesh
            geometry={nodes.Object_116.geometry}
            material={materials["Material.007"]}
          />
          <mesh
            geometry={nodes.Object_117.geometry}
            material={materials["Material.013"]}
          />
          <mesh
            geometry={nodes.Object_118.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        >
          <mesh
            geometry={nodes.Object_140.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            geometry={nodes.Object_141.geometry}
            material={materials["Material.010"]}
          />
          <mesh
            geometry={nodes.Object_142.geometry}
            material={materials["Material.012"]}
          />
        </group>
        <mesh
          geometry={nodes.Object_108.geometry}
          material={materials["Material.003"]}
          position={[0, 0.011, -0.02]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.025, 0.019, 0.019]}
        />
        <mesh
          geometry={nodes.Object_110.geometry}
          material={materials["Material.008"]}
          position={[-0.011, 0.015, 0.009]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          geometry={nodes.Object_112.geometry}
          material={materials["Material.004"]}
          position={[-0.015, 0.011, -0.006]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          geometry={nodes.Object_120.geometry}
          material={materials["Material.003"]}
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          geometry={nodes.Object_122.geometry}
          material={materials["Material.016"]}
          position={[0.001, 0, 0.002]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          geometry={nodes.Object_124.geometry}
          material={materials["Material.003"]}
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          geometry={nodes.Object_126.geometry}
          material={materials["main_body.001"]}
          position={[0.002, 0.011, -0.02]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          geometry={nodes.Object_128.geometry}
          material={materials.main_body}
          position={[0.001, 0.007, 0.002]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          geometry={nodes.Object_130.geometry}
          material={materials["Material.009"]}
          position={[-0.013, 0.014, 0.004]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          geometry={nodes.Object_132.geometry}
          material={materials.main_body}
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          geometry={nodes.Object_134.geometry}
          material={materials["Material.002"]}
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          geometry={nodes.Object_136.geometry}
          material={materials["Material.002"]}
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          geometry={nodes.Object_138.geometry}
          material={materials["Material.001"]}
          position={[0, 0.011, -0.02]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
      </group>
      {/*의자 */}
      <group
        position={[-0.886, 0.23, 2.867]}
        rotation={[0, 0.528, 0]}
        scale={[3.529, 3.361, 2.926]}
      >
        <mesh
          geometry={nodes.Object_144.geometry}
          material={materials.chrome_metal}
        />
        <mesh
          geometry={nodes.Object_145.geometry}
          material={materials.plastic_black_rough}
        />
        <mesh
          geometry={nodes.Object_146.geometry}
          material={materials.fabric}
        />
        <mesh
          geometry={nodes.Object_147.geometry}
          material={materials.metal_painted}
        />
        <mesh
          geometry={nodes.Object_148.geometry}
          material={materials.plastic_smooth}
        />
      </group>

      {/*침구류 */}
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials.blanket}
        position={[2.935, 2.273, 0.169]}
        scale={[1.868, 1.207, 3.349]}
      />
      <mesh
        geometry={nodes.Object_30.geometry}
        material={materials["Material.022"]}
        position={[-1.982, 3.771, -3.405]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[3.185, 1, 0.775]}
      />
      <mesh
        geometry={nodes.Object_32.geometry}
        material={materials.trashcan}
        position={[-3.043, 0.938, -0.83]}
        scale={[0.853, 0.853, 0.355]}
      />
      {/* 바닥 */}
      <mesh
        geometry={nodes.Object_34.geometry}
        material={materials["Material.011"]}
        scale={[4.364, 0.114, 4.364]}
      ></mesh>
      {/*벽 */}
      <mesh
        geometry={nodes.Object_36.geometry}
        material={materials["Material.006"]}
        position={[-4.243, 4.253, -0.01]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[4.364, 0.114, 4.364]}
      />
      <mesh
        geometry={nodes.Object_38.geometry}
        material={materials.poto_1}
        position={[-0.419, 7.329, 4.18]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.209, 0.105, 0.791]}
      />
      <mesh
        geometry={nodes.Object_40.geometry}
        material={materials.kayu_kasur}
        position={[2.919, 0.367, 0.457]}
        scale={[1.427, 0.278, 3.761]}
      />
      <mesh
        geometry={nodes.Object_42.geometry}
        material={materials.meja}
        position={[-2.939, 2.872, 0.832]}
        scale={[1.212, 0.112, 3.309]}
      />
      <mesh
        geometry={nodes.Object_44.geometry}
        material={materials.lemari_bawah_meja}
        position={[-3.12, 1.438, -1.82]}
        scale={[1.023, 1.339, 0.653]}
      />
      <mesh
        geometry={nodes.Object_46.geometry}
        material={materials.stop_kontak}
        position={[-4.001, 2.612, -0.516]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.142, 0.149, 0.653]}
      />
      <mesh
        geometry={nodes.Object_48.geometry}
        material={materials.pintu_lemari}
        position={[-2.083, 3.595, -3.386]}
        scale={[-0.07, 3.497, 0.909]}
      />
      <mesh
        geometry={nodes.Object_50.geometry}
        material={materials.board}
        position={[-3.094, 5.083, -2.416]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.825, 1.062, 0.058]}
      />
      <mesh
        geometry={nodes.Object_52.geometry}
        material={materials.layaar_laptop}
        position={[-4.06, 4.336, 1.256]}
        scale={[0.022, 0.568, 0.995]}
      />
      <mesh
        geometry={nodes.Object_54.geometry}
        material={materials.Badan_Laptop}
        position={[-3.59, 3.428, 1.254]}
        rotation={[0, 0, 0.935]}
        scale={[0.028, 0.612, 0.994]}
      />
      <mesh
        geometry={nodes.Object_56.geometry}
        material={materials.layar_monitor_laptop}
        position={[-4.048, 4.369, 1.252]}
        scale={[0.022, 0.486, 0.963]}
      />
      <mesh
        geometry={nodes.Object_58.geometry}
        material={materials.Luaran_keyboard_L}
        position={[-3.719, 3.552, 1.263]}
        rotation={[0, 0, 0.935]}
        scale={[0.013, 0.354, 0.89]}
      />
      <mesh
        geometry={nodes.Object_60.geometry}
        material={materials.trackpad_laptop}
        position={[-3.265, 3.222, 1.255]}
        rotation={[0, 0, 0.935]}
        scale={[0.01, 0.199, 0.397]}
      />
      <mesh
        geometry={nodes.Object_62.geometry}
        material={materials.Badan_Keyboard}
        position={[-2.877, 2.952, 2.097]}
        rotation={[-1.571, -0.004, 1.571]}
        scale={[-0.089, 0.027, 0.004]}
      />
      <mesh
        geometry={nodes.Object_64.geometry}
        material={materials.Keycaps_Keyboard}
        position={[-2.486, 3.085, 1.616]}
        rotation={[1.571, -0.021, Math.PI / 2]}
        scale={[0.059, 0.06, 0.039]}
      />
      <mesh
        geometry={nodes.Object_66.geometry}
        material={materials.Keycaps_Keyboard_L}
        position={[-3.684, 3.499, 1.571]}
        rotation={[1.571, -0.636, 1.571]}
        scale={[0.05, 0.051, 0.036]}
      />
      <mesh
        geometry={nodes.Object_68.geometry}
        material={materials.mousepad}
        position={[-2.939, 2.961, 1.233]}
        scale={[1.064, 0.034, 2.8]}
      />
      <mesh
        geometry={nodes.Object_70.geometry}
        material={materials.button_trackpad_1}
        position={[-3.141, 3.116, 1.454]}
        rotation={[0, 0, -2.206]}
        scale={[-0.005, 0.051, 0.201]}
      />
      <mesh
        geometry={nodes.Object_72.geometry}
        material={materials.button_trackpad_2}
        position={[-3.141, 3.116, 1.058]}
        rotation={[0, 0, -2.206]}
        scale={[-0.005, 0.051, 0.201]}
      />
      <mesh
        geometry={nodes.Object_74.geometry}
        material={materials.Pintu_lemari_bawah}
        position={[-2.07, 1.429, -1.811]}
        scale={[-0.045, 1.33, 0.64]}
      />

      {/*매트릭스*/}
      <mesh
        geometry={nodes.Object_84.geometry}
        material={materials.kasur}
        position={[2.942, 0.86, 0.329]}
        scale={[1.313, 0.222, 3.524]}
      />
      {/*오른쪽 컴퓨터 */}
      <mesh
        geometry={nodes.Object_86.geometry}
        material={materials.monitor_2}
        position={[-3.636, 3.388, -0.936]}
        rotation={[0, -0.202, 0]}
        scale={[0.058, 0.323, 0.058]}
      >
        <Outlines
          thickness={0.2}
          screenspace={false}
          color="#fff"
          opacity={1}
          transparent={false}
          angle={Math.PI}
          onClick={CameraMove}
        />
      </mesh>
      {/*전등 */}
      <mesh
        geometry={nodes.Object_88.geometry}
        material={materials.lampu}
        position={[-3.902, 6.96, 0.933]}
        scale={[0.266, 0.222, 2.44]}
      >
        <Outlines
          thickness={0.02}
          screenspace={false}
          color="#fff"
          opacity={1}
          transparent={false}
          angle={Math.PI}
          onClick={TurnOnTheLight}
        />
      </mesh>
      {/*전등 안*/}
      <mesh
        geometry={nodes.Object_90.geometry}
        material={materials.material_0}
        position={[-4.009, 6.941, 0.898]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.145, 2.275, 0.145]}
      />
      <mesh
        geometry={nodes.Object_92.geometry}
        material={materials.minum_aer}
        position={[-2.637, 3.378, -2.155]}
        scale={[0.268, 0.386, 0.227]}
      />
      <mesh
        geometry={nodes.Object_94.geometry}
        material={materials.tutup_minum}
        position={[-2.647, 3.761, -2.148]}
        scale={[0.324, 0.042, 0.324]}
      />
      {/*배게 */}
      <mesh
        geometry={nodes.Object_97.geometry}
        material={materials.Cotton}
        position={[2.974, 1.499, 2.93]}
        rotation={[-0.431, 0, 0]}
        scale={[1.297, 0.075, 1.042]}
      />
      <mesh
        geometry={nodes.Object_99.geometry}
        material={materials.material_0}
        position={[-4.007, 2.618, 2.103]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.054, 1.976, 0.054]}
      />
      <mesh
        geometry={nodes.Object_105.geometry}
        material={materials.monitor_2}
        position={[-3.409, 3.388, 3.358]}
        rotation={[0, 0.997, 0]}
        scale={[0.058, 0.323, 0.058]}
      />
    </group>
  );
}

useGLTF.preload("./model/My-room.glb");
export default Room;

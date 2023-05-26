import {
  HDKComponent,
  HNode,
  Prefab,
  render,
  useRandom,
} from "@hiber3d/hdk-react";
import {
  Avatar,
  Distribute,
  Ground,
  InCircle,
  Path,
} from "@hiber3d/hdk-react-components";

const Stairs: HDKComponent = (props) => {
  return (
    <HNode {...props}>
      <Prefab id="gpl_spawn_point_01" />
      <Prefab id="stair_01" />
      <Prefab id="stair_01" z={-2} y={2} />
      <Prefab id="cube_01" z={-2} />
      <Prefab id="cube_01" z={-4} />
      <Prefab id="cube_01" z={-4} y={2} />
      <Prefab id="cube_01" z={-6} />
      <Prefab id="cube_01" z={-6} y={2} />
      <Prefab id="goal_01" z={-6} y={4} />
      <Avatar animation="an_default_idle" x={0} y={0.1} z={2} rotY={180} />
      <Avatar
        animation="an_default_emote_point"
        x={0}
        y={4}
        z={-3}
        rotY={180}
      />
      <Avatar animation="an_default_idle" x={0} y={2.8} z={-1.5} rotY={180} />
    </HNode>
  );
};

const World = () => {
  return (
    <HNode>
      <Ground water />
      <Stairs z={-1} x={24} rotY={-30} />
      <Path
        numberOfItems={150}
        points={[
          [0, 10, 0],
          [30, 5, 0],
          [20, 20, 40],
          [30, 5, 80],
          [14, 10, 100],
          [-40, 10, 25],
          [0, 10, 0],
        ]}
        renderItem={({ index, last }) => (
          <>
            <Prefab id="gpl_booster_plate_01" rotY={180} />
            {index % 15 === 0 && <Prefab id="donut_01" scale={5} rotX={90} />}
            {index % 15 === 0 && <Prefab id="collectible_mandatory_key_01" />}
          </>
        )}
      />
      <Distribute
        renderItem={() => {
          const random = useRandom();
          return (
            <Prefab
              id="palm_tree_2"
              rotY={random.int(0, 360)}
              scale={random.int(0.5, 1.5)}
            />
          );
        }}
        gladeRadius={80}
        outerBoundRadius={150}
      />
    </HNode>
  );
};

render(<World />, { environment: "sunrise_01" });

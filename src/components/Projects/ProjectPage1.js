import { useParams } from 'react-router-dom';
import cabril from "../../Assets/Projects/cabril.png";
import beetrial from "../../Assets/Projects/VU6fU2.png";
import { Container, Row } from 'react-bootstrap';
import shadow from "../../Assets/shadow-comp.png";
import model from "../../Assets/model.png";

function ProjectPage1() {
    return (
        <Container>

            <img src={cabril} style={{ width: '50%', height: 'auto' }} />
            <br /><br /><br />
            <p>CabrilDamVR was created with the objective of allowing the users to virtually visit Cabril Dam,
                allowing to virtually conduct virtual tours, inspections, maintenance planning, structural integrity analysis,
                and simulations.
                All of which could not be achieved before due to the abscense of 3D models of the dam and surrounding environment.
            </p>
            <p>In order to define a plan for the development of the prototype,
                it was necessary to comprehend the specific needs and preferences of the target users.
                Therefore, User Interviews were conducted regularly with dam engineering experts to select features and scene
                aesthetics.
            </p>
            <p>Finally, to assess the app in terms of usability, graphical fidelity, and the potential for real-world application,
                usability tests were conducted with civil engineering experts from the concrete dams management department at the National
                Laboratory of Civil Engineering.
                These tests provided valuable feedback, indicating that the participants positively embraced the prototype.
                This favorable reception suggests promising prospects for future adoption of the application across various domains,
                including education, entertainment, and professional use, owing to its simplicity, visual fidelity, and overall user
                experience.
            </p>

            <h1 style={{ paddingBottom: 50 }} className="contacts-title">Core Features</h1>

            <h2>Terrain Generation</h2>
            <p>The model of the terrain surrounding the dam was
                created from heightmaps and manual sculpting of the
                mesh. The Cities: Skylines game tool was used for generating
                terrain based on real-world the acquisition
                of 18 km by 18 km heightmaps of the region.
                This heightmap was then applied to Unity's
                Terrain Tools to create the corresponding terrain geometry.
                However, none of the tool's parameters effectively
                represented the water depth, only slightly altering it
                relative to the surrounding land. Therefore, the terrain
                was manually sculpted with the brush tool.
                This allowed to excavate and elevate the terrain to match the desired bathymetry and replicate the
                adjacent land's topography for accurate dam and road placement.
            </p>
            <img src={shadow} className="img-fluid" alt="dam comparison" />
            <br /><br /><br /><br />


            <h2>Model Reconstruction</h2>
            <p>The 3D model of the dam was obtained through TLS
                technologies, which use a laser to measure the distance
                to the surface of the dam which is then processed to get a 3D reconstruction.
                This method had a drawback leading to parts of the structure that
                could not be covered due to the obstruction of these
                faces during the scan.
                Theferore, a theoretical finite element model was used to
                reconstruct that part, as this was the only way to get
                the right curvature of the face. This process consisted
                of using the vertex coordinates and triangle nodes to
                generate the mesh. Therefore, the information was
                exported into the PLY file extension, imported into
                MeshLab3 and exported into an OBJ file. This allowed
                to faithfully represent the dam, with a mesh of 113k
                vertices and 208k triangles
            </p>
            <img src={model} className="img-fluid" alt="dam model" />
            <br /><br /><br /><br />



            <h2>Water Intake Tower Reconstruction</h2>
            Due to the previous obstruction problem, the water intake tower also needed to be modeled.
            This was done in Blender, using old photos as reference, and using the Box Modeling technique,
            starting with basic shapes, like cubes, and gradually
            refining them into the desired form.
            <br /><br /><br /><br />


            <h2>Terrain Texture Application</h2>
            The terrain's texture was defined through the painting of texture patterns on the mesh with Terrain Tools.
            <br /><br /><br /><br />


            <h2>Dam Texture Creation</h2>
            The texture for the dam was created with PhotoShop.
            High detail photos were imported into the program,
            selected the relevant ones, and manually stitched
            and blended them to create a mosaic. The built-in feature
            was relied on to combine and align sets of photos,
            with a degree of overlapping; for this each photo had
            its color levels tweaked to achieve a similar look. It
            allowed to create the mosaics of sections of the wall,
            which were then fine-tuned by making adjustments
            to color, brightness, and contrast, and blended into
            the final mosaic that could be applied to the model.
            Finally, the desired image texture was achieved, with
            a resolution of 100MP.
            <br /><br /><br /><br />

            <h2>Road Texture Creation</h2>
            The texture for the road was done in Blender through the creation of a
            procedural material that closly resembles the real asphalt conditions.
            <br /><br /><br /><br />

            <h2>Landscape Details</h2>
            In real life certain landmarks play a crucial role in shaping the scenery,
            their abscense being evident, specially for seasoned visitors. Therefore, to enhance
            the realism of the scene it was important to include such elements.
            For this Google Street View and photos were always used as a reference for modeling and precisely positioning
            these assets at strategic locations.
            Some of the examples were the Lago Verde restaurant, the small white house, the GNSS antennas, and parking lot.
            <br /><br /><br /><br />

            <h2>Water Simulation</h2>
            The water in the scene consists of a single-layer water material on a plane object.
            Due to the big disparity in elevation between the upstream and downstream portions of water,
            two planes were employed for achieving the desired effect.
            To more seamlessly integrate these planes, the upstream had to be hidden the downstream side.
            For this a plane was cut to the dam's curvature, and applied a custom masking shader.
            <br /><br /><br /><br />

            <h2>Day/Night Cycle</h2>
            This effect was simulated by moving the sun and moon directional lights as well as the
            sky and fog volume within the scene.
            To correctly position these elements, based on the latitude and longitude of the location,
            Paul Hayes's code was adapted.
            This step was crucial for achieving a higher level of realism due to the iconic nature of the shadow patterns on the dam faces.
            <br /><br /><br /><br />

            <h2>Lighting</h2>
            Directional lights were key to represent the celstial bodies in our day/night cycle.
            Spot and point lights were used for creating street lamps, with point lights representing
            the bulbs and spotlights mimicking natural light falloff.
            Additionally, HDRP's Sky and Fog Global Volume was relied on to replicate real-world sky and ambiance, also
            generating dynamic and realistic clouds to enhance the sky's appearance.
            <br /><br /><br /><br />

            <h2>User Interface</h2>
            The prototype's interface design focused on userfriendliness
            and intuitive navigation. It adopted a minimalist
            icon-based layout to reduce cognitive load and
            maintain consistency, following principles like "Recognition
            rather than recall" and "User control and freedom."
            The interface was positioned on the user's
            left hand, mirroring the practice of visual inspectors
            who walk with clipboards or tablets. This design aimed
            to enhance the user's natural interaction and sense of
            realism in the VR environment.

            {/* meter os wireframes */}
            <br /><br /><br /><br />


            <h2>Additional Features: Data Exploration</h2>
            Implemented as proof-of-concept, the data exploration features allow the user to open PDF files related to 
            visual inspection reports. Additionally, certain points are marked on the dam face with which the user can interact 
            to open up an interafce with photographic records of the evolution of the loacation.
            Finally, certain objects, such as the GNSS antenna, allow to interact with activating a graph with displacement, 
            water level, and temperature evolution.

        </Container>
    )
}
export default ProjectPage1;
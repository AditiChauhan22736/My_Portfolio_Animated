import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import {  textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";


const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {

return(
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
     options={{
       max: 45,
       scale: 1, 
       speed: 450,
        
        
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[230px] w-full ">
       <div className="relative w-full h-[120px]">
        <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div
          onClick={() => window.open
            (
            source_code_link, "_blank"
          )}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
            src={github} 
            alt="github"
            className="w-1/2 h-1/2 object-contain"
            />

            
          </div>

        </div>

       </div>
       <div className="mt-5">
        <h3 className="text-white font-bold text-[18px] ">{name}</h3>
        <p className="mt-2 text-secondary text-[12px]">{description}</p>

       </div>
       <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => 
         <p key={tag.name} className={`text-[10px] ${tag.color} `}>
          #{tag.name}

         </p>
      
        )}
       </div>

    </Tilt>
  </motion.div>
)

}


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}> My Work </p>
      <h2 className={styles.sectionHeadText}> Projects </h2>

      </motion.div>
      <div className="w-full flex">
        <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          My learning journey has been driven by a passion for crafting responsive, dynamic, and user-centered applications. I’ve explored a variety of exciting projects, building interactive web platforms with modern frontend technologies and experimenting with machine learning solutions. By blending creativity with growing technical skills, I aim to create experiences that are not only functional but truly engaging. Below are some standout projects that showcase my progress in web development and problem-solving.



        </motion.p>

      </div>
      <div className="mt-20 flex flex-wrap gap-7 ">
        {projects.map((project, index) => (
          <ProjectCard 
          key={`project-${index}`} 
          index={index}
          {...project}
          /> 

        ))}

      </div>
    </>
  )
}

export default SectionWrapper(Works, "");
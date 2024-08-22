import React from "react";

const MissionVission = () => {
  const mission: string =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, nulla libero quibusdam sit qui omnis. Aspernatur deserunt quia beatae alias officiis quibusdam vero qui! Consequuntur obcaecati, voluptates mollitia provident sit nisi repudiandae deserunt. Laboriosam voluptatum hic quisquam reprehenderit, voluptatem in deleniti, error quod dolor facilis repellendus natus tempore aspernatur, doloribus cum molestiae ullam fugiat eos iure tenetur vitae facere? Laborum dolor, repudiandae magnam alias at vel corporis aut consequuntur aliquam quidem error molestiae ullam ipsum officiis nam veniam nisi recusandae aspernatur, est amet quibusdam accusantium reprehenderit? Culpa, numquam voluptatum maiores, inventore quidem voluptatibus a adipisci illo vitae amet deserunt sapiente.";
  const vission: string =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, nulla libero quibusdam sit qui omnis. Aspernatur deserunt quia beatae alias officiis quibusdam vero qui! Consequuntur obcaecati, voluptates mollitia provident sit nisi repudiandae deserunt. Laboriosam voluptatum hic quisquam reprehenderit, voluptatem in deleniti, error quod dolor facilis repellendus natus tempore aspernatur, doloribus cum molestiae ullam fugiat eos iure tenetur vitae facere? Laborum dolor, repudiandae magnam alias at vel corporis aut consequuntur aliquam quidem error molestiae ullam ipsum officiis nam veniam nisi recusandae aspernatur, est amet quibusdam accusantium reprehenderit? Culpa, numquam voluptatum maiores, inventore quidem voluptatibus a adipisci illo vitae amet deserunt sapiente.";

  const sectionClass = "w-full flex flex-col gap-4 justify-center p-2";
  const headingClass = "text-bold text-2xl text-primary";
  const pghClass = "text-justify";
  return (
    <div className="w-full max-w-screen-2xl my-5 p-4 grid grid-cols-1 md:grid-cols-2">
      <div className={sectionClass}>
        <h1 className={headingClass}>Mission</h1>
        <p className={pghClass}>{mission}</p>
      </div>
      <div className={sectionClass}>
        <h1 className={headingClass}>Vission</h1>
        <p className={pghClass}>{vission}</p>
      </div>
    </div>
  );
};

export default MissionVission;

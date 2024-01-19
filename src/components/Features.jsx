import { useState } from "react";
import FeatureBox from "./FeatureBox";

const Features = () => {
  const [items] = useState([
    {
      icon: "icon-access-anywhere.svg",
      title: "Access your files anywhere!",
      description:
        "Lorem ipsum dolor, sit amet consectetur. Asperiores voluptatibus praesentium magnam nihil quidem commodi. Suscipit fuga, consequatur dolorem possimus iste",
    },
    {
      icon: "icon-collaboration.svg",
      title: "Real-Time collaboration!",
      description:
        "Lorem ipsum dolor, sit amet consectetur. Asperiores voluptatibus praesentium magnam nihil quidem commodi. Suscipit fuga, consequatur dolorem possimus iste",
    },
    {
      icon: "icon-any-file.svg",
      title: "Store any type of files",
      description:
        "Lorem ipsum dolor, sit amet consectetur. Asperiores voluptatibus praesentium magnam nihil quidem commodi. Suscipit fuga, consequatur dolorem possimus iste",
    },
    {
      icon: "icon-security.svg",
      title: "Security you can trust",
      description:
        "Lorem ipsum dolor, sit amet consectetur. Asperiores voluptatibus praesentium magnam nihil quidem commodi. Suscipit fuga, consequatur dolorem possimus iste",
    },
  ]);
  return (
    <section className="pb-[150px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865px] max-w-full mx-auto">
          {items.map((item) => (
            <FeatureBox
              key={item}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

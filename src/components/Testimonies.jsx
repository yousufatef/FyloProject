import { useState } from "react";
import TestimonialBox from "./TestimonialBox";

const Testimonies = () => {
  const [testData] = useState([
    {
      id: 1,
      description:
        "Lorem ipsum dolor sit amet elit. delectus molestias, maiores ex quo dicta Dignissimos minus. Est?",
      image: "profile-1.jpg",
      position: "Front-End Engineer",
      name: "Youssef Atef",
    },
    {
      id: 2,
      description:
        "Lorem ipsum dolor sit amet elit. delectus molestias, maiores ex quo dicta Dignissimos minus. Est?",
      image: "profile-2.jpg",
      position: "Back-End Engineer",
      name: "Mohamed Ali",
    },
    {
      id: 3,
      description:
        "Lorem ipsum dolor sit amet elit. delectus molestias, maiores ex quo dicta Dignissimos minus. Est?",
      image: "profile-3.jpg",
      position: "Software Engineer",
      name: "Dalida Youssef",
    },
  ]);
  return (
    <section className="pb-[350px]">
      <div className="container relative">
        <div className="absolute left-[20px] top-[-35px]">
          <img src="src\assets\bg-quotes.png" alt="quotes-img" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] relative z-10">
          {testData.map((person) => (
            <TestimonialBox
              key={person.id}
              name={person.name}
              position={person.position}
              description={person.description}
              image={person.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonies;

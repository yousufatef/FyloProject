import Features from "../components/Features"
import GetStarted from "../components/GetStarted"
import Landing from "../components/Landing"
import StayProductive from "../components/StayProductive"
import Testimonies from "../components/Testimonies"

const Home = () => {
  return (
    <>
      <Landing/>
       <Features/>
       <StayProductive/>
       <Testimonies/>
       <GetStarted/>
    </>
  )
}

export default Home
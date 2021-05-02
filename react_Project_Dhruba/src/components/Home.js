import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div class="container-xl">
      <div class="row">
        <div class="col"></div>
        <div class="col-8">
                        <Carousel>
                            <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://images4.alphacoders.com/674/thumb-1920-674216.jpg"
                                alt="First Movie slide"
                            />
                            <Carousel.Caption>
                                <h3>First Movie Slide - Dracula </h3>
                                <p>
                                Special effects and acting is the performance of the actors and actresses.
                                </p>
                            </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src="https://wallpapercave.com/wp/wp2162832.jpg"
                                alt="Second Movie slide"
                            />
                            <Carousel.Caption>
                                <h3>Second Movie slide - Alien</h3>
                                <p>Special effects and acting is the performance of the actors and actresses. </p>
                            </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://wallpapercave.com/wp/wp2162869.jpg"
                                alt="Third Movie slide"
                            />
                            <Carousel.Caption>
                                <h3>Third Movie slide-Warcaraft</h3>
                                <p>
                                 If you say something is breathtaking
                                </p>
                            </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
        </div>
        <div class="col"></div>

        <div class="row">
          <div class="col"></div>
          <div class="col-8">

            <h5>DESCRIPTION :Build a React app where users can view and promote upcoming events.</h5>
            <p class="lead">
                Background of the problem statement: 
                You are a web developer at a company called FindMyMovies. The company has decided to launch a new app called FindMyEvents where users can view and add upcoming events in their region. bBackend development has been outsourced and frontend will be developed in-house. During sprint planning, you agree to lead this project and develop an app that will let users find events using APIs that backend engineers will provide. The tasks you are responsible for: 

                Building the application in React
                Setting up a JSON server for testing until backend APIs are ready
                Managing the state using Redux
            </p>
            <p class="lead">
                You must use the following tools: 
                React: To build the application
                Redux: To manage the state of components in the application
                Redux Thunk: To manage the async flow
                JSON Server: To build a placeholder backend for app development and testing
                React Router: To navigate within the app using URL links
                Bootstrap: To accelerate the development

                Following requirements should be met:
                The app should be responsive.
                There should only be one source of truth for state management. 
                The app should have functionalities for users to create, view, and delete events.
            </p>

          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

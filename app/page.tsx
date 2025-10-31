import Hello from "../components/hello";

const Home = () => {
  console.log("What type of component am I?");
  return (
    <main>
      <div>
        <h1 className="text-5xl underline">Welcome to Next.js!</h1>
      </div>
      <Hello />
    </main>
  );
};

export default Home;
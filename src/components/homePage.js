import Ongoing from "./ongoing";
import Upcoming from "./upcoming";
import Popular from "./popular";

function Home() {
 return (
    <div>
      <Ongoing />
      <Upcoming />
      <Popular />
    </div>
 ); 
}

export default Home;
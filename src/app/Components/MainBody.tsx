import AllPrice from "./MainSectionParts/allPrice";
import DecreasePrice from "./MainSectionParts/decreasePrice";
import IncreasePrice from "./MainSectionParts/increasePrice";


const MainBody = () => {

    return (
        <div>
        <IncreasePrice></IncreasePrice>
        <DecreasePrice></DecreasePrice>
        <AllPrice></AllPrice>
        </div>
    );
};

export default MainBody;
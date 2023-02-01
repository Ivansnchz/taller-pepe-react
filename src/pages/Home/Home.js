import HomeComponent from "../../components/Home/Home";
import Page from "../../components/Page/Page";

export default function Home() {

    return (

        <div id="homeContainer">
            <Page children={HomeComponent} />
        </div>

    );
}
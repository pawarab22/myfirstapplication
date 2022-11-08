import about from './About.css';
import copy from'./Copy.module.css';
function About(){

    let style = {
        color:'grey',
        backgroundColor:'green',

    }
    return(
        <div>
            <h1 className={copy.bg}>About Component</h1>
            <h2 style={style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quos veniam vel cum ratione, totam est omnis itaque iusto neque minus nihil quasi explicabo error in illo vitae pariatur sequi?</h2>
        </div>
    );
}
export default About;
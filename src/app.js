import Header from './components/index';

const app = () => {
    console.log("working");
    document.getElementById("main-app").innerHTML = Header()
};
app();
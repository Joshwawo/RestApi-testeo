import app from "./app";



const main = () => {
    app.listen(app.get('port'));

    console.log(`El puerto esta corriendo en ${app.get('port')}`);
    


}

main();
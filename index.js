var arithmetic = require('arithmetic');
// import 
var { Manager } = require('smooshpack');

// Manager = manager.Manager


const manager = new Manager(
    '#preview',
    {
        files: {
            '/public/index.html': {
                code: `<html><body><h2 id="div">from inside the iframe</h2> </body></html>`,
            },
            '/script/index.js': {
                code: `import uuid from 'uuid'; import a from './module/hello.js'; console.log("hello from iframe"); console.log(document.getElementById("div")); console.log(a); console.log(uuid)`,
            },
            '/script/module/hello.js': {
                code: `var a=5; export default a`,
            },
        },
        entry: '/script/index.js',
        dependencies: {
            uuid: 'latest',
        },
    }
);

let edit = () => {
    manager.updatePreview({
        files: {
            '/script/index.js': {
                code: `console.log("hello");`,
            },
        },
        entry: '/script/index.js',
        dependencies: {
            uuid: 'latest',
        },
    });
}

document.getElementById("edit").onclick = () => {
    console.log("edit clicked !!");
    edit();
};


// console.log(manager);

// console.log(arithmetic.add(2, 4))
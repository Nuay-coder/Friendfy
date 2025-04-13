const express = require('express') ;
const port=3000
const path = require('path');
const app = express();

const router = express.Router();
app.use(router);


// router.get('/dashboard'), (req, res) => {
//     res.sendFile(path.join(`${__dirname}
//         /html/dashboard-admin.html`))
// }



router.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'dashboard-admin.html'));
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})

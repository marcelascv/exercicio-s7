const app = require('./src/app');
const port = 6060

app.listen(port, () => {
    console.log(`App esta rodado na porta ${port}`)
});
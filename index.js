const express = require('express');
const app = express();
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
    console.log('서버가 3000번 포트에서 실행중입니다.');
});
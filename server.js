/**
 * Created by admin on 1/21/2016.
 */
import express from 'express';

let app = express();

app.use(express.static('public'));

app.listen(3000);
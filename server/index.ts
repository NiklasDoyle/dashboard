// server/index.js

import express from 'express';
import path from 'path';
// import ws from 'ws';

import GoogleCalService from './googleCalService';

const PORT = process.env.PORT || 3001;

const cal = new GoogleCalService();

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

const httpServer = app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

// const wsServer = new ws.Server({ noServer: true })

// httpServer.on('upgrade', (req, socket, head) => {
//     wsServer.handleUpgrade(req, socket, head, (ws) => {
//         wsServer.emit('connection', ws, req)
//     })
// })

// wsServer.addListener('connection', (ws) => {
//     ws.send('(Server) Connection established!')

//     ws.on('message', (message) => {
//         ws.send(`You sent -> ${message}`)
//     })
// })

app.get("/status", (req, res) => {
    res.json({ message: "Hello from server!" });
});

interface Event {

}

app.get("/cal", async (req, res) => {
    try {
        let eventList: Event[] | undefined;
        if (req.query.startDate && req.query.endDate)
            eventList = await cal.getCalendarEvents(req.query.startDate as string, req.query.endDate as string);
        else
            eventList = await cal.getCalendarEvents();

        res.json({
            message: "Success",
            events: eventList
        });

    } catch (error) {
        console.error(error);
        res.json({
            message: `Failed to fetch events: ${error}`,
            events: []
        });
    }
});
 
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
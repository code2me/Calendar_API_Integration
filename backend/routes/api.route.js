const router = require('express').Router();
const { google } = require('googleapis')

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'http://localhost:3000'
)

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

router.post('/create-tokens', async (req, res, next) => {
  try {
    const { code } = req.body;
    const { tokens } = await oauth2Client.getToken(code);

    oauth2Client.setCredentials(tokens);

    const calendar = google.calendar({
      version: 'v3',
      auth: oauth2Client
    });

    const timeMin = new Date();
    const timeMax = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    calendar.events.list({
      calendarId: 'primary',
      timeMin: timeMin.toISOString(),
      timeMax: timeMax.toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    }, (err, response) => {
      if (err) {
        console.error(`Error fetching events: ${err}`);
        res.status(500).send({ error: 'Error fetching events' });
        return;
      }
      const events = response.data.items;
      console.log(`Fetched ${events.length} events:`);
      console.log(events)
      res.send(events);
    });
  } catch (error) {
    next(error)
  }
})


module.exports = router;

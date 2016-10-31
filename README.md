# WCG API
A RESTful JSON interface for (some of) the World Community Grid's public statistics.

### Setup
```bash
git clone https://github.com/draperunner/wcg-api.git
cd wcg-api
npm install
```

### Get started
```bash
npm start
```
This will start a server listening on `localhost:3200`.

## API Reference
Base URL: `http://wcg-api.byrkje.land`

| Endpoint       | Description | WCG URL
| ---------------|:------------|:-----------------
| `/teams/:teamId` | Statistics for a given team | https://secure.worldcommunitygrid.org/team/viewTeamInfo.do?teamId=TEAMID

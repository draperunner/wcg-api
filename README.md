# WCG API
A JSON interface for (some of) the World Community Grid's public statistics.

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
This will start a server listening on `localhost:8000`.

## API Reference
| Endpoint       | Description | WCG URL
| ---------------|:------------|:-----------------
| `/teams/:teamId` | Statistics for a given team | https://secure.worldcommunitygrid.org/team/viewTeamInfo.do?teamId=TEAMID

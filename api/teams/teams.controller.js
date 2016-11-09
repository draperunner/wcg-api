import { fetchAndParseXml } from '../../utils/utils';

export default {
  /**
   * Return the main statistics page for teams
   */
  getOverallTeamsStats(req, res) {
    fetchAndParseXml({
      url: 'https://secure.worldcommunitygrid.org/stat/viewTeams.do?xml=true',
    }).then(result => res.json(result));
  },

  /**
  * Return the statistics site for a given team
  */
  getTeamInfoById(req, res) {
    fetchAndParseXml({
      url: 'https://secure.worldcommunitygrid.org/team/viewTeamInfo.do',
      qs: {
        teamId: req.params.teamId,
      },
    }).then(result => res.json(result));
  },

  /**
  * Return team leaderboards for all-time statistics
  */
  getAllTimeStats(req, res) {
    fetchAndParseXml({
      url: 'https://secure.worldcommunitygrid.org/stat/viewStatsByTeamAT.do',
      qs: {
        ...req.query,
      },
    }).then(result => res.json(result));
  },

  /**
  * Return team leaderboards for yesterday's statistics
  */
  getYesterdayStats(req, res) {
    fetchAndParseXml({
      url: 'https://secure.worldcommunitygrid.org/stat/viewStatsByTeamY.do',
      qs: {
        ...req.query,
      },
    }).then(result => res.json(result));
  },
};

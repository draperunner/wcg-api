import { fetchAndParseXml } from '../../utils/utils';

export const getOverallTeamsStats = (req, res) => {
  fetchAndParseXml({
    url: 'https://secure.worldcommunitygrid.org/stat/viewTeams.do?xml=true',
  }).then(result => res.json(result));
};

/**
 * Return the statistics site for a given team
 */
export const getTeamInfoById = (req, res) => {
  fetchAndParseXml({
    url: 'https://secure.worldcommunitygrid.org/team/viewTeamInfo.do',
    qs: {
      teamId: req.params.teamId,
    },
  }).then(result => res.json(result));
};

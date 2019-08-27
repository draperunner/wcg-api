import { fetchAndParseXml, clean } from '../../utils/utils';
import { validate } from '../param';

/**
 * Return the main statistics page for teams
 */
const getOverallTeamsStats = (req, res) => {
  fetchAndParseXml({
    url: 'https://secure.worldcommunitygrid.org/stat/viewTeams.do?xml=true',
  }).then((result) => res.json(result));
};

/**
* Return the statistics site for a given team
*/
const getTeamInfoById = (req, res) => {
  fetchAndParseXml({
    url: 'https://secure.worldcommunitygrid.org/team/viewTeamInfo.do',
    qs: {
      teamId: req.params.teamId,
    },
  }).then((result) => res.json(result));
};

/**
* Return team leaderboards for all-time statistics
*/
const getAllTimeStats = (req, res) => {
  const q = req.query;
  const options = {
    url: 'https://secure.worldcommunitygrid.org/stat/viewStatsByTeamAT.do',
    qs: {
      sort: validate('sort', q.sort),
      countryFilter: validate('country', q.country),
      typeFilter: validate('type', q.type),
      pageNum: validate('page', q.page),
      numRecordsPerPage: validate('page_size', q.page_size),
    },
  };

  fetchAndParseXml(clean(options)).then((result) => res.json(result));
};

/**
* Return team leaderboards for yesterday's statistics
*/
const getYesterdayStats = (req, res) => {
  const q = req.query;
  const options = {
    url: 'https://secure.worldcommunitygrid.org/stat/viewStatsByTeamY.do',
    qs: {
      sort: validate('sort', q.sort),
      countryFilter: validate('country', q.country),
      typeFilter: validate('type', q.type),
      pageNum: validate('page', q.page),
      numRecordsPerPage: validate('page_size', q.page_size),
    },
  };

  fetchAndParseXml(clean(options)).then((result) => res.json(result));
};

export default {
  getOverallTeamsStats,
  getTeamInfoById,
  getAllTimeStats,
  getYesterdayStats,
};

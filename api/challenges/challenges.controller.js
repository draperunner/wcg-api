import { fetchAndParseXml } from '../../utils/utils';

/**
* Return the statistics site for a given team
*/
const getChallengeInfoById = (req, res) => {
  fetchAndParseXml({
    url: 'https://secure.worldcommunitygrid.org/team/challenge/viewTeamChallenge.do',
    qs: {
      challengeId: req.params.challengeId,
    },
  }).then(result => res.json(result));
};

export default {
  getChallengeInfoById,
};

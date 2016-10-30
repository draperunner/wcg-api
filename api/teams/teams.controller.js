import rp from 'request-promise';
import xml2json from 'xml2json';

/**
 * Return the statistics site for a given team
 */
export const getTeamInfoById = (req, res) => {
  const options = {
    url: 'https://secure.worldcommunitygrid.org/team/viewTeamInfo.do',
    qs: {
      xml: 'true',
      teamId: req.params.teamId,
    },
  };

  rp(options)
    .then((xml) => {
      res.json(xml2json.toJson(xml, { object: true }));
    })
    .catch((err) => {
      res.json(err);
    });
};

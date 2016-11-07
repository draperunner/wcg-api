import rp from 'request-promise';
import xml2json from 'xml2json';
import Promise from 'bluebird';

/**
 * Fetch the XML version of a page, return the XML parsed to JSON.
 */
export const fetchAndParseXml = _options => new Promise((resolve, reject) => {
  const options = {
    ..._options,
    qs: {
      ..._options.qs,
      xml: 'true',
    },
  };

  console.log(options);

  rp(options)
    .then(xml => resolve(xml2json.toJson(xml, { object: true })))
    .catch(err => reject(err));
});

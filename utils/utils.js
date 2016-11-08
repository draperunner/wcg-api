import rp from 'request-promise';
import xml2json from 'xml2json';
import Promise from 'bluebird';
import camelcaseKeys from 'camelcase-keys';

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

  rp(options)
    .then((xml) => {
      const parsedJson = xml2json.toJson(xml, { object: true });
      return resolve(camelcaseKeys(parsedJson, { deep: true }));
    })
    .catch(err => reject(err));
});

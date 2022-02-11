const quora = require('quora-data-scraper');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fs =require("fs")


class ExtractQuoraData{
  constructor(links) {
    this.quoraLinks = links;
  }

  async startOrchestration() {
    try {
      console.log("Starting Extraction Process");
      const filteredLinks = this.filterQuoraLinks();
      const data = await this.getContent(filteredLinks);
      await this.writeInCsvFile(data);
      console.log("Extraction Completed");
    }
    catch (e)
    {
      console.error(e);
    }
  }

  filterQuoraLinks() {

    const data = this.quoraLinks.split(",");
    const filteredArray = data.filter((el, i) =>
      el !== 'https://www.quora.com/profile/{profile_name}' &&
      el !== 'https://www.quora.com/' &&
      el.endsWith("/answer/{profile_name}") &&
      data.indexOf(el) === i);
    return filteredArray;

  }

  async getContent(data) {
    let arr = [], counter = 0;
    for (const el of data) {
      counter++;
      const data = await quora.fetchAnswer(el, { raw: false });
      let output = {};
      output['Question'] = data?.question?.title;
      output['Answer'] = data?.content;
      arr.push(output);
      console.log("data count =>", counter);
  }
    return arr;
  }

  async writeInCsvFile(result) {
    
    const csvWriter = createCsvWriter({
          path: 'Sukrit.csv',
          header: [
              {id: 'Question', title: 'Question'},
              {id: 'Answer', title: 'Answer'}
          ]
    });
    csvWriter.writeRecords(result)

  }


}


const orchestraction =async () => {
  const links = fs.readFileSync("quora_links.csv", "utf8");
  const quora = new ExtractQuoraData(links);
  await quora.startOrchestration();
}

orchestraction();

# Quora-Scrapper 

## This Project Scrapes all the answers from a given profile and stores it in a CSV File. 

### Steps to Run

## Install

```sh
npm install
pip install selenium
```

## Usage

```sh
npm run start
python getLinks.py
```

1. Get the profile url like https://www.quora.com/profile/{profile_url} of the desired account you want to scrape.
2. Run the python script and wait to reach the end of the answers tab , make sure to have chromedriver in your root directory.

```sh
const allLinks = document.getElementsByTagName('a');
const mydata = [...allLinks];
```
3. Copy all the 'a' tags from the console and paste it in the quora_links.csv.
4. Run npm-start to scrape all questions and answers in a csv file format.

Give a ⭐️ if this project helped you!

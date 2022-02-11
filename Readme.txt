This Project Scrapes all the answers from a profile and stores it in a PDF/CSV File. 

1. Get the profile url like https://www.quora.com/profile/{profile_url} of the desired account you want to scrape.
2. Run the python script and wait to reach the end of the answers tab , make sure to have chromedriver in your root directory.
3. Copy all the 'a' tags and put it in the quora_links.csv.
4. Run npm-start to scrape all questions and answers in a csv file format.
import time
from selenium.webdriver.common.keys import Keys
from selenium import webdriver
from selenium.webdriver import ActionChains

QUORA_URL = 'https://www.quora.com/profile/{profile_name}'
options = webdriver.ChromeOptions()

# disable push notifications
options.add_argument("--disable-notifications")

# disable usb device error
options.add_experimental_option('excludeSwitches', ['enable-logging'])

driver = webdriver.Chrome('./chromedriver.exe', options=options)
driver.get(QUORA_URL)

# determing the end part of the profile webpage
bottom_of_the_page_xpath = '//div[@class="spinner_display_area hidden"]'

# Scroll to the end of the page
while True:
    # triggering the arrow down key to move down in the page
    ActionChains(driver).send_keys(Keys.PAGE_DOWN).perform()
    try:
        bottom_of_the_page = driver.find_element_by_xpath(
            bottom_of_the_page_xpath)
        ActionChains(driver).send_keys(Keys.PAGE_DOWN).perform()

        print("Done")

    except:
        continue

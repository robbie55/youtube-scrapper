import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get('https://www.youtube.com/watch?v=6G3L94NXGc4')
time.sleep(3)

actionsElem = driver.find_element(By.XPATH, '//*[@id="button-shape"]/button/yt-touch-feedback-shape/div/div[2]')
actionsElem.click()
time.sleep(3)
transcriptElem = driver.find_element(By.XPATH, '//*[@id="items"]/ytd-menu-service-item-renderer[4]')
transcriptElem.click()
time.sleep(3)



driver.close()

@echo off
mongoimport -d epc-ng -c user --type json --file ./data/user.json --drop --jsonArray
mongoimport -d epc-ng -c lang --type json --file ./data/lang.json --drop --jsonArray
mongoimport -d epc-ng -c database --type json --file ./data/database.json --drop --jsonArray
pause
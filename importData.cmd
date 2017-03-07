@echo off
mongoimport -d epc-ng -c user --type json --file ./data/user.json --upsert --jsonArray
mongoimport -d epc-ng -c lang --type json --file ./data/lang.json --upsert --jsonArray
mongoimport -d epc-ng -c database --type json --file ./data/database.json --upsert --jsonArray
pause